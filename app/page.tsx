import { Header } from '@/components/Header/Header';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { ImpactSection } from '@/components/ImpactSection/ImpactSection';
import { StorySection } from '@/components/StorySection/StorySection';
import { ActivitiesSection } from '@/components/ActivitiesSection/ActivitiesSection';
import { SuccessStoriesSection } from '@/components/SuccessStoriesSection/SuccessStoriesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection/FAQSection';
import { DirectorCallSection } from '@/components/DirectorCallSection/DirectorCallSection';
import { ContactSection } from '@/components/ContactSection/ContactSection';
import { Footer } from '@/components/Footer/Footer';

export default function IkigaiWebsite() {
  return (
    <div className="min-h-screen bg-ikigai-bg flex flex-col font-sans text-ikigai-dark">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ImpactSection />
        <StorySection />
        <DirectorCallSection />
        <ActivitiesSection />
        <SuccessStoriesSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
