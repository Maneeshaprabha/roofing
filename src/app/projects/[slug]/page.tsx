"use client";

import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Building, CornerDownRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Data dictionary for all project case studies with multiple images
const projectsContent: Record<string, {
  title: string;
  category: string;
  date: string;
  location: string;
  client: string;
  heroDesc: string;
  mainImage: string;
  gallery: string[];
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
}> = {
  "cypso-industrial-warehouse": {
    title: "Cypso Industrial Warehouse",
    category: "Structural Engineering",
    date: "August 15, 2025",
    location: "Badulla, Sri Lanka",
    client: "Cypso Labs (Pvt) Ltd",
    heroDesc: "Engineered and installed a heavy-duty structural steel framework, ensuring maximum load-bearing capacity and architectural stability for a large-scale commercial facility.",
    mainImage: "https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=2000",
    gallery: [
      "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1200",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200"
    ],
    overview: "The Cypso Industrial Warehouse project required a massive structural overhaul to support heavy industrial equipment and high-volume logistic operations. Our engineering team took charge from the initial blueprint stage to final steel erection.",
    challenge: "The primary challenge was executing heavy steel fabrication within a tight operational timeline while adhering to strict seismic and wind-load safety regulations specified for the region's terrain.",
    solution: "We deployed pre-fabricated high-grade steel trusses combined with advanced modular bolting techniques. This significantly cut down on-site installation time while guaranteeing zero structural compromise.",
    results: [
      "Completed 2 weeks ahead of the scheduled project deadline.",
      "Achieved 100% compliance with international structural safety standards.",
      "Provided an expansive open-span interior layout with zero internal support pillars."
    ]
  },
  "horizon-residential-villas": {
    title: "Horizon Residential Villas",
    category: "Roofing Solutions",
    date: "September 22, 2025",
    location: "Welimada, Sri Lanka",
    client: "Horizon Developments",
    heroDesc: "Completed a comprehensive roof installation using premium zinc-aluminum sheets, delivering enhanced weather resistance, thermal efficiency, and striking modern aesthetics.",
    mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200"
    ],
    overview: "Horizon Residential Villas is a luxury housing project nestled in the hilly terrains of Welimada. The architecture demanded a sophisticated roofing system that could withstand heavy downpours and low temperatures while maintaining a sleek, modern visual appeal.",
    challenge: "Managing thermal insulation and preventing condensation build-up under stone-coated steel roofing in cold, high-altitude weather conditions.",
    solution: "We integrated a multi-layered insulation blanket directly beneath premium zinc-aluminum roofing panels, paired with hidden gutter systems for flawless rainwater runoff.",
    results: [
      "Significantly reduced indoor temperature fluctuations during winter months.",
      "Delivered a striking architectural finish that elevated the property's market value.",
      "Provided a watertight, zero-maintenance roofing warranty for 20 years."
    ]
  },
  "eco-tech-industrial-park": {
    title: "Eco-Tech Industrial Park",
    category: "Rainwater Systems",
    date: "November 05, 2025",
    location: "Kandy, Sri Lanka",
    client: "Eco-Tech Holdings",
    heroDesc: "Designed and deployed a large-scale industrial rainwater harvesting and guttering system to efficiently manage heavy seasonal monsoons while promoting sustainability.",
    mainImage: "https://images.unsplash.com/photo-1620245451921-1632731804f8?q=80&w=2000",
    gallery: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200",
      "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1200",
      "https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=1200"
    ],
    overview: "Covering over 50,000 square feet of roof space, the Eco-Tech Industrial Park required an advanced rainwater catchment and heavy-duty gutter routing network to prevent campus flooding.",
    challenge: "Handling extreme water volume surges during peak monsoon cycles without causing overflow or gutter sagging.",
    solution: "Custom-fabricated high-capacity industrial aluminum gutters and reinforced downpipes connected to underground filtration reservoirs.",
    results: [
      "Successfully channeled over 100,000 liters of rainwater during peak seasonal storms.",
      "Eliminated all previous soil erosion issues around the facility's foundation.",
      "Provided a sustainable water source for the park's cooling towers and landscaping."
    ]
  },
  "badulla-heritage-renovation": {
    title: "Badulla Heritage Renovation",
    category: "Maintenance & Restoration",
    date: "January 18, 2026",
    location: "Badulla Town, Sri Lanka",
    client: "Municipal Council of Badulla",
    heroDesc: "Executed critical roof restorations and structural reinforcements to extend the lifespan, safety, and historical integrity of a prominent commercial property.",
    mainImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
      "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1200"
    ],
    overview: "Restoring a legacy building demands extreme care to preserve its original aesthetic while upgrading its structural integrity to meet modern safety codes.",
    challenge: "Replacing deteriorated timber and rusted metallic trusses without altering the historical exterior facade of the building.",
    solution: "We implemented targeted steel reinforcements and discreet modern waterproofing membranes that blend seamlessly with heritage architecture.",
    results: [
      "Preserved the historical architectural prominence of the landmark structure.",
      "Fully eliminated interior water seepage and structural sagging.",
      "Extended the operational lifespan of the building by an estimated 30+ years."
    ]
  }
};

