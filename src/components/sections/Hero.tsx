'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Shield, TrendingUp, Bot } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const stats = [
  { value: '30+', label: 'AI Features', icon: Bot },
  { value: '90%', label: 'Time Saved', icon: Zap },
  { value: '50%', label: 'Cost Reduction', icon: TrendingUp },
  { value: '100%', label: 'Data Security', icon: Shield },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden mesh-background">
      {/* Animated Orbs */}
      <div className="orb w-96 h-96 bg-primary-400 top-20 -left-48" />
      <div className="orb w-80 h-80 bg-accent-400 top-40 right-0" style={{ animationDelay: '5s' }} />
      <div className="orb w-64 h-64 bg-secondary-400 bottom-20 left-1/3" style={{ animationDelay: '10s' }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4" />
              <span>AI-Powered Manufacturing ERP</span>
            </motion.div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Transform Your{' '}
              <span className="gradient-text">Manufacturing</span>{' '}
              Operations with AI
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl mx-auto lg:mx-0">
              FlowSense is a next-generation ERP solution that combines cutting-edge AI with comprehensive operational management. Reduce costs, eliminate inefficiencies, and make smarter decisions automatically.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="#get-started"
                className="btn-gradient px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#demo"
                className="px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 border-2 border-neutral-200 hover:border-primary-300 hover:bg-primary-50 transition-all text-neutral-700"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-primary-500" />
                    <span className="text-2xl md:text-3xl font-bold text-neutral-900">{stat.value}</span>
                  </div>
                  <span className="text-sm text-neutral-500">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - ERP Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-primary-500/20">
                <Image
                  src="/erp-isometric-banner.jpg"
                  alt="FlowSense ERP Platform"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 animate-float-delayed"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">+25% Efficiency</p>
                    <p className="text-xs text-neutral-500">AI Optimization</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">AI Prediction</p>
                    <p className="text-xs text-neutral-500">Demand Forecast Ready</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
