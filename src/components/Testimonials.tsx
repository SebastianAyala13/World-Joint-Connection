'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Anthony Smith',
    position: 'CEO',
    company: 'TechStart',
    rating: 5,
    quote: 'World Joint Connection transformó completamente nuestras operaciones de ventas. El incremento del 35% en conversión superó todas nuestras expectativas.',
    avatar: '/testimonios/anthony.jpg',
    industry: 'E-commerce Retail',
    result: 'Aumento del 50% en satisfacción del cliente'
  },
  {
    id: 2,
    name: 'Brian Johnson',
    position: 'Director de Operaciones',
    company: 'RetailPro',
    rating: 5,
    quote: 'La calidad del servicio y la atención al detalle son excepcionales. Nuestros clientes han notado la diferencia inmediatamente.',
    avatar: '/testimonios/brian.jpg',
    industry: 'Retail',
    result: 'Mejora del 40% en retención de clientes'
  },
  {
    id: 3,
    name: 'Carlos García',
    position: 'Gerente Comercial',
    company: 'HealthCare Plus',
    rating: 5,
    quote: 'La implementación fue rápida y eficiente. El equipo de World Joint Connection es profesional y comprometido con los resultados.',
    avatar: '/testimonios/carlos.jpg',
    industry: 'Proveedor de Salud',
    result: 'Optimización del 60% en agendamiento de citas'
  },
  {
    id: 4,
    name: 'Laura Martínez',
    position: 'Directora de Marketing',
    company: 'Digital Solutions',
    rating: 5,
    quote: 'Los resultados han sido increíbles. Nuestras conversiones aumentaron un 45% en solo 3 meses de implementación.',
    avatar: '/testimonios/laura.jpg',
    industry: 'Marketing Digital',
    result: 'Incremento del 45% en conversiones'
  },
  {
    id: 5,
    name: 'James Wilson',
    position: 'Fundador',
    company: 'StartupHub',
    rating: 5,
    quote: 'La atención al cliente 24/7 ha revolucionado nuestra startup. Nuestros usuarios están encantados con la rapidez de respuesta.',
    avatar: '/testimonios/james.jpg',
    industry: 'Startup Tech',
    result: 'Reducción del 70% en tiempo de respuesta'
  },
  {
    id: 6,
    name: 'Stephanie Chen',
    position: 'VP de Operaciones',
    company: 'Global Logistics',
    rating: 5,
    quote: 'La implementación fue impecable y el soporte técnico es de primera clase. Recomiendo World Joint Connection sin dudarlo.',
    avatar: '/testimonios/stephanie.jpg',
    industry: 'Logística',
    result: 'Aumento del 55% en eficiencia operativa'
  },
  {
    id: 7,
    name: 'Michael Rodriguez',
    position: 'Director General',
    company: 'Innovation Corp',
    rating: 5,
    quote: 'Los resultados superaron nuestras expectativas. El ROI fue evidente desde el primer mes de implementación.',
    avatar: '/testimonios/michael.jpg',
    industry: 'Consultoría',
    result: 'ROI del 300% en 6 meses'
  },
  {
    id: 8,
    name: 'Sarah Thompson',
    position: 'CEO',
    company: 'EduTech Solutions',
    rating: 5,
    quote: 'La plataforma es intuitiva y fácil de usar. Nuestros profesores y estudiantes están muy satisfechos con la experiencia.',
    avatar: '/testimonios/sarah.jpg',
    industry: 'Educación',
    result: 'Mejora del 65% en engagement estudiantil'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonios" className="section-spacing bg-gradient-to-b from-background to-background-light">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center content-spacing"
        >
          <motion.a
            href="#contacto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-400 transition-colors mb-6"
          >
            <span>¿Quieres resultados similares?</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-2 mb-6"
          >
            <span className="text-gradient">
              Lo que dicen
            </span>
            <br />
            <span className="text-primary">
              nuestros clientes
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-secondary max-w-3xl mx-auto"
          >
            Testimonios reales de empresas que confían en nosotros y han experimentado 
            resultados extraordinarios con nuestros servicios.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-primary hover:bg-surface-light transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-primary hover:bg-surface-light transition-colors shadow-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Main Carousel */}
          <div
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Current Testimonial */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="col-span-1 md:col-span-3"
                  >
                    <div className="bg-gradient-to-br from-surface to-surface-dark rounded-3xl p-8 border border-border/50 shadow-2xl max-w-4xl mx-auto">
                      {/* Industry & Result Badge */}
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-3">
                          <span>{testimonials[currentIndex].industry}</span>
                        </div>
                        <p className="text-primary font-semibold text-lg">
                          {testimonials[currentIndex].result}
                        </p>
                      </div>

                      {/* Quote */}
                      <div className="mb-8">
                        <Quote className="w-8 h-8 text-primary mx-auto mb-4 opacity-50" />
                        <blockquote className="text-xl text-secondary leading-relaxed italic">
                          "{testimonials[currentIndex].quote}"
                        </blockquote>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-warning fill-current" />
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary">
                          <img
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <h4 className="text-primary font-semibold text-lg">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-secondary">
                            {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-border hover:bg-border-light'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-400 transition-colors text-lg font-medium"
          >
            <span>¿Quieres resultados similares?</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
