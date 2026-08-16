"use client";

import { useState } from "react";
import Loader from "@/components/ui/Loader";
import CustomCursor from "@/components/ui/CustomCursor";
import Header from "@/components/ui/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import SkillsGalaxy from "@/components/sections/SkillsGalaxy";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
import CaseCompetitions from "@/components/sections/CaseCompetitions";
import Philosophy from "@/components/sections/Philosophy";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen bg-brand-black text-brand-white selection:bg-brand-cyan/30">
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <CustomCursor />
          <Header />
          <Hero />
          <About />
          <section id="journey">
            <Experience />
          </section>
          <SkillsGalaxy />
          <Achievements />
          <Education />
          <CaseCompetitions />
          <Philosophy />
          <Contact />
        </>
      )}
    </main>
  );
}
