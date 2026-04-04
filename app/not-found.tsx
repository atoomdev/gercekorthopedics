import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { NotFoundContent } from '@/components/not-found-content'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <NotFoundContent />
      <Footer />
    </main>
  )
}
