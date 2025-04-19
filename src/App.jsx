import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Services from './sections/Services'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
