"use client";

import CTASection from "@/src/components/CTASection";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";

export default function GalleryPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  // 🚨 FIXED: Removed `y: 30` to fix the browser CSS columns bug 🚨
  const itemVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

// Pure Visual Gallery Data (Updated Working Links)
  const galleryImages = [
    { id: 1, title: "Industrial Warehouse Steel Framework", category: "Structural", src: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1200" },
    { id: 2, title: "Modern Residential Roofing", category: "Roofing", src: "https://images.unsplash.com/photo-1719887805632-de5be825f72b?q=80&w=1200&auto=format&fit=crop" },
    { id: 3, title: "Commercial Rainwater System", category: "Drainage", src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200" },
    { id: 4, title: "High-rise I-Beam Construction", category: "Structural", src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800" },
    { id: 5, title: "Heritage Building Restoration", category: "Restoration", src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800" },
    { id: 6, title: "Zinc-Alum Roof Installation", category: "Roofing", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200" },
    { id: 7, title: "Mezzanine Floor Boards", category: "Flooring", src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800" },
    { id: 8, title: "Heavy Duty Factory Setup", category: "Industrial", src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80"},
    { id: 9, title: "Automated Gate Framework", category: "Structures", src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800" }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-x-clip">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#050505] pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-16 lg:px-24 rounded-b-[40px] md:rounded-b-[60px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white blur-[150px] opacity-[0.03] rounded-full pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-white/60"></span>
              <p className="text-white/80 font-medium tracking-widest uppercase text-sm">Visual Showcase</p>
            </div>
            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-medium leading-[1.1] text-white tracking-tight mb-8">
              Engineering in <br />
              <span className="text-zinc-500">pictures.</span>
            </h1>
            <p className="text-zinc-400 text-[18px] md:text-[20px] font-light max-w-2xl leading-relaxed">
              A curated gallery highlighting our precision, scale, and architectural aesthetic across Sri Lanka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MASONRY GALLERY SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8"
        >
          {galleryImages.map((image) => (
            <motion.div 
              key={image.id}
              variants={itemVariant}
              className="relative rounded-[24px] overflow-hidden group cursor-pointer break-inside-avoid inline-block w-full mb-6 md:mb-8 bg-zinc-100"
            >
              {/* Image */}
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-auto object-cover transform transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                
                {/* Maximize Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <Maximize2 size={16} className="text-white" />
                </div>

                <span className="text-[#cc3333] text-[11px] font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  {image.category}
                </span>
                <h3 className="text-white text-[20px] md:text-[24px] font-medium leading-tight opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </section>

      <CTASection />
      
    </div>
  );
}