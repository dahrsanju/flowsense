# FlowSense Single-Page to Multi-Page Conversion Specification

## Overview

This document provides a complete specification for converting the FlowSense single-page website into a clean, responsive multi-page website. Each navigation item will link to a separate page instead of anchor scrolling.

---

## Current State Analysis

### Tech Stack
- **Framework**: Next.js 16.0.7 (App Router)
- **Frontend**: React 19.2.0 with TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion v12.23.25
- **Icons**: Lucide React

### Current Navigation Items
| Nav Item | Current Behavior | Target Page |
|----------|------------------|-------------|
| Products | Dropdown → `#modules` | `/products` (with sub-pages) |
| AI Features | `#ai-features` | `/ai-features` |
| Industries | `#industries` | `/industries` |
| Pricing | `#pricing` | `/pricing` |
| About | `#about` | `/about` |
| Book Demo | `#demo` | `/demo` |
| Get Started | `#get-started` | `/get-started` |

---

## New File Structure

```
src/
├── app/
│   ├── layout.tsx                    # Root layout (MODIFY)
│   ├── page.tsx                      # Home page (MODIFY)
│   ├── globals.css                   # Global styles (KEEP)
│   ├── favicon.ico                   # Favicon (KEEP)
│   │
│   ├── products/
│   │   ├── page.tsx                  # Products overview page (NEW)
│   │   ├── crm/
│   │   │   └── page.tsx              # CRM product page (NEW)
│   │   ├── inventory/
│   │   │   └── page.tsx              # Inventory product page (NEW)
│   │   ├── production/
│   │   │   └── page.tsx              # Production product page (NEW)
│   │   ├── finance/
│   │   │   └── page.tsx              # Finance product page (NEW)
│   │   ├── supply-chain/
│   │   │   └── page.tsx              # Supply Chain product page (NEW)
│   │   └── quality/
│   │       └── page.tsx              # Quality product page (NEW)
│   │
│   ├── ai-features/
│   │   └── page.tsx                  # AI Features page (NEW)
│   │
│   ├── industries/
│   │   ├── page.tsx                  # Industries overview page (NEW)
│   │   ├── automotive/
│   │   │   └── page.tsx              # Automotive industry page (NEW)
│   │   ├── pharmaceutical/
│   │   │   └── page.tsx              # Pharmaceutical page (NEW)
│   │   ├── electronics/
│   │   │   └── page.tsx              # Electronics page (NEW)
│   │   ├── food-beverage/
│   │   │   └── page.tsx              # Food & Beverage page (NEW)
│   │   ├── industrial-equipment/
│   │   │   └── page.tsx              # Industrial Equipment page (NEW)
│   │   └── textile-apparel/
│   │       └── page.tsx              # Textile & Apparel page (NEW)
│   │
│   ├── pricing/
│   │   └── page.tsx                  # Pricing page (NEW)
│   │
│   ├── about/
│   │   └── page.tsx                  # About page (NEW)
│   │
│   ├── demo/
│   │   └── page.tsx                  # Book Demo page (NEW)
│   │
│   ├── get-started/
│   │   └── page.tsx                  # Get Started/Sign Up page (NEW)
│   │
│   ├── contact/
│   │   └── page.tsx                  # Contact page (NEW)
│   │
│   ├── resources/
│   │   ├── page.tsx                  # Resources hub (NEW)
│   │   ├── blog/
│   │   │   └── page.tsx              # Blog listing (NEW)
│   │   ├── case-studies/
│   │   │   └── page.tsx              # Case studies (NEW)
│   │   └── documentation/
│   │       └── page.tsx              # Documentation (NEW)
│   │
│   └── legal/
│       ├── privacy/
│       │   └── page.tsx              # Privacy Policy (NEW)
│       └── terms/
│           └── page.tsx              # Terms of Service (NEW)
│
├── components/
│   ├── Header.tsx                    # Navigation header (MODIFY)
│   ├── Footer.tsx                    # Footer (MODIFY)
│   ├── PageHeader.tsx                # Reusable page header (NEW)
│   ├── Breadcrumb.tsx                # Breadcrumb navigation (NEW)
│   └── sections/
│       ├── Hero.tsx                  # Home hero only (MODIFY)
│       ├── Modules.tsx               # Products preview (MODIFY)
│       ├── AIFeatures.tsx            # AI features content (MODIFY)
│       ├── Stats.tsx                 # Stats section (KEEP)
│       ├── Industries.tsx            # Industries content (MODIFY)
│       ├── Testimonials.tsx          # Testimonials (KEEP)
│       ├── Pricing.tsx               # Pricing content (MODIFY)
│       └── CTA.tsx                   # Call-to-action (KEEP)
│
└── lib/
    └── constants.ts                  # Navigation data, routes (NEW)
```

