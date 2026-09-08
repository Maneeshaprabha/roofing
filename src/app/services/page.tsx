"use client";

import CTASection from "@/src/components/CTASection";
import { motion } from "framer-motion";
import { CornerDownRight } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  // ✨ FIXED: Replaced with your exact images ✨
  const servicesData = [
    {
      id: "01",
      slug: "roofing-solutions", 
      title: "Roofing Solutions",
      desc: "High-quality roofing services using durable zinc-aluminum and stone-coated steel. We ensure long-lasting protection, structural safety, and resistance to harsh weather conditions for effortless everyday living.",
      features: ["LEAK-PROOF INSTALLATION", "THERMAL EFFICIENCY", "20-YEAR WARRANTY"],
      img: "https://images.unsplash.com/photo-1617459973560-33aea09d1c22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80&w=600"
    },
    {
      id: "02",
      slug: "structural-steel",
      title: "Structural Steel Design",
      desc: "We design thoughtful commercial and residential structural spaces that align with your safety goals. Expert fabrication and installation of steel frameworks ensuring maximum load-bearing capacity.",
      features: ["HEAVY-DUTY FRAMEWORKS", "CUSTOM FABRICATION", "SEISMIC RESISTANCE"],
      img: "https://images.unsplash.com/photo-1562088997-ed2fbeef1cd6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80&w=600"
    },
    {
      id: "03",
      slug: "rainwater-harvesting",
      title: "Rainwater Harvesting",
      desc: "Advanced guttering and rainwater harvesting system installations designed to efficiently manage heavy rainfall and protect your property while promoting eco-friendly water management.",
      features: ["SEAMLESS GUTTERS", "HIGH-CAPACITY DRAINAGE", "ECO-FRIENDLY SYSTEM"],
      img: "https://img.magnific.com/free-photo/view-tank-container-water-storage_23-2151748314.jpg?t=st=1788892127~exp=1788895727~hmac=7999b009ba571f7ea34cc30c6cb297f6199de2dd1554be819dc6f67ba82a39c6&w=2000=80&w=600"
    },
    {
      id: "04",
      slug: "maintenance-repair",
      title: "Maintenance & Repair",
      desc: "Comprehensive roof inspection, maintenance, and emergency repair services to extend the lifespan of your engineering products and ensure continuous safety.",
      features: ["24/7 EMERGENCY SUPPORT", "DETAILED INSPECTIONS", "MATERIAL REPLACEMENTS"],
      img: "https://images.unsplash.com/photo-1634750009079-6bf7bede038b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80&w=600"
    }
  ];

  const workProcess = [
    { step: "01", title: "Consultation", desc: "We begin with a thorough inspection of your site to understand your requirements." },
    { step: "02", title: "Engineering", desc: "Our team drafts precise architectural plans optimized for durability and cost-efficiency." },
    { step: "03", title: "Fabrication", desc: "Using high-grade materials, our skilled engineers execute the project with precision." },
    { step: "04", title: "Quality Assurance", desc: "Every project undergoes strict safety and quality checks before final handover." }
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
              <p className="text-white/80 font-medium tracking-widest uppercase text-sm">Our Expertise</p>
            </div>
            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-medium leading-[1.1] text-white tracking-tight mb-8">
              Engineered for <br />
              <span className="text-zinc-500">strength & durability.</span>
            </h1>
            <p className="text-zinc-400 text-[18px] md:text-[20px] font-light max-w-2xl leading-relaxed">
              From advanced structural steel frameworks to premium roofing solutions, we deliver engineering excellence that stands the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICES LIST SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="pb-6 md:pb-10 border-b border-zinc-200 mb-12"
        >
          <h2 className="text-[50px] md:text-[72px] font-semibold tracking-tighter text-[#1a1a1a]">
            Our services.
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {servicesData.map((service) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 py-16 md:py-20 border-b border-zinc-200 items-center lg:items-stretch"
            >
              {/* Left Column: Text & Content */}
              <div className="w-full lg:w-[45%] flex flex-col justify-center">
                <h3 className="text-[36px] md:text-[44px] font-medium text-[#1a1a1a] mb-6 tracking-tight leading-[1.1]">
                  {service.title}
                </h3>
                <p className="text-[16px] md:text-[17px] text-zinc-700 font-light leading-[1.7] mb-8 pr-0 md:pr-10">
                  {service.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 md:gap-3 mb-10">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i} 
                      className="bg-[#f0f1f4] rounded-full text-[#1a1a1a] text-[11px] md:text-[12px] font-medium uppercase tracking-wide px-4 py-2"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Dynamic Link to Individual Service Page */}
                <Link 
                  href={`/services/${service.slug}`} 
                  className="flex items-center gap-3 border border-[#1a1a1a] rounded-full text-[#1a1a1a] px-7 py-3.5 w-max hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
                >
                  <CornerDownRight size={18} strokeWidth={1.5} />
                  <span className="text-[12px] md:text-[13px] font-semibold tracking-[0.15em] uppercase mt-0.5">
                    Learn More
                  </span>
                </Link>
              </div>

              {/* Right Column: Large Rounded Image */}
              <div className="w-full lg:w-[55%]">
                <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-[24px] lg:rounded-[32px] overflow-hidden group">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. HOW WE WORK PROCESS */}
      <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 md:mb-24">
            <h2 className="text-[36px] md:text-[52px] font-medium leading-[1.2] text-[#1a1a1a] tracking-tight">
              Our proven engineering <br className="hidden md:block" /> process.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 relative">
            <div className="hidden lg:block absolute top-[28px] left-0 w-full h-[1px] bg-zinc-200"></div>

            {workProcess.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative z-10 flex flex-col"
              >
                <div className="w-14 h-14 rounded-full bg-white border-[4px] border-[#fafafa] flex items-center justify-center text-[18px] font-medium text-[#1a1a1a] mb-6 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-[20px] font-medium text-[#1a1a1a] mb-4">{item.title}</h3>
                <p className="text-[15px] text-gray-500 font-light leading-[1.6]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
   
    </div>
  );
}