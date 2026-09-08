"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Products() {
  const [currentPage, setCurrentPage] = useState(0);

  // 🚨 18 WENAS PRODUCTS (Vinta Catalog) 🚨
  const productsList = [
    // Page 1 (0 to 5)
    { id: 1, title: "Clay Roofing Tiles", desc: "Classic aesthetic with excellent thermal insulation.", img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=600" },
    { id: 2, title: "Zinc Aluminum Sheets", desc: "High-durability, rust-proof weather resistance.", img: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=600" },
    { id: 3, title: "Stone Coated Steel", desc: "Lightweight, fire-resistant, and long-lasting.", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600" },
    { id: 4, title: "Concrete Roof Tiles", desc: "Heavy-duty structural integrity for severe weather.", img: "https://images.unsplash.com/photo-1620245451921-1632731804f8?q=80&w=600" },
    { id: 5, title: "Asphalt Shingles", desc: "Flexible, waterproof, and highly cost-effective.", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600" },
    { id: 6, title: "Polycarbonate Panels", desc: "UV-protected transparent sheets for natural lighting.", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600" },

    // Page 2 (6 to 11)
    { id: 7, title: "Heavy-Duty I-Beams", desc: "Hot-rolled structural steel for massive load bearing.", img: "https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=600" },
    { id: 8, title: "Galvanized C-Purlins", desc: "Cold-formed steel purlins for roof frameworks.", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600" },
    { id: 9, title: "Seamless Gutters", desc: "Custom-formed aluminium systems for heavy downpours.", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600" },
    { id: 10, title: "Acoustic Wood Panels", desc: "Premium interior wooden slats for sound absorption.", img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600" },
    { id: 11, title: "Exterior Steel Cladding", desc: "Durable and weather-resistant wall systems.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600" },
    { id: 12, title: "Industrial Floor Boards", desc: "Heavy-duty load bearing boards for mezzanine floors.", img: "https://images.unsplash.com/photo-1531834685032-c3ebbf00b106?q=80&w=600" },

    // Page 3 (12 to 17)
    { id: 13, title: "Automated Sliding Gates", desc: "High-torque motorized structural gate systems.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600" },
    { id: 14, title: "Welded Wire Mesh", desc: "High-tensile steel mesh for concrete reinforcement.", img: "https://images.unsplash.com/photo-1509390874189-d75fa6180a65?q=80&w=600" },
    { id: 15, title: "Reinforcing Steel Rebar", desc: "TMT ribbed bars for core structural stability.", img: "https://images.unsplash.com/photo-1523848309072-c28059bf0d19?q=80&w=600" },
    { id: 16, title: "Gypsum Ceiling Boards", desc: "Fire-resistant and smooth finishing interior boards.", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=600" },
    { id: 17, title: "Square Downpipes", desc: "Architecturally sleek downpipes for high-capacity drainage.", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600" },
    { id: 18, title: "High-Tensile Fasteners", desc: "Professional-grade self-drilling screws and sealants.", img: "https://images.unsplash.com/photo-1530982011887-36280af7300c?q=80&w=600" },
  ];

  // Pagination Logic (Eka page ekakata 6 gane penna slice karanawa)
  const itemsPerPage = 6;
  const totalPages = Math.ceil(productsList.length / itemsPerPage);
  
  // Dan inna page ekata adala products 6 witharak filter karagannawa
  const currentProducts = productsList.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Mouse/Touch drag karama slide wenna ooni paththa calculate karana function eka
  const handleDragEnd = (e: any, { offset }: any) => {
    if (offset.x < -50 && currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1); // Swipe Left -> Next Page
    } else if (offset.x > 50 && currentPage > 0) {
      setCurrentPage((prev) => prev - 1); // Swipe Right -> Previous Page
    }
  };

  return (
    <section className="py-16 md:py-20 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto font-sans overflow-hidden">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-16 gap-6 md:gap-8">
        
        {/* Left Side (Title) */}
        <div className="max-w-2xl w-full">
          <div className="flex items-center gap-1.5 mb-3 md:mb-4">
            <ChevronUp size={20} strokeWidth={2.5} className="text-[#cc3333]" />
            <p className="font-medium text-[13px] md:text-sm text-gray-600 uppercase tracking-widest">Products</p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-medium leading-[1.25] md:leading-[1.2] text-[#1a1a1a]">
            Built with quality materials <br className="hidden md:block"/> for lasting performance.
          </h2>
        </div>

        {/* Right Side (Description & Button) */}
        <div className="max-w-xl w-full flex flex-col items-start lg:items-end">
          <p className="text-gray-600 text-[15px] md:text-lg leading-[1.7] md:leading-[1.6] mb-6 md:mb-8 lg:text-right">
            We offer high-quality engineering products designed for strength, durability, and long-term performance, using reliable materials and modern standards.
          </p>
          <Link href="/products" className="w-full md:w-auto bg-[#1a1a1a] hover:bg-black text-white px-8 py-4 md:py-3 rounded-full text-[14px] md:text-[15px] font-medium transition-colors text-center">
            View More
          </Link>
        </div>
      </div>

      {/* Grid Section with Animation & Drag Support */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentPage} 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full cursor-grab active:cursor-grabbing"
        >
          {/* 🚨 Use 'currentProducts' instead of 'productsList' 🚨 */}
          {currentProducts.map((product) => (
            <motion.div 
              key={product.id} 
              className="bg-[#e8e9eb] rounded-[24px] p-5 md:p-6 relative h-[180px] md:h-[200px] overflow-hidden group flex items-center shadow-sm hover:shadow-md transition-all pointer-events-none md:pointer-events-auto"
            >
              {/* Card Content (Left Side) */}
              <div className="relative z-10 w-[60%] md:w-[55%] flex flex-col justify-center h-full">
                <h3 className="font-semibold text-[18px] md:text-[20px] text-[#1a1a1a] mb-1.5 md:mb-1 leading-tight">{product.title}</h3>
                <p className="text-[12px] md:text-[11px] text-gray-500 font-medium mb-3 md:mb-3 leading-relaxed pr-2 line-clamp-3 md:line-clamp-none">{product.desc}</p>
                
                <div className="h-[3px] w-12 md:w-14 bg-[#cc3333]"></div>
              </div>

              {/* Product Image (Right Side) */}
              <div className="absolute right-[-10%] md:right-[-15%] top-1/2 -translate-y-1/2 w-[65%] md:w-[75%] h-[120%] md:h-[130%] pointer-events-none">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover rounded-xl md:group-hover:scale-105 transition-transform duration-500 opacity-90 mix-blend-multiply" 
                />
              </div>

              {/* Bottom Right Black Pill */}
              <div className="absolute bottom-4 md:bottom-4 right-4 md:right-5 w-6 md:w-8 h-2.5 md:h-3 bg-[#1a1a1a] rounded-full transition-transform md:group-hover:scale-110"></div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Clickable Pagination Dots */}
      <div className="flex justify-center gap-3 mt-10 md:mt-12">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`rounded-full transition-all duration-300 ${
              currentPage === index 
                ? "w-3 h-3 md:w-2.5 md:h-2.5 bg-[#cc3333]" 
                : "w-2.5 h-2.5 md:w-2 md:h-2 bg-gray-300 hover:bg-gray-400" 
            }`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}