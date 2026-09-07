"use client";

import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Mail, Phone, CornerDownRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Data dictionary for all 4 services
const servicesContent: Record<string, {
  title: string;
  heroDesc: string;
  image: string;
  h1: string;
  p1: string;
  h2: string;
  p2: string;
  h3: string;
  p3: string;
  focusItems: string[];
}> = {
  "roofing-solutions": {
    title: "Premium Roofing Solutions",
    heroDesc: "We provide state-of-the-art roofing systems designed for maximum structural integrity, thermal efficiency, and aesthetic excellence.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000",
    h1: "Where durability meets precision",
    p1: "Engineering a roof is more than just laying down materials — it's about creating a protective shield that ensures safety and longevity. Our roofing solutions are tailored to reflect your structural requirements, support local climate conditions, and express architectural elegance.",
    h2: "A structure shaped by your environment",
    p2: "We begin each project with a deep understanding of your site's specific challenges — wind loads, heavy monsoons, and thermal impacts. Every engineering decision is intentional, rooted in maximum protection and cost-efficiency.",
    h3: "Premium material selection",
    p3: "By combining premium materials like stone-coated steel and zinc-aluminum with our advanced installation techniques, we eliminate common issues such as leaks, rust, and heat retention.",
    focusItems: [
      "Structural integrity that withstands extreme weather conditions.",
      "Premium material selection (Zinc-aluminum & Stone-coated steel).",
      "Advanced thermal insulation for temperature control.",
      "Seamless rainwater integration and leak-proof overlapping."
    ]
  },
  "structural-steel": {
    title: "Structural Steel Design",
    heroDesc: "Expert fabrication and erection of heavy-duty steel frameworks engineered for commercial, industrial, and residential excellence.",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000",
    h1: "Uncompromising structural backbone",
    p1: "Structural steel is the foundation of modern architecture. We specialize in designing, fabricating, and assembling high-grade steel frameworks that deliver superior load-bearing capacity, spatial flexibility, and safety for large-scale buildings.",
    h2: "Precision fabrication & engineering",
    p2: "Every beam and column is fabricated under strict quality controls to ensure absolute dimensional accuracy. Our engineering team calculates wind shear, dead loads, and seismic factors to guarantee lifelong stability.",
    h3: "Built for complex architectures",
    p3: "Whether you are constructing a multi-story commercial complex or an expansive industrial warehouse, our structural solutions integrate seamlessly with modern architectural designs.",
    focusItems: [
      "High-grade steel fabrication adhering to international standards.",
      "Maximum load-bearing capacity for open-span designs.",
      "Rigorous anti-corrosion priming and protective coatings.",
      "Safe and rapid on-site erection by certified specialists."
    ]
  },
  "rainwater-harvesting": {
    title: "Rainwater Harvesting",
    heroDesc: "Advanced guttering and water management system installations engineered to protect your property and conserve vital resources.",
    image: "https://images.unsplash.com/photo-1620245451921-1632731804f8?q=80&w=2000",
    h1: "Smart water management systems",
    p1: "Heavy rainfall can pose severe risks to building foundations if not managed correctly. Our custom rainwater harvesting and seamless guttering systems are designed to safely channel high volumes of water away from your property.",
    h2: "Eco-friendly conservation",
    p2: "Beyond protection, our systems efficiently capture and filter rainwater for secondary usage, promoting sustainability and reducing reliance on municipal water sources for industrial or domestic needs.",
    h3: "Seamless integration",
    p3: "We custom-design gutters and downpipes to complement your roof’s aesthetic profile, ensuring hidden fastenings and flawless drainage flow during peak monsoons.",
    focusItems: [
      "High-capacity seamless aluminum and steel guttering.",
      "Advanced filtration units for clean water collection.",
      "Erosion prevention and structured underground drainage routing.",
      "Durable weather-resistant components built for heavy downpours."
    ]
  },
  "maintenance-repair": {
    title: "Maintenance & Repair",
    heroDesc: "Comprehensive roof inspections, structural tune-ups, and 24/7 emergency repair services to extend the lifespan of your property.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000",
    h1: "Proactive care and restoration",
    p1: "Even the highest-grade engineering installations require periodic upkeep. Our maintenance and repair division offers meticulous roof inspections, rust treatments, flashing renewals, and structural reinforcement.",
    h2: "Emergency response team",
    p2: "When unexpected storm damage or severe leaks occur, our rapid-response engineering crew is available to secure your premises, minimize internal damage, and execute swift permanent repairs.",
    h3: "Maximizing asset lifespan",
    p3: "Routine check-ups prevent minor wear and tear from escalating into costly structural failures. We ensure your roofing and steel systems remain in peak condition year-round.",
    focusItems: [
      "24/7 emergency leak sealing and storm damage repair.",
      "Thorough structural integrity and corrosion audits.",
      "Flashing, sealant, and damaged sheet replacements.",
      "Custom maintenance contracts for commercial and industrial facilities."
    ]
  }
};

