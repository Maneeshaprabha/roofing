"use client";

import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

// 100% Working Image Links
const slides = [
  {
    title: "Roofing Tiles",
    subtitle: "Premium quality for maximum durability.",
    img: "https://images.unsplash.com/photo-1567420102570-c2c7781e88af?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Steel Frameworks",
    subtitle: "Heavy-duty structural steel solutions.",
    img: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=800"
  },
  {
    title: "Rainwater Gutters",
    subtitle: "Seamless systems for extreme weather.",
    img: "https://images.unsplash.com/photo-1654531015087-8cc3d04d1b2d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80&w=800"
  }
];

export default function WhyChooseUs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const handleDragEnd = (e: any, { offset }: any) => {
    if (offset.x < -50 && currentIndex < slides.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (offset.x > 50 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
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
        
        {/* LEFT COLUMN: Animated Carousel Card */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          className="md:col-span-5 relative h-[550px] lg:h-[600px] w-full rounded-[32px] overflow-hidden bg-[#e8e9eb] group"
        >
          {/* Bottom Red Background */}
          <div className="absolute bottom-0 left-0 w-full h-[40%] bg-[#c23631] transition-transform duration-500 group-hover:h-[45%] pointer-events-none"></div>
          
          {/* Slider Container */}
          <motion.div 
            className="relative z-10 flex h-full cursor-grab active:cursor-grabbing"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            {slides.map((slide, idx) => (
              <div key={idx} className="w-full h-full shrink-0 flex flex-col p-8 lg:p-10 pb-16">
                
                <h3 className="text-4xl lg:text-[40px] font-semibold text-[#1a1a1a] mb-2 tracking-tight">
                  {slide.title}
                </h3>
                <p className="text-gray-500 text-[15px] font-medium">
                  {slide.subtitle}
                </p>
                <div className="h-[2px] w-20 bg-[#cc3333] mt-3"></div>

                {/* ✨ REMOVED WHITE BORDER: Clean Framed Image Area ✨ */}
                <div className="flex-1 relative mt-8 mb-4 w-full rounded-[20px] overflow-hidden shadow-2xl">
                  <img 
                    src={slide.img} 
                    alt={slide.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none" 
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Pagination Dots */}
          <div className="absolute z-20 bottom-8 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
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
            <div className="relative z-10 w-full md:w-1/2 pr-4">
              <h3 className="text-4xl lg:text-[42px] font-semibold text-[#1a1a1a] mb-2 tracking-tight leading-tight">
                Modern Home Exterior
              </h3>
              <p className="text-gray-500 text-[15px] font-medium mt-2">
                Weather-resistant and aesthetically pleasing.
              </p>
              <div className="h-[4px] w-40 bg-[#cc3333] mt-5"></div>
            </div>

            {/* ✨ REMOVED WHITE BORDER: Properly Framed Image on the Right Side ✨ */}
            <div className="absolute right-[-5%] lg:right-[5%] top-1/2 -translate-y-1/2 w-[55%] lg:w-[45%] h-[75%] rounded-[20px] overflow-hidden shadow-2xl">
              <img 
                src="https://plus.unsplash.com/premium_photo-1736194028960-1c65f630137d?q=80&w=687&auto=format&fit=crop" 
                alt="Modern Exterior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
          </div>

          {/* Bottom Paragraph Text */}
          <div className="pr-4 lg:pr-10">
            <p className="text-gray-600 text-lg leading-[1.7] font-light">
              Our roofing solutions are meticulously engineered to withstand severe weather conditions while providing superior structural integrity. Designed for both residential and commercial applications, Roofing roofing tiles offer an optimal balance of cost-effectiveness, aesthetic appeal, and long-lasting performance. We use premium-grade materials and advanced manufacturing techniques to ensure your roof remains strong and reliable for decades to come.
            </p>
          </div>

        </motion.div>
      </div>
      
    </section>
  );
}