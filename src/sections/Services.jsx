import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiLayout, FiTrendingUp } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'

const services = [
  {
    icon: <FiCode className="text-3xl" />,
    title: 'Frontend Development',
    description:
      'Modern React.js and JavaScript applications with clean architecture, reusable components, and exceptional performance.',
    items: ['React.js Apps', 'SPA Development', 'Component Libraries', 'API Integration'],
  },
  {
    icon: <FiSmartphone className="text-3xl" />,
    title: 'Mobile App Development',
    description:
      'Cross-platform React Native applications that deliver native-quality experiences on both iOS and Android.',
    items: ['React Native', 'Cross-Platform', 'Firebase Integration', 'App Store Ready'],
  },
  {
    icon: <FiLayout className="text-3xl" />,
    title: 'UI/UX Design',
    description:
      'User-centred design and modern interfaces built with Figma — where aesthetics meet functionality.',
    items: ['Figma Design', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
  {
    icon: <FiTrendingUp className="text-3xl" />,
    title: 'Website Optimisation',
    description:
      'SEO, performance audits and accessibility improvements to ensure your site ranks and loads at peak speed.',
    items: ['SEO Optimisation', 'Performance Tuning', 'Accessibility', 'Core Web Vitals'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-dark-2 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="What I Do"
          title="Services"
          subtitle="End-to-end digital solutions tailored to your business needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-gold/40 transition-all duration-500 relative overflow-hidden"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  {s.icon}
                </div>
                <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-gold transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.description}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
