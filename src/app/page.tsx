import Hero from '@/components/sections/Hero';
import Modules from '@/components/sections/Modules';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Modules />
      <Stats />
      <Testimonials />
      <CTA />
    </main>
  );
}
