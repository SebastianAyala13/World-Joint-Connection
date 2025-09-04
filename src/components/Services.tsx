'use client';

import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Users, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const services = [
  {
    icon: MessageCircle,
    title: 'Atención al Cliente 24/7',
    description: 'Soporte personalizado disponible las 24 horas del día, los 7 días de la semana para garantizar la satisfacción total de tus clientes.',
    features: ['Respuesta inmediata', 'Múltiples canales', 'Personalización total'],
    color: 'primary',
    gradient: 'from-primary to-primary-600'
  },
  {
    icon: Users,
    title: 'Gestión de Ventas',
    description: 'Optimiza tu proceso de ventas con herramientas inteligentes que aumentan las conversiones y mejoran la experiencia del cliente.',
    features: ['CRM integrado', 'Automatización', 'Análisis avanzado'],
    color: 'secondary',
    gradient: 'from-secondary to-secondary-600'
  },
  {
    icon: BarChart3,
    title: 'Analytics en Tiempo Real',
    description: 'Monitorea el rendimiento de tu negocio con dashboards interactivos y reportes detallados en tiempo real.',
    features: ['Métricas clave', 'Reportes automáticos', 'Insights predictivos'],
    color: 'accent',
    gradient: 'from-accent to-accent-600'
  },
  {
    icon: Shield,
    title: 'Seguridad Avanzada',
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
    icon: Globe,
    title: 'Presencia Global',
    description: 'Expande tu negocio a mercados internacionales con soporte multiidioma y adaptación cultural.',
    features: ['Multiidioma', 'Adaptación local', 'Soporte global'],
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

export default function Services() {
  return (
    <section id="servicios" className="section-spacing bg-gradient-to-b from-background to-background-light">
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
            <span>Nuestros Servicios</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-2 mb-6"
          >
            <span className="text-gradient">
              Soluciones Integrales
            </span>
            <br />
            <span className="text-primary">
              para tu Negocio
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-secondary max-w-3xl mx-auto"
          >
            Ofrecemos servicios especializados diseñados para impulsar el crecimiento de tu empresa 
            con tecnología de vanguardia y atención personalizada.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 component-spacing"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`} />
              
              {/* Service Card */}
              <div className="card hover:border-primary/50">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="heading-4 mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center gap-3 text-sm text-secondary"
                    >
                      <CheckCircle className={`w-4 h-4 text-${service.color} flex-shrink-0`} />
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
                  <ArrowRight className="w-5 h-5" />
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
              ¿Listo para transformar tu negocio?
            </h3>
            <p className="text-secondary mb-8 max-w-2xl mx-auto">
              Únete a cientos de empresas que ya confían en nuestros servicios 
              para impulsar su crecimiento y mejorar la experiencia de sus clientes.
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
                href="https://wa.me/573160268752"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-outline"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Consultar por WhatsApp</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
