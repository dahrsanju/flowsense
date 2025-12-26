'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MessageCircle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="demo" className="py-10 lg:py-12 bg-white">
      <div id="get-started" className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-[#3D2314] via-[#4a2d1a] to-[#3D2314]"
        >
          {/* Background decoration - Hidden on mobile */}
          <div className="absolute inset-0 hidden lg:block">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#708238]/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-[#708238]/10 rounded-full blur-3xl" />
          </div>

          {/* Mobile/Tablet: Minimal Layout */}
          <div className="lg:hidden p-6 text-center">
            <h2 className="text-xl font-bold text-white mb-2">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-white/50 text-sm mb-5">
              Join 500+ manufacturers. Start your free trial today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 justify-center mb-5">
              <Link
                href="#trial"
                className="px-6 py-3 bg-[#708238] text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#demo"
                className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold text-sm"
              >
                Book Demo
              </Link>
            </div>

            {/* Contact - Inline */}
            <div className="flex flex-wrap justify-center gap-4 pt-4 border-t border-white/10">
              <a href="tel:+919876543210" className="flex items-center gap-1.5 text-white/60 text-xs">
                <Phone className="w-3.5 h-3.5 text-[#a8b86a]" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:hello@flowsense.ai" className="flex items-center gap-1.5 text-white/60 text-xs">
                <Mail className="w-3.5 h-3.5 text-[#a8b86a]" />
                <span>hello@flowsense.ai</span>
              </a>
            </div>
          </div>

          {/* Desktop: Full Layout */}
          <div className="relative z-10 hidden lg:grid lg:grid-cols-5 gap-8">
            {/* Left Content - 3 cols */}
            <div className="lg:col-span-3 p-12">
              <span className="inline-block text-[#a8b86a] text-sm font-semibold uppercase tracking-wider mb-4">
                Start Your AI Journey
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to Transform Your
                <br />
                <span className="text-[#a8b86a]">Manufacturing Operations?</span>
              </h2>

              <p className="text-white/60 text-base mb-6 max-w-md">
                Join 500+ manufacturers who have revolutionized their operations with FlowSense.
              </p>

              {/* Trust points */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#a8b86a]" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#a8b86a]" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#a8b86a]" />
                  <span>Full access</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="#trial"
                  className="group px-7 py-3.5 bg-[#708238] text-white rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-[#5c6b2e] transition-all hover:shadow-lg hover:shadow-[#708238]/20"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="#demo"
                  className="px-7 py-3.5 bg-white/10 text-white rounded-xl font-semibold text-sm hover:bg-white/20 transition-all border border-white/10"
                >
                  Book a Demo
                </Link>
              </div>
            </div>

            {/* Right Content - 2 cols - Contact Card */}
            <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm p-10 flex flex-col justify-center border-l border-white/10">
              <h3 className="text-white font-semibold text-lg mb-6">Get in Touch</h3>

              <div className="space-y-4">
                <a
                  href="tel:+919876543210"
                  className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#708238]/20 flex items-center justify-center group-hover:bg-[#708238]/30 transition-colors">
                    <Phone className="w-5 h-5 text-[#a8b86a]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Call Us</p>
                    <p className="text-white/50 text-sm">+91 98765 43210</p>
                  </div>
                </a>

                <a
                  href="mailto:hello@flowsense.ai"
                  className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#708238]/20 flex items-center justify-center group-hover:bg-[#708238]/30 transition-colors">
                    <Mail className="w-5 h-5 text-[#a8b86a]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Email Us</p>
                    <p className="text-white/50 text-sm">hello@flowsense.ai</p>
                  </div>
                </a>

                <button
                  className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors w-full text-left"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#708238]/20 flex items-center justify-center group-hover:bg-[#708238]/30 transition-colors">
                    <MessageCircle className="w-5 h-5 text-[#a8b86a]" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Live Chat</p>
                    <p className="text-white/50 text-sm">Available 24/7</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
