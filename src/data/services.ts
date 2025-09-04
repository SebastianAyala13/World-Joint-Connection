export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'customer-service',
    title: 'Servicio al cliente',
    description: 'Atención personalizada 24/7 para resolver consultas y problemas.',
    icon: 'headphones'
  },
  {
    id: 'tech-support',
    title: 'Soporte técnico',
    description: 'Asistencia técnica especializada para productos y servicios.',
    icon: 'settings'
  },
  {
    id: 'financial-telemarketing',
    title: 'Telemercadeo financiero',
    description: 'Gestión de cartera y servicios financieros especializados.',
    icon: 'trending-up'
  },
  {
    id: 'phone-sales',
    title: 'Ventas telefónicas',
    description: 'Estrategias de venta directa con alta tasa de conversión.',
    icon: 'phone'
  },
  {
    id: 'chat-support',
    title: 'Atención de chats',
    description: 'Soporte en tiempo real a través de múltiples canales.',
    icon: 'message-circle'
  },
  {
    id: 'satisfaction-surveys',
    title: 'Encuestas de satisfacción',
    description: 'Recolección y análisis de feedback de clientes.',
    icon: 'clipboard-list'
  },
  {
    id: 'portfolio-collection',
    title: 'Recaudo de cartera',
    description: 'Gestión eficiente de cobranzas y recuperación.',
    icon: 'dollar-sign'
  },
  {
    id: 'appointment-scheduling',
    title: 'Agendamiento de citas',
    description: 'Coordinación y programación de reuniones y eventos.',
    icon: 'calendar'
  },
  {
    id: 'database-digitization',
    title: 'Digitalización de bases',
    description: 'Procesamiento y actualización de información de contacto.',
    icon: 'database'
  },
  {
    id: 'retention-management',
    title: 'Gestión de retención',
    description: 'Estrategias para mantener y fidelizar clientes.',
    icon: 'users'
  },
  {
    id: 'delivery-orders',
    title: 'Pedidos para delivery',
    description: 'Gestión completa de órdenes y seguimiento de entregas.',
    icon: 'package'
  },
  {
    id: 'database-update',
    title: 'Actualización de bases',
    description: 'Mantenimiento y validación de datos de contacto.',
    icon: 'refresh-cw'
  }
];
