import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../data/mock';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { Mail, Linkedin, Github, Code2, Send } from 'lucide-react';
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.send(
      "service_yrlspve",          // ✅ your Service ID
      "template_dvd10sm",         // ⬅️ from EmailJS
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: formData.subject,
        time: new Date().toLocaleString(),
      },
      "RnrMiSLWcsKOBqQWD"           // ⬅️ from EmailJS
    );

    toast({
      title: "Message Sent! 🚀",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    toast({
      title: "Error ❌",
      description: "Failed to send message. Please try again.",
      variant: "destructive",
    });
  } finally {
      setIsSubmitting(false);
    }
  };


  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:${portfolioData.contact.email}`,
      color: 'text-purple-400 hover:text-purple-300',
      label: portfolioData.contact.email,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: portfolioData.contact.linkedin,
      color: 'text-blue-400 hover:text-blue-300',
      label: 'Connect on LinkedIn',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: portfolioData.contact.github,
      color: 'text-cyan-400 hover:text-cyan-300',
      label: 'View GitHub Profile',
    },
    {
      name: 'LeetCode',
      icon: Code2,
      href: portfolioData.contact.leetcode,
      color: 'text-yellow-400 hover:text-yellow-300',
      label: 'LeetCode Profile',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-center"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto"
        >
          I'm always open to discussing new projects, opportunities, or just having a chat about tech!
        </motion.p>

        <div ref={ref} className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3"
          >
            <Card className="glass-card p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-purple-500 focus:ring-purple-500 text-white placeholder:text-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-purple-500 focus:ring-purple-500 text-white placeholder:text-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 focus:border-purple-500 focus:ring-purple-500 text-white placeholder:text-gray-500"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-white/5 border-white/10 focus:border-purple-500 focus:ring-purple-500 text-white placeholder:text-gray-500 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-6 text-lg rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="block"
                  >
                    <Card className="glass-card p-4 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br from-white/5 to-white/10 ${link.color} transition-colors`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{link.name}</p>
                          <p className="text-sm text-gray-400">{link.label}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
