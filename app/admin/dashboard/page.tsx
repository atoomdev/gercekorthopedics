'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LogOut, Plus, Edit2, Trash2 } from 'lucide-react'

export default function AdminDashboard() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('blog')
  const [posts, setPosts] = useState<any[]>([])
  const [announcements, setAnnouncements] = useState<any[]>([])
  const [contacts, setContacts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, announcementsRes, contactsRes] = await Promise.all([
          fetch('/api/admin/blog'),
          fetch('/api/admin/announcements'),
          fetch('/api/admin/contacts'),
        ])

        if (!postsRes.ok || !announcementsRes.ok || !contactsRes.ok) {
          router.push('/admin/login')
          return
        }

        setPosts(await postsRes.json())
        setAnnouncements(await announcementsRes.json())
        setContacts(await contactsRes.json())
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [router])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const handleDelete = async (type: string, id: number) => {
    if (!confirm('Are you sure?')) return

    try {
      const response = await fetch(`/api/admin/${type}/${id}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        if (type === 'blog') {
          setPosts(posts.filter(p => p.id !== id))
        } else if (type === 'announcements') {
          setAnnouncements(announcements.filter(a => a.id !== id))
        }
      }
    } catch (error) {
      console.error('Error deleting:', error)
    }
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <header className="bg-[#383086] text-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold">
              Gerçek Ortopedi
            </Link>
            <span className="text-sm opacity-75">Admin Panel</span>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-lg hover:bg-opacity-30 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-[#e0e0e0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab('blog')}
              className={`py-4 px-2 border-b-2 font-medium transition ${
                activeTab === 'blog'
                  ? 'border-[#383086] text-[#383086]'
                  : 'border-transparent text-[#666666] hover:text-[#383086]'
              }`}
            >
              Blog Posts
            </button>
            <button
              onClick={() => setActiveTab('announcements')}
              className={`py-4 px-2 border-b-2 font-medium transition ${
                activeTab === 'announcements'
                  ? 'border-[#383086] text-[#383086]'
                  : 'border-transparent text-[#666666] hover:text-[#383086]'
              }`}
            >
              Announcements
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`py-4 px-2 border-b-2 font-medium transition ${
                activeTab === 'contacts'
                  ? 'border-[#383086] text-[#383086]'
                  : 'border-transparent text-[#666666] hover:text-[#383086]'
              }`}
            >
              Contact Submissions
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Blog Posts Tab */}
        {activeTab === 'blog' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#383086]">Blog Posts</h2>
              <Link
                href="/admin/blog/new"
                className="flex items-center gap-2 bg-[#383086] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                <Plus size={18} />
                New Post
              </Link>
            </div>

            {posts.length === 0 ? (
              <p className="text-[#666666]">No blog posts yet.</p>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div key={post.id} className="bg-white p-6 rounded-lg border border-[#e0e0e0] flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-[#383086] mb-1">{post.title}</h3>
                      <p className="text-sm text-[#666666]">
                        {new Date(post.created_at).toLocaleDateString()} • {post.published ? 'Published' : 'Draft'}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/blog/${post.id}/edit`}
                        className="p-2 hover:bg-[#f5f5f5] rounded transition"
                      >
                        <Edit2 size={18} className="text-[#383086]" />
                      </Link>
                      <button
                        onClick={() => handleDelete('blog', post.id)}
                        className="p-2 hover:bg-red-50 rounded transition"
                      >
                        <Trash2 size={18} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Announcements Tab */}
        {activeTab === 'announcements' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#383086]">Announcements</h2>
              <Link
                href="/admin/announcements/new"
                className="flex items-center gap-2 bg-[#383086] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition"
              >
                <Plus size={18} />
                New Announcement
              </Link>
            </div>

            {announcements.length === 0 ? (
              <p className="text-[#666666]">No announcements yet.</p>
            ) : (
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="bg-white p-6 rounded-lg border border-[#e0e0e0] flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-[#383086] mb-1">{announcement.title}</h3>
                      <p className="text-sm text-[#666666]">
                        {new Date(announcement.created_at).toLocaleDateString()} • {announcement.published ? 'Published' : 'Draft'}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={`/admin/announcements/${announcement.id}/edit`}
                        className="p-2 hover:bg-[#f5f5f5] rounded transition"
                      >
                        <Edit2 size={18} className="text-[#383086]" />
                      </Link>
                      <button
                        onClick={() => handleDelete('announcements', announcement.id)}
                        className="p-2 hover:bg-red-50 rounded transition"
                      >
                        <Trash2 size={18} className="text-red-500" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <div>
            <h2 className="text-2xl font-bold text-[#383086] mb-6">Contact Submissions</h2>
            {contacts.length === 0 ? (
              <p className="text-[#666666]">No contact submissions yet.</p>
            ) : (
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <div key={contact.id} className="bg-white p-6 rounded-lg border border-[#e0e0e0]">
                    <h3 className="font-semibold text-[#383086] mb-2">{contact.name}</h3>
                    <p className="text-sm text-[#666666] mb-1">Email: {contact.email}</p>
                    {contact.phone && (
                      <p className="text-sm text-[#666666] mb-3">Phone: {contact.phone}</p>
                    )}
                    <p className="text-[#666666] mb-2 p-3 bg-[#f5f5f5] rounded">{contact.message}</p>
                    <p className="text-xs text-[#999999]">
                      {new Date(contact.created_at).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
