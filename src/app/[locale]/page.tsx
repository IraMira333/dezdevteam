import { Clients } from "@/src/components/main/Clients";
import { Hero } from "@/src/components/main/hero/Hero";
import { Offer } from "@/src/components/main/Offer";
import { Stages } from "@/src/components/main/stages/Stages";
import { StickySection } from "@/src/components/main/sticky/StickySection";
import { Team } from "@/src/components/main/team/Team";
import { WhyWe } from "@/src/components/main/whyWe/WhyWe";

export default function Home() {
  return (
    <>
      <Hero />
      <Offer />
      <Clients />
      <StickySection />
      <Team />
      <WhyWe />
      <Stages />
    </>
  );
}
