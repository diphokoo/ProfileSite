import { motion } from 'framer-motion'
import {
  SiReact, SiJavascript, SiTypescript, SiAngular, SiFirebase,
  SiGit, SiFigma, SiSass, SiSharp,
} from 'react-icons/si'
import { FiSmartphone } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'

const techs = [
  { icon: <SiReact />, label: 'React.js', color: '#61DAFB' },
  { icon: <FiSmartphone />, label: 'React Native', color: '#61DAFB' },
  { icon: <SiJavascript />, label: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiTypescript />, label: 'TypeScript', color: '#3178C6' },
  { icon: <SiAngular />, label: 'Angular', color: '#DD0031' },
  { icon: <SiFirebase />, label: 'Firebase', color: '#FFCA28' },
  { icon: <SiSharp />, label: 'C#', color: '#9B4993' },
  { icon: <SiSass />, label: 'CSS / SASS', color: '#CC6699' },
  { icon: <SiGit />, label: 'Git', color: '#F05032' },
  { icon: <SiFigma />, label: 'Figma', color: '#F24E1E' },
]

export default function TechStack() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-64 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle eyebrow="Tech Stack" title="Technologies I Work With" />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="glass-card flex flex-col items-center gap-3 py-6 px-4 hover:border-gold/30 transition-all duration-300 group cursor-default"
            >
              <span
                className="text-4xl transition-all duration-300"
                style={{ color: tech.color, filter: `drop-shadow(0 0 8px ${tech.color}40)` }}
              >
                {tech.icon}
              </span>
              <span className="text-gray-400 text-xs font-medium text-center group-hover:text-white transition-colors duration-300">
                {tech.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
