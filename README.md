# World Joint Connection - Landing Page Premium

Landing page premium para World Joint Connection, especializada en servicios de Contact Center y BPO con enfoque en ventas telefónicas.

## 🚀 Características

- **Diseño Premium**: Modo oscuro con glassmorphism y efectos glow
- **Video de Fondo**: Hero section con video animado
- **Animaciones Suaves**: Framer Motion para transiciones fluidas
- **Responsive**: Optimizado para todos los dispositivos
- **SEO Optimizado**: Metadatos, sitemap y robots.txt
- **Accesibilidad**: Cumple estándares WCAG
- **Performance**: Optimizado para Lighthouse

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animaciones**: Framer Motion
- **Formularios**: React Hook Form + Zod
- **UI Components**: Radix UI (Accordion)
- **Iconos**: Lucide React

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal con SEO
│   ├── page.tsx            # Home (one-page)
│   ├── contacto/page.tsx   # Formulario de contacto
│   ├── api/contact/route.ts # API para formulario
│   ├── sitemap.ts          # Sitemap para SEO
│   ├── robots.ts           # Robots.txt
│   └── globals.css         # Estilos globales
├── components/             # Componentes React
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── KPI.tsx
│   ├── Benefits.tsx
│   ├── Services.tsx
│   ├── ProcessTimeline.tsx
│   ├── CasesGrid.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   └── WhatsAppFloat.tsx
└── data/                   # Datos estáticos
    ├── services.ts
    ├── cases.ts
    └── faq.ts
```

## 🎨 Identidad Visual

### Paleta de Colores
- **Primary**: `#22d3ee` (Cian)
- **Secondary**: `#d946ef` (Magenta)
- **Accent**: `#f1c40f` (Dorado)
- **Background**: `#0b1220` → `#060911` (Gradiente)

### Tipografías
- **UI**: Manrope (400/600/800)
- **Headings**: Outfit (600/800)

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone <repository-url>
cd world-joint-connection
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Ejecutar en desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:3000
```

### Scripts Disponibles

```bash
npm run dev          # Desarrollo
npm run build        # Build para producción
npm run start        # Servidor de producción
npm run lint         # Linting con ESLint
```

## 📝 Personalización

### Cambiar Datos de Contacto

Edita los siguientes archivos:

1. **Teléfono WhatsApp**: Busca `573160268752` en todo el proyecto
2. **Email**: Busca `info@worldjointconnection.com`
3. **Ubicación**: Busca `Bogotá, Colombia`

### Imágenes Configuradas

El proyecto ya tiene configuradas las siguientes imágenes:

#### Hero Video
- ✅ `public/hero/hero-bg.webm`
- ✅ `public/hero/hero-bg.mp4`

#### Casos de Éxito
- ✅ `public/cases/case-1.jpg` - Banco Financiero
- ✅ `public/cases/case-2.jpg` - Startup Tecnológica
- ✅ `public/cases/case-3.jpg` - E-commerce Retail
- ✅ `public/cases/case-4.jpg` - Proveedor de Salud

#### Testimonios
- ✅ `public/testimonios/anthony.jpg` - Anthony Smith (CEO TechStart)
- ✅ `public/testimonios/brian.jpg` - Brian Johnson (Directora RetailPro)
- ✅ `public/testimonios/carlos.jpg` - Carlos García (Gerente HealthCare Plus)

### Editar Contenido

Los datos están organizados en `/src/data/`:

- **`services.ts`**: Servicios ofrecidos
- **`cases.ts`**: Casos de éxito
- **`faq.ts`**: Preguntas frecuentes

### Configurar Email

Para conectar el formulario de contacto:

1. **Instalar Resend** (recomendado):
```bash
npm install resend
```

2. **Configurar variables de entorno**:
```env
RESEND_API_KEY=your_resend_api_key
```

3. **Descomentar el código** en `/src/app/api/contact/route.ts`

## 🌐 Despliegue

### Vercel (Recomendado)

1. **Conectar repositorio** a Vercel
2. **Configurar variables de entorno** si usas email
3. **Deploy automático** en cada push

### Variables de Entorno

```env
# Email (opcional)
RESEND_API_KEY=your_resend_api_key

# SEO
NEXT_PUBLIC_SITE_URL=https://worldjointconnection.com
```

## 📊 Performance

### Lighthouse Scores Objetivo
- **Performance**: ≥ 85
- **Accessibility**: ≥ 95  
- **SEO**: ≥ 100
- **Best Practices**: ≥ 95

### Optimizaciones Implementadas
- Next.js Image optimization
- Font optimization con `next/font`
- Lazy loading de componentes
- Animaciones GPU-friendly
- Bundle size optimizado

## 🔧 Configuración Adicional

### ESLint y Prettier

El proyecto incluye configuración para:
- ESLint con reglas Next.js
- Prettier para formateo
- TypeScript strict mode

### SEO y Metadatos

- OpenGraph tags
- Twitter Cards
- JSON-LD structured data
- Sitemap automático
- Robots.txt

## 📞 Soporte

Para soporte técnico o consultas sobre el desarrollo:
- **Desarrollador**: Juseb Software
- **Website**: https://ju-seb-software-xqw5.vercel.app/

## 📄 Licencia

© 2025 World Joint Connection. Todos los derechos reservados.

---

**Desarrollado con ❤️ por Juseb Software**
