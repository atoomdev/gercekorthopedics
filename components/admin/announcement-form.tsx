'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { AdminFormShell } from '@/components/admin/admin-form-shell'

type AnnouncementFormData = {
  title_tr: string
  title_en: string
  description_tr: string
  description_en: string
  published: boolean
}

type AnnouncementFormProps = {
  mode: 'create' | 'edit'
  announcementId?: string
}

const emptyForm: AnnouncementFormData = {
  title_tr: '',
  title_en: '',
  description_tr: '',
  description_en: '',
  published: true,
}

export function AnnouncementForm({
  mode,
  announcementId,
}: AnnouncementFormProps) {
  const router = useRouter()
  const isEditMode = mode === 'edit'
  const [formData, setFormData] = useState<AnnouncementFormData>(emptyForm)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(isEditMode)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (!isEditMode || !announcementId) {
      return
    }

    const fetchAnnouncement = async () => {
      try {
        const response = await fetch(`/api/admin/announcements/${announcementId}`)

        if (response.status === 401) {
          router.push('/admin/login')
          return
        }

        const data = await response.json().catch(() => ({}))

        if (!response.ok) {
          throw new Error(data.error || 'Duyuru yüklenemedi.')
        }

        setFormData({
          title_tr: data.title_tr || '',
          title_en: data.title_en || '',
          description_tr: data.description_tr || '',
          description_en: data.description_en || '',
          published: Boolean(data.published),
        })
      } catch (fetchError) {
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : 'Duyuru yüklenemedi.',
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchAnnouncement()
  }, [announcementId, isEditMode, router])

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, type, value } = event.target
    const checked = (event.target as HTMLInputElement).checked

    setFormData((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setIsSaving(true)

    try {
      const endpoint = isEditMode
        ? `/api/admin/announcements/${announcementId}`
        : '/api/admin/announcements'
      const method = isEditMode ? 'PATCH' : 'POST'

      const response = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.status === 401) {
        router.push('/admin/login')
        return
      }

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || 'İşlem tamamlanamadı.')
      }

      router.push('/admin/dashboard?tab=announcements')
      router.refresh()
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : 'İşlem tamamlanamadı.',
      )
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <AdminFormShell
      title={isEditMode ? 'Duyuruyu düzenle' : 'Yeni duyuru'}
      description={
        isEditMode
          ? 'Başlık, içerik ve yayın durumunu güncelleyebilirsiniz.'
          : 'Türkçe ve İngilizce alanları doldurarak yeni duyuru oluşturun.'
      }
      backHref="/admin/dashboard?tab=announcements"
    >
      {error ? (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      {isLoading ? (
        <div className="rounded-2xl border border-[#e3e8f0] bg-[#f8fafc] px-4 py-10 text-center text-sm text-[#667085]">
          Duyuru yükleniyor...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <section className="rounded-[24px] border border-[#e3e8f0] bg-[#fbfcfe] p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#383086]">
                Türkçe
              </h2>
              <div className="mt-4 space-y-4">
                <label className="block text-sm font-medium text-[#1f2953]">
                  Başlık
                  <input
                    type="text"
                    name="title_tr"
                    value={formData.title_tr}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-[#d9e0ea] px-4 py-3 text-sm"
                    placeholder="Duyuru başlığı"
                  />
                </label>

                <label className="block text-sm font-medium text-[#1f2953]">
                  İçerik
                  <textarea
                    name="description_tr"
                    value={formData.description_tr}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="mt-2 w-full rounded-[24px] border border-[#d9e0ea] px-4 py-3 text-sm leading-7"
                    placeholder="Duyuru içeriği"
                  />
                </label>
              </div>
            </section>

            <section className="rounded-[24px] border border-[#e3e8f0] bg-[#fbfcfe] p-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#383086]">
                English
              </h2>
              <div className="mt-4 space-y-4">
                <label className="block text-sm font-medium text-[#1f2953]">
                  Title
                  <input
                    type="text"
                    name="title_en"
                    value={formData.title_en}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-[#d9e0ea] px-4 py-3 text-sm"
                    placeholder="Announcement title"
                  />
                </label>

                <label className="block text-sm font-medium text-[#1f2953]">
                  Content
                  <textarea
                    name="description_en"
                    value={formData.description_en}
                    onChange={handleChange}
                    required
                    rows={8}
                    className="mt-2 w-full rounded-[24px] border border-[#d9e0ea] px-4 py-3 text-sm leading-7"
                    placeholder="Announcement content"
                  />
                </label>
              </div>
            </section>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="inline-flex items-center gap-3 rounded-2xl border border-[#e3e8f0] bg-[#fbfcfe] px-4 py-3 text-sm font-medium text-[#1f2953]">
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="size-4"
              />
              Yayında
            </label>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => router.push('/admin/dashboard?tab=announcements')}
                className="inline-flex items-center justify-center rounded-full border border-[#d9e0ea] px-5 py-2.5 text-sm font-semibold text-[#1f2953] transition hover:bg-[#f8fafc]"
              >
                Vazgeç
              </button>
              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex items-center justify-center rounded-full bg-[#383086] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#2f2870] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSaving
                  ? isEditMode
                    ? 'Kaydediliyor...'
                    : 'Oluşturuluyor...'
                  : isEditMode
                    ? 'Değişiklikleri Kaydet'
                    : 'Duyuruyu Oluştur'}
              </button>
            </div>
          </div>
        </form>
      )}
    </AdminFormShell>
  )
}
