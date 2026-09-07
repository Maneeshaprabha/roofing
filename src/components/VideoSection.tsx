"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    // Padding, max-width okkoma ayin karala w-full damma edge-to-edge yanna
    <section className="w-full mt-10">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        // Rounded corners ayin karala, loku height ekak damma (h-[60vh] to 85vh)
        className="relative w-full h-[50vh] md:h-[70vh] lg:h-[85vh] overflow-hidden group bg-[#111] cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        {!isPlaying ? (
          <>
            {/* Video Thumbnail Image */}
            <Image 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000" 
              alt="Video Thumbnail" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out" 
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
            
            {/* Play Button (Glassmorphism Effect) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 bg-white/20 backdrop-blur-md rounded-full text-white group-hover:bg-[#cc3333] group-hover:scale-110 transition-all duration-500 shadow-2xl">
                <Play fill="currentColor" className="w-8 h-8 md:w-12 md:h-12 ml-2" />
              </div>
            </div>
          </>
        ) : (
          /* Actual Video Player */
          <video 
            src="/demo-video.mp4" 
            controls
            autoPlay
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        )}
      </motion.div>
    </section>
  );
}