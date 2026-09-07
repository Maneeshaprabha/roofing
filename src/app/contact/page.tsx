"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ContactAboutPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Custom Dropdown State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedInquiry, setSelectedInquiry] = useState("");

  const inquiryOptions = [
    "Request a Quotation",
    "Roofing Consultation",
    "Structural Steel Inquiry",
    "General Information"
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-x-clip pb-24">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#050505] pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-16 lg:px-24 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white blur-[150px] opacity-[0.02] rounded-full pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-white/60"></span>
              <p className="text-white/80 font-medium tracking-widest uppercase text-sm">About & Contact</p>
            </div>
            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-medium leading-[1.1] text-white tracking-tight mb-8">
              Engineering the future, <br />
              <span className="text-zinc-500">together.</span>
            </h1>
            <p className="text-zinc-400 text-[18px] md:text-[20px] font-light max-w-2xl leading-relaxed">
              Learn about our journey in structural excellence and get in touch with our team to start planning your next architectural masterpiece.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto border-b border-zinc-100">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="pb-6 md:pb-10 mb-12"
        >
          <h2 className="text-[40px] md:text-[64px] font-semibold tracking-tighter text-[#1a1a1a]">
            Who we are.
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="w-full lg:w-[55%] flex flex-col"
          >
            <h3 className="text-[28px] md:text-[36px] font-medium leading-[1.2] text-[#1a1a1a] tracking-tight mb-6">
              A legacy built on precision, durability, and uncompromising quality.
            </h3>
            <p className="text-[16px] md:text-[18px] text-zinc-600 font-light leading-[1.7] mb-8">
              Founded with a vision to revolutionize the structural and roofing landscape in Sri Lanka, Vinta Engineering has grown into a trusted partner for commercial, industrial, and premium residential developments. We believe that a structure is only as good as the materials and minds behind it.
            </p>
            <p className="text-[16px] md:text-[18px] text-zinc-600 font-light leading-[1.7] mb-12">
              From heavy-duty steel fabrication to advanced rainwater harvesting and roofing solutions, our approach is rooted in deep material science and modern architectural aesthetics. Every project we undertake is an opportunity to push the boundaries of what is possible.
            </p>

            <div className="grid grid-cols-2 gap-x-8 gap-y-12 mt-4 pt-10 border-t border-zinc-200">
              <div className="flex flex-col">
                <span className="text-[48px] md:text-[56px] font-light tracking-tighter text-[#1a1a1a] leading-none mb-3">150+</span>
                <span className="text-[12px] font-semibold uppercase tracking-widest text-zinc-400 mb-1">Projects Delivered</span>
                <p className="text-[14px] text-zinc-500 font-light pr-4">Successfully engineered commercial and residential structures.</p>
              </div>
              <div className="flex flex-col">
                <span className="text-[48px] md:text-[56px] font-light tracking-tighter text-[#1a1a1a] leading-none mb-3">100%</span>
                <span className="text-[12px] font-semibold uppercase tracking-widest text-zinc-400 mb-1">Certified Quality</span>
                <p className="text-[14px] text-zinc-500 font-light pr-4">Using only globally certified steel and premium roofing materials.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="w-full lg:w-[45%]"
          >
            <div className="relative aspect-[4/5] md:aspect-[3/4] w-full rounded-[32px] md:rounded-[40px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1200" 
                alt="Engineering Excellence" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#050505]/10 mix-blend-overlay"></div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. CONTACT SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="pb-6 md:pb-10 mb-12"
        >
          <h2 className="text-[40px] md:text-[64px] font-semibold tracking-tighter text-[#1a1a1a]">
            Get in touch.
          </h2>
          <p className="text-[16px] md:text-[18px] text-zinc-500 font-light mt-4 max-w-2xl">
            Whether you need a quotation, material details, or structural consultation, our team is ready to assist you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left: Contact Form */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="w-full lg:w-[55%] bg-[#fafafa] border border-zinc-200 rounded-[32px] p-8 md:p-12"
          >
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[12px] font-semibold text-[#1a1a1a] uppercase tracking-widest pl-1">First Name</label>
                  <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full bg-transparent border-b border-zinc-300 text-zinc-900 px-1 py-3 outline-none focus:border-[#1a1a1a] transition-all placeholder:text-zinc-400"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[12px] font-semibold text-[#1a1a1a] uppercase tracking-widest pl-1">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full bg-transparent border-b border-zinc-300 text-zinc-900 px-1 py-3 outline-none focus:border-[#1a1a1a] transition-all placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[12px] font-semibold text-[#1a1a1a] uppercase tracking-widest pl-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-transparent border-b border-zinc-300 text-zinc-900 px-1 py-3 outline-none focus:border-[#1a1a1a] transition-all placeholder:text-zinc-400"
                />
              </div>

              {/* ✨ CUSTOM ANIMATED DROPDOWN ✨ */}
              <div className="flex flex-col gap-3 relative">
                <label className="text-[12px] font-semibold text-[#1a1a1a] uppercase tracking-widest pl-1">Inquiry Type</label>
                
                {/* Select Button */}
                <div 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full bg-transparent border-b ${isDropdownOpen ? 'border-[#1a1a1a]' : 'border-zinc-300'} px-1 py-3 cursor-pointer flex items-center justify-between transition-all`}
                >
                  <span className={selectedInquiry ? "text-zinc-900" : "text-zinc-400"}>
                    {selectedInquiry || "Select a topic..."}
                  </span>
                  <ChevronDown size={16} className={`text-zinc-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                </div>

                {/* Dropdown Options List */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <>
                      {/* Invisible backdrop to close dropdown when clicked outside */}
                      <div 
                        className="fixed inset-0 z-40"
                        onClick={() => setIsDropdownOpen(false)}
                      ></div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-full mt-2 bg-white border border-zinc-200 rounded-[16px] shadow-lg z-50 overflow-hidden"
                      >
                        {inquiryOptions.map((option) => (
                          <div
                            key={option}
                            onClick={() => {
                              setSelectedInquiry(option);
                              setIsDropdownOpen(false);
                            }}
                            className="px-5 py-3.5 text-[14px] text-zinc-600 hover:text-[#1a1a1a] hover:bg-[#fafafa] cursor-pointer transition-colors"
                          >
                            {option}
                          </div>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-[12px] font-semibold text-[#1a1a1a] uppercase tracking-widest pl-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project requirements..." 
                  className="w-full bg-transparent border-b border-zinc-300 text-zinc-900 px-1 py-3 outline-none focus:border-[#1a1a1a] transition-all resize-none custom-scrollbar placeholder:text-zinc-400"
                ></textarea>
              </div>

              <button className="mt-4 bg-[#1a1a1a] rounded-full text-white px-8 py-5 w-max hover:bg-[#333] transition-colors duration-300">
                <span className="text-[13px] font-semibold tracking-[0.2em] uppercase">
                  Submit Inquiry
                </span>
              </button>
            </form>
          </motion.div>

          {/* Right: Contact Details */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="w-full lg:w-[45%] flex flex-col pt-4"
          >
            <motion.div variants={fadeUp} className="flex flex-col border-b border-zinc-200 pb-12 mb-12">
              <span className="text-[12px] font-semibold text-zinc-400 uppercase tracking-widest mb-6">01 — Headquarters</span>
              <h4 className="text-[28px] md:text-[32px] font-medium text-[#1a1a1a] leading-tight mb-2">
                Haputale Road, <br />
                Welimada, Sri Lanka.
              </h4>
              <p className="text-[15px] text-zinc-500 font-light mt-4">
                Open Monday to Saturday, <br />
                8:00 AM — 6:00 PM
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col border-b border-zinc-200 pb-12 mb-12">
              <span className="text-[12px] font-semibold text-zinc-400 uppercase tracking-widest mb-6">02 — Direct Email</span>
              <a href="mailto:hello@vintaengineering.com" className="text-[24px] md:text-[28px] font-medium text-[#1a1a1a] hover:text-[#cc3333] transition-colors inline-block w-max">
                hello@vintaengineering.com
              </a>
              <p className="text-[15px] text-zinc-500 font-light mt-4">
                Our team typically replies within 24 hours.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col">
              <span className="text-[12px] font-semibold text-zinc-400 uppercase tracking-widest mb-6">03 — Phone Inquiries</span>
              <a href="tel:+94701234562" className="text-[28px] md:text-[36px] font-medium text-[#1a1a1a] hover:text-[#cc3333] transition-colors inline-block w-max tracking-tight">
                +94 70 123 4562
              </a>
            </motion.div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}