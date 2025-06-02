import Header from "@/components/Header";
import BackgroundGrid from "@/components/BackgroundGrid";
import HeroSection from "@/components/HeroSection";
import GeneratorTabs from "@/components/GeneratorTabs";
import BrandingSection from "@/components/BrandingSection";
import IntroduceSection from "@/components/IntroduceSection";
import FeatureSection from "@/components/FeatureSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <BackgroundGrid />
        <HeroSection />
        <GeneratorTabs />
        <BrandingSection />
        <IntroduceSection />
        <FeatureSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;