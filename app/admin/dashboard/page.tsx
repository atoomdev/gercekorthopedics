'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Edit2, LogOut, Plus, Trash2 } from 'lucide-react'

type DashboardTab = 'blog' | 'announcements' | 'contacts'

type BlogPostListItem = {
  id: number
  title?: string | null
  title_tr?: string | null
  published: boolean
  created_at: string
}

type AnnouncementListItem = {
  id: number
  title?: string | null
  title_tr?: string | null
  published: boolean
  created_at: string
}

type ContactSubmission = {
  id: number
  name: string
  phone?: string | null
  message: string
  email?: string | null
  requestArea?: string | null
  created_at: string
}

type FeedbackState =
  | { type: 'success' | 'error'; message: string }
  | null

function isDashboardTab(value: string | null): value is DashboardTab {
  return value === 'blog' || value === 'announcements' || value === 'contacts'
}

export default function AdminDashboard() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTab = searchParams.get('tab')
  const initialTab: DashboardTab = isDashboardTab(searchTab) ? searchTab : 'blog'

  const [activeTab, setActiveTab] = useState<DashboardTab>(initialTab)
  const [posts, setPosts] = useState<BlogPostListItem[]>([])
  const [announcements, setAnnouncements] = useState<AnnouncementListItem[]>([])
  const [contacts, setContacts] = useState<ContactSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [feedback, setFeedback] = useState<FeedbackState>(null)
  const [deletingKey, setDeletingKey] = useState<string | null>(null)

  useEffect(() => {
    if (isDashboardTab(searchParams.get('tab'))) {
      setActiveTab(searchParams.get('tab') as DashboardTab)
    }
  }, [searchParams])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, announcementsRes, contactsRes] = await Promise.all([
          fetch('/api/admin/blog'),
          fetch('/api/admin/announcements'),
          fetch('/api/admin/contacts'),
        ])

        if (
          postsRes.status === 401 ||
          announcementsRes.status === 401 ||
          contactsRes.status === 401
        ) {
          router.push('/admin/login')
          return
        }

        const [postsData, announcementsData, contactsData] = await Promise.all([
          postsRes.json().catch(() => []),
          announcementsRes.json().catch(() => []),
          contactsRes.json().catch(() => []),
        ])

        if (!postsRes.ok || !announcementsRes.ok || !contactsRes.ok) {
          throw new Error('Yönetim verileri yüklenemedi.')
        }

        setPosts(postsData)
        setAnnouncements(announcementsData)
        setContacts(contactsData)
      } catch (error) {
        setFeedback({
          type: 'error',
          message:
            error instanceof Error
              ? error.message
              : 'Yönetim verileri yüklenemedi.',
        })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [router])

  const handleTabChange = (tab: DashboardTab) => {
    setActiveTab(tab)
    router.replace(`/admin/dashboard?tab=${tab}`)
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const handleDelete = async (
    type: 'blog' | 'announcements',
    id: number,
  ) => {
    const entityLabel = type === 'blog' ? 'blog yazısını' : 'duyuruyu'
    if (!window.confirm(`Bu ${entityLabel} silmek istediğinize emin misiniz?`)) {
      return
    }

    const currentKey = `${type}-${id}`
    setDeletingKey(currentKey)
    setFeedback(null)

    try {
      const response = await fetch(`/api/admin/${type}/${id}`, {
        method: 'DELETE',
      })

      if (response.status === 401) {
        router.push('/admin/login')
        return
      }

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(
          data.error || `${type === 'blog' ? 'Blog yazısı' : 'Duyuru'} silinemedi.`,
        )
      }

      if (type === 'blog') {
        setPosts((current) => current.filter((post) => post.id !== id))
      } else {
        setAnnouncements((current) =>
          current.filter((announcement) => announcement.id !== id),
        )
      }

      setFeedback({
        type: 'success',
        message:
          type === 'blog'
            ? 'Blog yazısı silindi.'
            : 'Duyuru silindi.',
      })
    } catch (error) {
      setFeedback({
        type: 'error',
        message:
          error instanceof Error ? error.message : 'Silme işlemi başarısız oldu.',
      })
    } finally {
      setDeletingKey(null)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f7fb] text-sm text-[#667085]">
        Yönetim paneli yükleniyor...
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb]">
      <header className="border-b border-[#dfe5f0] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
          <div className="flex items-center gap-3">
            <Link href="/" className="text-xl font-semibold tracking-tight text-[#1f2953]">
              Gerçek Ortopedi
            </Link>
            <span className="rounded-full bg-[#eef1ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#383086]">
              Admin
            </span>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-full border border-[#d9e0ea] px-4 py-2 text-sm font-medium text-[#1f2953] transition hover:bg-[#f8fafc]"
          >
            <LogOut className="size-4" />
            Çıkış yap
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-wrap gap-2 rounded-full border border-[#dfe5f0] bg-white p-2">
          {[
            { key: 'blog', label: 'Blog' },
            { key: 'announcements', label: 'Duyurular' },
            { key: 'contacts', label: 'İletişim Formları' },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => handleTabChange(tab.key as DashboardTab)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeTab === tab.key
                  ? 'bg-[#383086] text-white'
                  : 'text-[#667085] hover:bg-[#f5f7fb] hover:text-[#1f2953]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {feedback ? (
          <div
            className={`mt-6 rounded-2xl px-4 py-3 text-sm ${
              feedback.type === 'success'
                ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                : 'border border-red-200 bg-red-50 text-red-700'
            }`}
          >
            {feedback.message}
          </div>
        ) : null}

        <div className="mt-8">
          {activeTab === 'blog' ? (
            <section>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-[#1f2953]">
                    Blog yazıları
                  </h2>
                  <p className="mt-1 text-sm text-[#667085]">
                    Mevcut blog içeriklerini düzenleyin veya yenilerini ekleyin.
                  </p>
                </div>
                <Link
                  href="/admin/blog/new"
                  className="inline-flex items-center gap-2 rounded-full bg-[#383086] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2f2870]"
                >
                  <Plus className="size-4" />
                  Yeni yazı
                </Link>
              </div>

              {posts.length === 0 ? (
                <p className="mt-6 rounded-2xl border border-[#dfe5f0] bg-white px-5 py-6 text-sm text-[#667085]">
                  Henüz blog yazısı yok.
                </p>
              ) : (
                <div className="mt-6 space-y-4">
                  {posts.map((post) => {
                    const title = post.title_tr || post.title || 'Başlıksız yazı'
                    const isDeleting = deletingKey === `blog-${post.id}`

                    return (
                      <article
                        key={post.id}
                        className="flex flex-col gap-4 rounded-[24px] border border-[#dfe5f0] bg-white p-6 shadow-[0_18px_50px_rgba(32,41,72,0.05)] sm:flex-row sm:items-start sm:justify-between"
                      >
                        <div>
                          <h3 className="text-lg font-semibold text-[#1f2953]">{title}</h3>
                          <p className="mt-2 text-sm text-[#667085]">
                            {new Date(post.created_at).toLocaleDateString('tr-TR')} •{' '}
                            {post.published ? 'Yayında' : 'Taslak'}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/admin/blog/${post.id}/edit`}
                            className="inline-flex items-center gap-2 rounded-full border border-[#dfe5f0] px-3 py-2 text-sm font-medium text-[#1f2953] transition hover:bg-[#f8fafc]"
                          >
                            <Edit2 className="size-4 text-[#383086]" />
                            Düzenle
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDelete('blog', post.id)}
                            disabled={isDeleting}
                            className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            <Trash2 className="size-4" />
                            {isDeleting ? 'Siliniyor...' : 'Sil'}
                          </button>
                        </div>
                      </article>
                    )
                  })}
                </div>
              )}
            </section>
          ) : null}

          {activeTab === 'announcements' ? (
            <section>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-[#1f2953]">
                    Duyurular
                  </h2>
                  <p className="mt-1 text-sm text-[#667085]">
                    Duyuruları güncelleyin, yayın durumunu yönetin veya silin.
                  </p>
                </div>
                <Link
                  href="/admin/announcements/new"
                  className="inline-flex items-center gap-2 rounded-full bg-[#383086] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2f2870]"
                >
                  <Plus className="size-4" />
                  Yeni duyuru
                </Link>
              </div>

              {announcements.length === 0 ? (
                <p className="mt-6 rounded-2xl border border-[#dfe5f0] bg-white px-5 py-6 text-sm text-[#667085]">
                  Henüz duyuru yok.
                </p>
              ) : (
                <div className="mt-6 space-y-4">
                  {announcements.map((announcement) => {
                    const title =
                      announcement.title_tr || announcement.title || 'Başlıksız duyuru'
                    const isDeleting = deletingKey === `announcements-${announcement.id}`

                    return (
                      <article
                        key={announcement.id}
                        className="flex flex-col gap-4 rounded-[24px] border border-[#dfe5f0] bg-white p-6 shadow-[0_18px_50px_rgba(32,41,72,0.05)] sm:flex-row sm:items-start sm:justify-between"
                      >
                        <div>
                          <h3 className="text-lg font-semibold text-[#1f2953]">{title}</h3>
                          <p className="mt-2 text-sm text-[#667085]">
                            {new Date(announcement.created_at).toLocaleDateString('tr-TR')} •{' '}
                            {announcement.published ? 'Yayında' : 'Taslak'}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/admin/announcements/${announcement.id}/edit`}
                            className="inline-flex items-center gap-2 rounded-full border border-[#dfe5f0] px-3 py-2 text-sm font-medium text-[#1f2953] transition hover:bg-[#f8fafc]"
                          >
                            <Edit2 className="size-4 text-[#383086]" />
                            Düzenle
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDelete('announcements', announcement.id)}
                            disabled={isDeleting}
                            className="inline-flex items-center gap-2 rounded-full border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            <Trash2 className="size-4" />
                            {isDeleting ? 'Siliniyor...' : 'Sil'}
                          </button>
                        </div>
                      </article>
                    )
                  })}
                </div>
              )}
            </section>
          ) : null}

          {activeTab === 'contacts' ? (
            <section>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#1f2953]">
                  İletişim formları
                </h2>
                <p className="mt-1 text-sm text-[#667085]">
                  Ziyaretçilerin bıraktığı son mesajları inceleyin.
                </p>
              </div>

              {contacts.length === 0 ? (
                <p className="mt-6 rounded-2xl border border-[#dfe5f0] bg-white px-5 py-6 text-sm text-[#667085]">
                  Henüz iletişim formu gelmedi.
                </p>
              ) : (
                <div className="mt-6 space-y-4">
                  {contacts.map((contact) => (
                    <article
                      key={contact.id}
                      className="rounded-[24px] border border-[#dfe5f0] bg-white p-6 shadow-[0_18px_50px_rgba(32,41,72,0.05)]"
                    >
                      <h3 className="text-lg font-semibold text-[#1f2953]">
                        {contact.name}
                      </h3>
                      {contact.phone ? (
                        <p className="mt-1 text-sm text-[#667085]">
                          Telefon: {contact.phone}
                        </p>
                      ) : null}
                      <p className="mt-1 text-sm text-[#667085]">
                        E-posta: {contact.email}
                      </p>
                      <p className="mt-1 text-sm text-[#667085]">
                        Talep alanı: {contact.requestArea}
                      </p>
                      <p className="mt-1 text-sm text-[#667085]">
                        Mesaj: {contact.message}
                      </p>
                      <p className="mt-3 text-xs text-[#98a2b3]">
                        {new Date(contact.created_at).toLocaleString('tr-TR')}
                      </p>
                    </article>
                  ))}
                </div>
              )}
            </section>
          ) : null}
        </div>
      </div>
    </main>
  )
}
