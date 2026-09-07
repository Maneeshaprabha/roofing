"use client";

import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import Image from "next/image";

export default function WhyChooseUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut"  as const} },
  };

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto font-sans">
      
      {/* Header Section */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <div className="flex items-center gap-1 text-[#cc3333] mb-4">
          <ChevronUp size={20} strokeWidth={2.5} />
          <p className="font-medium text-sm text-black">Why Choose Us</p>
        </div>
        <h2 className="text-3xl md:text-[44px] font-medium mb-16 max-w-4xl leading-[1.2] text-[#1a1a1a]">
          We provide cost-effective engineering solutions without compromising on performance, quality, or reliability.
        </h2>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        
        {/* LEFT COLUMN: Tall Card */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          className="md:col-span-5 relative h-[550px] lg:h-[600px] w-full rounded-[32px] overflow-hidden bg-[#e8e9eb] group"
        >
          {/* Bottom Red Background */}
          <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#c23631] transition-transform duration-500 group-hover:h-[45%]"></div>
          
          <div className="relative z-10 flex flex-col h-full p-8 lg:p-10">
            {/* Card Texts */}
            <h3 className="text-4xl lg:text-[40px] font-semibold text-[#1a1a1a] mb-2 tracking-tight">Roofing Tiles</h3>
            <p className="text-gray-500 text-[15px] font-medium">Premium quality for maximum durability.</p>
            {/* Thin Red Line */}
            <div className="h-[2px] w-20 bg-[#cc3333] mt-3"></div>

            {/* Tile Image */}
            <div className="flex-1 relative mt-8 flex items-center justify-center">
              <Image 
                src="https://images.unsplash.com/photo-1620245451921-1632731804f8?q=80&w=600" 
                alt="Black Roofing Tile" 
                fill 
                className="object-contain mix-blend-multiply drop-shadow-2xl hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-auto pb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-black/30"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-black/30"></div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Wide Card + Paragraph */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          className="md:col-span-7 flex flex-col gap-10"
        >
          {/* Top Wide Card */}
          <div className="relative h-[300px] w-full rounded-[32px] bg-[#e8e9eb] overflow-hidden flex items-center p-8 lg:p-12">
            
            {/* Text Side (Left half) */}
            <div className="relative z-10 w-full md:w-3/5">
              <h3 className="text-4xl lg:text-[42px] font-semibold text-[#1a1a1a] mb-2 tracking-tight">Roofing Tiles</h3>
              <p className="text-gray-500 text-[15px] font-medium">Weather-resistant and aesthetically pleasing.</p>
              {/* Thick Red Line */}
              <div className="h-[4px] w-40 bg-[#cc3333] mt-4"></div>
            </div>

            {/* Stacked Tiles Image (Right half) */}
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] h-[120%]">
              <Image 
                src="https://images.unsplash.com/photo-1620245451921-1632731804f8?q=80&w=600" 
                alt="Stacked Tiles" 
                fill 
                className="object-contain mix-blend-multiply drop-shadow-xl hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>

          {/* Bottom Paragraph Text */}
          <div className="pr-4 lg:pr-10">
            <p className="text-gray-600 text-lg leading-[1.7] font-light">
              Our roofing solutions are meticulously engineered to withstand severe weather conditions while providing superior structural integrity. Designed for both residential and commercial applications, Vinta roofing tiles offer an optimal balance of cost-effectiveness, aesthetic appeal, and long-lasting performance. We use premium-grade materials and advanced manufacturing techniques to ensure your roof remains strong and reliable for decades to come.
            </p>
          </div>

        </motion.div>
      </div>
      
    </section>
  );
}