"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTASection() {
  return (
    // Top border ekak damma kalin section eken wen wela penna
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 w-full bg-white font-sans border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-20">

        {/* LEFT SIDE: Two-tone Large Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-3/5"
        >
          <h2 className="text-[40px] md:text-[52px] lg:text-[56px] font-medium leading-[1.15] tracking-tight text-[#1a1a1a]">
            Contact us today to discuss <br className="hidden md:block" />
            your project and <span className="text-gray-400">get a <br className="hidden lg:block" /> reliable engineering solution.</span>
          </h2>
        </motion.div>

        {/* RIGHT SIDE: Description & Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:w-2/5 flex flex-col items-start lg:items-start"
        >
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6] mb-8 max-w-[340px]">
            Get in touch with us today for quality and reliable engineering services.
          </p>

          {/* Premium Pill Button with Hover Effect */}
          <button className="flex items-center gap-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white p-2 pr-8 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
            {/* White Circle with Arrow */}
            <div className="bg-white text-[#1a1a1a] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight size={24} strokeWidth={2.5} />
            </div>
            
            <span className="text-[16px] md:text-[17px] font-medium tracking-wide">
              Get a Free Quote
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}