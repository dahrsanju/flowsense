'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Package, CheckCircle2, ArrowRight, Brain, TrendingUp, AlertTriangle, BarChart3 } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    title: 'Real-time Tracking',
    description: 'Track inventory levels across all locations in real-time with automatic updates and alerts.',
    icon: Package,
  },
  {
    title: 'AI Demand Forecasting',
    description: 'ML-powered forecasting with 85-95% accuracy to optimize stock levels and prevent stockouts.',
    icon: Brain,
  },
  {
    title: 'Batch/Lot Management',
    description: 'Complete traceability with batch tracking, expiry management, and FIFO/FEFO enforcement.',
    icon: BarChart3,
  },
  {
    title: 'Dead Stock Alerts',
    description: 'AI identifies slow-moving inventory and suggests actions to reduce carrying costs.',
    icon: AlertTriangle,
  },
];

const benefits = [
  '40% reduction in stockouts',
  '30% lower carrying costs',
  '85-95% forecast accuracy',
  'Real-time stock visibility',
  'Automatic reorder alerts',
  'Multi-location support',
];

export default function InventoryPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                  <Package className="w-4 h-4" />
                  <span>Inventory Module</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Inventory{' '}
                  <span className="gradient-text">Management</span>
                </h1>
                <p className="text-xl text-neutral-600 mb-8">
                  Real-time stock tracking with AI demand forecasting and automatic reorder optimization. Never face stockouts or overstock situations again.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#get-started"
                    className="btn-gradient px-8 py-4 rounded-full font-semibold text-center"
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    href="/#demo"
                    className="px-8 py-4 border-2 border-neutral-200 rounded-full font-semibold text-center hover:border-primary-500 transition-colors"
                  >
                    Book a Demo
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mx-auto mb-8">
                  <Package className="w-10 h-10 text-white" />
                </div>
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-neutral-100">
                  <h3 className="font-bold text-lg mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-neutral-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful <span className="gradient-text">Features</span>
              </h2>
              <p className="text-lg text-neutral-600">
                Everything you need to optimize your inventory operations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-50 rounded-2xl p-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-amber-600 to-orange-600">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Optimize Your Inventory?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Start your 14-day free trial and see how AI-powered inventory management can reduce costs.
              </p>
              <Link
                href="/#get-started"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-amber-600 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
