"use client";

import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import Image from "next/image";

export default function WorkWeveDone() {
  // Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // Dummy data for the 6 cards exactly matching the design
  const projects = Array(6).fill({
    date: "October 12, 2025",
    category: "Engineering",
    title: "Welimada Sathosa",
    desc: "Custom metal fabrication work completed with precision and durability.",
    // Placeholder image matching a similar house vibe
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800" 
  });

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto font-sans">
      
      {/* Header Section (Centered) */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
      >
        <div className="flex items-center gap-1 mb-4">
          <ChevronUp size={20} strokeWidth={2.5} className="text-[#cc3333]" />
          <p className="font-medium text-[15px] text-gray-600">Work We've Done</p>
        </div>
        
        <h2 className="text-[36px] md:text-[44px] font-medium leading-[1.2] text-[#1a1a1a] mb-6 tracking-tight">
          We bring engineering ideas to life with precision.
        </h2>
        
        <p className="text-[17px] text-gray-600 leading-[1.7] font-light">
          We have successfully completed a range of engineering projects by focusing on quality,
          safety, and reliable execution. Each project reflects our commitment to strong
          workmanship and customer satisfaction.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={fadeUp}
            className="bg-[#fafafa] rounded-[24px] overflow-hidden flex flex-col group cursor-pointer border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Card Image */}
            <div className="relative w-full aspect-[4/3] overflow-hidden">
              <Image 
                src={project.img}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            
            {/* Card Content */}
            <div className="p-6 md:p-8 flex flex-col flex-1">
              
              {/* Meta Row (Date & Tag) */}
              <div className="flex justify-between items-center mb-4">
                <span className="text-[14px] text-gray-500 font-medium">
                  {project.date}
                </span>
                <span className="bg-[#cc3333] text-white text-[12px] font-medium px-3 py-1 rounded-[6px]">
                  {project.category}
                </span>
              </div>
              
              {/* Title & Description */}
              <h3 className="text-[22px] font-medium text-[#1a1a1a] mb-2">
                {project.title}
              </h3>
              <p className="text-[14px] text-gray-500 leading-relaxed font-light">
                {project.desc}
              </p>
              
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}