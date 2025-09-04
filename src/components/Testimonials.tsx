'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Star, Quote, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
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
    id: 2,
    name: 'James Rodriguez',
    position: 'CEO',
    company: 'TechStart Solutions',
    rating: 5,
    quote: 'Nuestras conversiones aumentaron un 40% en solo 3 meses. El equipo es profesional y los resultados hablan por sí solos.',
    avatar: '/testimonios/james.jpg',
    industry: 'Tecnología',
    result: '40% de incremento en conversiones'
  },
  {
    id: 3,
    name: 'Brian Thompson',
    position: 'Director de Marketing',
    company: 'E-commerce Plus',
    rating: 5,
    quote: 'La atención al cliente 24/7 ha transformado completamente la experiencia de nuestros usuarios. Excelente servicio.',
    avatar: '/testimonios/brian.jpg',
    industry: 'E-commerce',
    result: '95% de satisfacción del cliente'
  },
  {
    id: 4,
    name: 'Carlos Mendoza',
    position: 'Gerente General',
    company: 'Retail Solutions',
    rating: 5,
    quote: 'Los analytics en tiempo real nos han dado insights valiosos para tomar decisiones estratégicas más informadas.',
    avatar: '/testimonios/carlos.jpg',
    industry: 'Retail',
    result: '30% de mejora en ROI'
  },
  {
    id: 5,
    name: 'Anthony Wilson',
    position: 'Fundador',
    company: 'Digital Agency Pro',
    rating: 5,
    quote: 'La automatización ha reducido nuestro tiempo de respuesta en un 70%. Nuestros clientes están encantados.',
    avatar: '/testimonios/anthony.jpg',
    industry: 'Marketing Digital',
    result: '70% de reducción en tiempo de respuesta'
  },
  {
    id: 6,
    name: 'Laura Martinez',
    position: 'COO',
    company: 'Healthcare Solutions',
    rating: 5,
    quote: 'La seguridad y cumplimiento normativo son excepcionales. Confiamos plenamente en su infraestructura.',
    avatar: '/testimonios/laura.jpg',
    industry: 'Salud',
    result: '100% de cumplimiento normativo'
  },
  {
    id: 7,
    name: 'Jason Lee',
    position: 'Director de Ventas',
    company: 'B2B Services',
    rating: 5,
    quote: 'Nuestro pipeline de ventas se ha optimizado significativamente. Los resultados superan nuestras expectativas.',
    avatar: '/testimonios/jason.jpg',
    industry: 'B2B',
    result: '60% de mejora en pipeline de ventas'
  },
  {
    id: 8,
    name: 'Monica Garcia',
    position: 'VP de Producto',
    company: 'SaaS Platform',
    rating: 5,
    quote: 'La escalabilidad de la solución nos permite crecer sin preocupaciones. El soporte técnico es excepcional.',
    avatar: '/testimonios/monica.jpg',
    industry: 'SaaS',
    result: '3x de crecimiento en usuarios activos'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="badge mb-6"
          >
            <Quote className="w-4 h-4" />
            <span>¿Quieres resultados similares?</span>
          </motion.div>

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

        {/* Main Content */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-surface hover:scale-110 transition-all duration-300 border border-border/50"
          >
            <ArrowRight className="w-6 h-6 rotate-180" />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-surface/80 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-surface hover:scale-110 transition-all duration-300 border border-border/50"
          >
            <ArrowRight className="w-6 h-6" />
          </motion.button>

          {/* Testimonials Carousel */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
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
                          &ldquo;{testimonials[currentIndex].quote}&rdquo;
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
                          <Image
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                            width={64}
                            height={64}
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