---

## Detailed Implementation

### 1. Navigation Constants (`src/lib/constants.ts`)

```typescript
export const ROUTES = {
  home: '/',
  products: {
    index: '/products',
    crm: '/products/crm',
    inventory: '/products/inventory',
    production: '/products/production',
    finance: '/products/finance',
    supplyChain: '/products/supply-chain',
    quality: '/products/quality',
  },
  aiFeatures: '/ai-features',
  industries: {
    index: '/industries',
    automotive: '/industries/automotive',
    pharmaceutical: '/industries/pharmaceutical',
    electronics: '/industries/electronics',
    foodBeverage: '/industries/food-beverage',
    industrialEquipment: '/industries/industrial-equipment',
    textileApparel: '/industries/textile-apparel',
  },
  pricing: '/pricing',
  about: '/about',
  demo: '/demo',
  getStarted: '/get-started',
  contact: '/contact',
  resources: {
    index: '/resources',
    blog: '/resources/blog',
    caseStudies: '/resources/case-studies',
    documentation: '/resources/documentation',
  },
  legal: {
    privacy: '/legal/privacy',
    terms: '/legal/terms',
  },
} as const;

export const NAV_ITEMS = [
  {
    label: 'Products',
    href: ROUTES.products.index,
    children: [
      { label: 'CRM', href: ROUTES.products.crm, description: 'Customer relationship management' },
      { label: 'Inventory', href: ROUTES.products.inventory, description: 'Stock & warehouse management' },
      { label: 'Production', href: ROUTES.products.production, description: 'Manufacturing operations' },
      { label: 'Finance', href: ROUTES.products.finance, description: 'Financial management' },
      { label: 'Supply Chain', href: ROUTES.products.supplyChain, description: 'End-to-end supply chain' },
      { label: 'Quality', href: ROUTES.products.quality, description: 'Quality control & assurance' },
      { label: 'All Products', href: ROUTES.products.index, description: 'View all modules' },
    ],
  },
  { label: 'AI Features', href: ROUTES.aiFeatures },
  { label: 'Industries', href: ROUTES.industries.index },
  { label: 'Pricing', href: ROUTES.pricing },
  { label: 'About', href: ROUTES.about },
] as const;

export const CTA_BUTTONS = {
  demo: { label: 'Book Demo', href: ROUTES.demo },
  getStarted: { label: 'Get Started', href: ROUTES.getStarted },
} as const;
```

---

### 2. Updated Header Component (`src/components/Header.tsx`)

```tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { NAV_ITEMS, CTA_BUTTONS } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">FlowSense</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    isActiveLink(item.href)
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-3 hover:bg-primary-50 transition-colors ${
                              isActiveLink(child.href) ? 'bg-primary-50 text-primary-600' : ''
                            }`}
                          >
                            <div className="font-medium text-gray-900">{child.label}</div>
                            {child.description && (
                              <div className="text-sm text-gray-500">{child.description}</div>
                            )}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={CTA_BUTTONS.demo.href}
              className="px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
            >
              {CTA_BUTTONS.demo.label}
            </Link>
            <Link
              href={CTA_BUTTONS.getStarted.href}
              className="btn-gradient px-6 py-2.5 text-sm font-medium text-white rounded-lg"
            >
              {CTA_BUTTONS.getStarted.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-100"
            >
              <div className="pt-4 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-2 rounded-lg font-medium ${
                        isActiveLink(item.href)
                          ? 'bg-primary-50 text-primary-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-2 text-sm rounded-lg ${
                              isActiveLink(child.href)
                                ? 'text-primary-600'
                                : 'text-gray-600 hover:text-primary-600'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 space-y-2 border-t border-gray-100 mt-4">
                  <Link
                    href={CTA_BUTTONS.demo.href}
                    className="block px-4 py-2 text-center font-medium text-primary-600"
                  >
                    {CTA_BUTTONS.demo.label}
                  </Link>
                  <Link
                    href={CTA_BUTTONS.getStarted.href}
                    className="block mx-4 py-2.5 text-center font-medium text-white btn-gradient rounded-lg"
                  >
                    {CTA_BUTTONS.getStarted.label}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
```

---

### 3. Reusable Page Header Component (`src/components/PageHeader.tsx`)

```tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  badge?: string;
  children?: ReactNode;
  variant?: 'default' | 'gradient' | 'minimal';
}

export default function PageHeader({
  title,
  subtitle,
  description,
  badge,
  children,
  variant = 'default',
}: PageHeaderProps) {
  const bgClasses = {
    default: 'bg-gradient-to-br from-primary-50 via-white to-accent-50',
    gradient: 'bg-gradient-to-br from-primary-600 via-primary-700 to-accent-700 text-white',
    minimal: 'bg-white',
  };

  const textClasses = {
    default: {
      badge: 'bg-primary-100 text-primary-700',
      title: 'text-gray-900',
      subtitle: 'text-primary-600',
      description: 'text-gray-600',
    },
    gradient: {
      badge: 'bg-white/20 text-white',
      title: 'text-white',
      subtitle: 'text-primary-200',
      description: 'text-primary-100',
    },
    minimal: {
      badge: 'bg-primary-100 text-primary-700',
      title: 'text-gray-900',
      subtitle: 'text-primary-600',
      description: 'text-gray-600',
    },
  };

  const colors = textClasses[variant];

  return (
    <section className={`pt-32 pb-16 ${bgClasses[variant]}`}>
      <div className="container-custom mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          {badge && (
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${colors.badge}`}>
              {badge}
            </span>
          )}

          {subtitle && (
            <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${colors.subtitle}`}>
              {subtitle}
            </p>
          )}

          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${colors.title}`}>
            {title}
          </h1>

          {description && (
            <p className={`text-lg md:text-xl leading-relaxed ${colors.description}`}>
              {description}
            </p>
          )}

          {children}
        </motion.div>
      </div>
    </section>
  );
}
```

---

### 4. Breadcrumb Component (`src/components/Breadcrumb.tsx`)

```tsx
'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="container-custom mx-auto px-6 py-4">
      <ol className="flex items-center gap-2 text-sm">
        <li>
          <Link
            href="/"
            className="text-gray-500 hover:text-primary-600 transition-colors"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

---

### 5. Updated Home Page (`src/app/page.tsx`)

```tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Modules from '@/components/sections/Modules';
import AIFeatures from '@/components/sections/AIFeatures';
import Stats from '@/components/sections/Stats';
import Industries from '@/components/sections/Industries';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* Show preview cards that link to full pages */}
        <Modules variant="preview" limit={6} />
        <AIFeatures variant="preview" />
        <Stats />
        <Industries variant="preview" limit={4} />
        <Testimonials />
        <Pricing variant="preview" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
```

---

### 6. Products Page (`src/app/products/page.tsx`)

```tsx
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Breadcrumb from '@/components/Breadcrumb';
import Modules from '@/components/sections/Modules';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Products | FlowSense ERP',
  description: 'Explore FlowSense ERP modules: CRM, Inventory, Production, Finance, Supply Chain, Quality Control, and more.',
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="Our Products"
          title="Complete ERP Solution"
          description="Discover our comprehensive suite of 12 integrated modules designed to streamline every aspect of your manufacturing operations."
        />
        <Breadcrumb items={[{ label: 'Products' }]} />
        <Modules variant="full" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
