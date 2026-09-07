"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Services() {
  // Danata inna service eka track karanna state eka (0 idala 3 wenakan)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Services 4 data array eka
  const servicesData = [
    {
      id: "01",
      title: "Roofing Solutions",
      desc: "We provide high-quality roofing services using durable materials and skilled workmanship to ensure long-lasting protection, structural safety, and resistance to harsh weather conditions.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=600"
    },
    {
      id: "02",
      title: "Structural Steel",
      desc: "Expert fabrication and installation of structural steel frameworks for commercial and residential buildings, ensuring maximum load-bearing capacity and architectural integrity.",
      img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=600"
    },
    {
      id: "03",
      title: "Rainwater Systems",
      desc: "Advanced guttering and rainwater harvesting system installations designed to efficiently manage heavy rainfall and protect your property from water damage.",
      img: "https://images.unsplash.com/photo-1620245451921-1632731804f8?q=80&w=600"
    },
    {
      id: "04",
      title: "Maintenance & Repair",
      desc: "Comprehensive roof inspection, maintenance, and emergency repair services to extend the lifespan of your engineering products and keep your building safe.",
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600"
    }
  ];

  // Card eka click kalama ilagata thiyena service ekata yanna (4 ta giyama aye 1 ta enawa)
  const handleNextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut"  as const} }
  };

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Left Side Content (Static) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex items-center gap-2 mb-6">
            <ChevronUp size={20} strokeWidth={2.5} className="text-[#cc3333]" />
            <p className="font-medium text-[15px] text-gray-600">Services</p>
          </div>
          
          <h2 className="text-[40px] md:text-[52px] font-medium leading-[1.15] text-[#1a1a1a] mb-6 tracking-tight">
            Reliable engineering <br className="hidden md:block" />
            services focused on quality, <br className="hidden md:block" />
            safety, and efficiency.
          </h2>
          
          <p className="text-[19px] text-gray-600 leading-relaxed max-w-[90%] font-light">
            We create strong and reliable metal products using quality materials and precise workmanship.
          </p>
        </motion.div>

        {/* Right Side Interactive Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          {/* AnimatePresence eken parana data eka gihin aluth data eka smooth enawa */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              onClick={handleNextService}
              // cursor-pointer dapu nisa hover kalama click karanna puluwan kiyala penawa
              className="bg-[#f0f1f4] rounded-[32px] p-6 md:p-8 flex flex-col sm:flex-row items-center sm:items-stretch gap-8 w-full shadow-sm hover:shadow-md transition-shadow cursor-pointer group select-none"
              title="Click to see next service"
            >
              {/* Card Image */}
              <div className="relative w-full sm:w-[240px] h-[320px] shrink-0 rounded-[24px] overflow-hidden">
                <Image
                  src={servicesData[currentIndex].img} 
                  alt={servicesData[currentIndex].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Card Text Content */}
              <div className="flex flex-col justify-center py-2 md:py-4 relative">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-[32px] font-light text-gray-700 leading-none">
                    {servicesData[currentIndex].id}
                  </span>
                  <h3 className="text-[26px] font-medium text-[#1a1a1a] leading-none">
                    {servicesData[currentIndex].title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-[15px] leading-[1.7]">
                  {servicesData[currentIndex].desc}
                </p>

                {/* Podi hint text ekak yatin pennanawa click karanna kiyala */}
                <span className="absolute bottom-0 text-[12px] text-[#cc3333] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view next &rarr;
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Progress Dots (optional UX improvement) */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
            {servicesData.map((_, index) => (
              <div 
                key={index} 
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? "bg-[#cc3333]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}