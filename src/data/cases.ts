export interface Case {
  id: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  company: string;
}

export const cases: Case[] = [
  {
    id: 'financial-bank',
    title: 'Banco Financiero',
    description: 'Incremento del 35% en conversión de ventas telefónicas.',
    badge: '+35% conversión',
    image: '/cases/case-1.jpg',
    company: 'Banco Financiero'
  },
  {
    id: 'tech-startup',
    title: 'Startup Tecnológica',
    description: 'Reducción del 40% en tiempo de respuesta al cliente.',
    badge: '-40% tiempo',
    image: '/cases/case-2.jpg',
    company: 'TechStart'
  },
  {
    id: 'ecommerce-retail',
    title: 'E-commerce Retail',
    description: 'Aumento del 50% en satisfacción del cliente.',
    badge: '+50% CSAT',
    image: '/cases/case-3.jpg',
    company: 'RetailPro'
  },
  {
    id: 'healthcare-provider',
    title: 'Proveedor de Salud',
    description: 'Optimización del 60% en agendamiento de citas.',
    badge: '+60% eficiencia',
    image: '/cases/case-4.jpg',
    company: 'HealthCare Plus'
  }
];
