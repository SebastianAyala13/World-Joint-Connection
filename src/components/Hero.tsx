'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';
import { useState } from 'react';
import VideoModal from './VideoModal';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background-light to-background">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/hero/hero-bg.webm" type="video/webm" />
          <source src="/hero/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-10 animate-gradient-xy" />
        
        {/* Floating Elements */}
        <div className="floating-element" />
        <div className="floating-element" />
        <div className="floating-element" />
      </div>

      {/* Main Content - SIMPLIFICADO Y LIMPIO */}
      <div className="container relative z-10 py-32">
        
        {/* ===== SECCIÓN 1: HEADER PRINCIPAL ===== */}
        <div className="text-center mb-32">
          
          {/* Badge de Destacado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="badge mb-16 inline-flex"
          >
            <Star className="w-5 h-5" />
            <span className="text-base">Líder en atención al cliente 24/7</span>
          </motion.div>

          {/* Título Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="heading-display mb-20 max-w-4xl mx-auto"
          >
            <span className="text-gradient">
              Ventas, atención
            </span>
            <br />
            <span className="text-primary">
              y datos en tiempo real
            </span>
          </motion.h1>

          {/* Subtítulo Descriptivo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed mb-32"
          >
            Operación certificada 24/7 orientada a conversión. 
            Transformamos tu negocio con tecnología de vanguardia y atención personalizada.
          </motion.p>
        </div>

        {/* ===== SECCIÓN 2: BOTONES CTA - SOLO LO ESENCIAL ===== */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-12 justify-center items-center"
          >
            {/* Botón Principal */}
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary group px-16 py-6 text-xl font-bold"
            >
              <span>Explorar servicios</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Botón Secundario */}
            <motion.a
              href="https://wa.me/573160268752"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline group px-16 py-6 text-xl font-bold"
            >
              <MessageCircle className="w-7 h-7" />
              <span>Cotizar por WhatsApp</span>
            </motion.a>
          </motion.div>
        </div>

        {/* ===== SECCIÓN 3: INDICADOR DE SCROLL ===== */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="flex flex-col items-center gap-4 text-secondary"
          >
            <span className="text-base font-medium">Desliza para explorar</span>
            <div className="w-8 h-12 border-2 border-border rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-4 bg-primary rounded-full mt-2"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== MODAL DE VIDEO ===== */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </section>
  );
}
