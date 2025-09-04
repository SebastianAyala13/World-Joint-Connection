'use client';

import { motion } from 'framer-motion';
import {
  Phone, 
  Mail,
  MapPin,
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowRight
} from 'lucide-react';
import Logo from './Logo';

const footerLinks = {
  servicios: [
    { name: 'Atención al Cliente 24/7', href: '#servicios' },
    { name: 'Gestión de Ventas', href: '#servicios' },
    { name: 'Analytics en Tiempo Real', href: '#servicios' },
    { name: 'Seguridad Avanzada', href: '#servicios' },
    { name: 'Automatización Inteligente', href: '#servicios' },
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '#inicio' },
    { name: 'Casos de Éxito', href: '#casos' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Blog', href: '#blog' },
    { name: 'Carreras', href: '#carreras' },
  ],
  soporte: [
    { name: 'Centro de Ayuda', href: '#ayuda' },
    { name: 'Documentación', href: '#docs' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Estado del Sistema', href: '#status' },
    { name: 'Soporte Técnico', href: '#soporte' },
  ],
  legal: [
    { name: 'Términos de Servicio', href: '#terminos' },
    { name: 'Política de Privacidad', href: '#privacidad' },
    { name: 'Cookies', href: '#cookies' },
    { name: 'GDPR', href: '#gdpr' },
    { name: 'Aviso Legal', href: '#legal' },
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
  { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-background-light to-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <div className="mb-6">
                <Logo size="md" showText={true} />
            </div>

              <p className="text-secondary mb-6 leading-relaxed">
                Líder en soluciones de atención al cliente y gestión de ventas. 
                Transformamos tu negocio con tecnología de vanguardia y servicio personalizado.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-secondary">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+57 316 026 8752</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@worldjoint.com</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Colombia</span>
                </div>
              </div>
            </motion.div>
            </div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="heading-4 text-primary mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-secondary hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="heading-4 text-primary mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-secondary hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h4 className="heading-4 text-primary mb-6">Soporte</h4>
              <ul className="space-y-3">
                {footerLinks.soporte.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-secondary hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="heading-4 text-primary mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-secondary hover:text-primary transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
            </ul>
            </div>
          </motion.div>
        </div>

        {/* Newsletter & Social */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-border/50"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Newsletter */}
            <div>
              <h4 className="heading-3 text-primary mb-4">
                Mantente actualizado
              </h4>
              <p className="text-secondary mb-6">
                Suscríbete a nuestro newsletter para recibir las últimas noticias y actualizaciones.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 bg-surface border border-border rounded-lg text-primary placeholder-muted focus:outline-none focus:border-primary transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                >
                  Suscribirse
                </motion.button>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h4 className="heading-4 text-primary mb-4">
                Síguenos
              </h4>
              <div className="flex gap-4 justify-center md:justify-end">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 bg-surface border border-border rounded-xl flex items-center justify-center text-secondary transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-secondary text-sm flex items-center gap-2"
            >
              © 2024 World Joint Connection. Hecho con 
              <span className="text-red-500">❤️</span>
              en Colombia
            </motion.p>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white hover:shadow-glow transition-shadow"
            >
              <ArrowRight className="w-5 h-5 rotate-[-90deg]" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
