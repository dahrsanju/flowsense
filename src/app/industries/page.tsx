import Industries from '@/components/sections/Industries';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import Image from 'next/image';

export const metadata = {
  title: 'Industries - FlowSense ERP',
  description: 'Industry-specific ERP solutions for Automotive, Pharmaceutical, Electronics, Food & Beverage, Industrial Equipment, and Textile manufacturing.',
};

export default function IndustriesPage() {
  return (
    <main className="pt-20">
        {/* Hero Banner with Image */}
        <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                  Industry Solutions
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Built for <span className="gradient-text">Your Industry</span>
                </h1>
                <p className="text-xl text-neutral-600">
                  FlowSense is designed to address the unique challenges of different manufacturing sectors with industry-specific features and workflows.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/hand-drawn-erp.jpg"
                  alt="Industry-Specific ERP Solutions"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <Industries />
        <Testimonials />
        <CTA />
    </main>
  );
}
