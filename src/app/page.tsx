import VideoGrid from "@/components/VideoGrid";
import Hero from "@/components/Hero";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import Setlist from "@/components/Setlist";

export default function Home() {
  return (
    <main>
      <Hero />
      <Setlist />
      <SectionDivider />
      <VideoGrid />
      <SectionDivider />
      <ContactSection />
    </main>
  );
}
