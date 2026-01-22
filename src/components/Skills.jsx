import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/mock';
import { Card } from './ui/card';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const colorMap = {
    purple: {
      gradient: 'from-purple-600 to-purple-800',
      border: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-500/60',
      shadow: 'shadow-purple-500/20',
      hoverShadow: 'hover:shadow-purple-500/40',
      bg: 'rgba(168, 85, 247, 0.05)',
    },
    blue: {
      gradient: 'from-blue-600 to-blue-800',
      border: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-500/60',
      shadow: 'shadow-blue-500/20',
      hoverShadow: 'hover:shadow-blue-500/40',
      bg: 'rgba(59, 130, 246, 0.05)',
    },
    cyan: {
      gradient: 'from-cyan-600 to-cyan-800',
      border: 'border-cyan-500/30',
      hoverBorder: 'hover:border-cyan-500/60',
      shadow: 'shadow-cyan-500/20',
      hoverShadow: 'hover:shadow-cyan-500/40',
      bg: 'rgba(6, 182, 212, 0.05)',
    },
  };

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Technical Skills
        </motion.h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {portfolioData.skills.categories.map((category, catIndex) => {
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30, rotateX: -10 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -10 }}
                transition={{ delay: catIndex * 0.15, duration: 0.6 }}
                whileHover={{
                  y: -8,
                  rotateX: 5,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card
                  className={`skill-card p-6 rounded-2xl border ${colors.border} ${colors.hoverBorder} transition-all duration-300 shadow-lg ${colors.shadow} ${colors.hoverShadow} h-full`}
                  style={{
                    background: colors.bg,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <h3
                    className={`text-2xl font-bold mb-6 bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent`}
                  >
                    {category.name}
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ delay: catIndex * 0.15 + skillIndex * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-200"
                      >
                        <span className="text-gray-300 text-sm font-medium">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