export default function ProjectDetailsPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "cypso-industrial-warehouse";
  
  // Fallback to first project if slug doesn't match
  const project = projectsContent[slug] || projectsContent["cypso-industrial-warehouse"];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-x-clip">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#050505] pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-16 lg:px-24 rounded-b-[40px] md:rounded-b-[60px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white blur-[150px] opacity-[0.02] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            
            {/* Breadcrumbs & Back Button */}
            <div className="flex items-center gap-4 mb-10">
              <Link href="/projects" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10">
                <ArrowLeft size={18} className="text-white" />
              </Link>
              <div className="flex items-center gap-2 text-[13px] font-medium tracking-widest uppercase text-white/60">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
                <span>/</span>
                <span className="text-white">{project.title}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#cc3333] text-white text-[12px] font-medium px-3 py-1 rounded-[6px] uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-medium leading-[1.1] text-white tracking-tight mb-8">
              {project.title}
            </h1>
            <p className="text-zinc-400 text-[18px] md:text-[20px] font-light max-w-2xl leading-relaxed">
              {project.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA (Split Layout with Sticky Project Info Card) */}
      <section className="py-16 md:py-24 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto mb-10">
        
        {/* Massive Primary Featured Image */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] md:rounded-[40px] overflow-hidden relative mb-12"
        >
          <img 
            src={project.mainImage} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Split Layout: Text & Extra Gallery on Left, Sticky Project Info Card on Right */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start relative">
          
          {/* LEFT COLUMN: Editorial Text & Multiple Gallery Images */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="w-full lg:w-[60%] flex flex-col"
          >
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.15] text-[#1a1a1a] tracking-tight mb-6">
              Project Overview
            </h2>
            <p className="text-[16px] md:text-[18px] text-zinc-600 font-light leading-[1.7] mb-12">
              {project.overview}
            </p>

            {/* Gallery Image 1 inside text flow */}
            <div className="w-full aspect-[16/10] rounded-[24px] overflow-hidden relative mb-12">
              <img src={project.gallery[0]} alt="Project view 1" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.15] text-[#1a1a1a] tracking-tight mb-6">
              The Engineering Challenge
            </h2>
            <p className="text-[16px] md:text-[18px] text-zinc-600 font-light leading-[1.7] mb-12">
              {project.challenge}
            </p>

            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.15] text-[#1a1a1a] tracking-tight mb-6">
              Our Execution & Solution
            </h2>
            <p className="text-[16px] md:text-[18px] text-zinc-600 font-light leading-[1.7] mb-12">
              {project.solution}
            </p>

            {/* Gallery Images Grid (2 images side-by-side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden relative">
                <img src={project.gallery[1]} alt="Project view 2" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="w-full aspect-[4/3] rounded-[20px] overflow-hidden relative">
                <img src={project.gallery[2]} alt="Project view 3" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>

            {/* Results Bullet Points */}
            <h3 className="text-[24px] font-medium text-[#1a1a1a] mb-6">Key Results & Impact</h3>
            <ul className="flex flex-col gap-4">
              {project.results.map((result, i) => (
                <li key={i} className="flex items-start gap-4 text-[16px] md:text-[17px] text-zinc-600 font-light leading-[1.6]">
                  <CheckCircle2 size={20} className="text-[#cc3333] mt-1 shrink-0" />
                  {result}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT COLUMN: Sticky Project Specifications Card */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: 0.2 }}
            className="w-full lg:w-[40%] lg:sticky lg:top-32 h-fit"
          >
            <div className="border border-zinc-200 rounded-[32px] p-8 md:p-10 bg-white shadow-sm flex flex-col">
              
              <h3 className="text-[26px] md:text-[28px] font-medium leading-[1.2] text-[#1a1a1a] tracking-tight mb-8">
                Project Summary
              </h3>

              {/* Info Specs List */}
              <div className="flex flex-col gap-6 mb-10 pb-8 border-b border-zinc-100">
                <div className="flex items-center gap-4">
                  <Building size={20} className="text-[#1a1a1a] shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[12px] uppercase text-zinc-400 tracking-wider">Client</p>
                    <p className="text-[15px] text-zinc-800 font-medium">{project.client}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin size={20} className="text-[#1a1a1a] shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[12px] uppercase text-zinc-400 tracking-wider">Location</p>
                    <p className="text-[15px] text-zinc-800 font-medium">{project.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Calendar size={20} className="text-[#1a1a1a] shrink-0" strokeWidth={1.5} />
                  <div>
                    <p className="text-[12px] uppercase text-zinc-400 tracking-wider">Completed Date</p>
                    <p className="text-[15px] text-zinc-800 font-medium">{project.date}</p>
                  </div>
                </div>
              </div>

              <p className="text-[14px] text-zinc-500 font-light mb-8 leading-relaxed">
                Interested in a similar engineering or roofing structure for your property? Let's discuss your requirements.
              </p>

              {/* Action Button */}
              <Link href="/contact" className="flex items-center justify-center gap-3 border border-[#1a1a1a] rounded-full text-[#1a1a1a] px-6 py-4 w-full hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300">
                <CornerDownRight size={18} strokeWidth={1.5} />
                <span className="text-[13px] font-semibold tracking-[0.15em] uppercase mt-0.5">
                  Request a Consultation
                </span>
              </Link>

            </div>
          </motion.div>

        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}