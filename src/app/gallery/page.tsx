"use client";

import CTASection from "@/src/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X } from "lucide-react";
import { useState, useEffect } from "react";

// Gallery Items Interface
interface GalleryItem {
  id: number;
  title: string;
  category: string;
  src: string;
  desc: string;
  subImages: string[];
}

export default function GalleryPage() {
  // Modal eke penwana item eka track karanna
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Popup eka open wela thiyeddi back page eka scroll wena eka nawaththanna
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  // ✨ Gallery Data + Extra Images & Descriptions for the Popup ✨
  const galleryImages: GalleryItem[] = [
    { 
      id: 1, 
      title: "Industrial Warehouse Steel Framework", 
      category: "Structural", 
      src: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=1200",
      desc: "A massive spanning steel framework designed to support multi-ton gantry cranes and heavy industrial loads. This project involved precise hot-rolled steel fabrication and on-site assembly.",
      subImages: [
        "https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=800",
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800",
        "https://images.unsplash.com/photo-1531834685032-c3ebbf00b106?q=80&w=800"
      ]
    },
    { 
      id: 2, 
      title: "Modern Residential Roofing", 
      category: "Roofing", 
      src: "https://images.unsplash.com/photo-1719887805632-de5be825f72b?q=80&w=1200&auto=format&fit=crop",
      desc: "High-end residential roofing project using premium zinc-aluminum sheets. The design focused on maximum weather resistance while maintaining a striking modern aesthetic.",
      subImages: [
        "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=800",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
      ]
    },
    { 
      id: 3, 
      title: "Commercial Rainwater System", 
      category: "Drainage", 
      src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200",
      desc: "Engineered seamless aluminium guttering and square downpipe networks for a commercial tech park to efficiently manage heavy tropical monsoons.",
      subImages: [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800",
        "https://images.unsplash.com/photo-1562545714-62c15e7fdf9e?q=80&w=800"
      ]
    },
    { 
      id: 4, 
      title: "High-rise I-Beam Construction", 
      category: "Structural", 
      src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800",
      desc: "Installation of heavy-duty steel I-Beams for a multi-story commercial complex, providing the core structural stability required for the building.",
      subImages: [
        "https://images.unsplash.com/photo-1671022442106-c787685d9fed?q=80&w=800",
        "https://images.unsplash.com/photo-1509390874189-d75fa6180a65?q=80&w=800"
      ]
    },
    { 
      id: 5, 
      title: "Heritage Building Restoration", 
      category: "Restoration", 
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
      desc: "Careful structural reinforcement and roofing restoration of a heritage property, blending modern safety standards with historical architectural preservation.",
      subImages: [
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800",
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800" // Fallback similar image
      ]
    },
    { 
      id: 6, 
      title: "Zinc-Alum Roof Installation", 
      category: "Roofing", 
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
      desc: "Large scale installation of AZ150 coated Zinc-Aluminium roofing sheets over a continuous span warehouse, maximizing thermal efficiency.",
      subImages: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
        "https://images.unsplash.com/photo-1632255758400-d51330d2279a?q=80&w=800"
      ]
    },
    { 
      id: 7, 
      title: "Mezzanine Floor Boards", 
      category: "Flooring", 
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
      desc: "Installation of high-density industrial floor boards supported by a galvanized C-Purlin network to create a heavy-duty mezzanine storage area.",
      subImages: [
        "https://images.unsplash.com/photo-1531834685032-c3ebbf00b106?q=80&w=800",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800"
      ]
    },
    { 
      id: 8, 
      title: "Heavy Duty Factory Setup", 
      category: "Industrial", 
      src: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80",
      desc: "Comprehensive engineering execution involving roofing, ventilation, structural reinforcement, and protective cladding for a large manufacturing plant.",
      subImages: [
        "https://images.unsplash.com/photo-1605701249987-f0bb9b505d06?q=80&w=800",
        "https://img.magnific.com/free-photo/large-steel-factory-warehouse_1127-3285.jpg?t=st=1788894763&w=800"
      ]
    },
    { 
      id: 9, 
      title: "Automated Gate Framework", 
      category: "Structures", 
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
      desc: "Design and fabrication of a high-torque automated sliding gate system using heavy-gauge galvanized box sections for an industrial estate.",
      subImages: [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-x-clip">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#050505] pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-16 lg:px-24 rounded-b-[40px] md:rounded-b-[60px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white blur-[150px] opacity-[0.03] rounded-full pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-white/60"></span>
              <p className="text-white/80 font-medium tracking-widest uppercase text-sm">Visual Showcase</p>
            </div>
            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-medium leading-[1.1] text-white tracking-tight mb-8">
              Engineering in <br />
              <span className="text-zinc-500">pictures.</span>
            </h1>
            <p className="text-zinc-400 text-[18px] md:text-[20px] font-light max-w-2xl leading-relaxed">
              A curated gallery highlighting our precision, scale, and architectural aesthetic across Sri Lanka.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MASONRY GALLERY SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8"
        >
          {galleryImages.map((image) => (
            <motion.div 
              key={image.id}
              variants={itemVariant}
              onClick={() => setSelectedItem(image)} // Click kalama state eka update wenawa
              className="relative rounded-[24px] overflow-hidden group cursor-pointer break-inside-avoid inline-block w-full mb-6 md:mb-8 bg-zinc-100"
            >
              {/* Main Thumb Image */}
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-auto object-cover transform transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                
                {/* Maximize Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <Maximize2 size={16} className="text-white" />
                </div>

                <span className="text-[#cc3333] text-[11px] font-bold uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  {image.category}
                </span>
                <h3 className="text-white text-[20px] md:text-[24px] font-medium leading-tight opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                  {image.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </section>

      <CTASection />

      {/* ✨ 3. THE POPUP MODAL (High-End Magazine Layout) ✨ */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)} // Click outside to close
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the white box
              className="bg-white w-full max-w-6xl max-h-[90vh] md:h-[80vh] rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col md:flex-row relative shadow-2xl"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)} 
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-10 h-10 bg-white/80 backdrop-blur-md text-[#1a1a1a] rounded-full flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors border border-zinc-200 shadow-sm"
              >
                <X size={20} strokeWidth={2} />
              </button>

              {/* Left Side: Details Panel */}
              <div className="w-full md:w-[35%] bg-[#fafafa] p-8 md:p-12 flex flex-col border-r border-zinc-200 shrink-0 overflow-y-auto custom-scrollbar">
                <div className="mt-8 md:mt-12">
                  <span className="text-[#cc3333] text-[12px] font-bold uppercase tracking-widest mb-4 block">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-[32px] md:text-[40px] font-medium leading-[1.1] text-[#1a1a1a] tracking-tight mb-6">
                    {selectedItem.title}
                  </h3>
                  <div className="w-12 h-[3px] bg-[#cc3333] mb-8"></div>
                  <p className="text-zinc-500 text-[16px] leading-[1.8] font-light">
                    {selectedItem.desc}
                  </p>
                </div>
              </div>

              {/* Right Side: Scrollable Images Grid */}
              <div className="w-full md:w-[65%] overflow-y-auto p-4 md:p-8 custom-scrollbar bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Hero Main Image (Spans Full Width) */}
                  <div className="md:col-span-2 rounded-[16px] overflow-hidden border border-zinc-100">
                    <img 
                      src={selectedItem.src} 
                      alt="Main Project" 
                      className="w-full h-[300px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700" 
                    />
                  </div>

                  {/* Sub Images Array mapped dynamically */}
                  {selectedItem.subImages.map((imgUrl, index) => (
                    <div key={index} className="rounded-[16px] overflow-hidden border border-zinc-100">
                      <img 
                        src={imgUrl} 
                        alt={`Project View ${index + 1}`} 
                        className="w-full h-[250px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-700" 
                      />
                    </div>
                  ))}
                  
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}