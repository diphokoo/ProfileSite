import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'

const projectTypes = [
  'Web Application',
  'Mobile App',
  'UI/UX Design',
  'E-Commerce',
  'Consultation',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', projectType: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Hook up to backend/email service as needed
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', company: '', projectType: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <SectionTitle
          eyebrow="Get In Touch"
          title="Let's Build Something Great Together"
          subtitle="Have a project in mind? Let's talk. I'm always open to new opportunities and collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-6 flex gap-4 items-start hover:border-gold/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                <FiMail />
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Email</p>
                <a href="mailto:Diphokoo@outlook.com" className="text-white hover:text-gold transition-colors font-medium">
                  Diphokoo@outlook.com
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex gap-4 items-start hover:border-gold/40 transition-all duration-300">
              <div className="w-12 h-12 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                <FiMapPin />
              </div>
              <div>
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Location</p>
                <p className="text-white font-medium">Pretoria, Gauteng</p>
                <p className="text-gray-400 text-sm">South Africa</p>
              </div>
            </div>

            <div className="glass-card p-6">
              <p className="text-gold text-xs tracking-widest uppercase font-semibold mb-3">Availability</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white text-sm">Open to new projects</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Typically responds within 24 hours
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Project Type</label>
                  <select
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    className="w-full bg-dark-3 border border-white/10 text-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  >
                    <option value="">Select type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {sent ? (
                  '✓ Message Sent!'
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
