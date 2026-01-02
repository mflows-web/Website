import VideoGrid from "@/components/VideoGrid";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import Setlist from "@/components/Setlist";
import IntroMobile from "@/components/IntroMobile";

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroMobile />
      <Setlist />
      <SectionDivider />
      <VideoGrid />
      <SectionDivider />
      <ContactSection />
    </main>
  );
}
