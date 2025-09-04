'use client';

import { motion } from 'framer-motion';
import { cases } from '@/data/cases';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function CasesGrid() {
  return (
    <section id="casos" className="section">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">
            Casos de éxito
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Resultados reales que hablan por sí mismos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative h-80">
                {/* Real image background */}
                <div className="absolute inset-0">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {caseItem.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-outfit font-semibold text-white mb-2">
                    {caseItem.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {caseItem.description}
                  </p>
                  
                  {/* CTA Button */}
                  <motion.a
                    href={`/casos/${caseItem.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:glow-primary transition-all duration-200 shadow-lg"
                    aria-label={`Ver detalle de ${caseItem.title}`}
                  >
                    <span>Ver detalle</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://wa.me/573160268752"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 glass border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:border-primary/50 transition-all duration-200"
            aria-label="Contactar por testimonios"
          >
            <span>¿Quieres resultados similares?</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
