'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewAnnouncement() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title_tr: '',
    title_en: '',
    description_tr: '',
    description_en: '',
    published: true,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/announcements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        router.push('/admin/dashboard')
        router.refresh()
      } else {
        const errData = await response.json().catch(() => ({}))
        setError(errData.error || 'Failed to create announcement')
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
          <Link href="/admin/dashboard" className="text-[#383086] hover:text-[#555555] transition">
            ← Panele Geri Dön
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#383086] mb-8">Yeni Duyuru</h1>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="p-4 border border-[#e0e0e0] rounded-lg space-y-4">
              <h2 className="text-sm font-semibold text-[#383086] uppercase tracking-wide">🇹🇷 Türkçe</h2>
              <input
                type="text" name="title_tr" value={formData.title_tr}
                onChange={handleChange} required
                className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg"
                placeholder="Duyuru başlığı"
              />
              <textarea
                name="description_tr" value={formData.description_tr}
                onChange={handleChange} required rows={4}
                className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg resize-none"
                placeholder="Duyuru içeriği..."
              />
            </div>

            <div className="p-4 border border-[#e0e0e0] rounded-lg space-y-4">
              <h2 className="text-sm font-semibold text-[#383086] uppercase tracking-wide">🇬🇧 English</h2>
              <input
                type="text" name="title_en" value={formData.title_en}
                onChange={handleChange} required
                className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg"
                placeholder="Announcement title"
              />
              <textarea
                name="description_en" value={formData.description_en}
                onChange={handleChange} required rows={4}
                className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg resize-none"
                placeholder="Announcement content..."
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox" name="published" checked={formData.published}
                onChange={handleChange} className="w-4 h-4"
              />
              <label className="text-sm font-medium text-[#383086]">Yayınla / Publish</label>
            </div>

            <div className="flex gap-4">
              <button type="submit" disabled={loading} className="flex-1 bg-[#383086] text-white py-3 rounded-lg hover:bg-opacity-90">
                {loading ? 'Kaydediliyor...' : 'Oluştur'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
