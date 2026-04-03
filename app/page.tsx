import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Products } from '@/components/products'
import { About } from '@/components/about'
import { WhyUs } from '@/components/why-us'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Products />
      <About />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}
