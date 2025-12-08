'use client';

import { motion } from 'framer-motion';
import {
  Brain, TrendingUp, AlertTriangle, Zap, Lightbulb,
  Target, LineChart, Cpu, Sparkles
} from 'lucide-react';

const aiCategories = [
  {
    title: 'Forecasting & Prediction',
    icon: TrendingUp,
    color: 'from-blue-500 to-cyan-500',
    features: [
      { name: 'Demand Forecasting', accuracy: '85-95%', module: 'Inventory' },
      { name: 'Cash Flow Forecasting', accuracy: '80-90%', module: 'Finance' },
      { name: 'Payment Prediction', accuracy: '75-85%', module: 'Finance' },
      { name: 'Lead Time Prediction', accuracy: '80-90%', module: 'SCM' },
      { name: 'Production Demand', accuracy: '85-95%', module: 'Manufacturing' },
    ],
  },
  {
    title: 'Anomaly Detection',
    icon: AlertTriangle,
    color: 'from-amber-500 to-orange-500',
    features: [
      { name: 'Inventory Movement Anomalies', type: 'Isolation Forest', module: 'Inventory' },
      { name: 'Quality Defect Patterns', type: 'Statistical', module: 'Quality' },
      { name: 'Financial Transaction Anomalies', type: 'Z-score + ML', module: 'Finance' },
      { name: 'Production Efficiency Drops', type: 'Threshold + ML', module: 'Production' },
      { name: 'Supplier Performance Issues', type: 'Trend Analysis', module: 'SCM' },
    ],
  },
  {
    title: 'Optimization',
    icon: Target,
    color: 'from-emerald-500 to-teal-500',
    features: [
      { name: 'Schedule Optimization', goal: 'Minimize makespan & tardiness', module: 'Production' },
      { name: 'Picking Wave Optimization', goal: 'Minimize travel time', module: 'WMS' },
      { name: 'Reorder Point Optimization', goal: 'Balance cost & service', module: 'Inventory' },
      { name: 'Supplier Selection', goal: 'Best price, quality, delivery', module: 'SCM' },
      { name: 'Maintenance Scheduling', goal: 'Balance cost & reliability', module: 'Assets' },
    ],
  },
  {
    title: 'Smart Automation',
    icon: Zap,
    color: 'from-violet-500 to-purple-500',
    features: [
      { name: 'Auto RFQ Generation', trigger: 'Low stock threshold', module: 'SCM' },
      { name: 'Payment Reminder Automation', trigger: 'Invoice due date', module: 'Finance' },
      { name: 'Preventive Maintenance Auto-Schedule', trigger: 'Time/usage triggers', module: 'Assets' },
      { name: 'Work Order Auto-Generation', trigger: 'Demand forecast', module: 'Production' },
      { name: 'Stock Transfer Automation', trigger: 'Stock imbalance', module: 'Inventory' },
    ],
  },
];

const impactStats = [
  { value: '30+', label: 'AI Features', icon: Brain },
  { value: '85-95%', label: 'Forecast Accuracy', icon: LineChart },
  { value: '50-70%', label: 'Downtime Reduction', icon: Zap },
  { value: '25-40%', label: 'Efficiency Gain', icon: TrendingUp },
];

export default function AIFeatures() {
  return (
    <section id="ai-features" className="py-24 bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Powered by AI</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">30+ AI Features</span>{' '}
            Built for Manufacturing
          </h2>
          <p className="text-lg text-neutral-600">
            Not just automation, but true intelligence. Our AI learns from your data to predict, optimize, and automate across every module.
          </p>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-primary-500/5 border border-neutral-100"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-neutral-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* AI Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {aiCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg shadow-primary-500/5 border border-neutral-100"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">{category.title}</h3>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {category.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + featureIndex * 0.05 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 hover:bg-primary-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${category.color}`} />
                      <span className="text-neutral-700 font-medium">{feature.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {'accuracy' in feature && (
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">
                          {feature.accuracy}
                        </span>
                      )}
                      {'type' in feature && (
                        <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700">
                          {feature.type}
                        </span>
                      )}
                      {'goal' in feature && (
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 max-w-32 truncate">
                          {feature.goal}
                        </span>
                      )}
                      {'trigger' in feature && (
                        <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700 max-w-32 truncate">
                          {feature.trigger}
                        </span>
                      )}
                      <span className="text-xs text-neutral-400">{feature.module}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Assistant Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-primary-900 via-accent-900 to-primary-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
                <Cpu className="w-4 h-4" />
                <span>AI-Powered Insights</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Your Intelligent Manufacturing Assistant
              </h3>
              <p className="text-white/70 mb-6">
                Ask natural language questions, get AI-generated recommendations, and let the system proactively alert you to opportunities and risks.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  Natural Language Queries
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  Proactive Alerts
                </span>
                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                  Smart Recommendations
                </span>
              </div>
            </div>

            {/* Chat Preview */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-tl-none p-4">
                    <p className="text-white text-sm">
                      Based on current demand patterns, I recommend increasing safety stock for SKU-2847 by 15%. Historical data shows a 30% demand spike expected next month.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-primary-500 rounded-2xl rounded-tr-none p-4">
                    <p className="text-white text-sm">Show me the demand forecast for next quarter</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white/10 rounded-2xl rounded-tl-none p-4">
                    <p className="text-white text-sm">
                      Q1 2025 forecast shows 12% growth with peak demand in March. I have identified 3 potential stockout risks and 2 optimization opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
