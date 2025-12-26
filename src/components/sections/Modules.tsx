'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const modules = [
  {
    id: 'crm',
    name: 'CRM',
    fullName: 'Customer Relationship Management',
    description: 'Complete customer 360° view with AI-powered opportunity forecasting.',
    image: '/icons/crm.svg',
    features: ['Customer 360°', 'AI Lead Scoring', 'Churn Prediction'],
    href: '/products/crm',
    size: 'large' as const,
  },
  {
    id: 'inventory',
    name: 'Inventory',
    fullName: 'Inventory Management',
    description: 'Real-time stock tracking with AI demand forecasting.',
    image: '/icons/inventory.svg',
    features: ['Real-time Tracking', 'Demand Forecast', 'Dead Stock Alerts'],
    href: '/products/inventory',
    size: 'medium' as const,
  },
  {
    id: 'scm',
    name: 'Supply Chain',
    fullName: 'Supply Chain Management',
    description: 'End-to-end visibility with AI supplier recommendations.',
    image: '/icons/supply-chain.svg',
    features: ['Supplier Mgmt', 'Lead Time AI', 'Auto RFQ'],
    href: '/products/scm',
    size: 'medium' as const,
  },
  {
    id: 'wms',
    name: 'Warehouse',
    fullName: 'Warehouse Management',
    description: 'Multi-warehouse management with AI-optimized picking.',
    image: '/icons/warehouse.svg',
    features: ['Wave Optimization', 'Smart Bins', 'Live Floor Map'],
    href: '/ai-features',
    size: 'small' as const,
  },
  {
    id: 'production',
    name: 'Production',
    fullName: 'Production & Manufacturing',
    description: 'Complete manufacturing control with AI schedule optimization.',
    image: '/icons/production.svg',
    features: ['Schedule AI', 'BOM Mgmt', 'Real-time OEE'],
    href: '/products/production',
    size: 'large' as const,
  },
  {
    id: 'finance',
    name: 'Finance',
    fullName: 'Finance & Accounting',
    description: 'Complete financial control with AI cash flow forecasting.',
    image: '/icons/finance.svg',
    features: ['Cash Flow AI', 'GST Ready', 'Auto Reconcile'],
    href: '/products/finance',
    size: 'medium' as const,
  },
  {
    id: 'quality',
    name: 'Quality',
    fullName: 'Quality Management',
    description: 'Zero-defect manufacturing with AI anomaly detection.',
    image: '/icons/quality.svg',
    features: ['Inspections', 'NCR/CAPA', 'Defect Analysis'],
    href: '/products/quality',
    size: 'small' as const,
  },
  {
    id: 'maintenance',
    name: 'Maintenance',
    fullName: 'Asset Management',
    description: 'Predictive maintenance with AI equipment health scoring.',
    image: '/icons/maintenance.svg',
    features: ['Predictive AI', 'Health Score', 'Work Orders'],
    href: '/ai-features',
    size: 'small' as const,
  },
  {
    id: 'project',
    name: 'Projects',
    fullName: 'Project Management',
    description: 'Complete project control with AI risk assessment.',
    image: '/icons/projects.svg',
    features: ['Gantt Charts', 'Resources', 'Risk AI'],
    href: '/ai-features',
    size: 'small' as const,
  },
  {
    id: 'pos',
    name: 'POS',
    fullName: 'Point of Sale',
    description: 'Seamless retail operations with dynamic pricing.',
    image: '/icons/pos.svg',
    features: ['Touch UI', 'Multi-Pay', 'Inventory Sync'],
    href: '/ai-features',
    size: 'small' as const,
  },
  {
    id: 'documents',
    name: 'Documents',
    fullName: 'AI Document Processing',
    description: 'Eliminate data entry with AI-powered OCR.',
    image: '/icons/documents.svg',
    features: ['Invoice Scan', 'Auto Records', '95% Faster'],
    href: '/ai-features',
    size: 'medium' as const,
  },
  {
    id: 'analytics',
    name: 'Analytics',
    fullName: 'Reports & Analytics',
    description: '140+ reports with AI-powered insights.',
    image: '/icons/analytics.svg',
    features: ['140+ Reports', 'AI Insights', 'Dashboards'],
    href: '/ai-features',
    size: 'large' as const,
  },
];

// Grid positions for bento layout - manually positioned for clean alignment
const gridPositions: Record<string, string> = {
  crm: 'col-start-1 col-end-3 row-start-1 row-end-3',        // Large: top-left
  inventory: 'col-start-3 col-end-5 row-start-1 row-end-2',   // Medium: top-middle
  scm: 'col-start-5 col-end-7 row-start-1 row-end-2',         // Medium: top-right
  wms: 'col-start-3 col-end-4 row-start-2 row-end-3',         // Small
  production: 'col-start-4 col-end-7 row-start-2 row-end-4',  // Large: right side
  finance: 'col-start-1 col-end-3 row-start-3 row-end-4',     // Medium: left
  quality: 'col-start-3 col-end-4 row-start-3 row-end-4',     // Small
  maintenance: 'col-start-1 col-end-2 row-start-4 row-end-5', // Small
  project: 'col-start-2 col-end-3 row-start-4 row-end-5',     // Small
  pos: 'col-start-3 col-end-4 row-start-4 row-end-5',         // Small
  documents: 'col-start-4 col-end-6 row-start-4 row-end-5',   // Medium
  analytics: 'col-start-6 col-end-7 row-start-4 row-end-5',   // Small (was large, now small for balance)
};

