import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const skillGroups = [
  {
    category: 'Frontend',
    color: 'from-blue-500/20 to-blue-600/5',
    accent: '#60a5fa',
    skills: ['React.js', 'React Native', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Angular', 'jQuery', 'SASS'],
  },
  {
    category: 'Backend & Database',
    color: 'from-emerald-500/20 to-emerald-600/5',
    accent: '#34d399',
    skills: ['C#', 'SQL', 'REST APIs', 'Firebase'],
  },
  {
    category: 'Design',
    color: 'from-purple-500/20 to-purple-600/5',
    accent: '#a78bfa',
    skills: ['Figma', 'Responsive Design', 'UI/UX Design', 'Wireframing'],
  },
  {
    category: 'Tools & Platforms',
    color: 'from-gold/20 to-gold/5',
    accent: '#C8A97E',
    skills: ['Git', 'Azure DevOps'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Expertise"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit built over 8+ years of professional frontend development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1 }}
              className="glass-card p-8 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-6 rounded-full" style={{ backgroundColor: group.accent }} />
                <h3 className="text-white font-semibold text-lg">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.1 + si * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 rounded-sm text-sm font-medium border transition-all duration-300 cursor-default"
                    style={{
                      backgroundColor: `${group.accent}10`,
                      borderColor: `${group.accent}30`,
                      color: group.accent,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
