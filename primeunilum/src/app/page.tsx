import Community from "./_components/community";
import CoreFeatures from "./_components/corefeat";
import Features from "./_components/features";
import HeroSection from "./_components/hero-section";
import Nav from "./_components/nav";
import Pricing from "./_components/pricing";
import QualityFeatures from "./_components/qualityfeat";
import Services from "./_components/services";
import Subscribe from "./_components/subscribe";
import Team from "./_components/team";
import Testimonials from "./_components/testimonials";
import Work from "./_components/work";

export default async function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <Nav />
      <HeroSection />
      <Features />
      <Services />
      <QualityFeatures />
      <CoreFeatures />
      <Work />
      <Pricing />
      <Team />
      <Testimonials />
      <Subscribe />
      <Community />
    </div>
  );
}

