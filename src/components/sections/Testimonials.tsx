'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'COO',
    company: 'AutoParts Manufacturing Ltd',
    industry: 'Automotive',
    image: '/testimonials/1.jpg',
    quote: 'FlowSense has transformed our production planning. The AI-powered scheduling reduced our setup times by 35% and we have not missed a JIT delivery in 6 months.',
    stats: [
      { label: 'Setup Time Reduction', value: '35%' },
      { label: 'On-Time Delivery', value: '100%' },
    ],
  },
  {
    name: 'Priya Sharma',
    role: 'Plant Manager',
    company: 'PharmaChem Industries',
    industry: 'Pharmaceutical',
    image: '/testimonials/2.jpg',
    quote: 'The batch traceability and GMP compliance features gave us peace of mind. We passed our FDA audit with zero observations for the first time in company history.',
    stats: [
      { label: 'Audit Score', value: '100%' },
      { label: 'Compliance Issues', value: 'Zero' },
    ],
  },
  {
    name: 'Arun Mehta',
    role: 'Supply Chain Director',
    company: 'ElectroniTech Solutions',
    industry: 'Electronics',
    image: '/testimonials/3.jpg',
    quote: 'Managing 5000+ SKUs was a nightmare before FlowSense. The AI demand forecasting has reduced our stockouts by 60% while cutting inventory carrying costs.',
    stats: [
      { label: 'Stockout Reduction', value: '60%' },
      { label: 'Inventory Savings', value: '25%' },
    ],
  },
  {
    name: 'Sanjay Patel',
    role: 'Finance Director',
    company: 'FoodPro Industries',
    industry: 'Food & Beverage',
    image: '/testimonials/4.jpg',
    quote: 'The document scanning feature alone saved us 2 full-time data entry positions. Our invoice processing went from 5 days to same-day with 99% accuracy.',
    stats: [
      { label: 'Processing Time', value: '95% faster' },
      { label: 'Staff Savings', value: '2 FTEs' },
    ],
  },
  {
    name: 'Meera Reddy',
    role: 'Quality Head',
    company: 'PrecisionMach Engineering',
    industry: 'Industrial Equipment',
    image: '/testimonials/5.jpg',
    quote: 'The predictive maintenance module predicted a critical spindle failure 2 weeks before it would have caused a production shutdown. That single save paid for the entire system.',
    stats: [
      { label: 'Downtime Prevented', value: '2 weeks' },
      { label: 'ROI', value: '300%+' },
    ],
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Customer Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Leading Manufacturers</span>
          </h2>
          <p className="text-lg text-neutral-600">
            See how manufacturing companies are achieving breakthrough results with FlowSense ERP.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left - Quote */}
              <div className="md:col-span-2">
                <Quote className="w-12 h-12 text-primary-300 mb-6" />
                <p className="text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed mb-8">
                  {testimonials[currentIndex].quote}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-8">
                  {testimonials[currentIndex].stats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl px-6 py-4 shadow-sm">
                      <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                      <p className="text-sm text-neutral-500">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">{testimonials[currentIndex].name}</p>
                    <p className="text-neutral-500">{testimonials[currentIndex].role}, {testimonials[currentIndex].company}</p>
                  </div>
                  <div className="ml-auto hidden md:flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Visual */}
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl transform rotate-6" />
                  <div className="relative bg-white rounded-3xl p-6 shadow-xl">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-neutral-100 rounded-full w-3/4" />
                      <div className="h-4 bg-primary-100 rounded-full w-full" />
                      <div className="h-4 bg-neutral-100 rounded-full w-5/6" />
                      <div className="h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg w-1/2 mt-4" />
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-xl flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-800">Success!</p>
                        <p className="text-xs text-green-600">Production optimized</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-500 w-8'
                      : 'bg-neutral-200 hover:bg-neutral-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border-2 border-neutral-200 flex items-center justify-center hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-center text-neutral-500 mb-8">Trusted by 500+ manufacturing companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
            {['AutoParts', 'PharmaChem', 'ElectroniTech', 'FoodPro', 'PrecisionMach', 'TextileCo'].map((company) => (
              <div key={company} className="text-2xl font-bold text-neutral-400">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
