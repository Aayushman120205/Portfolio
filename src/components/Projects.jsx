import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/mock';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const colorMap = {
    purple: {
      gradient: 'from-purple-600/20 to-purple-900/20',
      border: 'border-purple-500/30',
      glow: 'shadow-purple-500/20',
      hoverGlow: 'hover:shadow-purple-500/50',
      badge: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    },
    blue: {
      gradient: 'from-blue-600/20 to-blue-900/20',
      border: 'border-blue-500/30',
      glow: 'shadow-blue-500/20',
      hoverGlow: 'hover:shadow-blue-500/50',
      badge: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    },
    cyan: {
      gradient: 'from-cyan-600/20 to-cyan-900/20',
      border: 'border-cyan-500/30',
      glow: 'shadow-cyan-500/20',
      hoverGlow: 'hover:shadow-cyan-500/50',
      badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    },
  };

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-16 text-center"
          style={{
            background: 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          ref={ref}
          className="space-y-12"
        >
          {portfolioData.projects.map((project, index) => {
            const colors = colorMap[project.color];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                whileHover={{
                  y: -10,
                  rotateX: 2,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <Card
                  className={`project-card p-8 rounded-2xl border-2 ${colors.border} bg-gradient-to-br ${colors.gradient} backdrop-blur-sm shadow-2xl ${colors.glow} ${colors.hoverGlow} transition-all duration-300 overflow-hidden relative group`}
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full" />
                  
                  {/* Sparkle icon */}
                  <motion.div
                    className="absolute top-6 right-6 text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="w-6 h-6" />
                  </motion.div>

                  <div className="grid md:grid-cols-5 gap-8 items-center">
                    {/* Project Visual */}
                    <div className="md:col-span-2">
                      <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-white/10 shadow-inner overflow-hidden group-hover:scale-105 transition-transform duration-300">
                        <div className="text-6xl font-bold text-white/10">{project.title[0]}</div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="md:col-span-3 space-y-4">
                      <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 transition-all">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-lg leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className={`${colors.badge} px-3 py-1`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="pt-2">
                        <p className="text-sm text-cyan-400 mb-4">
                          <span className="font-semibold">Impact:</span> {project.impact}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <Button
                          onClick={() => window.open(project.githubUrl, '_blank')}
                          variant="outline"
                          className="border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                        <Button
                          variant="outline"
                          className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </div>
                    </div>
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

export default Projects;
