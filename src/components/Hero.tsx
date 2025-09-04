'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Play, Star, Users, TrendingUp, CheckCircle, Shield, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background-light to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-20 animate-gradient-xy" />
        
        {/* Floating Elements */}
        <div className="floating-element" />
        <div className="floating-element" />
        <div className="floating-element" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="badge mb-8"
            >
              <Star className="w-4 h-4" />
              <span>Líder en atención al cliente 24/7</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="heading-display mb-8"
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
              className="text-xl text-secondary mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Operación certificada 24/7 orientada a conversión. 
              Transformamos tu negocio con tecnología de vanguardia y atención personalizada.
            </motion.p>

            {/* Key Benefits with Validation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="mb-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-3 p-3 bg-surface/30 rounded-lg border border-border/30">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <div className="text-left">
                    <span className="text-secondary text-sm font-medium">+500 clientes satisfechos</span>
                    <div className="flex items-center gap-1 mt-1">
                      <Award className="w-3 h-3 text-success" />
                      <span className="text-xs text-success">Verificados</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-surface/30 rounded-lg border border-border/30">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <div className="text-left">
                    <span className="text-secondary text-sm font-medium">99.9% uptime garantizado</span>
                    <div className="flex items-center gap-1 mt-1">
                      <Shield className="w-3 h-3 text-secondary" />
                      <span className="text-secondary">SLA Certificado</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
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

          {/* Right Column - Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Main Visual Card */}
            <div className="relative w-full max-w-md">
              {/* Background Card */}
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl transform rotate-6 opacity-20 blur-xl" />
              
              {/* Main Card */}
              <motion.div
                whileHover={{ y: -10 }}
                className="relative bg-gradient-to-br from-surface to-surface-dark rounded-3xl p-8 border border-border/50 shadow-2xl"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                    <span className="text-primary font-semibold text-lg">Sistema Activo</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 bg-background-light rounded-full border border-border/30">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-secondary font-medium">1,247 usuarios</span>
                  </div>
                </div>

                {/* Metrics Grid with Context */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-background-light rounded-xl p-4 border border-border/30">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-success" />
                      <span className="text-xs text-secondary font-medium">Conversiones</span>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">+127%</div>
                    <div className="text-xs text-success font-medium mb-2">+12% vs mes anterior</div>
                    <div className="text-xs text-secondary">Últimos 30 días</div>
                  </div>
                  
                  <div className="bg-background-light rounded-xl p-4 border border-border/30">
                    <div className="flex items-center gap-2 mb-3">
                      <MessageCircle className="w-4 h-4 text-primary" />
                      <span className="text-xs text-secondary font-medium">Mensajes</span>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">2.4k</div>
                    <div className="text-xs text-primary font-medium mb-2">+8% vs mes anterior</div>
                    <div className="text-xs text-secondary">Este mes</div>
                  </div>
                </div>

                {/* Real-time Performance Chart */}
                <div className="bg-background-light rounded-xl p-4 border border-border/30 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-primary">Rendimiento en tiempo real</span>
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  </div>
                  <div className="h-20 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-3">
                    {/* Simple Chart Visualization */}
                    <div className="flex items-end justify-between h-full gap-1">
                      {[60, 75, 45, 90, 65, 80, 70].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="w-2 bg-gradient-to-t from-primary to-secondary rounded-t"
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs text-secondary">
                      <span>Hoy</span>
                      <span>Ahora</span>
                    </div>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background hover:shadow-glow transition-shadow"
                >
                  <Play className="w-6 h-6 text-white ml-1" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
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
    </section>
  );
}
