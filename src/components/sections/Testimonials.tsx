'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'COO',
    company: 'AutoParts Manufacturing',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'FlowSense has transformed our production planning. The AI-powered scheduling reduced our setup times by 35% and we have not missed a JIT delivery in 6 months.',
    stat: { value: '35%', label: 'Setup Time Reduced' },
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Plant Manager',
    company: 'PharmaChem Industries',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'The batch traceability and GMP compliance features gave us peace of mind. We passed our FDA audit with zero observations for the first time in company history.',
    stat: { value: '100%', label: 'Audit Score' },
  },
  {
    id: 3,
    name: 'Arun Mehta',
    role: 'Supply Chain Director',
    company: 'ElectroniTech Solutions',
    image: 'https://randomuser.me/api/portraits/men/67.jpg',
    quote: 'Managing 5000+ SKUs was a nightmare before FlowSense. The AI demand forecasting has reduced our stockouts by 60% while cutting inventory carrying costs.',
    stat: { value: '60%', label: 'Stockout Reduction' },
  },
  {
    id: 4,
    name: 'Sanjay Patel',
    role: 'Finance Director',
    company: 'FoodPro Industries',
    image: 'https://randomuser.me/api/portraits/men/52.jpg',
    quote: 'The document scanning feature alone saved us 2 full-time data entry positions. Our invoice processing went from 5 days to same-day with 99% accuracy.',
    stat: { value: '95%', label: 'Faster Processing' },
  },
  {
    id: 5,
    name: 'Meera Reddy',
    role: 'Quality Head',
    company: 'PrecisionMach Engineering',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: 'The predictive maintenance module predicted a critical spindle failure 2 weeks before it would have caused a production shutdown. That single save paid for the entire system.',
    stat: { value: '300%', label: 'ROI Achieved' },
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-10 bg-white overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-[#708238] to-[#5c6b2e] rounded-full" />
            <span className="text-[#708238] text-sm font-semibold uppercase tracking-wider">Customer Success Stories</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3D2314] mb-3 max-w-2xl">
            Trusted by Leading Manufacturers
          </h2>
          <p className="text-sm md:text-base text-[#44403c] max-w-xl">
            See how manufacturing companies are achieving breakthrough results with FlowSense ERP.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-gradient-to-br from-[#708238]/5 to-[#f8faf5] border border-[#708238]/10 rounded-2xl p-5 md:p-6"
            >
              {/* Compact Horizontal Layout */}
              <div className="flex flex-col gap-4">
                {/* Top Row - Author + Stat */}
                <div className="flex items-center justify-between">
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-lg flex-shrink-0 ring-2 ring-[#708238]/20">
                      <Image
                        src={current.image}
                        alt={current.name}
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-sm text-[#3D2314]">{current.name}</p>
                      <p className="text-xs text-[#44403c]">{current.role}</p>
                      <p className="text-xs text-[#708238]">{current.company}</p>
                    </div>
                  </div>

                  {/* Stat */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-3xl md:text-5xl font-bold text-[#708238]">{current.stat.value}</p>
                    <p className="text-[10px] md:text-xs text-[#44403c]">{current.stat.label}</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="pt-4 border-t border-[#708238]/10">
                  <p className="text-sm md:text-base text-[#3D2314] leading-relaxed">
                    "{current.quote}"
                  </p>
                  <div className="flex gap-0.5 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:border-[#708238] hover:text-[#708238] transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#708238] w-8'
                      : 'bg-neutral-200 hover:bg-neutral-300 w-2'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center hover:border-[#708238] hover:text-[#708238] transition-colors shadow-sm"
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
          className="mt-10"
        >
          <p className="text-center text-[#44403c] text-sm mb-4">Trusted by 500+ manufacturing companies</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-40">
            {['AutoParts', 'PharmaChem', 'ElectroniTech', 'FoodPro', 'PrecisionMach', 'TextileCo'].map((company) => (
              <div key={company} className="text-lg font-bold text-[#3D2314]">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
