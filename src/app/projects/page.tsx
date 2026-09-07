"use client";

import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import { CornerDownRight } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const projectsData = [
    {
      id: "01",
      slug: "cypso-industrial-warehouse",
      title: "Cypso Industrial Warehouse",
      category: "Structural Engineering",
      date: "August 15, 2025",
      desc: "Engineered and installed a heavy-duty structural steel framework, ensuring maximum load-bearing capacity and architectural stability for a large-scale commercial facility.",
      features: ["HEAVY STEEL FRAMEWORK", "LOAD-BEARING", "COMMERCIAL"],
      img: "https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=1200"
    },
    {
      id: "02",
      slug: "horizon-residential-villas",
      title: "Horizon Residential Villas",
      category: "Roofing Solutions",
      date: "September 22, 2025",
      desc: "Completed a comprehensive roof installation using premium zinc-aluminum sheets, delivering enhanced weather resistance, thermal efficiency, and striking modern aesthetics.",
      features: ["ZINC-ALUMINUM", "WEATHER RESISTANT", "RESIDENTIAL"],
      img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1200"
    },
    {
      id: "03",
      slug: "eco-tech-industrial-park",
      title: "Eco-Tech Industrial Park",
      category: "Rainwater Systems",
      date: "November 05, 2025",
      desc: "Designed and deployed a large-scale industrial rainwater harvesting and guttering system to efficiently manage heavy seasonal monsoons while promoting sustainability.",
      features: ["RAINWATER HARVESTING", "SEAMLESS GUTTERS", "ECO-FRIENDLY"],
      img: "https://images.unsplash.com/photo-1620245451921-1632731804f8?q=80&w=1200"
    },
    {
      id: "04",
      slug: "badulla-heritage-renovation",
      title: "Badulla Heritage Renovation",
      category: "Maintenance & Restoration",
      date: "January 18, 2026",
      desc: "Executed critical roof restorations and structural reinforcements to extend the lifespan, safety, and historical integrity of a prominent commercial property.",
      features: ["STRUCTURAL RESTORATION", "HERITAGE UPKEEP", "SAFETY AUDIT"],
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-hidden">
  

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#050505] pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-16 lg:px-24 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white blur-[150px] opacity-[0.03] rounded-full pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-white/60"></span>
              <p className="text-white/80 font-medium tracking-widest uppercase text-sm">Our Portfolio</p>
            </div>
            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-medium leading-[1.1] text-white tracking-tight mb-8">
              Excellence built into <br />
              <span className="text-zinc-500">every single structure.</span>
            </h1>
            <p className="text-zinc-400 text-[18px] md:text-[20px] font-light max-w-2xl leading-relaxed">
              Explore our completed engineering, roofing, and structural steel projects delivered with uncompromising quality and precision across Sri Lanka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PROJECTS LIST SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="pb-6 md:pb-10 border-b border-zinc-200 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <h2 className="text-[50px] md:text-[72px] font-semibold tracking-tighter text-[#1a1a1a]">
            Featured works.
          </h2>
          <p className="text-zinc-500 text-[16px] font-light pb-2">
            Showing {projectsData.length} successfully engineered projects
          </p>
        </motion.div>

        <div className="flex flex-col">
          {projectsData.map((project) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 py-16 md:py-20 border-b border-zinc-200 items-center lg:items-stretch"
            >
              
              {/* Left Column: Image */}
              <div className="w-full lg:w-[55%]">
                <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-[24px] lg:rounded-[32px] overflow-hidden group">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column: Text & Content */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[13px] font-medium text-[#cc3333] uppercase tracking-widest">{project.category}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                  <span className="text-[13px] text-zinc-400 font-light">{project.date}</span>
                </div>

                <h3 className="text-[32px] md:text-[42px] font-medium text-[#1a1a1a] mb-6 tracking-tight leading-[1.1]">
                  {project.title}
                </h3>
                <p className="text-[16px] md:text-[17px] text-zinc-700 font-light leading-[1.7] mb-8 pr-0 md:pr-10">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
                  {project.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="bg-[#f0f1f4] rounded-full text-[#1a1a1a] text-[11px] md:text-[12px] font-medium uppercase tracking-wide px-4 py-2"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* FIXED: Dynamic Link pointing to /projects/[slug] */}
                <Link 
                  href={`/projects/${project.slug}`} 
                  className="flex items-center gap-3 border border-[#1a1a1a] rounded-full text-[#1a1a1a] px-7 py-3.5 w-max hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
                >
                  <CornerDownRight size={18} strokeWidth={1.5} />
                  <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.15em] uppercase mt-0.5">
                    View Case Study
                  </span>
                </Link>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
     
    </div>
  );
}