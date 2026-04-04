import type { Metadata } from 'next'
import { neon } from '@neondatabase/serverless'

import { AnnouncementsPageContent } from '@/components/announcements-page-content'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { getRequestLocalizedValue } from '@/lib/i18n-server'
import { metadataCopy } from '@/lib/site-content'

export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: await getRequestLocalizedValue(metadataCopy.announcementsTitle),
    description: await getRequestLocalizedValue(metadataCopy.announcementsDescription),
  }
}

async function getAnnouncements() {
  try {
    const sql = neon(process.env.DATABASE_URL!)
    const announcements = await sql`
      SELECT id, title_tr, title_en, description_tr, description_en, published, display_date, created_at
      FROM announcements
      WHERE published = true
      ORDER BY display_date DESC NULLS LAST, created_at DESC
    `
    return announcements
  } catch (error) {
    console.error('Error fetching announcements:', error)
    return []
  }
}

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncements()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AnnouncementsPageContent announcements={announcements as any[]} />
      <Footer />
    </main>
  )
}
