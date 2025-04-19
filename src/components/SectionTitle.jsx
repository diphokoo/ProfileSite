import { motion } from 'framer-motion'

export default function SectionTitle({ eyebrow, title, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      <div className={`w-16 h-0.5 bg-gold mb-6 ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
