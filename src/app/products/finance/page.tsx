'use client';

import { motion } from 'framer-motion';
import { DollarSign, ArrowRight, Brain, TrendingUp, FileText, CreditCard, ChevronRight, Wallet } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Cash Flow Forecasting',
    description: 'AI-powered cash flow predictions with 80-90% accuracy to optimize working capital.',
    icon: TrendingUp,
    highlight: '90%',
  },
  {
    title: 'Payment Prediction',
    description: 'Predict customer payment behavior and prioritize collections effectively.',
    icon: CreditCard,
    highlight: 'AI',
  },
  {
    title: 'GST Compliance',
    description: 'Automated GST calculation, filing preparation, and reconciliation.',
    icon: FileText,
    highlight: '100%',
  },
  {
    title: 'Auto Reconciliation',
    description: 'AI-powered bank reconciliation that matches transactions automatically.',
    icon: Brain,
    highlight: 'Auto',
  },
];

const metrics = [
  { value: '20%', label: 'Better Cash Flow' },
  { value: '90%', label: 'Forecast Accuracy' },
  { value: '100%', label: 'GST Compliance' },
];

export default function FinancePage() {
  return (
    <main className="pt-20">
      {/* Hero Section - Split Layout with Large Numbers */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#708238]/20 text-[#708238] text-sm font-medium mb-4">
                <DollarSign className="w-4 h-4" />
                Finance Module
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D2314] mb-4 leading-tight">
                Finance &
                <span className="block text-[#708238]">Accounting</span>
              </h1>

              <p className="text-base md:text-lg text-neutral-600 mb-6 max-w-md">
                Complete financial control with AI cash flow forecasting and automated compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/#get-started">
                  <button className="w-full sm:w-auto px-6 py-3 bg-[#708238] text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#5c6b2e] transition-colors">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/#demo">
                  <button className="w-full sm:w-auto px-6 py-3 border border-neutral-300 text-[#3D2314] rounded-full font-semibold flex items-center justify-center gap-2 hover:border-[#708238] transition-colors">
                    <ChevronRight className="w-4 h-4" />
                    Watch Demo
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* Right - Large Metric Display */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#708238]/5 to-[#708238]/10 rounded-3xl p-6 md:p-8">
                <div className="grid grid-cols-3 gap-4">
                  {metrics.map((metric, i) => (
                    <motion.div
                      key={metric.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="text-center"
                    >
                      <p className="text-3xl md:text-5xl font-bold text-[#708238]">{metric.value}</p>
                      <p className="text-xs md:text-sm text-neutral-500 mt-1">{metric.label}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Icon */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#708238] rounded-2xl flex items-center justify-center shadow-lg">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Timeline Style */}
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
                Features
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#3D2314]">
              Financial Intelligence
            </h2>
          </motion.div>

          {/* Timeline Cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-stretch gap-4 md:gap-6">
                  {/* Timeline Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#708238] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    {index < features.length - 1 && (
                      <div className="w-0.5 flex-1 bg-[#708238]/20 my-2" />
                    )}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl p-5 md:p-6 border border-neutral-100 hover:border-[#708238]/30 hover:shadow-md transition-all mb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-[#3D2314] mb-1 group-hover:text-[#708238] transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm md:text-base text-neutral-600">
                          {feature.description}
                        </p>
                      </div>
                      <div className="px-3 py-1 bg-[#708238]/10 rounded-full text-[#708238] font-bold text-sm flex-shrink-0">
                        {feature.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimal Banner */}
      <section className="py-12 md:py-16 bg-[#708238]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to transform your finances?
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
