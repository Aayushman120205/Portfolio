import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/mock';
import { Card } from './ui/card';
import { Briefcase, GraduationCap, Award, Users } from 'lucide-react';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Experience & Education
        </motion.h2>

        <div ref={ref} className="space-y-16">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 shadow-lg shadow-purple-500/30">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-purple-400">Work Experience</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-purple-500/30">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 border-4 border-[#0a0a0f] shadow-lg shadow-purple-500/50" />

                  <Card className="glass-card p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/20">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-1">{exp.title}</h4>
                        <p className="text-lg text-purple-400">{exp.organization}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-cyan-400 font-medium">{exp.period}</p>
                        <p className="text-sm text-gray-400">{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start gap-2">
                          <span className="text-cyan-400 mt-1.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-500/30">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-blue-400">Education</h3>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-500/30">
              {portfolioData.education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                  className="relative mb-8 last:mb-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 border-4 border-[#0a0a0f] shadow-lg shadow-blue-500/50" />

                  <Card className="glass-card p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/20">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                        <p className="text-lg text-blue-400">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-cyan-400 font-medium">{edu.period}</p>
                        <p className="text-sm text-gray-300 font-semibold">{edu.grade}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-600 to-cyan-800 shadow-lg shadow-cyan-500/30">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-cyan-400">Achievements</h3>
            </div>

            <Card className="glass-card p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20">
              <ul className="grid md:grid-cols-2 gap-4">
                {portfolioData.achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="text-gray-300 flex items-start gap-2 p-3 rounded-lg hover:bg-cyan-500/5 transition-colors"
                  >
                    <span className="text-cyan-400 mt-1">★</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg shadow-purple-500/30">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-purple-400">Leadership Roles</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.leadership.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.9 + index * 0.15, duration: 0.5 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Card className="glass-card p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 h-full">
                    <h4 className="text-xl font-bold text-white mb-2">{role.role}</h4>
                    <p className="text-purple-400 mb-3 font-medium">{role.organization}</p>
                    <p className="text-gray-300 text-sm">{role.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
