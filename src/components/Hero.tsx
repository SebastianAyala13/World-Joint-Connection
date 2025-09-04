'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Play, Star, Users, TrendingUp, Shield, Award, Activity } from 'lucide-react';
import { useState } from 'react';
import VideoModal from './VideoModal';
import AnimatedNumber from './AnimatedNumber';

export default function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background-light to-background">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/hero/hero-bg.webm" type="video/webm" />
          <source src="/hero/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay para mejorar legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-10 animate-gradient-xy" />
        
        {/* Floating Elements */}
        <div className="floating-element" />
        <div className="floating-element" />
        <div className="floating-element" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10">
        {/* Hero Header - Perfectamente Centrado para PC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 w-full max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="badge mb-8"
          >
            <Star className="w-4 h-4" />
            <span>Líder en atención al cliente 24/7</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="heading-display mb-8 max-w-4xl mx-auto"
          >
            <span className="text-gradient">
              Ventas, atención
            </span>
            <br />
            <span className="text-primary">
              y datos en tiempo real
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Operación certificada 24/7 orientada a conversión. 
            Transformamos tu negocio con tecnología de vanguardia y atención personalizada.
          </motion.p>

          {/* Key Benefits - Centrados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12"
          >
            <div className="flex items-center gap-3 p-4 bg-surface/30 rounded-lg border border-border/30">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
              <div className="text-center sm:text-left">
                <span className="text-secondary text-sm font-medium">+500 clientes satisfechos</span>
                <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
                  <Award className="w-3 h-3 text-success" />
                  <span className="text-xs text-success">Verificados</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-surface/30 rounded-lg border border-border/30">
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
              <div className="text-center sm:text-left">
                <span className="text-secondary text-sm font-medium">99.9% uptime garantizado</span>
                <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
                  <Shield className="w-3 h-3 text-secondary" />
                  <span className="text-secondary">SLA Certificado</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons - Centrados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary group"
            >
              <span>Explorar servicios</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://wa.me/573160268752"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline group"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Cotizar por WhatsApp</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Sistema Activo - Perfectamente Centrado para PC */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="w-full max-w-5xl mx-auto"
        >
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-surface to-surface-dark rounded-3xl p-8 border border-border/50 shadow-2xl text-center">
            {/* Card Header - Perfectamente Centrado */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                <span className="text-primary font-semibold text-xl">Sistema Activo</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-background-light rounded-full border border-border/30">
                <Users className="w-4 h-4 text-secondary" />
                <span className="text-sm text-secondary font-medium">
                  <AnimatedNumber value={1247} /> usuarios
                </span>
              </div>
            </div>

            {/* Metrics Grid - Perfectamente Centrado para PC */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 max-w-2xl mx-auto">
              <div className="bg-background-light rounded-xl p-4 border border-border/30 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span className="text-xs text-secondary font-medium">Conversiones</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  <AnimatedNumber value={127} prefix="+" suffix="%" />
                </div>
                <div className="text-xs text-success font-medium mb-2">+12% vs mes anterior</div>
                <div className="text-xs text-secondary">Últimos 30 días</div>
              </div>
              
              <div className="bg-background-light rounded-xl p-4 border border-border/30 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-xs text-secondary font-medium">Mensajes</span>
                </div>
                <div className="text-2xl font-bold text-primary mb-2">
                  <AnimatedNumber value={2400} suffix="k" />
                </div>
                <div className="text-xs text-primary font-medium mb-2">+8% vs mes anterior</div>
                <div className="text-xs text-secondary">Este mes</div>
              </div>
            </div>

            {/* Real-time Performance Chart - Gráficas Mejoradas y Centradas */}
            <div className="bg-background-light rounded-xl p-6 border border-border/30 mb-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Activity className="w-5 h-5 text-primary" />
                  <span className="text-lg font-semibold text-primary">Rendimiento en tiempo real</span>
                </div>
                <div className="text-sm text-secondary">Monitoreo activo 24/7</div>
              </div>
              
              {/* Gráfico Principal - Línea de Tiempo */}
              <div className="h-32 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-xl p-4 mb-6 border border-border/20">
                {/* Línea de Gráfico Animada */}
                <div className="relative h-full">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                      d="M 0,80 Q 10,60 20,70 T 40,40 T 60,20 T 80,30 T 100,10"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--color-primary))" />
                        <stop offset="50%" stopColor="hsl(var(--color-secondary))" />
                        <stop offset="100%" stopColor="hsl(var(--color-primary))" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Puntos de Datos */}
                  <div className="absolute inset-0 flex items-end justify-between">
                    {[80, 60, 70, 40, 20, 30, 10].map((value, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="w-3 h-3 bg-primary rounded-full border-2 border-background shadow-lg"
                        style={{ bottom: `${value}%` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Indicadores de Tiempo */}
                <div className="flex items-center justify-between text-xs text-secondary mt-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                    <span>Hoy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <span>Ahora</span>
                  </div>
                </div>
              </div>
              
              {/* Gráficos de Barras - Métricas Detalladas */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Gráfico de Barras - Conversiones */}
                <div className="bg-background/50 rounded-lg p-4 border border-border/20">
                  <div className="text-center mb-3">
                    <div className="text-xs text-secondary mb-1">Conversiones</div>
                    <div className="text-lg font-bold text-success">+127%</div>
                  </div>
                  <div className="h-16 flex items-end justify-center gap-1">
                    {[60, 75, 85, 90, 95, 100, 127].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="w-2 bg-gradient-to-t from-success to-success/60 rounded-t"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Gráfico de Barras - Mensajes */}
                <div className="bg-background/50 rounded-lg p-4 border border-border/20">
                  <div className="text-center mb-3">
                    <div className="text-xs text-secondary mb-1">Mensajes</div>
                    <div className="text-lg font-bold text-primary">2400k</div>
                  </div>
                  <div className="h-16 flex items-end justify-center gap-1">
                    {[70, 80, 85, 90, 88, 92, 95].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="w-2 bg-gradient-to-t from-primary to-primary/60 rounded-t"
                      />
                    ))}
                  </div>
                </div>
                
                {/* Gráfico de Barras - Uptime */}
                <div className="bg-background/50 rounded-lg p-4 border border-border/20">
                  <div className="text-center mb-3">
                    <div className="text-xs text-secondary mb-1">Uptime</div>
                    <div className="text-lg font-bold text-secondary">99.9%</div>
                  </div>
                  <div className="h-16 flex items-end justify-center gap-1">
                    {[95, 97, 98, 99, 99.5, 99.8, 99.9].map((height, index) => (
                      <motion.div
                        key={index}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="w-2 bg-gradient-to-t from-secondary to-secondary/60 rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Estadísticas en Tiempo Real - Centradas */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gradient-to-r from-success/10 to-success/5 rounded-lg p-4 border border-success/20">
                  <div className="text-xs text-secondary mb-2">Latencia</div>
                  <div className="text-xl font-bold text-success">12ms</div>
                  <div className="text-xs text-success/80">Excelente</div>
                </div>
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
                  <div className="text-xs text-secondary mb-2">Uptime</div>
                  <div className="text-xl font-bold text-primary">99.9%</div>
                  <div className="text-xs text-primary/80">Garantizado</div>
                </div>
              </div>
            </div>

            {/* Play Button - Centrado */}
            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsVideoModalOpen(true)}
                className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background hover:shadow-glow transition-shadow cursor-pointer mx-auto"
              >
                <Play className="w-6 h-6 text-white ml-1" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3 text-secondary"
        >
          <span className="text-sm font-medium">Desliza para explorar</span>
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </section>
  );
}
