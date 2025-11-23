import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Contact } from '@/components/Contact'
import Footer from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'

export default function Home() {
  return (
    <main className="min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

