'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Phone, Mail, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function CTA() {
  return (
    <section id="get-started" className="py-24 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 p-8 md:p-16"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Start Your AI Journey Today</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Manufacturing Operations?
              </h2>

              <p className="text-lg text-white/80 mb-8">
                Join 500+ manufacturers who have already revolutionized their operations with FlowSense. Start your 14-day free trial today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#trial"
                  className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-neutral-100 transition-colors"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#demo"
                  className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-colors border border-white/20"
                >
                  <span>Book a Demo</span>
                </Link>
              </div>

              <p className="mt-6 text-white/60 text-sm">
                No credit card required. Full access to all features.
              </p>
            </div>

            {/* Right Content - Contact Options */}
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Call Us</p>
                    <p className="text-white/70">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Us</p>
                    <p className="text-white/70">hello@flowsense.ai</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Live Chat</p>
                    <p className="text-white/70">Available 24/7</p>
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
