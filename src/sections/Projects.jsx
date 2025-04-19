import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiCheckCircle, FiClock } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'

const projects = [
  {
    title: 'Dashboard Portfolio',
    description:
      'Interactive analytics dashboard showcasing modern React development, responsive layouts, and data visualization techniques.',
    url: 'https://delicate-banoffee-85ad27.netlify.app',
    status: 'Completed',
    tags: ['React.js', 'Dashboard', 'Data Visualization', 'Responsive'],
    gradient: 'from-blue-600/20 to-purple-600/10',
  },
  {
    title: 'Daily Standup',
    description:
      'Agile team collaboration platform designed to streamline daily standups and productivity tracking for modern development teams.',
    url: 'https://dailystandupapp.netlify.app',
    status: 'In Progress',
    tags: ['React.js', 'Agile', 'Collaboration', 'Productivity'],
    gradient: 'from-emerald-600/20 to-teal-600/10',
  },
  {
    title: 'Soloar Online Store',
    description:
      'Modern e-commerce platform built with React.js featuring product management, cart functionality, and seamless online shopping.',
    url: 'https://soloarapp.netlify.app',
    status: 'In Progress',
    tags: ['React.js', 'E-Commerce', 'Firebase', 'UI/UX'],
    gradient: 'from-gold/20 to-amber-600/10',
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className="section-padding bg-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-96 bg-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Portfolio"
          title="Selected Work"
          subtitle="A curated selection of projects demonstrating technical depth and design sensibility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="glass-card overflow-hidden group hover:border-gold/40 transition-all duration-500 flex flex-col"
            >
              {/* Preview area */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: hovered === i ? 1.05 : 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <iframe
                      src={project.url}
                      title={project.title}
                      className="w-full h-full scale-50 origin-top-left pointer-events-none"
                      style={{ width: '200%', height: '200%', transform: 'scale(0.5)', transformOrigin: 'top left' }}
                      loading="lazy"
                    />
                  </motion.div>
                </div>

                {/* Overlay */}
                <motion.div
                  animate={{ opacity: hovered === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-dark/70 backdrop-blur-sm flex items-center justify-center gap-4"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gold text-dark px-4 py-2 text-sm font-semibold hover:bg-gold-light transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                  <button className="flex items-center gap-2 border border-white/30 text-white px-4 py-2 text-sm hover:border-gold hover:text-gold transition-all">
                    <FiGithub /> GitHub
                  </button>
                </motion.div>

                {/* Status badge */}
                <div className="absolute top-3 right-3">
                  <span
                    className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${
                      project.status === 'Completed'
                        ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                        : 'bg-amber-500/20 border border-amber-500/30 text-amber-400'
                    }`}
                  >
                    {project.status === 'Completed' ? <FiCheckCircle /> : <FiClock />}
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-gold/10 border border-gold/20 text-gold rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
