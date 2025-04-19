import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi'
import profileImg from '../Profile.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(200,169,126,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,126,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-10"
        >
          <div className="relative">
            {/* Rotating gold border ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, #C8A97E, transparent, #C8A97E, transparent)',
                padding: '2px',
                borderRadius: '50%',
              }}
            />
            {/* Outer glow ring */}
            <div className="absolute -inset-3 rounded-full bg-gold/10 blur-lg animate-glow" />
            {/* Image container */}
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-gold/40 p-0.5">
              <img
                src={profileImg}
                alt="Obakeng Freddy Diphoko"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.4, type: 'spring' }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-dark-3 border border-gold/30 px-3 py-1 flex items-center gap-2 rounded-full whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-gray-300 font-medium">Available for work</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-gold tracking-[0.4em] uppercase text-xs font-semibold mb-6"
        >
          Frontend Developer & UI/UX Designer
        </motion.p>

        {/* Name */}
        <motion.h1 {...fadeUp(0.35)} className="font-display font-bold leading-tight mb-6">
          <span className="block text-4xl md:text-6xl lg:text-7xl text-white">Obakeng Freddy</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-gradient">Diphoko</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.5)}
          className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Frontend Developer with{' '}
          <span className="text-gold font-semibold">10+ years</span> of professional experience
          building modern web and mobile applications using React.js, React Native, JavaScript,
          C#, and modern UI/UX principles.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.65)} className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button onClick={() => scrollTo('#projects')} className="btn-primary flex items-center gap-2">
            View My Work
            <FiArrowDown className="text-sm" />
          </button>
          <a href="/Obakeng_Freddy_Diphoko_CV.pdf" download className="btn-outline flex items-center gap-2">
            <FiDownload className="text-sm" />
            Download CV
          </a>
          <button onClick={() => scrollTo('#contact')} className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors text-sm tracking-wider uppercase font-medium">
            <FiMail className="text-base" />
            Contact Me
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px border border-gold/10 bg-gold/10"
        >
          {[
            { value: '8+', label: 'Years Experience' },
            { value: '30+', label: 'Projects Delivered' },
            { value: '5', label: 'Companies' },
            { value: '100%', label: 'Dedication' },
          ].map((s) => (
            <div key={s.label} className="bg-dark py-6 px-4 text-center">
              <div className="font-display text-3xl font-bold text-gradient mb-1">{s.value}</div>
              <div className="text-gray-500 text-xs tracking-wider uppercase">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollTo('#about')}
      >
        <span className="text-gray-600 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-gold to-transparent"
        />
      </motion.div>
    </section>
  )
}
