"use client";

import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Mail, Phone, CornerDownRight } from "lucide-react";
import Link from "next/link";

export default function ServiceDetailsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const   } }
  };

  return (
    // 'overflow-hidden' wenuwata 'overflow-x-clip' damma sticky wada karanna
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
                <span className="text-white">Roofing Solutions</span>
              </div>
            </div>

            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-medium leading-[1.1] text-white tracking-tight mb-8">
              Premium Roofing <br />
              <span className="text-zinc-500">Solutions.</span>
            </h1>
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
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000" 
            alt="Modern Roofing Structure" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Split Layout: Text on Left, Booking Card on Right */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start relative">
          
          {/* LEFT COLUMN: Editorial Text (This scrolls) */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="w-full lg:w-[60%] flex flex-col"
          >
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.15] text-[#1a1a1a] tracking-tight mb-6">
              Where durability meets precision
            </h2>
            <p className="text-[16px] md:text-[18px] text-zinc-600 font-light leading-[1.7] mb-12 md:mb-16">
              Engineering a roof is more than just laying down materials — it's about creating a protective shield that ensures safety and longevity. Our roofing solutions are tailored to reflect your structural requirements, support local climate conditions, and express architectural elegance. From standard residential homes to expansive industrial warehouses, every roof we build balances unyielding strength with aesthetic appeal.
            </p>

            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.15] text-[#1a1a1a] tracking-tight mb-6">
              A structure shaped by your environment
            </h2>
            <p className="text-[16px] md:text-[18px] text-zinc-600 font-light leading-[1.7] mb-12 md:mb-16">
              We begin each project with a deep understanding of your site's specific challenges — wind loads, heavy monsoons, and thermal impacts. Every engineering decision is intentional, rooted in maximum protection and cost-efficiency.
            </p>
            
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.15] text-[#1a1a1a] tracking-tight mb-6">
              Premium material selection
            </h2>
            <p className="text-[16px] md:text-[18px] text-zinc-600 font-light leading-[1.7] mb-10">
              By combining premium materials like stone-coated steel and zinc-aluminum with our advanced installation techniques, we eliminate common issues such as leaks, rust, and heat retention. Our process ensures that your investment is protected for decades.
            </p>
          </motion.div>

          {/* RIGHT COLUMN: Sticky Booking/Contact Card (This stays fixed) */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: 0.2 }}
            // Added h-fit to ensure the card doesn't stretch and sticky works perfectly
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