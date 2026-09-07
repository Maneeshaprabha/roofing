"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Dan 1st item eka open wela thiyenna haduwa

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const   } }
  };

  // Real, professional content for an Engineering & Roofing company
  const faqs = [
    {
      question: "What types of roofing materials do you recommend?",
      answer: "We primarily recommend high-grade Zinc Aluminum sheets and Stone Coated Steel for both residential and industrial projects. These materials offer exceptional durability, corrosion resistance, and thermal efficiency, ensuring long-lasting performance even under harsh weather conditions."
    },
    {
      question: "How long does a typical roofing or structural project take?",
      answer: "Project timelines vary based on the scale and complexity of the job. A standard residential roofing project usually takes 1 to 2 weeks, while large-scale commercial structural steel projects may take several months. We always provide a detailed and realistic timeline during our initial consultation."
    },
    {
      question: "Do you offer warranties on your engineering services?",
      answer: "Yes, absolutely. We provide comprehensive warranties on both our materials and our workmanship. Our structural installations and premium roofing products typically come with a 10 to 20-year warranty, giving you complete peace of mind."
    },
    {
      question: "Can you handle custom metal fabrication for unique designs?",
      answer: "Yes, our skilled engineering team specializes in custom metal fabrication. We work closely with architects, contractors, and homeowners to bring complex, bespoke structural designs to life with absolute precision and structural integrity."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 w-full bg-[#f0f1f4] font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* LEFT COLUMN: Header Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="flex flex-col"
        >
          <div className="flex items-center gap-1 mb-6">
            <ChevronUp size={20} strokeWidth={2.5} className="text-[#cc3333]" />
            <p className="font-medium text-[15px] text-gray-600">FAQ</p>
          </div>
          
          {/* Updated Heading for FAQ */}
          <h2 className="text-[36px] md:text-[46px] font-medium leading-[1.2] text-[#1a1a1a] tracking-tight max-w-xl">
            Frequently asked questions about our engineering processes, materials, and project timelines.
          </h2>
        </motion.div>

        {/* RIGHT COLUMN: Accordion Items */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index}
                className={`bg-white transition-all duration-300 overflow-hidden ${
                  isOpen ? "rounded-[32px]" : "rounded-full"
                }`}
              >
                {/* Header (Question) */}
                <div 
                  onClick={() => toggleFAQ(index)}
                  className={`flex justify-between items-center cursor-pointer select-none px-8 md:px-10 ${
                    isOpen ? "pt-8 pb-4" : "py-6"
                  }`}
                >
                  <h3 className="text-[16px] md:text-[17px] font-medium text-[#1a1a1a] pr-4">
                    {faq.question}
                  </h3>
                  
                  {/* Plus/Minus Icon */}
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e8e9eb] shrink-0 transition-transform duration-300">
                    {isOpen ? (
                      <Minus size={16} className="text-gray-500" strokeWidth={2.5} />
                    ) : (
                      <Plus size={16} className="text-white" strokeWidth={2.5} />
                    )}
                  </div>
                </div>

                {/* Animated Content (Answer) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 md:px-10 pb-8 pt-2">
                        <p className="text-[15px] text-gray-500 leading-[1.7] whitespace-pre-line font-light">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}