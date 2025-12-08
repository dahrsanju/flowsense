'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  TrendingDown, TrendingUp, Clock, DollarSign,
  Package, Factory, Truck, FileText
} from 'lucide-react';

const stats = [
  {
    category: 'Inventory Optimization',
    icon: Package,
    color: 'from-amber-500 to-orange-500',
    metrics: [
      { label: 'Stockout Rate Reduction', value: 70, suffix: '%', before: '8-12%', after: '2-4%' },
      { label: 'Excess Inventory Reduction', value: 50, suffix: '%', before: '$500K-$2M', after: '$200K-$800K' },
      { label: 'Carrying Cost Reduction', value: 15, suffix: '%', before: '25-30%', after: '15-20%' },
      { label: 'Dead Stock Write-offs', value: 70, suffix: '%', before: '$100K-$500K', after: '$30K-$150K' },
    ],
  },
  {
    category: 'Production Efficiency',
    icon: Factory,
    color: 'from-violet-500 to-purple-500',
    metrics: [
      { label: 'Schedule Adherence', value: 25, suffix: '%', before: '70-80%', after: '90-95%' },
      { label: 'Setup Time Reduction', value: 40, suffix: '%', before: 'Baseline', after: '-20-40%' },
      { label: 'OEE Improvement', value: 20, suffix: '%', before: '60-70%', after: '75-85%' },
      { label: 'Late Deliveries Reduction', value: 60, suffix: '%', before: '15-25%', after: '5-10%' },
    ],
  },
  {
    category: 'Supply Chain Savings',
    icon: Truck,
    color: 'from-emerald-500 to-teal-500',
    metrics: [
      { label: 'Procurement Cost Reduction', value: 15, suffix: '%', before: 'Baseline', after: '-8-15%' },
      { label: 'RFQ Cycle Time', value: 70, suffix: '%', before: '5-10 days', after: '2-3 days' },
      { label: 'Invoice Processing', value: 80, suffix: '%', before: '5-10 days', after: '1-2 days' },
      { label: 'Supplier Issue Detection', value: 100, suffix: '%', before: 'Reactive', after: 'Predictive' },
    ],
  },
  {
    category: 'Document Processing',
    icon: FileText,
    color: 'from-blue-500 to-cyan-500',
    metrics: [
      { label: 'Data Entry Time', value: 90, suffix: '%', before: '40+ hrs/week', after: '4-8 hrs/week' },
      { label: 'Data Entry Errors', value: 90, suffix: '%', before: '2-5%', after: '<0.5%' },
      { label: 'Processing Backlog', value: 95, suffix: '%', before: 'Days-Weeks', after: 'Same Day' },
      { label: 'Staff Required', value: 75, suffix: '%', before: '2-4 clerks', after: '0.5 FTE' },
    ],
  },
];

const timeSavings = [
  { task: 'Create Purchase Order', manual: '15-20 min', flowsense: '2-3 min', saved: '85%' },
  { task: 'Process Supplier Invoice', manual: '10-15 min', flowsense: '1 min', saved: '93%' },
  { task: 'Generate Production Schedule', manual: '2-4 hours', flowsense: '5 min', saved: '95%' },
  { task: 'Create Picking Wave', manual: '30-60 min', flowsense: '2 min', saved: '95%' },
  { task: 'Bank Reconciliation', manual: '2-4 hours', flowsense: '15 min', saved: '90%' },
  { task: 'Month-End Inventory Count', manual: '2-3 days', flowsense: '4-6 hours', saved: '75%' },
];

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      const interval = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(interval);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-24 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Real Business Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Quantified Cost Savings</span>{' '}
            from Day One
          </h2>
          <p className="text-lg text-neutral-600">
            See the measurable ROI that FlowSense delivers across every area of your manufacturing operations.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stats.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-neutral-50 rounded-3xl p-8"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{category.category}</h3>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                {category.metrics.map((metric, metricIndex) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + metricIndex * 0.05 }}
                    className="bg-white rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-neutral-700 font-medium">{metric.label}</span>
                      <span className="text-2xl font-bold text-green-600">
                        <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-neutral-400">
                        <TrendingDown className="w-4 h-4" />
                        <span>Before: {metric.before}</span>
                      </div>
                      <div className="flex items-center gap-1 text-green-600">
                        <TrendingUp className="w-4 h-4" />
                        <span>After: {metric.after}</span>
                      </div>
                    </div>
                    {/* Progress Bar */}
                    <div className="mt-3 h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${metric.value}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Time Savings Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-900 via-accent-900 to-primary-800 rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Time Savings by Task</h3>
              <p className="text-white/60">Automated vs. Manual Comparison</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-white/60 text-sm border-b border-white/10">
                  <th className="pb-4 font-medium">Task</th>
                  <th className="pb-4 font-medium">Manual Time</th>
                  <th className="pb-4 font-medium">With FlowSense</th>
                  <th className="pb-4 font-medium text-right">Time Saved</th>
                </tr>
              </thead>
              <tbody>
                {timeSavings.map((item, index) => (
                  <motion.tr
                    key={item.task}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="py-4 text-white font-medium">{item.task}</td>
                    <td className="py-4 text-white/60">{item.manual}</td>
                    <td className="py-4 text-secondary-400">{item.flowsense}</td>
                    <td className="py-4 text-right">
                      <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 font-bold">
                        {item.saved}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
