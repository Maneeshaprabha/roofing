

// Oya anith sections (Services, Projects, FAQ) wena wenama components widihata hadala mekata import karanna puluwan.


import BlueprintSection from "../components/BlueprintSection";
import Hero from "../components/Hero";
import InspirationSection from "../components/InspirationSection";

import Products from "../components/Products";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import VideoSection from "../components/VideoSection";
import WhyChooseUs from "../components/WhyChooseUs";
import WorkingTogether from "../components/WorkingTogether";
import WorkWeveDone from "../components/WorkWeveDone";

export default function VintaHomepage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-hidden">
   
      <main>
        <Hero />
        <WhyChooseUs />
        <Products />
        <VideoSection />
        <Services/>
        <BlueprintSection/>
        <WorkWeveDone/>
        <InspirationSection/>
        <WorkingTogether/>
        <Testimonials/>
        
      </main>
  
    </div>
  );
}