import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'

const testimonials = [
  {
    quote:
      'Working with Obakeng was a fantastic experience. He built our mobile app on time, with a polished UI and seamless Firebase integration. Highly recommend.',
    name: 'Linda',
    role: 'CEO, Zari',
    initials: 'L',
  },
  {
    quote:
      'His expertise in both frontend development and UI/UX design meant we got a beautiful, functional product without needing separate specialists. Incredible value.',
    name: 'Philasande Kubheka',
    role: 'Director, Kubheka Embarks',
    initials: 'PK',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <section className="section-padding bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionTitle eyebrow="Kind Words" title="Client Testimonials" />

        <div className="glass-card p-10 md:p-14 relative">
          {/* Gold quote mark */}
          <div className="font-display text-8xl text-gold/20 leading-none absolute top-6 left-10 select-none">
            "
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 border border-gold/30 rounded-full flex items-center justify-center text-gold font-bold">
                  {testimonials[current].initials}
                </div>
                <div>
                  <p className="text-white font-semibold">{testimonials[current].name}</p>
                  <p className="text-gold text-sm">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-gold' : 'w-2 bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 border border-gold/20 text-gray-400 hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center"
              >
                <FiChevronLeft />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-gold/20 text-gray-400 hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
