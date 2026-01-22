import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/mock';
import { Card } from './ui/card';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-center"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {portfolioData.about.title}
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mb-16"
          >
            <Card className="glass-card p-8 md:p-12 border border-purple-500/20 rounded-2xl hover:border-purple-500/40 transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-all duration-300"></div>
                    <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                      {portfolioData.hero.name[0]}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {portfolioData.about.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {portfolioData.about.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                        className="stat-card p-4 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                        style={{
                          background: 'rgba(6, 182, 212, 0.05)',
                        }}
                      >
                        <div className="text-3xl font-bold text-cyan-400 mb-1">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
