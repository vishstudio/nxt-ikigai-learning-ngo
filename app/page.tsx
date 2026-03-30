'use client';

import { Header } from '@/components/Header/Header';
import MobileNav from '@/components/Header/MobileNav';
import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { ImpactSection } from '@/components/ImpactSection/ImpactSection';
import { StorySection } from '@/components/StorySection/StorySection';
import { ActivitiesSection } from '@/components/ActivitiesSection/ActivitiesSection';
import { VolunteersSection } from '@/components/VolunteersSection/VolunteersSection';
import { SuccessStoriesSection } from '@/components/SuccessStoriesSection/SuccessStoriesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection/FAQSection';
import { DirectorCallSection } from '@/components/DirectorCallSection/DirectorCallSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { Footer } from '@/components/Footer/Footer';

export default function IkigaiWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ikigai-bg flex flex-col font-sans text-ikigai-dark">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {mobileMenuOpen && <MobileNav onClose={() => setMobileMenuOpen(false)} />}

      <main className="flex-grow mt-4">
        <HeroSection />
        <ImpactSection />
        <StorySection />
        <DirectorCallSection />
        <ActivitiesSection />
        <VolunteersSection />
        <SuccessStoriesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
