import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import ThreePillars from "@/components/ThreePillars";
import ContentStrategy from "@/components/ContentStrategy";
import RevolutionStatement from "@/components/RevolutionStatement";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <BrandStory />
      <ThreePillars />
      <ContentStrategy />
      <RevolutionStatement />
      <CallToAction />
      <Footer />
    </div>
  );
}
