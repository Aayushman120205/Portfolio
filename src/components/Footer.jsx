import React from 'react';
import { Github, Linkedin, Code2, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10 relative">
      {/* Gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-3"
              style={{
                background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {portfolioData.hero.name}
            </h3>
            <p className="text-gray-400 text-sm">
              {portfolioData.hero.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['About', 'Projects', 'Experience', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-cyan-400 text-sm text-left transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Connect</h4>
            <div className="flex gap-4">
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Code2 className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-purple-400 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & Framer Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
