'use client';

import { motion } from 'framer-motion';
import { Factory, ArrowRight, Calendar, Layers, BarChart3, Play, Gauge, Clock, Settings } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Schedule Optimization',
    description: 'AI-powered production scheduling that minimizes makespan, reduces changeovers, and maximizes throughput.',
    icon: Calendar,
  },
  {
    title: 'BOM Management',
    description: 'Multi-level BOM with versioning, substitutes, and automatic cost rollup for accurate planning.',
    icon: Layers,
  },
  {
    title: 'Work Center Control',
    description: 'Real-time monitoring of work centers with capacity planning and bottleneck identification.',
    icon: Settings,
  },
  {
    title: 'Real-time OEE',
    description: 'Track Overall Equipment Effectiveness in real-time with AI-powered improvement recommendations.',
    icon: Gauge,
  },
];

const stats = [
  { value: '25%', label: 'OEE Improvement' },
  { value: '30%', label: 'Less Changeover' },
  { value: '99%', label: 'On-time Delivery' },
];

export default function ProductionPage() {
  return (
    <main className="pt-20">
      {/* Hero Section - Centered with Stats Row */}
      <section className="py-12 md:py-16 lg:py-20 bg-white relative">
        <div className="container-custom">
          {/* Centered Content */}
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#708238]/20 text-[#708238] text-sm font-medium mb-4"
            >
              <Factory className="w-4 h-4" />
              Production Module
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#3D2314] mb-4"
            >
              Manufacturing
              <span className="block text-[#708238]">Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-neutral-600 mb-6 max-w-md mx-auto"
            >
              AI-powered production planning that maximizes throughput while minimizing waste and downtime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-3 mb-10"
            >
              <Link href="/#get-started">
                <button className="w-full sm:w-auto px-6 py-3 bg-[#708238] text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#5c6b2e] transition-colors">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/#demo">
                <button className="w-full sm:w-auto px-6 py-3 border border-neutral-300 text-[#3D2314] rounded-full font-semibold flex items-center justify-center gap-2 hover:border-[#708238] hover:text-[#708238] transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                  Watch Demo
                </button>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-neutral-100"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-2xl md:text-4xl font-bold text-[#708238] mb-0.5">{stat.value}</p>
                  <p className="text-neutral-500 text-xs md:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Cards Grid */}
      <section className="py-12 md:py-16 bg-[#fafaf8]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-[#708238] font-semibold text-sm uppercase tracking-wider">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D2314] mt-2">
              Everything you need
            </h2>
          </motion.div>

          {/* 2x2 Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-2xl p-5 md:p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#708238] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-[#3D2314] mb-1.5">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Strip */}
      <section className="py-6 bg-[#708238]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-white/90 text-sm font-medium">
            {['Real-time Tracking', 'Multi-level BOM', 'Automated MRP', 'Bottleneck Detection', 'Capacity Planning'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Simple Banner */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-[#3D2314] mb-3">
              Ready to boost production?
            </h2>
            <p className="text-neutral-600 text-base md:text-lg mb-6 max-w-md mx-auto">
              Start your 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/#get-started">
                <button className="w-full sm:w-auto px-6 py-3 bg-[#708238] text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#5c6b2e] transition-colors">
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/#demo">
                <button className="w-full sm:w-auto px-6 py-3 border border-neutral-300 text-[#3D2314] rounded-full font-semibold hover:border-[#708238] transition-colors">
                  Talk to Sales
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
