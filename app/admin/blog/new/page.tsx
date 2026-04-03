'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewBlogPost() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    published: false,
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

    // Auto-generate slug from title
    if (name === 'title') {
      setFormData(prev => ({
        ...prev,
        slug: value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''),
      }))
    }
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
    } catch (err) {
      setError('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] py-8">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/admin/dashboard"
            className="text-[#383086] hover:text-[#555555] transition"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#383086] mb-8">New Blog Post</h1>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#383086] mb-2">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#383086]"
                placeholder="Blog post title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#383086] mb-2">
                Slug
              </label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#383086]"
                placeholder="blog-post-slug"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#383086] mb-2">
                Excerpt
              </label>
              <input
                type="text"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#383086]"
                placeholder="Brief excerpt of the post"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#383086] mb-2">
                Content
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={12}
                className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#383086] resize-none"
                placeholder="Write your blog post content here..."
              ></textarea>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="published"
                checked={formData.published}
                onChange={handleChange}
                className="w-4 h-4"
              />
              <label className="text-sm font-medium text-[#383086]">
                Publish this post
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[#383086] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition disabled:opacity-50"
              >
                {loading ? 'Creating...' : 'Create Post'}
              </button>
              <Link
                href="/admin/dashboard"
                className="flex-1 bg-[#f5f5f5] text-[#383086] py-3 rounded-lg font-semibold hover:bg-[#e0e0e0] transition text-center"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
