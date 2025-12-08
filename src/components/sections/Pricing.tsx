'use client';

import { motion } from 'framer-motion';
import { Check, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small manufacturers getting started',
    price: '29,999',
    period: '/month',
    popular: false,
    features: [
      '5 Users',
      '3 Modules (CRM, Inventory, Finance)',
      'Basic AI Features',
      'Document Scanning (100/month)',
      'Email Support',
      'Standard Reports',
      '1 Warehouse',
    ],
    cta: 'Start Free Trial',
    ctaLink: '#get-started',
  },
  {
    name: 'Professional',
    description: 'For growing manufacturers needing more power',
    price: '59,999',
    period: '/month',
    popular: true,
    features: [
      '15 Users',
      '8 Modules (All except Project & POS)',
      'Full AI Features',
      'Document Scanning (500/month)',
      'Priority Support',
      'Custom Reports',
      '3 Warehouses',
      'API Access',
      'Mobile App',
    ],
    cta: 'Start Free Trial',
    ctaLink: '#get-started',
  },
  {
    name: 'Enterprise',
    description: 'For large manufacturers with complex needs',
    price: 'Custom',
    period: '',
    popular: false,
    features: [
      'Unlimited Users',
      'All 12 Modules',
      'Advanced AI & Custom Models',
      'Unlimited Document Scanning',
      'Dedicated Support Manager',
      'Custom Integrations',
      'Unlimited Warehouses',
      'On-Premise Option',
      'SLA Guarantee',
      'Training & Onboarding',
    ],
    cta: 'Contact Sales',
    ctaLink: '#contact',
  },
];

const faqs = [
  {
    question: 'How long is the free trial?',
    answer: '14 days with full access to all features. No credit card required to start.',
  },
  {
    question: 'Can I change plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, bank transfers, and UPI. For Enterprise plans, we offer flexible payment terms.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No setup fees for Starter and Professional plans. Enterprise plans include dedicated onboarding at no extra cost.',
  },
  {
    question: 'Do you offer discounts for annual billing?',
    answer: 'Yes! Get 2 months free when you pay annually - that is a 17% discount.',
  },
  {
    question: 'What happens to my data if I cancel?',
    answer: 'Your data is yours. We provide full data export and keep your data available for 30 days after cancellation.',
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-neutral-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Simple, Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Choose the Perfect <span className="gradient-text">Plan for You</span>
          </h2>
          <p className="text-lg text-neutral-600">
            Start with a 14-day free trial. No credit card required. Scale as you grow.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`font-medium ${!isAnnual ? 'text-neutral-900' : 'text-neutral-400'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-16 h-8 rounded-full transition-colors ${
              isAnnual ? 'bg-primary-500' : 'bg-neutral-200'
            }`}
          >
            <div
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform ${
                isAnnual ? 'translate-x-9' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`font-medium ${isAnnual ? 'text-neutral-900' : 'text-neutral-400'}`}>
            Annual
            <span className="ml-2 text-xs px-2 py-1 rounded-full bg-green-100 text-green-700">Save 17%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary-600 to-accent-600 text-white scale-105 shadow-2xl shadow-primary-500/30'
                  : 'bg-white border border-neutral-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-white text-sm font-medium flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-neutral-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.popular ? 'text-white/70' : 'text-neutral-500'}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                {plan.price === 'Custom' ? (
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-neutral-900'}`}>
                    Custom
                  </span>
                ) : (
                  <>
                    <span className={`text-lg ${plan.popular ? 'text-white/70' : 'text-neutral-500'}`}>₹</span>
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-neutral-900'}`}>
                      {isAnnual ? Math.round(parseInt(plan.price.replace(',', '')) * 0.83).toLocaleString() : plan.price}
                    </span>
                    <span className={plan.popular ? 'text-white/70' : 'text-neutral-500'}>{plan.period}</span>
                  </>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-green-500'}`} />
                    <span className={plan.popular ? 'text-white/90' : 'text-neutral-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.ctaLink}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? 'bg-white text-primary-600 hover:bg-neutral-100'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-neutral-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-neutral-900">{faq.question}</span>
                  <HelpCircle className={`w-5 h-5 text-neutral-400 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`} />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-neutral-600">
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
