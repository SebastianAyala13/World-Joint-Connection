'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  TrendingUp, 
  Users,
  Clock,
  DollarSign,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Seguridad Garantizada',
    description: 'Protege tu información y la de tus clientes con sistemas de seguridad de nivel empresarial y cumplimiento normativo.',
    features: ['Encriptación SSL', 'Cumplimiento GDPR', 'Backup automático'],
    color: 'success',
    gradient: 'from-success to-success-600'
  },
  {
    icon: Zap,
    title: 'Automatización Inteligente',
    description: 'Reduce tareas manuales y aumenta la eficiencia con flujos de trabajo automatizados y procesos inteligentes.',
    features: ['Workflows personalizados', 'Integración API', 'Escalabilidad'],
    color: 'warning',
    gradient: 'from-warning to-warning-600'
  },
  {
    icon: TrendingUp,
    title: 'Crecimiento Sostenible',
    description: 'Herramientas que impulsan el crecimiento de tu negocio de manera sostenible.',
    features: ['Análisis predictivo', 'Optimización continua', 'ROI medible'],
    color: 'primary',
    gradient: 'from-primary to-primary-600'
  },
  {
    icon: Users,
    title: 'Experiencia del Cliente',
    description: 'Atención personalizada que mejora la satisfacción y fidelización de clientes.',
    features: ['Atención 24/7', 'Personalización', 'Soporte multiidioma'],
    color: 'secondary',
    gradient: 'from-secondary to-secondary-600'
  },
  {
    icon: Clock,
    title: 'Tiempo Real',
    description: 'Monitoreo y análisis en tiempo real para decisiones informadas y rápidas.',
    features: ['Dashboards en vivo', 'Alertas automáticas', 'Reportes instantáneos'],
    color: 'accent',
    gradient: 'from-accent to-accent-600'
  },
  {
    icon: DollarSign,
    title: 'ROI Garantizado',
    description: 'Inversión que se paga sola con mejoras medibles en conversiones y ventas.',
    features: ['Métricas claras', 'Optimización continua', 'Resultados medibles'],
    color: 'success',
    gradient: 'from-success to-warning'
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

export default function Benefits() {
  return (
    <section className="benefits-section">
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
            <Star className="w-4 h-4" />
            <span>¿Por qué elegirnos?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-2 mb-6"
          >
            <span className="text-gradient">
              Beneficios que
            </span>
            <br />
            <span className="text-primary">
              transforman tu negocio
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-secondary max-w-3xl mx-auto text-center"
          >
            Descubre cómo nuestros servicios pueden revolucionar tu empresa 
            con beneficios tangibles y resultados medibles.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 component-spacing"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-${benefit.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />
              
              {/* Benefit Card */}
              <div className="card hover:border-primary/50 text-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300 mx-auto`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="heading-4 mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-secondary mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {benefit.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center gap-3 text-sm text-secondary justify-center"
                    >
                      <CheckCircle className={`w-4 h-4 text-${benefit.color} flex-shrink-0`} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#contacto"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-400 transition-colors duration-300"
                >
                  <span>Saber más</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="card-glass">
            <h3 className="heading-3 mb-4">
              ¿Listo para experimentar estos beneficios?
            </h3>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Únete a cientos de empresas que ya están transformando su negocio 
              con nuestras soluciones innovadoras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contacto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                <span>Comenzar ahora</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#servicios"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline"
              >
                <span>Ver servicios</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