export default function ServiceDetailsPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "roofing-solutions";
  
  // Fallback to roofing-solutions if slug doesn't match
  const service = servicesContent[slug] || servicesContent["roofing-solutions"];

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
              <Link href="/services" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10">
                <ArrowLeft size={18} className="text-white" />
              </Link>
              <div className="flex items-center gap-2 text-[13px] font-medium tracking-widest uppercase text-white/60">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                <span>/</span>
                <span className="text-white">{service.title}</span>
              </div>
            </div>

            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-medium leading-[1.1] text-white tracking-tight mb-8">
              {service.title.split(" ")[0]} <br />
              <span className="text-zinc-500">{service.title.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-zinc-400 text-[18px] md:text-[20px] font-light max-w-2xl leading-relaxed">
              {service.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA (Split Layout with Sticky Card) */}
      <section className="py-16 md:py-24 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto mb-10">
        
        {/* Massive Featured Image */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] md:rounded-[40px] overflow-hidden relative mb-16 md:mb-24"
        >
          <img 
            src={service.image} 
            alt={service.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Split Layout: Text on Left, Booking Card on Right */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start relative">
          
          {/* LEFT COLUMN: Editorial Text */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="w-full lg:w-[60%] flex flex-col"
          >
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.15] text-[#1a1a1a] tracking-tight mb-6">
              {service.h1}
            </h2>
            <p className="text-[16px] md:text-[18px] text-zinc-600 font-light leading-[1.7] mb-12 md:mb-16">
              {service.p1}
            </p>

            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.15] text-[#1a1a1a] tracking-tight mb-6">
              {service.h2}
            </h2>
            <p className="text-[16px] md:text-[18px] text-zinc-600 font-light leading-[1.7] mb-12 md:mb-16">
              {service.p2}
            </p>
            
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.15] text-[#1a1a1a] tracking-tight mb-6">
              {service.h3}
            </h2>
            <p className="text-[16px] md:text-[18px] text-zinc-600 font-light leading-[1.7] mb-10">
              {service.p3}
            </p>

            {/* Focus points bullet list */}
            <h3 className="text-[20px] font-medium text-[#1a1a1a] mb-6">What we focus on:</h3>
            <ul className="flex flex-col gap-4">
              {service.focusItems.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[16px] md:text-[17px] text-zinc-600 font-light leading-[1.6]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#cc3333] shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT COLUMN: Sticky Booking/Contact Card */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: 0.2 }}
            className="w-full lg:w-[40%] lg:sticky lg:top-32 h-fit"
          >
            <div className="border border-zinc-200 rounded-[32px] p-8 md:p-10 bg-white shadow-sm flex flex-col">
              
              <h3 className="text-[28px] md:text-[32px] font-medium leading-[1.2] text-[#1a1a1a] tracking-tight mb-8">
                Ready to secure your structural project?
              </h3>

              {/* Contact List */}
              <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-[#1a1a1a] mt-0.5 shrink-0" strokeWidth={1.5} />
                  <p className="text-[15px] md:text-[16px] text-zinc-600 font-light">
                    Haputale Road,<br /> Welimada, Sri Lanka.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-[#1a1a1a] shrink-0" strokeWidth={1.5} />
                  <a href="mailto:hello@vintaengineering.com" className="text-[15px] md:text-[16px] text-zinc-600 font-light hover:text-[#cc3333] transition-colors">
                    hello@vintaengineering.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-[#1a1a1a] shrink-0" strokeWidth={1.5} />
                  <a href="tel:+94701234562" className="text-[15px] md:text-[16px] text-zinc-600 font-light hover:text-[#cc3333] transition-colors">
                    +94 70 123 4562
                  </a>
                </div>
              </div>

              {/* Action Button */}
              <Link href="#" className="flex items-center justify-center gap-3 border border-[#1a1a1a] rounded-full text-[#1a1a1a] px-6 py-4 w-full hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300">
                <CornerDownRight size={18} strokeWidth={1.5} />
                <span className="text-[13px] font-semibold tracking-[0.15em] uppercase mt-0.5">
                  Book This Service
                </span>
              </Link>

            </div>
          </motion.div>

        </div>
      </section>

      <CTASection />
     
    </div>
  );
}