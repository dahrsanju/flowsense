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
    <section className="relative overflow-hidden bg-white">
      {/* Animated Orbs - Subtle */}
      <div className="orb w-72 h-72 bg-orange-300/40 top-20 -left-36" />
      <div className="orb w-64 h-64 bg-orange-200/50 top-32 right-0" style={{ animationDelay: '5s' }} />
      <div className="orb w-48 h-48 bg-amber-200/40 bottom-40 left-1/4" style={{ animationDelay: '10s' }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center pt-28 pb-8 lg:pt-32 lg:pb-12">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 text-[#3D2314]">
              Transform Your{' '}
              <span className="text-[#708238]">Manufacturing</span>{' '}
              with AI
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base lg:text-lg text-[#44403c] mb-6 max-w-md leading-relaxed mx-auto lg:mx-0">
              Streamline operations, reduce costs by 50%, and make smarter decisions
              with FlowSense — the AI-powered ERP built for modern manufacturers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center lg:justify-start">
              <Link
                href="#get-started"
                className="px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-xs md:text-sm flex items-center justify-center gap-2 group bg-[#708238] text-white hover:bg-[#5c6b2e] transition-all shadow-md shadow-[#708238]/20"
              >
                Start Free Trial
                <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#demo"
                className="px-5 py-2.5 md:px-6 md:py-3 rounded-full font-semibold text-xs md:text-sm flex items-center justify-center gap-2 bg-white border border-[#708238]/30 hover:border-[#708238] hover:bg-[#708238]/10 transition-all text-[#3D2314]"
              >
                <Play className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-5 border-t border-neutral-200">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-1 mb-0.5">
                    <stat.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#708238]" />
                    <span className="text-base md:text-lg lg:text-xl font-bold text-[#3D2314]">{stat.value}</span>
                  </div>
                  <span className="text-[10px] md:text-xs text-[#78716c]">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image (hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Glow Effect Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#708238]/20 to-[#708238]/10 rounded-2xl blur-2xl scale-95" />

              {/* Main Image */}
              <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-lg lg:shadow-xl border border-neutral-200 bg-white">
                <Image
                  src="/erp-isometric-banner.jpg"
                  alt="FlowSense ERP Platform"
                  width={500}
                  height={350}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              {/* Floating Card - Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3 bg-white rounded-lg lg:rounded-xl shadow-md lg:shadow-lg px-2 py-1.5 lg:px-3 lg:py-2 border border-neutral-200 flex items-center gap-1.5 lg:gap-2"
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-md lg:rounded-lg bg-[#708238]/10 flex items-center justify-center">
                  <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-[#708238]" />
                </div>
                <div className="hidden lg:block">
                  <p className="text-xs font-semibold text-[#3D2314]">+25% Efficiency</p>
                  <p className="text-[10px] text-[#78716c]">AI Powered</p>
                </div>
              </motion.div>

              {/* Floating Card - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-2 -left-2 lg:-bottom-3 lg:-left-3 bg-white rounded-lg lg:rounded-xl shadow-md lg:shadow-lg px-2 py-1.5 lg:px-3 lg:py-2 border border-neutral-200 flex items-center gap-1.5 lg:gap-2"
              >
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-md lg:rounded-lg bg-[#708238]/10 flex items-center justify-center">
                  <Bot className="w-3 h-3 lg:w-4 lg:h-4 text-[#708238]" />
                </div>
                <div className="hidden lg:block">
                  <p className="text-xs font-semibold text-[#3D2314]">Smart Forecasting</p>
                  <p className="text-[10px] text-[#78716c]">Real-time AI</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
