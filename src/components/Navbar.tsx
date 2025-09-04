'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Casos de Éxito', href: '#casos' },
    { name: 'Proceso', href: '#proceso' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-primary text-white py-3 text-sm">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+57 316 026 8752</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="font-medium">info@worldjoint.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:block text-sm font-medium">Soporte 24/7 disponible</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Logo size="md" showText={true} />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group text-secondary hover:text-primary transition-colors duration-200 font-medium text-sm"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.a
                href="https://wa.me/573160268752"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline text-sm px-6 py-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </motion.a>
              
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary text-sm px-6 py-3"
              >
                <span>Cotizar</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-lg bg-surface border border-border text-primary hover:bg-surface-light transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background-light border-t border-border"
            >
              <div className="container py-8">
                <div className="flex flex-col gap-6">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsOpen(false)}
                      className="text-secondary hover:text-primary transition-colors duration-200 font-medium py-3 border-b border-border/30 last:border-b-0 text-base"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  
                  <div className="flex flex-col gap-4 pt-6 border-t border-border">
                    <motion.a
                      href="https://wa.me/573160268752"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsOpen(false)}
                      className="btn btn-outline w-full justify-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </motion.a>
                    
                    <motion.a
                      href="#contacto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsOpen(false)}
                      className="btn btn-primary w-full justify-center"
                    >
                      <span>Cotizar</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-24" />
    </>
  );
}
