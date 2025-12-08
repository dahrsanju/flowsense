'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';

const navItems = [
  {
    label: 'Products',
    href: '/products/crm',
    children: [
      { label: 'CRM', href: '/products/crm', description: 'Customer Relationship Management' },
      { label: 'Inventory', href: '/products/inventory', description: 'Real-time Stock Management' },
      { label: 'Production', href: '/products/production', description: 'Manufacturing Excellence' },
      { label: 'Finance', href: '/products/finance', description: 'Complete Financial Control' },
      { label: 'Supply Chain', href: '/products/scm', description: 'End-to-end Visibility' },
      { label: 'Quality', href: '/products/quality', description: 'Zero Defect Manufacturing' },
    ],
  },
  { label: 'AI Features', href: '/ai-features' },
  { label: 'Industries', href: '/industries' },
  { label: 'About', href: '/about' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-primary-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden">
              <Image
                src="/logo.jfif"
                alt="FlowSense ERP"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-bold">
              <span className="gradient-text">Flow</span>
              <span className="text-neutral-900">Sense</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-4 h-4 transition-transform" />
                  )}
                </Link>
                
                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl shadow-primary-500/10 border border-neutral-100 p-2 mt-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex flex-col p-3 rounded-xl hover:bg-primary-50 transition-colors group"
                        >
                          <span className="font-semibold text-neutral-900 group-hover:text-primary-600">
                            {child.label}
                          </span>
                          <span className="text-sm text-neutral-500">
                            {child.description}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/#demo"
              className="px-5 py-2.5 text-neutral-700 hover:text-primary-600 font-medium transition-colors"
            >
              Book Demo
            </Link>
            <Link
              href="/#get-started"
              className="btn-gradient px-6 py-2.5 rounded-full font-semibold flex items-center gap-2"
            >
              <span>Get Started</span>
              <Sparkles className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-100"
          >
            <div className="container-custom py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl font-medium transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Link
                  href="/#demo"
                  className="block w-full text-center px-6 py-3 border-2 border-primary-500 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-colors"
                >
                  Book Demo
                </Link>
                <Link
                  href="/#get-started"
                  className="block w-full text-center btn-gradient px-6 py-3 rounded-full font-semibold"
                >
                  <span>Get Started Free</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