```

---

### 7. Individual Product Page Template (`src/app/products/[slug]/page.tsx`)

```tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Breadcrumb from '@/components/Breadcrumb';
import CTA from '@/components/sections/CTA';

// Product data - move to separate data file in production
const products = {
  crm: {
    title: 'CRM',
    fullTitle: 'Customer Relationship Management',
    description: 'Build stronger customer relationships with AI-powered insights and automation.',
    features: [
      'Lead & opportunity tracking',
      'Customer 360-degree view',
      'Sales pipeline management',
      'AI-powered lead scoring',
      'Automated follow-ups',
      'Customer segmentation',
    ],
    benefits: [
      { metric: '40%', label: 'Increase in conversion rates' },
      { metric: '60%', label: 'Faster response times' },
      { metric: '25%', label: 'Higher customer retention' },
    ],
  },
  inventory: {
    title: 'Inventory',
    fullTitle: 'Inventory Management',
    description: 'Optimize stock levels and eliminate waste with intelligent inventory control.',
    features: [
      'Real-time stock tracking',
      'Multi-location management',
      'Automated reorder points',
      'Batch & serial tracking',
      'Demand forecasting',
      'Dead stock identification',
    ],
    benefits: [
      { metric: '30%', label: 'Reduction in carrying costs' },
      { metric: '99.5%', label: 'Inventory accuracy' },
      { metric: '45%', label: 'Fewer stockouts' },
    ],
  },
  // Add other products...
};

