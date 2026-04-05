'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { AdminFormShell } from '@/components/admin/admin-form-shell'

type BlogPostFormData = {
  title_tr: string
  title_en: string
  slug_tr: string
  slug_en: string
  excerpt_tr: string
  excerpt_en: string
  content_tr: string
  content_en: string
  author: string
  published: boolean
  email: string
}

type BlogPostFormProps = {
  mode: 'create' | 'edit'
  postId?: string
}

const emptyForm: BlogPostFormData = {
  title_tr: '',
  title_en: '',
  slug_tr: '',
  slug_en: '',
  excerpt_tr: '',
  excerpt_en: '',
  content_tr: '',
  content_en: '',
  author: '',
  published: false,
  email: '',
}

function slugify(value: string) {
  const charMap: Record<string, string> = {
    ç: 'c',
    Ç: 'c',
    ğ: 'g',
    Ğ: 'g',
    ı: 'i',
    İ: 'i',
    ö: 'o',
    Ö: 'o',
    ş: 's',
    Ş: 's',
    ü: 'u',
    Ü: 'u',
  }

  return value
    .split('')
    .map((char) => charMap[char] ?? char)
    .join('')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export function BlogPostForm({ mode, postId }: BlogPostFormProps) {
  const router = useRouter()
  const isEditMode = mode === 'edit'
  const [formData, setFormData] = useState<BlogPostFormData>(emptyForm)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(isEditMode)
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (!isEditMode || !postId) {
      return
    }

    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/admin/blog/${postId}`)

        if (response.status === 401) {
          router.push('/admin/login')
          return
        }

        const data = await response.json().catch(() => ({}))

        if (!response.ok) {
          throw new Error(data.error || 'Blog yazısı yüklenemedi.')
        }

        setFormData({
          title_tr: data.title_tr || '',
          title_en: data.title_en || '',
          slug_tr: data.slug_tr || '',
          slug_en: data.slug_en || '',
          excerpt_tr: data.excerpt_tr || '',
          excerpt_en: data.excerpt_en || '',
          content_tr: data.content_tr || '',
          content_en: data.content_en || '',
          author: data.author || '',
          published: Boolean(data.published),
          email: data.email || '',
        })
      } catch (fetchError) {
        setError(
          fetchError instanceof Error
            ? fetchError.message
            : 'Blog yazısı yüklenemedi.',
        )
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [isEditMode, postId, router])

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, type, value } = event.target
    const checked = (event.target as HTMLInputElement).checked

    setFormData((current) => {
      const nextValue = type === 'checkbox' ? checked : value
      const nextState = {
        ...current,
        [name]: nextValue,
      }

      if (name === 'title_tr') {
        const previousAutoSlug = slugify(current.title_tr)
        if (!current.slug_tr || current.slug_tr === previousAutoSlug) {
          nextState.slug_tr = slugify(value)
        }
      }

      if (name === 'title_en') {
        const previousAutoSlug = slugify(current.title_en)
        if (!current.slug_en || current.slug_en === previousAutoSlug) {
          nextState.slug_en = slugify(value)
        }
      }

      return nextState
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setIsSaving(true)

    try {
      const endpoint = isEditMode ? `/api/admin/blog/${postId}` : '/api/admin/blog'
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

      router.push('/admin/dashboard?tab=blog')
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
      title={isEditMode ? 'Blog yazısını düzenle' : 'Yeni blog yazısı'}
      description={
        isEditMode
          ? 'Başlık, özet, içerik ve yayın durumunu güncelleyebilirsiniz.'
          : 'Türkçe ve İngilizce alanları doldurarak yeni blog içeriği oluşturun.'
      }
      backHref="/admin/dashboard?tab=blog"
    >
      {error ? (
        <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      {isLoading ? (
        <div className="rounded-2xl border border-[#e3e8f0] bg-[#f8fafc] px-4 py-10 text-center text-sm text-[#667085]">
          Blog yazısı yükleniyor...
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
                    placeholder="Başlık"
                  />
                </label>

                <label className="block text-sm font-medium text-[#1f2953]">
                  Slug
                  <input
                    type="text"
                    name="slug_tr"
                    value={formData.slug_tr}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-[#d9e0ea] px-4 py-3 text-sm"
                    placeholder="blog-yazisi"
                  />
                </label>

                <label className="block text-sm font-medium text-[#1f2953]">
                  Kısa özet
                  <input
                    type="text"
                    name="excerpt_tr"
                    value={formData.excerpt_tr}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[#d9e0ea] px-4 py-3 text-sm"
                    placeholder="Kısa özet"
                  />
                </label>

                <label className="block text-sm font-medium text-[#1f2953]">
                  İçerik
                  <textarea
                    name="content_tr"
                    value={formData.content_tr}
                    onChange={handleChange}
                    required
                    rows={10}
                    className="mt-2 w-full rounded-[24px] border border-[#d9e0ea] px-4 py-3 text-sm leading-7"
                    placeholder="Türkçe içerik"
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
                    placeholder="Title"
                  />
                </label>

                <label className="block text-sm font-medium text-[#1f2953]">
                  Slug
                  <input
                    type="text"
                    name="slug_en"
                    value={formData.slug_en}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full rounded-2xl border border-[#d9e0ea] px-4 py-3 text-sm"
                    placeholder="blog-post"
                  />
                </label>

                <label className="block text-sm font-medium text-[#1f2953]">
                  Excerpt
                  <input
                    type="text"
                    name="excerpt_en"
                    value={formData.excerpt_en}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-2xl border border-[#d9e0ea] px-4 py-3 text-sm"
                    placeholder="Short excerpt"
                  />
                </label>

                <label className="block text-sm font-medium text-[#1f2953]">
                  Content
                  <textarea
                    name="content_en"
                    value={formData.content_en}
                    onChange={handleChange}
                    required
                    rows={10}
                    className="mt-2 w-full rounded-[24px] border border-[#d9e0ea] px-4 py-3 text-sm leading-7"
                    placeholder="English content"
                  />
                </label>
              </div>
            </section>
          </div>

          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
            <label className="block text-sm font-medium text-[#1f2953]">
              Yazar
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                className="mt-2 w-full rounded-2xl border border-[#d9e0ea] px-4 py-3 text-sm"
                placeholder="Yazar adı"
              />
            </label>

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
          </div>

          <div className="space-y-4">
            <label className="block text-sm font-medium text-[#1f2953]">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-2xl border border-[#d9e0ea] px-4 py-3 text-sm"
                placeholder="admin@example.com"
              />
            </label>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => router.push('/admin/dashboard?tab=blog')}
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
                  : 'Yazıyı Oluştur'}
            </button>
          </div>
        </form>
      )}
    </AdminFormShell>
  )
}
