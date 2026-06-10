import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { FiMail, FiMapPin, FiSend, FiLoader } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'

// ─── EmailJS config ───────────────────────────────────────────────────────────
// 1. Sign up free at https://www.emailjs.com
// 2. Create a service (Gmail / Outlook) and note the Service ID
// 3. Create an email template — use variables: {{from_name}}, {{from_email}},
//    {{company}}, {{project_type}}, {{message}} — set "To Email" to diphokoo@outlook.com
// 4. Copy your Public Key from Account → API Keys
// Replace the three placeholder strings below with your real values:
const EMAILJS_SERVICE_ID  = 'service_n7932jn'
const EMAILJS_TEMPLATE_ID = 'template_xdw87db'
const EMAILJS_PUBLIC_KEY  = '2yM2yr5JvroZB-8_j'
// ─────────────────────────────────────────────────────────────────────────────

const projectTypes = [
  'Web Application',
  'Mobile App',
  'UI/UX Design',
  'E-Commerce',
  'Consultation',
  'Other',
]

const INITIAL = { name: '', email: '', company: '', projectType: '', message: '' }

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm]     = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm(INITIAL)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 5000)
  }

  const btnLabel = {
    idle:    <><FiSend /> Send Message</>,
    sending: <><FiLoader className="animate-spin" /> Sending…</>,
    success: <>✓ Message Sent!</>,
    error:   <>✕ Failed — Try Again</>,
  }

  const btnClass = {
    idle:    'btn-primary',
    sending: 'btn-primary opacity-70 cursor-not-allowed',
    success: 'w-full py-3 px-8 bg-emerald-600 text-white font-semibold tracking-wider uppercase text-sm flex items-center justify-center gap-2',
    error:   'w-full py-3 px-8 bg-red-700 text-white font-semibold tracking-wider uppercase text-sm flex items-center justify-center gap-2',
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
              <p className="text-gray-400 text-sm mt-2">Typically responds within 24 hours</p>
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
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Name *</label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs tracking-widests uppercase mb-2">Email *</label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your company"
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs tracking-widest uppercase mb-2">Project Type</label>
                  <select
                    name="project_type"
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
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
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full flex items-center justify-center gap-2 transition-all duration-300 ${btnClass[status]}`}
              >
                {btnLabel[status]}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
