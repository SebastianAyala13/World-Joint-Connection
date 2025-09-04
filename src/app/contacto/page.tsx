'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { Send, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  empresa: z.string().min(2, 'El nombre de la empresa debe tener al menos 2 caracteres'),
  email: z.string().email('Ingresa un email válido'),
  telefono: z.string().min(7, 'Ingresa un teléfono válido'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background-dark">
      <div className="container-section py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Back button */}
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
              <span className="text-gradient">Contáctanos</span>
            </h1>
            <p className="text-white/70 text-lg">
              Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas
            </p>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-white font-medium mb-2">
                    Nombre completo *
                  </label>
                  <input
                    {...register('nombre')}
                    type="text"
                    id="nombre"
                    className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Tu nombre completo"
                  />
                  {errors.nombre && (
                    <p className="text-red-400 text-sm mt-1">{errors.nombre.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="empresa" className="block text-white font-medium mb-2">
                    Empresa *
                  </label>
                  <input
                    {...register('empresa')}
                    type="text"
                    id="empresa"
                    className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                  {errors.empresa && (
                    <p className="text-red-400 text-sm mt-1">{errors.empresa.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-white font-medium mb-2">
                    Teléfono *
                  </label>
                  <input
                    {...register('telefono')}
                    type="tel"
                    id="telefono"
                    className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors"
                    placeholder="+57 300 123 4567"
                  />
                  {errors.telefono && (
                    <p className="text-red-400 text-sm mt-1">{errors.telefono.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-white font-medium mb-2">
                  Mensaje *
                </label>
                <textarea
                  {...register('mensaje')}
                  id="mensaje"
                  rows={5}
                  className="w-full px-4 py-3 glass border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto, necesidades específicas y objetivos..."
                />
                {errors.mensaje && (
                  <p className="text-red-400 text-sm mt-1">{errors.mensaje.message}</p>
                )}
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400"
                >
                  ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400"
                >
                  Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-8 rounded-lg font-semibold hover:glow-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Alternative contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 p-6 glass rounded-lg border border-white/10"
          >
            <h3 className="text-xl font-outfit font-semibold text-white mb-2">
              ¿Prefieres contactarnos directamente?
            </h3>
            <p className="text-white/70 mb-4">
              También puedes escribirnos por WhatsApp para una respuesta más rápida
            </p>
            <a
              href="https://wa.me/573160268752"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <span>Contactar por WhatsApp</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
