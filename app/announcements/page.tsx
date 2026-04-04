import { neon } from '@neondatabase/serverless'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ArrowLeft, Bell, Calendar } from 'lucide-react'

export const dynamic = 'force-dynamic'

async function getAnnouncements() {
  const sql = neon(process.env.DATABASE_URL!)
  const announcements = await sql`
    SELECT id, title_tr, title_en, description_tr, description_en, published, display_date, created_at
    FROM announcements
    WHERE published = true
    ORDER BY display_date DESC NULLS LAST, created_at DESC
  `
  return announcements
}

export default async function AnnouncementsPage() {
  const announcements = await getAnnouncements()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="flex items-center gap-4 mb-12">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center animate-pulse-slow">
              <Bell className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary">
                Announcements
              </h1>
              <p className="text-muted-foreground mt-1">
                Latest updates and news
              </p>
            </div>
          </div>

          {announcements.length === 0 ? (
            <div className="text-center py-16 bg-secondary/30 rounded-2xl">
              <Bell className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground text-lg">
                No announcements yet
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {announcements.map((announcement: any, idx: number) => {
                const title = announcement.title_tr || announcement.title_en || "Untitled";
                const description = announcement.description_tr || announcement.description_en || "";
                
                return (
                 <article 
                   key={announcement.id} 
                   className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 animate-fade-up"
                   style={{ animationDelay: `${idx * 100}ms` }}
                 >
                   <div className="flex items-start gap-4">
                     <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                       <Bell className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                     </div>
                     <div className="flex-1 min-w-0">
                       <h2 className="text-xl md:text-2xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                         {title}
                       </h2>
                       <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                         {description}
                       </p>
                       <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                         <Calendar className="w-4 h-4" />
                         <time dateTime={announcement.display_date || announcement.created_at}>
                           {new Date(announcement.display_date || announcement.created_at).toLocaleDateString()}
                         </time>
                       </div>
                     </div>
                   </div>
                 </article>
               )
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
