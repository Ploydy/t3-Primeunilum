import Community from "./ui/landingpage/community";
import CoreFeatures from "./ui/landingpage/corefeat";
import Features from "./ui/landingpage/features";
import HeroSection from "./ui/landingpage/hero-section";
import Nav from "./ui/landingpage/nav";
import Pricing from "./ui/landingpage/pricing";
import QualityFeatures from "./ui/landingpage/qualityfeat";
import Services from "./ui/landingpage/services";
import Subscribe from "./ui/landingpage/subscribe";
import Team from "./ui/landingpage/team";
import Testimonials from "./ui/landingpage/testimonials";
import Work from "./ui/landingpage/work";

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

