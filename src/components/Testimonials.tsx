"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const testimonialsData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      review: "Excellent service with professional and skilled work. Highly recommended!",
      name: "T.B Perera",
      role: "Software Engineer"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
      review: "The roofing installation was flawless. Their attention to detail and commitment to safety was impressive from start to finish.",
      name: "A. Silva",
      role: "Project Manager"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200",
      review: "Very reliable team! They finished the project ahead of schedule and the material quality exceeded my expectations.",
      name: "K. Nimal",
      role: "Homeowner"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200",
      review: "I've worked with many engineering firms, but Vinta stands out for their precision, structural integrity, and high-grade materials.",
      name: "S. Fernando",
      role: "Architect"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200",
      review: "Outstanding structural work. The team was highly coordinated on-site and the final output is extremely durable.",
      name: "D. Jayasuriya",
      role: "Site Supervisor"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
        
        {/* LEFT COLUMN: Text & Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-1 mb-6">
            <ChevronUp size={20} strokeWidth={2.5} className="text-[#cc3333]" />
            <p className="font-medium text-[15px] text-gray-600">Testimonials</p>
          </div>
          
          <h2 className="text-[36px] md:text-[46px] font-medium leading-[1.2] text-[#1a1a1a] mb-12 tracking-tight">
            Hear what our clients say <br className="hidden md:block"/> 
            about our reliable <br className="hidden md:block"/> 
            engineering services, quality <br className="hidden md:block"/> 
            workmanship, and timely <br className="hidden md:block"/> 
            project delivery.
          </h2>
          
          {/* Original Side-by-Side Red Stats Boxes */}
          <div className="flex w-full md:max-w-xl">
            <div className="flex-1 bg-[#cc3333] p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-white text-5xl md:text-6xl font-normal mb-2 tracking-tight">500+</h3>
              <p className="text-white/90 text-sm md:text-[15px] font-medium">Projects Completed</p>
            </div>
            <div className="flex-1 bg-[#b82d29] p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-white text-5xl md:text-6xl font-normal mb-2 tracking-tight">98%</h3>
              <p className="text-white/90 text-sm md:text-[15px] font-medium">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Original Layout Preserved (Card + Dark Avatar Pill on Right) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="flex gap-4 md:gap-6 h-full min-h-[400px]"
        >
          {/* Main Light Gray Review Card */}
          <div className="flex-1 bg-[#e8e9eb] rounded-[32px] p-8 md:p-12 flex flex-col overflow-hidden">
            
            <div className="flex gap-1.5 mb-8">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} className="fill-[#cc3333] text-[#cc3333]" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col flex-1"
              >
                <p className="text-[20px] md:text-[22px] text-[#1a1a1a] leading-[1.6] font-medium max-w-[95%]">
                  {testimonialsData[activeIndex].review}
                </p>

                <div className="mt-auto pt-8 flex flex-col items-end text-right">
                  <h4 className="text-[17px] font-medium text-[#1a1a1a]">
                    {testimonialsData[activeIndex].name}
                  </h4>
                  <p className="text-[15px] text-gray-500">
                    {testimonialsData[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
          </div>

          {/* Dark Avatar Selector Pill (Always on the right side) */}
          <div className="bg-[#1a1a1a] rounded-[40px] p-3 md:p-4 flex flex-col items-center justify-between gap-3 shadow-2xl shrink-0">
            {testimonialsData.map((testimonial, idx) => (
              <div 
                key={testimonial.id}
                onClick={() => setActiveIndex(idx)}
                className={`relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                  activeIndex === idx ? "border-white scale-110" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  fill 
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}