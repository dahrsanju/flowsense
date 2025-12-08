'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ClipboardCheck, CheckCircle2, ArrowRight, Brain, AlertTriangle, Users, BarChart3 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    title: 'Inspection Workflows',
    description: 'Configurable inspection checklists with mobile data capture and automatic quality scoring.',
    icon: ClipboardCheck,
  },
  {
    title: 'NCR/CAPA Tracking',
    description: 'Complete non-conformance and corrective action tracking with root cause analysis.',
    icon: AlertTriangle,
  },
  {
    title: 'Defect Pattern Analysis',
    description: 'AI identifies recurring defect patterns and suggests preventive actions before issues escalate.',
    icon: Brain,
  },
  {
    title: 'Supplier Quality',
    description: 'Track supplier quality performance with automated scorecards and improvement workflows.',
    icon: Users,
  },
];

const benefits = [
  '50% reduction in defects',
  'Zero compliance violations',
  'Real-time quality dashboards',
  'Automated CAPA workflows',
  'Supplier quality tracking',
  'ISO compliance ready',
];

export default function QualityPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-red-50 via-white to-rose-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 text-sm font-medium mb-4">
                  <ClipboardCheck className="w-4 h-4" />
                  <span>Quality Module</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Quality{' '}
                  <span className="gradient-text">Management</span>
                </h1>
                <p className="text-xl text-neutral-600 mb-8">
                  Zero-defect manufacturing with AI anomaly detection and predictive quality alerts. Catch quality issues before they become costly problems.
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
                <div className="rounded-3xl overflow-hidden shadow-xl mb-8">
                  <Image
                    src="/quality-assurance.jpg"
                    alt="Quality Management System"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
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
                Everything you need for zero-defect manufacturing.
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
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center mb-4">
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
        <section className="py-24 bg-gradient-to-br from-red-600 to-rose-600">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Achieve Zero-Defect Manufacturing?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Start your 14-day free trial and see how AI-powered quality management can eliminate defects.
              </p>
              <Link
                href="/#get-started"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
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
