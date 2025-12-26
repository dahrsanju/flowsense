'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, ArrowRight, Brain, AlertTriangle, Users, CheckCircle2, Shield, Target } from 'lucide-react';
import Link from 'next/link';

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
    description: 'AI identifies recurring defect patterns and suggests preventive actions.',
    icon: Brain,
  },
  {
    title: 'Supplier Quality',
    description: 'Track supplier quality performance with automated scorecards.',
    icon: Users,
  },
];

const qualityMetrics = [
  { value: '50%', label: 'Less Defects', icon: Target },
  { value: '0', label: 'Violations', icon: Shield },
  { value: 'ISO', label: 'Compliant', icon: CheckCircle2 },
];

export default function QualityPage() {
  return (
    <main className="pt-20">
      {/* Hero Section - Dashboard Style */}
      <section className="py-12 md:py-16 lg:py-20 bg-[#fafaf8] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#708238]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#708238]/10 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <span className="inline-flex items-center gap-2 text-[#708238] font-medium text-sm">
                <ClipboardCheck className="w-4 h-4" />
                Quality Module
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#3D2314] mb-4"
            >
              Zero-Defect
              <span className="block text-[#708238]">Manufacturing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-neutral-600 mb-6 max-w-lg"
            >
              AI-powered quality management that catches issues before they become problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <Link href="/#get-started">
                <button className="w-full sm:w-auto px-6 py-3 bg-[#708238] text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#5c6b2e] transition-colors">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/#demo">
                <button className="w-full sm:w-auto px-6 py-3 border border-neutral-300 text-[#3D2314] rounded-full font-semibold hover:border-[#708238] transition-colors">
                  Book a Demo
                </button>
              </Link>
            </motion.div>

            {/* Metrics Cards Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-3 md:gap-4"
            >
              {qualityMetrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white rounded-2xl p-4 md:p-5 border border-neutral-100 shadow-sm"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#708238]/10 flex items-center justify-center mb-2">
                    <metric.icon className="w-4 h-4 md:w-5 md:h-5 text-[#708238]" />
                  </div>
                  <p className="text-2xl md:text-3xl font-bold text-[#708238]">{metric.value}</p>
                  <p className="text-xs md:text-sm text-neutral-500">{metric.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Staggered Grid */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#708238]" />
              <span className="text-sm font-semibold tracking-widest text-[#708238] uppercase">
                Capabilities
              </span>
              <div className="w-8 h-0.5 bg-[#708238]" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#3D2314]">
              Quality Assurance Tools
            </h2>
          </motion.div>

          {/* Staggered 2x2 Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group ${index % 2 === 1 ? 'sm:translate-y-6' : ''}`}
              >
                <div className="bg-[#fafaf8] rounded-2xl p-5 md:p-6 hover:bg-[#708238]/5 border border-transparent hover:border-[#708238]/20 transition-all h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#708238] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-[#3D2314] mb-1 group-hover:text-[#708238] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm md:text-base text-neutral-600">
                        {feature.description}
                      </p>
                    </div>
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
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-white/90 text-sm font-medium">
            {['ISO Ready', 'CAPA Tracking', 'Real-time Alerts', 'Audit Trails', 'Mobile Capture'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white/60" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Simple */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#3D2314] mb-3">
              Ready for zero-defect manufacturing?
            </h2>
            <p className="text-neutral-600 mb-6 max-w-md mx-auto">
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
