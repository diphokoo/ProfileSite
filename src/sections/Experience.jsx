import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

const experiences = [
  {
    role: "Freelance Frontend Developer",
    company: "Kubheka Embarks (Pty) Ltd",
    period: "2026 — Present",
    type: "Freelance",
    description:
      "Leading frontend development for e-commerce and enterprise solutions. Building scalable React.js and React Native applications with Firebase backends and TypeScript.",
    tech: ["React.js", "React Native", "Firebase", "TypeScript", "E-Commerce"],
  },
  {
    role: "Freelance Frontend Developer",
    company: "Zari",
    period: "2026 — Present",
    type: "Freelance",
    description:
      "Developed cross-platform mobile applications and web platforms. Focused on intuitive UI/UX design and seamless Firebase integration.",
    tech: ["React.js", "React Native", "Firebase", "UI/UX Design"],
  },
  {
    role: "Frontend Developer",
    company: "DataSaint",
    period: "2023 — 2025",
    type: "Full-Time",
    description:
      "Built data-driven web applications and RESTful integrations using React.js, React Native, JavaScript and C#. Delivered high-quality enterprise solutions.",
    tech: ["React.js", "React Native", "JavaScript", "C#", "REST APIs"],
  },
  {
    role: "Frontend Developer",
    company: "HumanState",
    period: "2022 — 2022",
    type: "Full-Time",
    description:
      "Developed and maintained enterprise-grade web applications. Leveraged Angular, jQuery and SASS to deliver polished, responsive user interfaces.",
    tech: ["Angular", "jQuery", "SASS", "JavaScript"],
  },
  {
    role: "Frontend Developer",
    company: "Alexander Forbes",
    period: "2019 — 2022",
    type: "Full-Time",
    description:
      "Started my professional journey at one of South Africa's leading financial services companies. Built and optimised React and Angular applications with a focus on SEO and performance.",
    tech: ["React", "Angular", "SEO", "JavaScript"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-dark-2 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <SectionTitle
          eyebrow="Career"
          title="Work Experience"
          subtitle="10+ years of professional experience across enterprise, startup, and freelance environments."
        />

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-dark -translate-x-1/2 mt-6" />
                <div className="hidden md:block md:w-1/2" />
                <div className="ml-14 md:ml-0 md:w-1/2">
                  <div className="glass-card p-6 hover:border-gold/40 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-white font-semibold text-lg group-hover:text-gold transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className="text-gold text-sm font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-gray-500 text-xs block">{exp.period}</span>
                        <span className="text-xs px-2 py-0.5 bg-gold/10 border border-gold/20 text-gold rounded-full">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-sm">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
