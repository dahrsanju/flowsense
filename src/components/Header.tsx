'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import ContactModal from './ContactModal';

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
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

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
          ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-neutral-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
        {/* Logo Replacement (Pure Code) */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* The "F" Icon Part */}
          <div className="relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#708238] to-[#5c6b2e] rounded-xl shadow-lg shadow-[#708238]/30 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <span className="text-white font-black text-2xl lg:text-3xl italic">F</span>
            {/* Optional: Subtle glow effect */}
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* The Text Part */}
          <div className="flex flex-col leading-none">
            <span className="text-2xl lg:text-3xl font-bold tracking-tight text-[#3D2314]">
              Flow<span className="text-[#708238]">Sense</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#78716c] mt-0.5">
              Smart Manufacturing
            </span>
          </div>
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
                  className="flex items-center gap-1 px-4 py-2 text-[#3D2314] hover:text-[#708238] transition-colors font-medium"
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
                      className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl shadow-neutral-900/10 border border-neutral-100 p-2 mt-2"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="flex flex-col p-3 rounded-xl hover:bg-[#708238]/10 transition-colors group"
                        >
                          <span className="font-semibold text-[#3D2314] group-hover:text-[#708238]">
                            {child.label}
                          </span>
                          <span className="text-sm text-[#78716c]">
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
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-5 py-2.5 text-[#3D2314] hover:text-[#708238] font-medium transition-colors"
            >
              Contact
            </button>
            <Link
              href="/#get-started"
              className="px-6 py-2.5 rounded-full font-semibold bg-[#708238] text-white hover:bg-[#5c6b2e] transition-all shadow-lg shadow-[#708238]/25"
            >
              Get Started
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
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full px-4 py-3 text-[#3D2314] hover:text-[#708238] hover:bg-[#708238]/10 rounded-xl font-medium transition-colors"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setMobileDropdown(null);
                                }}
                                className="block px-4 py-2 text-[#3D2314] hover:text-[#708238] hover:bg-[#708238]/10 rounded-lg text-sm transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-[#3D2314] hover:text-[#708238] hover:bg-[#708238]/10 rounded-xl font-medium transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsContactOpen(true);
                  }}
                  className="block w-full text-center px-6 py-3 border-2 border-[#708238] text-[#708238] rounded-full font-semibold hover:bg-[#708238]/10 transition-colors"
                >
                  Contact
                </button>
                <Link
                  href="/#get-started"
                  className="block w-full text-center px-6 py-3 rounded-full font-semibold bg-[#708238] text-white"
                >
                  <span>Get Started Free</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </motion.header>
  );
}
