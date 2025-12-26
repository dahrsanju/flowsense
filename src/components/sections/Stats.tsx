'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import {
  Clock, Package, Factory, Truck, FileText, TrendingUp
} from 'lucide-react';

const stats = [
  {
    category: 'Inventory Optimization',
    icon: Package,
    metrics: [
      { label: 'Stockout Reduction', value: 70, suffix: '%' },
      { label: 'Excess Inventory', value: 50, suffix: '%' },
      { label: 'Carrying Costs', value: 15, suffix: '%' },
      { label: 'Dead Stock', value: 70, suffix: '%' },
    ],
  },
  {
    category: 'Production Efficiency',
    icon: Factory,
    metrics: [
      { label: 'Schedule Adherence', value: 25, suffix: '%' },
      { label: 'Setup Time', value: 40, suffix: '%' },
      { label: 'OEE Improvement', value: 20, suffix: '%' },
      { label: 'Late Deliveries', value: 60, suffix: '%' },
    ],
  },
  {
    category: 'Supply Chain Savings',
    icon: Truck,
    metrics: [
      { label: 'Procurement Cost', value: 15, suffix: '%' },
      { label: 'RFQ Cycle Time', value: 70, suffix: '%' },
      { label: 'Invoice Processing', value: 80, suffix: '%' },
      { label: 'Issue Detection', value: 100, suffix: '%' },
    ],
  },
  {
    category: 'Document Processing',
    icon: FileText,
    metrics: [
      { label: 'Data Entry Time', value: 90, suffix: '%' },
      { label: 'Entry Errors', value: 90, suffix: '%' },
      { label: 'Backlog Cleared', value: 95, suffix: '%' },
      { label: 'Staff Needed', value: 75, suffix: '%' },
    ],
  },
];

const timeSavings = [
  { task: 'Create Purchase Order', manual: '15-20 min', flowsense: '2-3 min', saved: 85 },
  { task: 'Process Supplier Invoice', manual: '10-15 min', flowsense: '1 min', saved: 93 },
  { task: 'Generate Production Schedule', manual: '2-4 hours', flowsense: '5 min', saved: 95 },
  { task: 'Create Picking Wave', manual: '30-60 min', flowsense: '2 min', saved: 95 },
  { task: 'Bank Reconciliation', manual: '2-4 hours', flowsense: '15 min', saved: 90 },
  { task: 'Month-End Inventory', manual: '2-3 days', flowsense: '4-6 hours', saved: 75 },
];

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 1500;
      const steps = 50;
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

// Circular Progress Ring Component
function ProgressRing({ value, size = 60, strokeWidth = 5 }: { value: number; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setProgress(value), 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, value]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-stone-200"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#708238" />
            <stop offset="100%" stopColor="#5c6b2e" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-[#3D2314]">{value}%</span>
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-12 bg-gradient-to-b from-white to-[#f8faf5] overflow-hidden">
      <div className="container-custom">
        {/* Header - Left aligned like other sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-[#708238] to-[#5c6b2e] rounded-full" />
            <span className="text-[#708238] text-sm font-semibold uppercase tracking-wider">Real Business Impact</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3D2314] mb-3 max-w-2xl">
            Quantified Cost Savings from Day One
          </h2>
          <p className="text-sm md:text-base text-[#44403c] max-w-xl">
            See the measurable ROI that FlowSense delivers across every area of your manufacturing operations.
          </p>
        </motion.div>

        {/* Stats - Mobile/Tablet: Horizontal scroll cards */}
        <div className="lg:hidden mb-6">
          <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide">
            {stats.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="flex-shrink-0 w-[280px] snap-start bg-white rounded-xl p-4 border border-stone-200/80 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#708238] flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-[#3D2314]">{category.category}</h3>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {category.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-lg font-bold text-[#708238]">
                        <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                      </div>
                      <div className="text-[8px] text-[#44403c] leading-tight">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats - Desktop: Full Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4 mb-8">
          {stats.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="group relative bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#708238]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#708238] to-[#5c6b2e] flex items-center justify-center mb-4 shadow-md">
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-[#3D2314] mb-4">{category.category}</h3>
              <div className="grid grid-cols-2 gap-3">
                {category.metrics.map((metric, metricIndex) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + metricIndex * 0.05 }}
                    className="text-center p-2 rounded-xl bg-[#708238]/5 hover:bg-[#708238]/10 transition-colors"
                  >
                    <div className="text-xl font-bold text-[#708238]">
                      <AnimatedNumber value={metric.value} suffix={metric.suffix} />
                    </div>
                    <div className="text-[10px] text-[#44403c] leading-tight mt-0.5">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Time Savings - Mobile/Tablet: Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:hidden bg-gradient-to-br from-[#3D2314] to-[#4a2d1a] rounded-2xl p-5 overflow-hidden"
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#708238] flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">Time Savings</h3>
            </div>
            <span className="text-[#a8b86a] text-sm font-bold">88% faster</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {timeSavings.slice(0, 6).map((item) => (
              <div key={item.task} className="bg-white/5 rounded-xl p-3 text-center">
                <div className="text-xl font-bold text-[#a8b86a] mb-1">{item.saved}%</div>
                <div className="text-[10px] text-white/60 leading-tight line-clamp-2">{item.task}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Time Savings - Desktop: Full Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block relative bg-gradient-to-br from-[#3D2314] via-[#4a2d1a] to-[#2d1a0f] rounded-3xl p-10 overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#708238]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#708238]/10 to-transparent rounded-full blur-2xl" />

          <div className="relative">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#708238] to-[#5c6b2e] flex items-center justify-center shadow-2xl">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Time Savings</h3>
                  <p className="text-white/50 text-sm">Manual vs Automated Comparison</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp className="w-4 h-4 text-[#a8b86a]" />
                <span className="text-white/80 text-sm">Average <span className="text-[#a8b86a] font-bold">88%</span> faster</span>
              </div>
            </div>

            {/* Time Savings Grid */}
            <div className="grid grid-cols-6 gap-3">
              {timeSavings.map((item, index) => (
                <motion.div
                  key={item.task}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="text-4xl font-bold text-[#a8b86a] mb-2">
                    {item.saved}%
                  </div>
                  <h4 className="text-sm font-medium text-white mb-3 leading-tight min-h-[40px]">{item.task}</h4>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white/40">Before</span>
                      <span className="text-white/60 line-through">{item.manual}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#a8b86a]/80">After</span>
                      <span className="text-[#a8b86a] font-semibold">{item.flowsense}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