// Bento grid card component
function BentoCard({ module, index }: { module: typeof modules[0]; index: number }) {
  const isLarge = module.id === 'crm' || module.id === 'production';
  const isMedium = module.id === 'inventory' || module.id === 'scm' || module.id === 'finance' || module.id === 'documents';
  const gridPos = gridPositions[module.id] || '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
      className={`group ${gridPos}`}
    >
      <Link href={module.href} className="block h-full">
        <div className={`
          relative h-full bg-gradient-to-br from-white to-stone-50/50 rounded-2xl overflow-hidden
          border border-stone-200/80 hover:border-[#708238]/50
          shadow-sm hover:shadow-lg transition-all duration-300
          hover:-translate-y-0.5
          ${isLarge ? 'p-5' : isMedium ? 'p-4' : 'p-3'}
        `}>
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#708238]/5 to-transparent rounded-bl-full" />

          {/* Content */}
          <div className={`relative z-10 h-full flex ${isLarge ? 'flex-col' : 'flex-row items-center gap-3'}`}>
            {/* Icon */}
            <div className={`
              relative flex-shrink-0 bg-gradient-to-br from-[#708238]/10 to-[#708238]/5 rounded-xl
              flex items-center justify-center group-hover:scale-105 transition-transform duration-300
              ${isLarge ? 'w-16 h-16 mb-3' : isMedium ? 'w-12 h-12' : 'w-10 h-10'}
            `}>
              <Image
                src={module.image}
                alt={module.name}
                width={isLarge ? 36 : isMedium ? 28 : 24}
                height={isLarge ? 36 : isMedium ? 28 : 24}
                className="object-contain"
              />
            </div>

            {/* Text content */}
            <div className={`flex-1 min-w-0`}>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className={`
                    font-bold text-[#3D2314] group-hover:text-[#708238] transition-colors
                    ${isLarge ? 'text-xl mb-0.5' : isMedium ? 'text-base' : 'text-sm'}
                  `}>
                    {module.name}
                  </h3>
                  {(isLarge || isMedium) && (
                    <p className={`text-[#708238] font-medium truncate ${isLarge ? 'text-sm' : 'text-xs'}`}>
                      {module.fullName}
                    </p>
                  )}
                </div>

                {/* Arrow button */}
                <div className={`
                  flex-shrink-0 rounded-full bg-[#708238]/10 flex items-center justify-center
                  group-hover:bg-[#708238] transition-colors
                  ${isLarge ? 'w-8 h-8' : 'w-6 h-6'}
                `}>
                  <ArrowRight className={`text-[#708238] group-hover:text-white transition-colors ${isLarge ? 'w-4 h-4' : 'w-3 h-3'}`} />
                </div>
              </div>

              {/* Description - only for large cards */}
              {isLarge && (
                <p className="text-sm text-[#44403c] mt-2 line-clamp-2">{module.description}</p>
              )}

              {/* Features - only for large and medium cards */}
              {(isLarge || isMedium) && (
                <div className={`flex flex-wrap gap-1.5 ${isLarge ? 'mt-3' : 'mt-2'}`}>
                  {module.features.slice(0, isLarge ? 3 : 2).map((feature) => (
                    <span
                      key={feature}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-[#708238]/10 text-[#3D2314] font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Modules() {
  return (
    <section id="modules" className="py-10 bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-[#708238] to-[#5c6b2e] rounded-full" />
            <span className="text-[#708238] text-sm font-semibold uppercase tracking-wider">Complete ERP Solution</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3D2314] mb-3 max-w-2xl">
            12 Integrated Modules for End-to-End Control
          </h2>
          <p className="text-sm md:text-base text-[#44403c] max-w-xl">
            Everything you need to run your manufacturing business, powered by AI.
          </p>
        </motion.div>

        {/* Modules Grid - Mobile: Compact cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:hidden">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
              className="group"
            >
              <Link href={module.href}>
                <div className="relative bg-white rounded-xl p-3 h-full cursor-pointer border border-neutral-200 hover:border-[#708238]/40 shadow-sm hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col items-center text-center gap-2">
                    <div className="relative w-10 h-10 flex-shrink-0">
                      <Image
                        src={module.image}
                        alt={module.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#3D2314] group-hover:text-[#708238] transition-colors">
                        {module.name}
                      </h3>
                      <p className="text-[10px] text-[#708238]/80 font-medium leading-tight">
                        {module.fullName}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Modules Grid - Desktop: Bento Grid */}
        <div className="hidden lg:grid grid-cols-6 grid-rows-4 gap-3" style={{ gridTemplateRows: 'repeat(4, 110px)' }}>
          {modules.map((module, index) => (
            <BentoCard key={module.id} module={module} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
