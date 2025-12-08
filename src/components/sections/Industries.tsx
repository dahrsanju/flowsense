'use client';

import { motion } from 'framer-motion';
import { Car, Pill, Cpu, Utensils, Cog, Shirt, CheckCircle2 } from 'lucide-react';

const industries = [
  {
    name: 'Automotive Manufacturing',
    icon: Car,
    color: 'from-blue-500 to-indigo-500',
    challenge: 'Complex BOM management, JIT delivery requirements, quality traceability',
    solution: 'Multi-level BOM with versioning, AI-optimized scheduling for JIT, full lot traceability',
    results: ['30% reduction in production delays', '100% traceability compliance', 'Zero JIT failures'],
  },
  {
    name: 'Pharmaceutical Manufacturing',
    icon: Pill,
    color: 'from-emerald-500 to-teal-500',
    challenge: 'GMP compliance, batch traceability, expiry management',
    solution: 'Batch/lot tracking, FIFO enforcement, automated expiry alerts, quality inspections',
    results: ['Zero compliance violations', '50% reduction in expired inventory', 'FDA-ready documentation'],
  },
  {
    name: 'Electronics Assembly',
    icon: Cpu,
    color: 'from-cyan-500 to-blue-500',
    challenge: 'Thousands of components, rapid demand changes, supplier management',
    solution: 'AI demand forecasting, automated reordering, supplier scorecards',
    results: ['40% reduction in stockouts', '15% procurement savings', 'Real-time visibility'],
  },
  {
    name: 'Food & Beverage',
    icon: Utensils,
    color: 'from-orange-500 to-amber-500',
    challenge: 'Perishable inventory, recall readiness, seasonal demand',
    solution: 'Expiry tracking, lot traceability, seasonal demand forecasting',
    results: ['60% reduction in waste', 'Instant recall capability', 'Optimized production planning'],
  },
  {
    name: 'Industrial Equipment',
    icon: Cog,
    color: 'from-slate-500 to-gray-600',
    challenge: 'Long lead times, complex projects, asset maintenance',
    solution: 'Project management integration, predictive maintenance, quote management',
    results: ['25% improvement in project profitability', '50% reduction in downtime', 'Better cash flow'],
  },
  {
    name: 'Textile & Apparel',
    icon: Shirt,
    color: 'from-pink-500 to-rose-500',
    challenge: 'Seasonal collections, multiple variants, global supply chain',
    solution: 'Variant management, seasonal forecasting, multi-currency procurement',
    results: ['30% reduction in dead stock', 'Faster collection launches', 'Improved margins'],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Industry Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Built for <span className="gradient-text">Your Industry</span>
          </h2>
          <p className="text-lg text-neutral-600">
            FlowSense is designed to address the unique challenges of different manufacturing sectors with industry-specific features and workflows.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-primary-500/5 border border-neutral-100 hover:shadow-xl transition-shadow group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <industry.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-neutral-900 mb-4">{industry.name}</h3>

              {/* Challenge */}
              <div className="mb-4">
                <p className="text-sm font-medium text-neutral-500 mb-1">Challenge</p>
                <p className="text-neutral-700">{industry.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <p className="text-sm font-medium text-neutral-500 mb-1">Solution</p>
                <p className="text-neutral-700">{industry.solution}</p>
              </div>

              {/* Results */}
              <div className="pt-4 border-t border-neutral-100">
                <p className="text-sm font-medium text-neutral-500 mb-3">Results</p>
                <ul className="space-y-2">
                  {industry.results.map((result) => (
                    <li key={result} className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-600 mb-6">
            Dont see your industry? FlowSense is highly configurable and can be adapted to any manufacturing process.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 btn-gradient px-8 py-4 rounded-full font-semibold text-lg"
          >
            <span>Talk to Our Experts</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
