import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ActivitiesSection from '@/components/ActivitiesSection';
import StorySection from '@/components/StorySection';
import DirectorCallSection from '@/components/DirectorCallSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default function IkigaiWebsite() {
  return (
    <div className="min-h-screen bg-ikigai-bg flex flex-col font-sans text-ikigai-dark">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <ActivitiesSection />
        <StorySection />
        <DirectorCallSection />
        <SuccessStoriesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
};