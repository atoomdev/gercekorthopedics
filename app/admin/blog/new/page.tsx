'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function toSlug(text: string) {
  return text.toLowerCase().replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
    .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/\s+/g, '-').replace(/[^\w-]/g, '')
}

export default function NewBlogPost() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title_tr: '', title_en: '',
    slug_tr: '', slug_en: '',
    excerpt_tr: '', excerpt_en: '',
    content_tr: '', content_en: '',
    author: '', published: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => {
      const updated = { ...prev, [name]: type === 'checkbox' ? checked : value }
      if (name === 'title_tr') updated.slug_tr = toSlug(value)
      if (name === 'title_en') updated.slug_en = toSlug(value)
      return updated
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/admin/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        router.push('/admin/dashboard')
        router.refresh()
      } else {
        const errData = await response.json().catch(() => ({}))
        setError(errData.error || 'Failed to create post')
      }
    } catch {
      setError('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <Link href="/admin/dashboard" className="text-[#383086] hover:text-[#555555]">
            ← Panele Geri Dön
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#383086] mb-8">Yeni Blog Yazısı</h1>
          {error && <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="p-4 border border-[#e0e0e0] rounded-lg space-y-4">
              <h2 className="text-sm font-semibold text-[#383086] uppercase tracking-wide">🇹🇷 Türkçe</h2>
              <input type="text" name="title_tr" value={formData.title_tr} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" placeholder="Başlık (TR)" />
              <input type="text" name="slug_tr" value={formData.slug_tr} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" placeholder="slug-tr" />
              <input type="text" name="excerpt_tr" value={formData.excerpt_tr} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" placeholder="Özet (TR)" />
              <textarea name="content_tr" value={formData.content_tr} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border rounded-lg resize-none" placeholder="İçerik (TR)" />
            </div>

            <div className="p-4 border border-[#e0e0e0] rounded-lg space-y-4">
              <h2 className="text-sm font-semibold text-[#383086] uppercase tracking-wide">🇬🇧 English</h2>
              <input type="text" name="title_en" value={formData.title_en} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" placeholder="Title (EN)" />
              <input type="text" name="slug_en" value={formData.slug_en} onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" placeholder="slug-en" />
              <input type="text" name="excerpt_en" value={formData.excerpt_en} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" placeholder="Excerpt (EN)" />
              <textarea name="content_en" value={formData.content_en} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border rounded-lg resize-none" placeholder="Content (EN)" />
            </div>

            <input type="text" name="author" value={formData.author} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" placeholder="Yazar / Author" />
            
            <div className="flex items-center gap-3">
              <input type="checkbox" name="published" checked={formData.published} onChange={handleChange} className="w-4 h-4" />
              <label className="text-sm font-medium text-[#383086]">Yayınla / Publish</label>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-[#383086] text-white py-3 rounded-lg hover:bg-opacity-90">
              {loading ? 'Kaydediliyor...' : 'Oluştur'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
