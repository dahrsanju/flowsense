'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const values = [
  {
    icon: Target,
    title: 'Customer First',
    description: 'Every feature we build starts with understanding our customers\' real challenges in manufacturing.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We leverage cutting-edge AI and technology to solve problems that were previously impossible.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We see ourselves as partners in your success, not just software vendors.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we do.',
  },
];

const stats = [
  { value: '500+', label: 'Manufacturing Plants' },
  { value: '50,000+', label: 'Daily Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '30%', label: 'Avg. Efficiency Gain' },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                About FlowSense
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Transforming Manufacturing with{' '}
                <span className="gradient-text">Intelligent ERP</span>
              </h1>
              <p className="text-xl text-neutral-600">
                We&apos;re on a mission to make AI-powered manufacturing operations accessible to every manufacturer,
                regardless of size or technical expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-neutral-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Our <span className="gradient-text">Story</span>
                </h2>
                <div className="space-y-4 text-neutral-600">
                  <p>
                    FlowSense was born from a simple observation: manufacturing companies were struggling
                    with outdated ERP systems that couldn&apos;t keep up with modern demands. Traditional
                    solutions were expensive, rigid, and required months of implementation.
                  </p>
                  <p>
                    Founded by a team of manufacturing experts and AI engineers, we set out to build
                    something different - an ERP that&apos;s intelligent, affordable, and quick to deploy.
                    Our AI-first approach means you get predictive insights from day one, not after
                    years of data accumulation.
                  </p>
                  <p>
                    Today, FlowSense powers over 500 manufacturing plants across India, helping them
                    reduce costs, improve efficiency, and make better decisions with AI-powered insights.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/team-meeting.jpg"
                    alt="FlowSense Team"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-white/90 text-lg mb-6">
                    To democratize AI-powered manufacturing operations, enabling every manufacturer
                    to compete with the efficiency and intelligence of industry giants.
                  </p>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-white/90 text-lg">
                    A world where every manufacturing decision is informed by intelligent data,
                    every process is optimized, and every worker is empowered by AI assistance.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-lg text-neutral-600">
                These principles guide everything we do at FlowSense.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-neutral-50 rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{value.title}</h3>
                  <p className="text-neutral-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-neutral-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-lg text-neutral-600">
                Have questions? We&apos;d love to hear from you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.a
                href="mailto:hello@flowsense.ai"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-1">Email Us</h3>
                <p className="text-neutral-600">hello@flowsense.ai</p>
              </motion.a>

              <motion.a
                href="tel:+919876543210"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-1">Call Us</h3>
                <p className="text-neutral-600">+91 98765 43210</p>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-bold text-neutral-900 mb-1">Visit Us</h3>
                <p className="text-neutral-600">123 Tech Park, Electronic City, Bangalore</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-primary-600 to-accent-600">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Manufacturing?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join 500+ manufacturers who have already upgraded to intelligent operations with FlowSense.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#get-started"
                  className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href="/#demo"
                  className="px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
                >
                  Book a Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
