'use client';

import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const kpiData = [
  {
    icon: Users,
    value: '500+',
    label: 'Clientes Satisfechos',
    description: 'Empresas que confían en nuestros servicios',
    color: 'primary',
    gradient: 'from-primary to-primary-600'
  },
  {
    icon: TrendingUp,
    value: '127%',
    label: 'Aumento en Conversiones',
    description: 'Mejora promedio en las ventas de nuestros clientes',
    color: 'success',
    gradient: 'from-success to-success-600'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Soporte Disponible',
    description: 'Atención ininterrumpida todos los días del año',
    color: 'accent',
    gradient: 'from-accent to-accent-600'
  },
  {
    icon: Star,
    value: '4.9',
    label: 'Calificación Promedio',
    description: 'Satisfacción de clientes en plataformas de review',
    color: 'warning',
    gradient: 'from-warning to-warning-600'
  },
  {
    icon: CheckCircle,
    value: '99.9%',
    label: 'Uptime Garantizado',
    description: 'Disponibilidad del servicio con SLA garantizado',
    color: 'secondary',
    gradient: 'from-secondary to-secondary-600'
  },
  {
    icon: ArrowRight,
    value: '15+',
    label: 'Países Atendidos',
    description: 'Presencia global con soporte multiidioma',
    color: 'primary',
    gradient: 'from-primary to-secondary'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

export default function KPI() {
  return (
    <section className="kpi-section">
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
            <DollarSign className="w-4 h-4" />
            <span>Nuestros Números</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-2 mb-6"
          >
            <span className="text-gradient">
              Resultados que
            </span>
            <br />
            <span className="text-primary">
              hablan por sí solos
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-secondary max-w-3xl mx-auto"
          >
            Nuestros números reflejan el compromiso con la excelencia y la satisfacción 
            de nuestros clientes. Cada métrica cuenta una historia de éxito.
          </motion.p>
        </motion.div>

        {/* KPI Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 component-spacing"
        >
          {kpiData.map((kpi) => (
            <motion.div
              key={kpi.label}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-${kpi.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />
              
              {/* KPI Card */}
              <div className="card hover:border-primary/50 text-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-${kpi.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300 mx-auto`}
                >
                  <kpi.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="heading-4 mb-4 group-hover:text-primary transition-colors duration-300">
                  {kpi.label}
                </h3>
                
                <div className="text-3xl font-bold text-primary mb-2">
                  {kpi.value}
                </div>
                
                <p className="text-secondary leading-relaxed">
                  {kpi.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="card-glass">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  className="text-3xl font-playfair font-bold text-primary mb-2"
                >
                  5+
                </motion.div>
                <p className="text-secondary">Años de Experiencia</p>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                  className="text-3xl font-playfair font-bold text-secondary mb-2"
                >
                  50+
                </motion.div>
                <p className="text-secondary">Agentes Certificados</p>
              </div>
              
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
                  className="text-3xl font-playfair font-bold text-accent mb-2"
                >
                  24/7
                </motion.div>
                <p className="text-secondary">Monitoreo Continuo</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
