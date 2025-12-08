'use client';

import { motion } from 'framer-motion';
import {
  Users, Package, Truck, Warehouse, Factory, DollarSign,
  ClipboardCheck, Wrench, FolderKanban, ShoppingCart,
  Scan, BarChart3, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const modules = [
  {
    id: 'crm',
    name: 'CRM',
    fullName: 'Customer Relationship Management',
    description: 'Complete customer 360° view with AI-powered opportunity forecasting and smart lead scoring.',
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    features: ['Customer 360° View', 'AI Lead Scoring', 'Churn Prediction', 'Opportunity Pipeline'],
    href: '/products/crm',
  },
  {
    id: 'inventory',
    name: 'Inventory',
    fullName: 'Inventory Management',
    description: 'Real-time stock tracking with AI demand forecasting and automatic reorder optimization.',
    icon: Package,
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    features: ['Real-time Tracking', 'Demand Forecasting', 'Batch/Lot Management', 'Dead Stock Alerts'],
    href: '/products/inventory',
  },
  {
    id: 'scm',
    name: 'Supply Chain',
    fullName: 'Supply Chain Management',
    description: 'End-to-end visibility with AI supplier recommendations and automated RFQ generation.',
    icon: Truck,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
    features: ['Supplier Management', 'Three-Way Matching', 'Lead Time Prediction', 'Auto RFQ'],
    href: '/products/scm',
  },
  {
    id: 'wms',
    name: 'Warehouse',
    fullName: 'Warehouse Management System',
    description: 'Multi-warehouse management with AI-optimized picking waves and smart bin assignment.',
    icon: Warehouse,
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
    features: ['Wave Optimization', 'Smart Bin Assignment', 'Zone Management', 'Live Floor Map'],
    href: '/ai-features',
  },
  {
    id: 'production',
    name: 'Production',
    fullName: 'Production & Manufacturing',
    description: 'Complete manufacturing control with AI schedule optimization and MRP automation.',
    icon: Factory,
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
    features: ['Schedule Optimization', 'BOM Management', 'Work Centers', 'Real-time OEE'],
    href: '/products/production',
  },
  {
    id: 'finance',
    name: 'Finance',
    fullName: 'Finance & Accounting',
    description: 'Complete financial control with AI cash flow forecasting and automated compliance.',
    icon: DollarSign,
    color: 'from-cyan-500 to-sky-500',
    bgColor: 'bg-cyan-50',
    features: ['Cash Flow Forecasting', 'Payment Prediction', 'GST Compliance', 'Auto Reconciliation'],
    href: '/products/finance',
  },
  {
    id: 'quality',
    name: 'Quality',
    fullName: 'Quality Management',
    description: 'Zero-defect manufacturing with AI anomaly detection and predictive quality alerts.',
    icon: ClipboardCheck,
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-50',
    features: ['Inspection Workflows', 'NCR/CAPA Tracking', 'Defect Pattern Analysis', 'Supplier Quality'],
    href: '/products/quality',
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    fullName: 'Asset Management',
    description: 'Predictive maintenance with AI-powered equipment health scoring and failure prediction.',
    icon: Wrench,
    color: 'from-lime-500 to-green-500',
    bgColor: 'bg-lime-50',
    features: ['Predictive Maintenance', 'Health Scoring', 'Work Orders', 'Downtime Tracking'],
    href: '/ai-features',
  },
  {
    id: 'project',
    name: 'Projects',
    fullName: 'Project Management',
    description: 'Complete project control with AI risk assessment and resource optimization.',
    icon: FolderKanban,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    features: ['Gantt Charts', 'Resource Planning', 'Risk Assessment', 'Budget Tracking'],
    href: '/ai-features',
  },
  {
    id: 'pos',
    name: 'POS',
    fullName: 'Point of Sale',
    description: 'Seamless retail operations with AI demand forecasting and dynamic pricing.',
    icon: ShoppingCart,
    color: 'from-fuchsia-500 to-pink-500',
    bgColor: 'bg-fuchsia-50',
    features: ['Touch Interface', 'Multi-Payment', 'Shift Management', 'Inventory Sync'],
    href: '/ai-features',
  },
  {
    id: 'documents',
    name: 'Document Scanning',
    fullName: 'AI Document Processing',
    description: 'Eliminate data entry with AI-powered OCR that automatically creates ERP records.',
    icon: Scan,
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-50',
    features: ['Invoice Scanning', 'Auto Record Creation', 'Entity Matching', '95%+ Time Saved'],
    href: '/ai-features',
  },
  {
    id: 'analytics',
    name: 'Analytics',
    fullName: 'Reports & Analytics',
    description: '140+ built-in reports with AI-powered insights and customizable dashboards.',
    icon: BarChart3,
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
    features: ['140+ Reports', 'AI Insights', 'Custom Dashboards', 'Real-time Data'],
    href: '/ai-features',
  },
];

export default function Modules() {
  return (
    <section id="modules" className="py-24 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Complete ERP Solution
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">12 Integrated Modules</span>{' '}
            for End-to-End Control
          </h2>
          <p className="text-lg text-neutral-600">
            Everything you need to run your manufacturing business, powered by AI and designed for efficiency.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <Link href={module.href}>
                <div className="feature-card p-6 h-full cursor-pointer">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <module.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-1">{module.name}</h3>
                  <p className="text-sm text-neutral-500 mb-3">{module.fullName}</p>
                  <p className="text-sm text-neutral-600 mb-4">{module.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {module.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className={`text-xs px-2 py-1 rounded-full ${module.bgColor} text-neutral-700`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center gap-1 text-primary-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
