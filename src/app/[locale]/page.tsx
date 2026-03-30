import { Clients } from "@/src/components/main/Clients";
import { Hero } from "@/src/components/main/hero/Hero";
import { Offer } from "@/src/components/main/Offer";
import { Team } from "@/src/components/main/team/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Offer />
      <Clients />
      <Team />
    </>
  );
}
