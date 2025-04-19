import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { FiCode, FiLayout, FiZap, FiTrendingUp, FiBookOpen } from 'react-icons/fi'

const passions = [
  { icon: <FiCode />, label: 'React Development' },
  { icon: <FiLayout />, label: 'UI/UX Design' },
  { icon: <FiZap />, label: 'Modern Web Technologies' },
  { icon: <FiTrendingUp />, label: 'Performance Optimization' },
  { icon: <FiBookOpen />, label: 'Continuous Learning' },
]

const stats = [
  { value: '10+', label: 'Years Industry Experience' },
  { value: '50+', label: 'Projects Delivered' },
  { value: 'React.js', label: 'Specialist' },
  { value: 'UI/UX', label: 'Enthusiast' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-dark-2 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Who I Am"
          title="Building Digital Experiences That Matter"
          subtitle="Adaptable and detail-oriented Frontend Developer with experience creating user-friendly, mobile-responsive applications that leave a lasting impression."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              For over 8 years, I've been transforming ideas into intuitive digital experiences through modern frontend development., I specialise in
              crafting high-performance, visually stunning digital products. My journey spans from
              enterprise financial platforms at{' '}
              <span className="text-gold">Alexander Forbes</span> to innovative startup solutions,
              always with a focus on quality and user experience.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              I blend technical expertise with a designer's eye — ensuring every pixel is
              intentional and every interaction is intuitive. Whether building complex React
              dashboards or cross-platform React Native apps, I bring the same level of craft and
              precision to every project.
            </p>

            <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-5">
              Passionate About
            </p>
            <div className="flex flex-wrap gap-3">
              {passions.map((p) => (
                <div
                  key={p.label}
                  className="glass-card flex items-center gap-2 px-4 py-2 rounded-sm hover:border-gold/40 transition-all duration-300"
                >
                  <span className="text-gold text-sm">{p.icon}</span>
                  <span className="text-gray-300 text-sm">{p.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card p-8 text-center hover:border-gold/40 transition-all duration-300 group"
              >
                <div className="font-display text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform duration-300">
                  {s.value}
                </div>
                <div className="text-gray-400 text-sm tracking-wider uppercase">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
