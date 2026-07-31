import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Gap } from "@/components/sections/Gap";
import { Architecture } from "@/components/sections/Architecture";
import { Loop } from "@/components/sections/Loop";
import { Governance } from "@/components/sections/Governance";
import { Moat } from "@/components/sections/Moat";
import { AbuDhabi } from "@/components/sections/AbuDhabi";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

/* Page order. Reorder, remove or duplicate lines to restructure the page —
   each section reads its own copy from content/site.ts. */
export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Gap />
        <Architecture />
        <Loop />
        <Governance />
        <Moat />
        <AbuDhabi />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
