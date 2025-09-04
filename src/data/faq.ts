export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'implementation-time',
    question: '¿Cuánto tiempo toma implementar el servicio?',
    answer: 'La implementación completa toma entre 7-14 días, incluyendo configuración de sistemas, entrenamiento de agentes y pruebas de calidad.'
  },
  {
    id: 'crm-integration',
    question: '¿Se integra con mi CRM actual?',
    answer: 'Sí, nos integramos con los principales CRMs como Salesforce, HubSpot, Zoho y sistemas personalizados mediante APIs.'
  },
  {
    id: 'quality-metrics',
    question: '¿Qué métricas de calidad reportan?',
    answer: 'Reportamos AHT (tiempo promedio), FCR (resolución en primera llamada), CSAT (satisfacción) y NPS (recomendación) en tiempo real.'
  },
  {
    id: 'languages',
    question: '¿En qué idiomas ofrecen servicio?',
    answer: 'Ofrecemos servicio en español, inglés y portugués, con agentes nativos y bilingües certificados.'
  },
  {
    id: 'sla-guarantees',
    question: '¿Qué SLAs garantizan?',
    answer: 'Garantizamos respuesta en 30 segundos, resolución en primera llamada del 85% y disponibilidad del 99.9%.'
  },
  {
    id: 'data-security',
    question: '¿Cómo protegen la información de mis clientes?',
    answer: 'Cumplimos con estándares ISO 27001, encriptación end-to-end y protocolos PCI DSS para máxima seguridad de datos.'
  }
];
