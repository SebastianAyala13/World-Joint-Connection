'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: '¿Cuánto tiempo toma implementar el servicio?',
    answer: 'La implementación completa toma entre 2-4 semanas, dependiendo de la complejidad de tu negocio. Incluye configuración, entrenamiento del equipo y pruebas de calidad.'
  },
  {
    id: 2,
    question: '¿Se integra con mi CRM actual?',
    answer: 'Sí, nos integramos con los principales CRMs del mercado: Salesforce, HubSpot, Zoho, Pipedrive y más. También desarrollamos integraciones personalizadas si es necesario.'
  },
  {
    id: 3,
    question: '¿Qué métricas de calidad reportan?',
    answer: 'Reportamos métricas en tiempo real: tiempo de respuesta, satisfacción del cliente, resolución de tickets, conversiones, ROI y más. Todos los datos están disponibles en dashboards personalizables.'
  },
  {
    id: 4,
    question: '¿En qué idiomas ofrecen servicio?',
    answer: 'Ofrecemos soporte en español, inglés, portugués y francés. Nuestros agentes están certificados en múltiples idiomas para atender clientes globales.'
  },
  {
    id: 5,
    question: '¿Qué SLAs garantizan?',
    answer: 'Garantizamos SLAs estrictos: respuesta en 15 minutos, resolución en 4 horas para casos críticos, y 99.9% de uptime. Cumplimos o te reembolsamos.'
  },
  {
    id: 6,
    question: '¿Cómo protegen la información de mis clientes?',
    answer: 'Implementamos seguridad de nivel empresarial: encriptación SSL/TLS, cumplimiento GDPR, certificaciones ISO 27001, y auditorías regulares de seguridad. Tus datos están 100% protegidos.'
  },
  {
    id: 7,
    question: '¿Ofrecen soporte técnico 24/7?',
    answer: 'Absolutamente. Nuestro equipo de soporte técnico está disponible 24/7/365. Puedes contactarnos por teléfono, email, chat en vivo o WhatsApp en cualquier momento.'
  },
  {
    id: 8,
    question: '¿Qué incluye el plan de precios?',
    answer: 'Nuestros planes incluyen implementación completa, entrenamiento del equipo, soporte técnico 24/7, actualizaciones gratuitas, y garantía de satisfacción. Sin costos ocultos.'
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="faq-section">
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
            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            <span>Preguntas Frecuentes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-2 mb-6"
          >
            <span className="text-gradient">
              Resolvemos tus dudas
            </span>
            <br />
            <span className="text-primary">
              más comunes
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-secondary max-w-3xl mx-auto"
          >
            Encuentra respuestas rápidas a las preguntas más frecuentes sobre nuestros servicios, 
            implementación y soporte técnico.
          </motion.p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {faqData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-surface border border-border/50 rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
              >
                {/* Question */}
                <motion.button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-surface-light transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <h3 className="text-lg font-semibold text-primary pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-secondary" />
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openItems.includes(item.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="pt-2 border-t border-border/30">
                          <p className="text-secondary leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
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
          <div className="bg-gradient-to-r from-surface to-surface-light rounded-2xl p-8 border border-border/50">
            <h3 className="heading-3 mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Nuestro equipo está listo para responder todas tus dudas y ayudarte 
              a encontrar la solución perfecta para tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                <span>Contactar ahora</span>
                <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
              </motion.a>
              
              <motion.a
                href="https://wa.me/573160268752"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline"
              >
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
