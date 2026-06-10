import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact']
const socials = [
  { icon: <FiGithub />, href: 'https://github.com/diphokoo', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://www.linkedin.com/in/obakeng-diphoko-208305146/', label: 'LinkedIn' },
  { icon: <FiMail />, href: 'mailto:Diphokoo@outlook.com', label: 'Email' },
]

export default function Footer() {
  const handleNav = (section) => {
    document.querySelector(`#${section.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-dark-2 border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-display text-2xl font-bold text-gradient mb-4">OFD.</div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Frontend Developer & UI/UX Designer crafting premium digital experiences from Pretoria, South Africa.
            </p>
          </div>

          <div>
            <p className="text-gold tracking-widest uppercase text-xs font-semibold mb-6">Navigation</p>
            <ul className="grid grid-cols-2 gap-3">
              {navLinks.map((l) => (
                <li key={l}>
                  <button
                    onClick={() => handleNav(l)}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {l}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-gold tracking-widest uppercase text-xs font-semibold mb-6">Connect</p>
            <div className="flex gap-4 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 glass-card flex items-center justify-center text-gray-400 hover:text-gold hover:border-gold/40 transition-all duration-300 rounded-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNav('Contact') }}
              className="btn-outline text-xs inline-block"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Obakeng Freddy Diphoko. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Crafted with <span className="text-gold">♥</span> in Pretoria, South Africa
          </p>
        </div>
      </div>
    </footer>
  )
}
