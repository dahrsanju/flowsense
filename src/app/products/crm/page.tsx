'use client';

import { motion } from 'framer-motion';
import { Users, CheckCircle2, ArrowRight, Brain, TrendingUp, Target, Zap, Shield, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Customer 360° View',
    description: 'Complete visibility into customer interactions, orders, and communication history.',
    icon: Users,
  },
  {
    title: 'AI Lead Scoring',
    description: 'Automatically prioritize leads based on conversion probability.',
    icon: Brain,
  },
  {
    title: 'Churn Prediction',
    description: 'AI identifies at-risk customers before they leave.',
    icon: TrendingUp,
  },
  {
    title: 'Opportunity Pipeline',
    description: 'Visual pipeline with AI-powered deal forecasting.',
    icon: Target,
  },
];

const stats = [
  { value: '30%', label: 'Lead Conversion', icon: TrendingUp },
  { value: '50%', label: 'Less Churn', icon: Shield },
  { value: '25%', label: 'Faster Sales', icon: Zap },
  { value: '360°', label: 'Customer View', icon: BarChart3 },
];

export default function CRMPage() {
  return (
    <main className="pt-20">
      {/* Hero Section - Minimal */}
      <section className="py-16 bg-gradient-to-br from-[#708238]/5 via-white to-[#708238]/10">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#708238]/20 text-[#5c6b2e] text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-[#708238]"></span>
                <span>CRM Module</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-[#3D2314]">
                Customer Relationship{' '}
                <span className="bg-gradient-to-r from-[#708238] to-[#5c6b2e] bg-clip-text text-transparent">
                  Management
                </span>
              </h1>

              <p className="text-lg text-neutral-600 mb-6 max-w-md">
                Complete customer 360° view with AI-powered forecasting, lead scoring, and churn prediction.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/#get-started">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#708238] to-[#5c6b2e] text-white rounded-xl font-semibold flex items-center gap-2 shadow-lg shadow-[#708238]/20"
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </Link>
                <Link href="/#demo">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-white border border-neutral-200 rounded-xl font-semibold text-[#3D2314] hover:border-[#708238] transition-colors"
                  >
                    Book a Demo
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-5 border border-neutral-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#708238]/10 flex items-center justify-center mb-3">
                    <stat.icon className="w-5 h-5 text-[#708238]" />
                  </div>
                  <p className="text-3xl font-bold text-[#708238] mb-0.5">{stat.value}</p>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Modern Design */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#708238]" />
              <span className="text-sm font-semibold tracking-widest text-[#708238] uppercase">
                CRM Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-[#3D2314]">
              4 Powerful Tools to Maximize Customer Value
            </h2>
            <p className="text-lg text-neutral-600">
              Everything you need to manage customer relationships effectively.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group relative flex gap-5 p-6 rounded-2xl hover:bg-[#708238]/5 transition-all cursor-pointer"
              >
                {/* Left accent line */}
                <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-neutral-200 group-hover:bg-gradient-to-b group-hover:from-[#708238] group-hover:to-[#5c6b2e] transition-all" />

                {/* Number */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#708238]/10 flex items-center justify-center text-sm font-bold text-[#708238] group-hover:bg-[#708238] group-hover:text-white transition-all">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-[#3D2314] group-hover:text-[#5c6b2e] transition-colors">
                      {feature.title}
                    </h3>
                    <feature.icon className="w-5 h-5 text-[#708238] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[#708238] to-[#5c6b2e]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to transform your customer relationships?
            </h2>
            <p className="text-white/70 mb-6">
              Start your 14-day free trial. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/#get-started">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 py-3 bg-white text-[#5c6b2e] rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-neutral-100 transition-colors"
                >
                  Get Started Free
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/#demo">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-6 py-3 bg-white/10 text-white border border-white/20 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                >
                  Book a Demo
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
