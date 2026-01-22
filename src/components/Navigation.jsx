import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Experience', href: 'experience' },
    { name: 'Contact', href: 'contact' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0f]/90 backdrop-blur-lg border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={scrollToTop}
              className="text-2xl font-bold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              A
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-white transition-colors relative group"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
              <Button
                onClick={() => window.open('/Aayushman, Professional Resume.pdf', '_blank')}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-6 py-2 rounded-lg shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
              >
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full md:hidden z-40 bg-[#0a0a0f]/95 backdrop-blur-lg"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <Button
                onClick={() => {
                  window.open('/Aayushman, Professional Resume.pdf', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 text-lg rounded-lg shadow-lg"
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
