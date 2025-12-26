import AIFeatures from '@/components/sections/AIFeatures';
import CTA from '@/components/sections/CTA';
import Image from 'next/image';

export const metadata = {
  title: 'AI Features - FlowSense ERP',
  description: '30+ AI-powered features for manufacturing including demand forecasting, anomaly detection, optimization, and smart automation.',
};

export default function AIFeaturesPage() {
  return (
    <main className="pt-20">
        {/* Hero Banner with Image */}
        <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                  AI-Powered Intelligence
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">30+ AI Features</span> Built for Manufacturing
                </h1>
                <p className="text-xl text-neutral-600">
                  Not just automation, but true intelligence. Our AI learns from your data to predict, optimize, and automate across every module.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/erp-infographic.jpg"
                  alt="AI-Powered ERP Features"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <AIFeatures />
        <CTA />
    </main>
  );
}
