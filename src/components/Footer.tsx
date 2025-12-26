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
    <footer className="bg-[#2d3319] text-white pt-10 pb-4">
      {/* Main Footer */}
      <div className="container-custom pb-10">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 group mb-4">
              <div className="flex items-center justify-center w-11 h-11 bg-gradient-to-br from-[#708238] to-[#5c6b2e] rounded-xl">
                <span className="text-white font-black text-2xl italic">F</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-bold text-white">
                  Flow<span className="text-[#9aab5a]">Sense</span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.15em] text-white/50">
                  Smart Manufacturing
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm mb-5">
              AI-powered manufacturing ERP for intelligent automation.
            </p>
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#708238] transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-3 text-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-6 pt-5 pb-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2">
              <a href="mailto:hello@flowsense.ai" className="hover:text-white transition-colors">
                hello@flowsense.ai
              </a>
              <a href="tel:+919885285293" className="hover:text-white transition-colors">
                +91 9885285293
              </a>
              <span>Hyderabad, India</span>
            </div>
            <p className="mr-4">&copy; {new Date().getFullYear()} FlowSense Technologies</p>
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
            logo: 'https://flowsense.ai/FS_logo.jpeg',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+91-9885285293',
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
