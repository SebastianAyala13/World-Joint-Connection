'use client';

import { motion } from 'framer-motion';
import { Search, Settings, Play, TrendingUp, Scale, BarChart3 } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: 'Descubrimiento',
    description: 'Análisis de necesidades y objetivos específicos.',
    color: 'from-primary to-secondary'
  },
  {
    icon: Settings,
    title: 'Implementación',
    description: 'Configuración de sistemas y entrenamiento de agentes.',
    color: 'from-secondary to-accent'
  },
  {
    icon: Play,
    title: 'Operación',
    description: 'Inicio de operaciones con monitoreo continuo.',
    color: 'from-accent to-primary'
  },
  {
    icon: TrendingUp,
    title: 'Mejora continua',
    description: 'Optimización basada en métricas y feedback.',
    color: 'from-primary to-secondary'
  },
  {
    icon: Scale,
    title: 'Escalamiento',
    description: 'Expansión de operaciones según crecimiento.',
    color: 'from-secondary to-accent'
  },
  {
    icon: BarChart3,
    title: 'Reporte ejecutivo',
    description: 'Análisis detallado de resultados y ROI.',
    color: 'from-accent to-primary'
  }
];

export default function ProcessTimeline() {
  return (
    <section id="proceso" className="section">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">
            Nuestro proceso
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Metodología probada que garantiza resultados excepcionales
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ duration: 0.6 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="glass rounded-xl p-6 hover:glow-primary transition-all duration-300 border border-white/10 hover:border-primary/30">
                    <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center mb-4 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-outfit font-semibold mb-2 text-white">
                      {step.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="timeline-node w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
