'use client';

import { motion } from 'framer-motion';
import { Package, ArrowRight, Brain, AlertTriangle, BarChart3, ChevronRight, Layers, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Real-time Tracking',
    description: 'Track inventory levels across all locations in real-time with automatic updates and alerts.',
    icon: RefreshCw,
    stat: '100%',
    statLabel: 'Visibility',
  },
  {
    title: 'AI Demand Forecasting',
    description: 'ML-powered forecasting with 85-95% accuracy to optimize stock levels and prevent stockouts.',
    icon: Brain,
    stat: '95%',
    statLabel: 'Accuracy',
  },
  {
    title: 'Batch/Lot Management',
    description: 'Complete traceability with batch tracking, expiry management, and FIFO/FEFO enforcement.',
    icon: Layers,
    stat: '100%',
    statLabel: 'Traceability',
  },
  {
    title: 'Dead Stock Alerts',
    description: 'AI identifies slow-moving inventory and suggests actions to reduce carrying costs.',
    icon: AlertTriangle,
    stat: '30%',
    statLabel: 'Cost Saved',
  },
];

export default function InventoryPage() {
  return (
    <main className="pt-20">
      {/* Hero Section - Large Typography */}
      <section className="py-20 md:py-28 bg-[#fafaf8] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#708238]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#708238]/5 rounded-full blur-3xl" />

        <div className="container-custom relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 text-[#708238] font-medium">
                <Package className="w-5 h-5" />
                Inventory Module
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-[#3D2314] mb-6 leading-[0.9]"
            >
              Smart
              <br />
              <span className="text-[#708238]">Inventory</span>
              <br />
              Control
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-neutral-600 max-w-md mb-8"
            >
              AI-powered stock management that predicts demand and prevents costly stockouts.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/#get-started">
                <button className="group px-6 py-3.5 bg-[#708238] text-white rounded-full font-semibold flex items-center gap-2 hover:bg-[#5c6b2e] transition-colors">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/#demo">
                <button className="px-6 py-3.5 text-[#3D2314] font-semibold flex items-center gap-2 hover:text-[#708238] transition-colors">
                  Watch Demo
                  <ChevronRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2"
          >
            <div className="space-y-4">
              {[
                { value: '40%', label: 'Less Stockouts' },
                { value: '30%', label: 'Cost Reduction' },
                { value: '95%', label: 'Forecast Accuracy' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="text-right"
                >
                  <p className="text-4xl font-bold text-[#708238]">{stat.value}</p>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Horizontal Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          >
            <div>
              <span className="text-[#708238] font-semibold text-sm uppercase tracking-wider mb-2 block">
                Features
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#3D2314]">
                Why choose our
                <br />
                <span className="text-[#708238]">inventory system?</span>
              </h2>
            </div>
            <p className="text-neutral-600 max-w-sm">
              Four powerful modules working together to optimize your stock management.
            </p>
          </motion.div>

          {/* Horizontal Feature Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8 rounded-2xl border border-neutral-100 hover:border-[#708238]/30 hover:bg-[#708238]/[0.02] transition-all">
                  {/* Number & Icon */}
                  <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                    <span className="text-5xl font-bold text-neutral-200 group-hover:text-[#708238]/20 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#708238]/10 flex items-center justify-center group-hover:bg-[#708238] transition-colors">
                      <feature.icon className="w-6 h-6 text-[#708238] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#3D2314] mb-2 group-hover:text-[#708238] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600">{feature.description}</p>
                  </div>

                  {/* Stat */}
                  <div className="md:text-right md:w-32 flex-shrink-0">
                    <p className="text-3xl font-bold text-[#708238]">{feature.stat}</p>
                    <p className="text-sm text-neutral-500">{feature.statLabel}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Floating Card */}
      <section className="py-20 bg-[#fafaf8]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#708238] rounded-3xl p-10 md:p-14 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Ready to optimize your inventory?
                </h2>
                <p className="text-white/70 max-w-md">
                  Join 500+ manufacturers using AI-powered inventory management.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/#get-started">
                  <button className="w-full sm:w-auto px-6 py-3.5 bg-white text-[#5c6b2e] rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-neutral-100 transition-colors">
                    Get Started Free
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/#demo">
                  <button className="w-full sm:w-auto px-6 py-3.5 text-white border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-colors">
                    Book a Demo
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
