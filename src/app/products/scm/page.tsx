'use client';

import { motion } from 'framer-motion';
import { Truck, ArrowRight, Brain, Users, FileText, Clock, Package, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    step: '01',
    title: 'Supplier Management',
    description: 'Complete supplier lifecycle with performance scorecards and AI recommendations.',
    icon: Users,
  },
  {
    step: '02',
    title: 'Three-Way Matching',
    description: 'Automated PO, GRN, and invoice matching with AI exception handling.',
    icon: FileText,
  },
  {
    step: '03',
    title: 'Lead Time Prediction',
    description: 'AI predicts delivery times based on supplier history and conditions.',
    icon: Clock,
  },
  {
    step: '04',
    title: 'Auto RFQ Generation',
    description: 'Generate RFQs automatically when stock hits reorder points.',
    icon: Brain,
  },
];

const stats = [
  { value: '15%', label: 'Cost Savings' },
  { value: '20%', label: 'Faster Lead Times' },
  { value: '100%', label: 'Invoice Accuracy' },
];

export default function SCMPage() {
  return (
    <main className="pt-20">
      {/* Hero Section - Flow Style */}
      <section className="py-12 md:py-16 lg:py-20 bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left Content - 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#708238]/20 text-[#708238] text-sm font-medium mb-4">
                <Truck className="w-4 h-4" />
                Supply Chain Module
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D2314] mb-4 leading-tight">
                Supply Chain
                <span className="block text-[#708238]">Management</span>
              </h1>

              <p className="text-base md:text-lg text-neutral-600 mb-6 max-w-lg">
                End-to-end visibility with AI supplier recommendations and automated RFQ generation.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/#get-started">
                  <button className="w-full sm:w-auto px-6 py-3 bg-[#708238] text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#5c6b2e] transition-colors">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/#demo">
                  <button className="w-full sm:w-auto px-6 py-3 border border-neutral-300 text-[#3D2314] rounded-full font-semibold flex items-center justify-center gap-2 hover:border-[#708238] transition-colors">
                    Book a Demo
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Right - Stats Card - 2 cols */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-[#708238] rounded-3xl p-6 md:p-8 text-white relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="relative">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <Package className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-semibold mb-4">Key Results</h3>

                  <div className="space-y-4">
                    {stats.map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center justify-between border-b border-white/20 pb-3 last:border-0"
                      >
                        <span className="text-white/80 text-sm">{stat.label}</span>
                        <span className="text-2xl font-bold">{stat.value}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Process Flow */}
      <section className="py-12 md:py-16 bg-[#fafaf8]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#708238]" />
              <span className="text-sm font-semibold tracking-widest text-[#708238] uppercase">
                Process
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#3D2314]">
              Streamlined Supply Chain
            </h2>
          </motion.div>

          {/* Process Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-5 md:p-6 border border-neutral-100 hover:border-[#708238]/30 hover:shadow-lg transition-all h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 left-5 px-3 py-1 bg-[#708238] text-white text-xs font-bold rounded-full">
                    {feature.step}
                  </div>

                  <div className="pt-2">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-[#708238]/10 flex items-center justify-center mb-3 group-hover:bg-[#708238] transition-colors">
                      <feature.icon className="w-5 h-5 text-[#708238] group-hover:text-white transition-colors" />
                    </div>

                    <h3 className="text-lg font-bold text-[#3D2314] mb-2 group-hover:text-[#708238] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Connector Arrow (hidden on last and mobile) */}
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-4 h-4 text-[#708238]/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Gradient Card */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#708238] to-[#5c6b2e] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />

            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to optimize your supply chain?
              </h2>
              <p className="text-white/70 mb-6 max-w-md mx-auto">
                Start your 14-day free trial. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link href="/#get-started">
                  <button className="w-full sm:w-auto px-6 py-3 bg-white text-[#5c6b2e] rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-neutral-100 transition-colors">
                    Get Started Free
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/#demo">
                  <button className="w-full sm:w-auto px-6 py-3 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
                    Talk to Sales
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
