"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder images for the gallery
const imagesSet1 = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=600",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
  "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=600",
];

const imagesSet2 = [
  "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=600",
  "https://images.unsplash.com/photo-1620245451921-1632731804f8?q=80&w=600",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600",
  "https://images.unsplash.com/photo-1600607687920-4e2a09be1587?q=80&w=600",
];

export default function InspirationSection() {
  return (
    // Dark background matching the image
    <section className="relative w-full h-[700px] bg-[#1a1a1a] overflow-hidden flex items-center justify-center">
      
      {/* Background Scrolling Columns */}
      <div className="absolute inset-0 flex gap-4 md:gap-6 px-4 md:px-8 py-4 opacity-70">
        
        {/* Column 1: Scrolling UP */}
        <motion.div 
          animate={{ y: ["0%", "-50%"] }} // Scroll to half, then jump back perfectly
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex flex-col gap-4 md:gap-6 w-1/2 md:w-1/4"
        >
          {/* Doubled the array to make the infinite loop seamless */}
          {[...imagesSet1, ...imagesSet1].map((img, i) => (
            <div key={i} className="relative w-full h-[220px] rounded-2xl overflow-hidden shrink-0">
              <Image src={img} alt="Project" fill className="object-cover" />
            </div>
          ))}
        </motion.div>

        {/* Column 2: Scrolling DOWN */}
        <motion.div 
          animate={{ y: ["-50%", "0%"] }} // Start from top, scroll down
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="hidden md:flex flex-col gap-4 md:gap-6 w-1/4"
        >
          {[...imagesSet2, ...imagesSet2].map((img, i) => (
            <div key={i} className="relative w-full h-[260px] rounded-2xl overflow-hidden shrink-0">
              <Image src={img} alt="Project" fill className="object-cover" />
            </div>
          ))}
        </motion.div>

        {/* Column 3: Scrolling UP */}
        <motion.div 
          animate={{ y: ["0%", "-50%"] }} 
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex flex-col gap-4 md:gap-6 w-1/2 md:w-1/4"
        >
          {[...imagesSet1, ...imagesSet1].reverse().map((img, i) => ( // Reversed for variety
            <div key={i} className="relative w-full h-[240px] rounded-2xl overflow-hidden shrink-0">
              <Image src={img} alt="Project" fill className="object-cover" />
            </div>
          ))}
        </motion.div>

        {/* Column 4: Scrolling DOWN */}
        <motion.div 
          animate={{ y: ["-50%", "0%"] }} 
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="hidden md:flex flex-col gap-4 md:gap-6 w-1/4"
        >
          {[...imagesSet2, ...imagesSet2].reverse().map((img, i) => (
            <div key={i} className="relative w-full h-[200px] rounded-2xl overflow-hidden shrink-0">
              <Image src={img} alt="Project" fill className="object-cover" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Edge Gradients for smooth fade out effect (Vignette) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#1a1a1a] via-transparent to-[#1a1a1a] z-10"></div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#1a1a1a] via-transparent to-[#1a1a1a] opacity-80 z-10"></div>

      {/* Center Static Card */}
      <div className="relative z-20 bg-[#e8e9eb] rounded-[32px] p-6 md:p-8 flex flex-col items-center text-center shadow-2xl max-w-sm w-[90%] md:w-auto border border-white/20">
        
        {/* Center Card Thumbnail */}
        <div className="relative w-[280px] h-[160px] rounded-2xl overflow-hidden mb-6 shadow-md">
          <Image 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600" 
            alt="Inspired Project" 
            fill 
            className="object-cover" 
          />
        </div>
        
        <h3 className="text-[22px] md:text-[26px] font-medium text-[#1a1a1a] mb-6 leading-[1.3]">
          Get inspired by our <br /> 1000+ project images
        </h3>
        
        <button className="bg-[#cc3333] hover:bg-[#b82d29] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
          Explore Images
        </button>
      </div>

    </section>
  );
}