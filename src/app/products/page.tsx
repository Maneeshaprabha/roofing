"use client";

import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { CornerDownRight, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const categories = ["All", "Roofing Sheets", "Structural Steel", "Rainwater Systems", "Accessories"];

  const productsData = [
    {
      id: 1,
      title: "Zinc-Aluminium Roofing Sheets",
      category: "Roofing Sheets",
      desc: "High-grade alloy coated steel sheets providing superior corrosion resistance and long-lasting durability for modern roofs.",
      specs: "Thickness: 0.40mm - 0.50mm | Length: Custom",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=1000"
    },
    {
      id: 2,
      title: "Stone-Coated Steel Tiles",
      category: "Roofing Sheets",
      desc: "Combines the strength of steel with the natural aesthetic beauty of stone chips. Excellent sound and heat insulation.",
      specs: "Weight: Super lightweight | Warranty: 25 Years",
      img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1000"
    },
    {
      id: 3,
      title: "Heavy-Duty Steel I-Beams",
      category: "Structural Steel",
      desc: "Hot-rolled structural steel beams engineered to support massive load-bearing requirements in commercial and industrial construction.",
      spec: "Grade: ASTM A36 / SS400",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000"
    },
    {
      id: 4,
      title: "Seamless Aluminium Gutters",
      category: "Rainwater Systems",
      desc: "Custom-formed seamless gutter systems designed to handle heavy tropical downpours without leaking or sagging.",
      specs: "Material: Heavy gauge aluminum",
      img: "https://images.unsplash.com/photo-1620245451921-1632731804f8?q=80&w=1000"
    },
    {
      id: 5,
      title: "Square Downpipe Networks",
      category: "Rainwater Systems",
      desc: "Architecturally sleek square downpipes engineered for high-capacity drainage and secure wall mounting.",
      specs: "Finish: Powder coated matte black",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000"
    },
    {
      id: 6,
      title: "C-Purlins & Z-Purlins",
      category: "Structural Steel",
      desc: "Cold-formed steel purlins offering exceptional structural support for roof and wall cladding systems.",
      specs: "Coating: Galvanized anti-rust",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000"
    },
    {
      id: 7,
      title: "Polycarbonate Skylight Sheets",
      category: "Accessories",
      desc: "High-transparency corrugated polycarbonate panels allowing natural daylight into industrial warehouses while blocking UV rays.",
      specs: "Light Transmission: Up to 90%",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000"
    },
    {
      id: 8,
      title: "Roof Waterproofing Sealants & Fasteners",
      category: "Accessories",
      desc: "Professional-grade self-drilling screws with EPDM washers and high-elasticity waterproof sealants for leak-free joints.",
      specs: "Durability: Weatherproof seal",
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000"
    }
  ];

  const filteredProducts = activeCategory === "All" 
    ? productsData 
    : productsData.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-x-clip">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#050505] pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-16 lg:px-24 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white blur-[150px] opacity-[0.03] rounded-full pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-white/60"></span>
              <p className="text-white/80 font-medium tracking-widest uppercase text-sm">Our Catalog</p>
            </div>
            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-medium leading-[1.1] text-white tracking-tight mb-8">
              Engineered materials <br />
              <span className="text-zinc-500">built to last.</span>
            </h1>
            <p className="text-zinc-400 text-[18px] md:text-[20px] font-light max-w-2xl leading-relaxed">
              Discover our certified high-grade roofing sheets, structural steel frameworks, and rainwater management accessories designed for architectural longevity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. FILTER & PRODUCTS SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        
        {/* Title & Filter Bar Container */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b border-zinc-200 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-[50px] md:text-[72px] font-semibold tracking-tighter text-[#1a1a1a]">
              Our products.
            </h2>
          </motion.div>

          {/* Filter Buttons Pill Bar */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 custom-scrollbar w-full md:w-auto"
          >
            <div className="flex items-center gap-1.5 bg-[#f0f1f4] p-1.5 rounded-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-[13px] font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-[#1a1a1a] text-white shadow-md"
                      : "text-zinc-600 hover:text-[#1a1a1a]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Products Grid with Framer Motion AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={product.id}
                className="bg-[#fafafa] border border-zinc-200/80 rounded-[32px] overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-all duration-500"
              >
                {/* Product Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.img} 
                    alt={product.title} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-[#1a1a1a] text-[11px] font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-[22px] font-medium text-[#1a1a1a] mb-3 leading-snug">
                      {product.title}
                    </h3>
                    <p className="text-[15px] text-zinc-600 font-light leading-relaxed mb-6">
                      {product.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-zinc-200/60 flex items-center justify-between">
                    <span className="text-[12px] text-zinc-500 font-medium tracking-wide">
                      {product.specs}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:border-[#1a1a1a] transition-all duration-300">
                      <CornerDownRight size={16} className="text-[#1a1a1a] group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </section>

      <CTASection />
    
    </div>
  );
}