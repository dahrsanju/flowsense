'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Facebook, Twitter, Linkedin, Youtube, Instagram,
  Mail, Phone, MapPin, ArrowUpRight
} from 'lucide-react';

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'CRM', href: '/products/crm' },
      { label: 'Inventory Management', href: '/products/inventory' },
      { label: 'Production', href: '/products/production' },
      { label: 'Supply Chain', href: '/products/scm' },
      { label: 'Finance', href: '/products/finance' },
      { label: 'Quality Management', href: '/products/quality' },
      { label: 'AI Features', href: '/ai-features' },
    ],
  },
  solutions: {
    title: 'Solutions',
    links: [
      { label: 'Automotive', href: '/industries' },
      { label: 'Pharmaceutical', href: '/industries' },
      { label: 'Electronics', href: '/industries' },
      { label: 'Food & Beverage', href: '/industries' },
      { label: 'Industrial Equipment', href: '/industries' },
      { label: 'Textile & Apparel', href: '/industries' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/#modules' },
      { label: 'API Reference', href: '/#modules' },
      { label: 'Blog', href: '/#modules' },
      { label: 'Case Studies', href: '/#testimonials' },
      { label: 'Webinars', href: '/#modules' },
      { label: 'ROI Calculator', href: '/about' },
    ],
  },
  company: {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/about' },
      { label: 'Partners', href: '/about' },
      { label: 'Contact', href: '/about' },
      { label: 'Privacy Policy', href: '/about' },
      { label: 'Terms of Service', href: '/about' },
    ],
  },
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
    <footer className="bg-neutral-950 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                <Image src="/logo.jfif" alt="FlowSense ERP" fill className="object-cover" />
              </div>
              <span className="text-2xl font-bold">
                <span className="gradient-text">Flow</span>
                <span className="text-white">Sense</span>
              </span>
            </Link>
            <p className="text-neutral-400 mb-6 max-w-xs">
              AI-powered manufacturing ERP that transforms operations with intelligent automation and predictive insights.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:hello@flowsense.ai" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@flowsense.ai</span>
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 98765 43210</span>
              </a>
              <div className="flex items-start gap-3 text-neutral-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Tech Park, Electronic City,<br />Bangalore, Karnataka 560100</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} FlowSense Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-neutral-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/about" className="text-neutral-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/about" className="text-neutral-500 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'FlowSense ERP',
            description: 'AI-powered manufacturing ERP software for intelligent operations management',
            url: 'https://flowsense.ai',
            logo: 'https://flowsense.ai/logo.jfif',
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
              'https://youtube.com/flowsense',
            ],
          }),
        }}
      />
    </footer>
  );
}
