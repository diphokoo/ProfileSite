import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4 bg-dark/90 backdrop-blur-md border-b border-gold/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <button
          onClick={() => handleNav('#hero')}
          className="font-display text-xl font-bold text-gradient tracking-wide"
        >
          OFD<span className="text-white">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <button onClick={() => handleNav(l.href)} className="nav-link">
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('#contact') }} className="hidden md:inline-flex btn-primary">
          Hire Me
        </a>

        <button className="md:hidden text-gold text-2xl" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-2/95 backdrop-blur-md border-t border-gold/10 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <li key={l.label}>
                  <button onClick={() => handleNav(l.href)} className="nav-link text-base w-full text-left">
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