type ProductSlug = keyof typeof products;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug as ProductSlug];
  if (!product) return {};

  return {
    title: `${product.fullTitle} | FlowSense ERP`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = products[slug as ProductSlug];

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge={product.title}
          title={product.fullTitle}
          description={product.description}
          variant="gradient"
        />
        <Breadcrumb
          items={[
            { label: 'Products', href: '/products' },
            { label: product.title },
          ]}
        />

        {/* Features Section */}
        <section className="py-20">
          <div className="container-custom mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                <ul className="space-y-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Business Impact</h2>
                <div className="grid gap-6">
                  {product.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-xl"
                    >
                      <div className="text-4xl font-bold text-primary-600 mb-1">
                        {benefit.metric}
                      </div>
                      <div className="text-gray-600">{benefit.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
```

---

### 8. AI Features Page (`src/app/ai-features/page.tsx`)

```tsx
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Breadcrumb from '@/components/Breadcrumb';
import AIFeatures from '@/components/sections/AIFeatures';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'AI Features | FlowSense ERP',
  description: 'Explore 30+ AI-powered features including forecasting, anomaly detection, optimization, and smart automation.',
};

export default function AIFeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="Artificial Intelligence"
          title="AI-Powered Intelligence"
          description="Harness the power of 30+ AI features designed to automate decisions, predict outcomes, and optimize your manufacturing operations."
          variant="gradient"
        />
        <Breadcrumb items={[{ label: 'AI Features' }]} />
        <AIFeatures variant="full" />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
```

---

### 9. Industries Page (`src/app/industries/page.tsx`)

```tsx
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Breadcrumb from '@/components/Breadcrumb';
import Industries from '@/components/sections/Industries';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Industries | FlowSense ERP',
  description: 'FlowSense ERP solutions for Automotive, Pharmaceutical, Electronics, Food & Beverage, and more industries.',
};

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="Industry Solutions"
          title="Built for Your Industry"
          description="Tailored ERP solutions for diverse manufacturing sectors with industry-specific features and compliance requirements."
        />
        <Breadcrumb items={[{ label: 'Industries' }]} />
        <Industries variant="full" />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
```

---

### 10. Pricing Page (`src/app/pricing/page.tsx`)

```tsx
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Breadcrumb from '@/components/Breadcrumb';
import Pricing from '@/components/sections/Pricing';

export const metadata: Metadata = {
  title: 'Pricing | FlowSense ERP',
  description: 'Flexible pricing plans for FlowSense ERP. Choose from Starter, Professional, or Enterprise plans.',
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="Pricing"
          title="Simple, Transparent Pricing"
          description="Choose the plan that fits your business. All plans include core features with no hidden fees."
        />
        <Breadcrumb items={[{ label: 'Pricing' }]} />
        <Pricing variant="full" />
      </main>
      <Footer />
    </>
  );
}
```

---

### 11. About Page (`src/app/about/page.tsx`)

```tsx
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Breadcrumb from '@/components/Breadcrumb';
import Stats from '@/components/sections/Stats';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'About Us | FlowSense ERP',
  description: 'Learn about FlowSense - the AI-powered manufacturing ERP platform transforming Indian manufacturing.',
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="About Us"
          title="Transforming Manufacturing"
          description="We're on a mission to empower Indian manufacturers with world-class AI-powered ERP solutions."
        />
        <Breadcrumb items={[{ label: 'About' }]} />

        {/* Mission Section */}
        <section className="py-20">
          <div className="container-custom mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                FlowSense was founded with a simple belief: every manufacturer, regardless of size,
                deserves access to cutting-edge technology. We combine decades of manufacturing
                expertise with the latest in artificial intelligence to deliver an ERP platform
                that truly understands your business.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation First',
                  description: 'We continuously push the boundaries of what ERP can do with AI and automation.',
                },
                {
                  title: 'Customer Success',
                  description: 'Your success is our success. We measure ourselves by the value we create for you.',
                },
                {
                  title: 'Made in India',
                  description: 'Built specifically for Indian manufacturers, understanding local needs and regulations.',
                },
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
```

---

### 12. Demo Page (`src/app/demo/page.tsx`)

```tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Breadcrumb from '@/components/Breadcrumb';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    employees: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
  };

  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="Book a Demo"
          title="See FlowSense in Action"
          description="Schedule a personalized demo with our product experts and discover how FlowSense can transform your manufacturing operations."
        />
        <Breadcrumb items={[{ label: 'Book Demo' }]} />

        <section className="py-20">
          <div className="container-custom mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold mb-6">What to Expect</h2>
                <div className="space-y-6">
                  {[
                    { icon: Calendar, title: '30-Minute Session', desc: 'Quick, focused demonstration tailored to your needs' },
                    { icon: Users, title: 'Expert Guidance', desc: 'Our product specialists will answer all your questions' },
                    { icon: Clock, title: 'Flexible Scheduling', desc: 'Choose a time that works best for your team' },
                    { icon: CheckCircle, title: 'No Commitment', desc: 'Explore FlowSense with zero obligation' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Demo Requested!</h3>
                    <p className="text-gray-600">
                      We'll contact you within 24 hours to schedule your personalized demo.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Employees
                      </label>
                      <select
                        value={formData.employees}
                        onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      >
                        <option value="">Select...</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201-500">201-500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What are you looking to solve?
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full btn-gradient py-4 text-white font-semibold rounded-lg"
                    >
                      Request Demo
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

---

### 13. Get Started Page (`src/app/get-started/page.tsx`)

```tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { Check } from 'lucide-react';

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    agreeTerms: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration
  };

  return (
    <>
      <Header />
      <main>
        <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <div className="container-custom mx-auto px-6">
            <div className="max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
              >
                <h1 className="text-3xl font-bold mb-2">Get Started Free</h1>
                <p className="text-gray-600">
                  Start your 14-day free trial. No credit card required.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-xl"
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      minLength={8}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      checked={formData.agreeTerms}
                      onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                      className="mt-1"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link href="/legal/terms" className="text-primary-600 hover:underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="/legal/privacy" className="text-primary-600 hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full btn-gradient py-4 text-white font-semibold rounded-lg"
                  >
                    Create Account
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login" className="text-primary-600 font-medium hover:underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-center"
              >
                <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                  {['14-day free trial', 'No credit card', 'Cancel anytime'].map((item) => (
                    <div key={item} className="flex items-center gap-1">
                      <Check className="w-4 h-4 text-green-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

---

### 14. Contact Page (`src/app/contact/page.tsx`)

```tsx
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Breadcrumb from '@/components/Breadcrumb';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | FlowSense ERP',
  description: 'Get in touch with FlowSense. Contact our sales, support, or partnership teams.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          badge="Contact"
          title="Get in Touch"
          description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
        />
        <Breadcrumb items={[{ label: 'Contact' }]} />

        <section className="py-20">
          <div className="container-custom mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    title: 'Email',
                    details: ['contact@flowsense.ai', 'support@flowsense.ai'],
                  },
                  {
                    icon: Phone,
                    title: 'Phone',
                    details: ['+91 98765 43210', 'Mon-Fri 9am-6pm IST'],
                  },
                  {
                    icon: MapPin,
                    title: 'Office',
                    details: ['Cyber City, DLF Phase 2', 'Gurugram, Haryana 122002'],
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
                      <option>General Inquiry</option>
                      <option>Sales</option>
                      <option>Support</option>
                      <option>Partnerships</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-gradient px-8 py-3 text-white font-semibold rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

---

### 15. Updated Footer Component (`src/components/Footer.tsx`)

```tsx
import Link from 'next/link';
import { ROUTES } from '@/lib/constants';
import { Sparkles, Facebook, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'CRM', href: ROUTES.products.crm },
    { label: 'Inventory', href: ROUTES.products.inventory },
    { label: 'Production', href: ROUTES.products.production },
    { label: 'Finance', href: ROUTES.products.finance },
    { label: 'Supply Chain', href: ROUTES.products.supplyChain },
    { label: 'Quality', href: ROUTES.products.quality },
    { label: 'All Products', href: ROUTES.products.index },
  ],
  Solutions: [
    { label: 'Automotive', href: ROUTES.industries.automotive },
    { label: 'Pharmaceutical', href: ROUTES.industries.pharmaceutical },
    { label: 'Electronics', href: ROUTES.industries.electronics },
    { label: 'Food & Beverage', href: ROUTES.industries.foodBeverage },
    { label: 'Industrial Equipment', href: ROUTES.industries.industrialEquipment },
    { label: 'Textile & Apparel', href: ROUTES.industries.textileApparel },
  ],
  Resources: [
    { label: 'Documentation', href: ROUTES.resources.documentation },
    { label: 'Blog', href: ROUTES.resources.blog },
    { label: 'Case Studies', href: ROUTES.resources.caseStudies },
  ],
  Company: [
    { label: 'About Us', href: ROUTES.about },
    { label: 'Contact', href: ROUTES.contact },
    { label: 'Pricing', href: ROUTES.pricing },
    { label: 'Privacy Policy', href: ROUTES.legal.privacy },
    { label: 'Terms of Service', href: ROUTES.legal.terms },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'FlowSense',
            url: 'https://flowsense.ai',
            logo: 'https://flowsense.ai/logo.png',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-98765-43210',
              contactType: 'sales',
              areaServed: 'IN',
              availableLanguage: ['English', 'Hindi'],
            },
            sameAs: [
              'https://facebook.com/flowsense',
              'https://twitter.com/flowsense',
              'https://linkedin.com/company/flowsense',
            ],
          }),
        }}
      />

      <div className="container-custom mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">FlowSense</span>
            </Link>
            <p className="text-sm mb-6">
              AI-powered Manufacturing ERP for the modern Indian enterprise.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} FlowSense. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href={ROUTES.legal.privacy} className="hover:text-white">Privacy</Link>
            <Link href={ROUTES.legal.terms} className="hover:text-white">Terms</Link>
            <Link href={ROUTES.contact} className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## Section Component Modifications

Each section component needs a `variant` prop to support both preview (home page) and full (dedicated page) modes:

### Example: Modules Component Modification

```tsx
// src/components/sections/Modules.tsx

interface ModulesProps {
  variant?: 'preview' | 'full';
  limit?: number;
}

export default function Modules({ variant = 'full', limit }: ModulesProps) {
  const displayModules = limit ? modules.slice(0, limit) : modules;

  return (
    <section className="py-20">
      <div className="container-custom mx-auto px-6">
        {variant === 'preview' && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive suite of ERP modules
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayModules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>

        {variant === 'preview' && (
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700"
            >
              View all products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
```

Apply similar modifications to:
- `AIFeatures.tsx`
- `Industries.tsx`
- `Pricing.tsx`

---

## SEO Metadata Template

Each page should have proper metadata. Use this pattern:

```tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Title | FlowSense ERP',
  description: 'Page description for SEO (150-160 characters)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: 'Page Title | FlowSense ERP',
    description: 'Page description for social sharing',
    url: 'https://flowsense.ai/page-path',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title | FlowSense ERP',
    description: 'Page description for Twitter',
  },
};
```

---

## Implementation Checklist

### Phase 1: Setup
- [ ] Create `src/lib/constants.ts` with routes and navigation data
- [ ] Update `Header.tsx` with new navigation using `next/link`
- [ ] Update `Footer.tsx` with new links
- [ ] Create `PageHeader.tsx` component
- [ ] Create `Breadcrumb.tsx` component

### Phase 2: Core Pages
- [ ] Update `src/app/page.tsx` (home page with preview sections)
- [ ] Create `src/app/products/page.tsx`
- [ ] Create `src/app/ai-features/page.tsx`
- [ ] Create `src/app/industries/page.tsx`
- [ ] Create `src/app/pricing/page.tsx`
- [ ] Create `src/app/about/page.tsx`
- [ ] Create `src/app/demo/page.tsx`
- [ ] Create `src/app/get-started/page.tsx`
- [ ] Create `src/app/contact/page.tsx`

### Phase 3: Sub-Pages
- [ ] Create product sub-pages (`/products/crm`, etc.)
- [ ] Create industry sub-pages (`/industries/automotive`, etc.)
- [ ] Create resource pages (`/resources/blog`, etc.)
- [ ] Create legal pages (`/legal/privacy`, `/legal/terms`)

### Phase 4: Section Updates
- [ ] Add `variant` prop to `Modules.tsx`
- [ ] Add `variant` prop to `AIFeatures.tsx`
- [ ] Add `variant` prop to `Industries.tsx`
- [ ] Add `variant` prop to `Pricing.tsx`

### Phase 5: Testing & Polish
- [ ] Test all navigation links
- [ ] Verify mobile responsiveness
- [ ] Check active link highlighting
- [ ] Test breadcrumb navigation
- [ ] Verify SEO metadata on all pages
- [ ] Test form submissions
- [ ] Cross-browser testing

---

## Route Summary

| Path | Page | Status |
|------|------|--------|
| `/` | Home | Modify existing |
| `/products` | Products overview | New |
| `/products/[slug]` | Individual product | New (dynamic) |
| `/ai-features` | AI Features | New |
| `/industries` | Industries overview | New |
| `/industries/[slug]` | Individual industry | New (dynamic) |
| `/pricing` | Pricing | New |
| `/about` | About Us | New |
| `/demo` | Book Demo | New |
| `/get-started` | Sign Up | New |
| `/contact` | Contact | New |
| `/resources` | Resources hub | New |
| `/resources/blog` | Blog | New |
| `/resources/case-studies` | Case Studies | New |
| `/resources/documentation` | Documentation | New |
| `/legal/privacy` | Privacy Policy | New |
| `/legal/terms` | Terms of Service | New |

---

## Notes for Developer

1. **Next.js App Router**: This spec uses Next.js App Router conventions. All pages are in `src/app/` directory.

2. **TypeScript**: All components use TypeScript. Ensure strict type checking is enabled.

3. **Styling**: Uses existing Tailwind CSS setup with custom classes defined in `globals.css`.

4. **Animations**: Framer Motion is already installed. Use consistent animation patterns.

5. **Dynamic Routes**: Product and Industry pages use `[slug]` dynamic routes with `generateStaticParams` for static generation.

6. **Form Handling**: Demo and Get Started pages include form templates. Integrate with your backend/API as needed.

7. **Active States**: Header navigation includes active link highlighting based on current pathname.

8. **Mobile First**: All components are responsive. Test on mobile devices.

9. **SEO**: Each page includes proper metadata. Update URLs in OpenGraph tags for production domain.

10. **Existing Components**: Leverage existing section components by adding `variant` props rather than duplicating code.

---

*Generated: December 2024*
*For: FlowSense ERP Website*
