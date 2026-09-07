"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#111] font-sans">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000" 
          alt="Roofing Background" 
          fill 
          className="object-cover" 
          priority
        />
        {/* Black Gradient Overlay (Starts deep black from left, fades to transparent) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
      </div>

      {/* Hero Content Section */}
      <div className="relative z-10 flex min-h-screen items-center px-6 sm:px-16 lg:px-32">
        
        {/* Text Container (Now directly on the gradient, not a box) */}
        <div className="max-w-[700px]">
          <h1 className="mb-6 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[56px]">
            Reliable Engineering &<br /> Technical Solutions
          </h1>
          
          <p className="mb-10 max-w-xl text-base font-light tracking-wide text-gray-300 md:text-lg">
            We deliver high-quality engineering services focused on durability,
            safety, and customer satisfaction.
          </p>

          {/* Custom "Work with me" Button exactly as you requested */}
          <button className="group flex items-center gap-4 rounded-full bg-white/20 py-1.5 pl-1.5 pr-8 text-white backdrop-blur-md transition-all hover:bg-white/30">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111111] transition-transform group-hover:scale-105">
              <ArrowUpRight size={20} className="text-white" strokeWidth={2} />
            </div>
            <span className="text-sm font-medium">Work with me</span>
          </button>
        </div>
        
      </div>

      {/* Bottom Red Borders */}
      <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col">
        <div className="h-8 w-full bg-[#cc3333]"></div>
        <div 
          className="h-8 w-full bg-[#8c2222]" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20L20 0Z' fill='rgba(0,0,0,0.15)' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        ></div>
      </div>
      
    </section>
  );
}