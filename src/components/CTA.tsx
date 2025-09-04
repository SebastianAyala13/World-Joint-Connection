'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contacto" className="section">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-outfit font-bold mb-6">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Únete a cientos de empresas que ya confían en World Joint Connection
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="https://wa.me/573160268752"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:glow-primary transition-all duration-200 shadow-lg"
              aria-label="Empezar ahora con WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Empezar ahora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="/contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center space-x-2 glass border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-primary/50 transition-all duration-200"
              aria-label="Contactar por formulario"
            >
              <span>Contactar</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
