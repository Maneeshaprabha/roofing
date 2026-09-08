"use client";

import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function BlogsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // Dummy Blog Data
  const blogPosts = [
    {
      id: 1,
      slug: "future-of-structural-steel-in-tropical-climates",
      title: "The Future of Structural Steel in Tropical Climates",
      category: "Engineering Insights",
      date: "September 02, 2026",
      excerpt: "An in-depth look at how modern hot-rolled steel frameworks are being engineered to resist high humidity, saline environments, and extreme monsoons in South Asia.",
      readTime: "6 Min Read",
      img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000",
      featured: true
    },
    {
      id: 2,
      slug: "why-zinc-aluminium-outperforms-traditional-roofing",
      title: "Why Zinc-Aluminium Outperforms Traditional Roofing",
      category: "Material Science",
      date: "August 28, 2026",
      excerpt: "Comparing the thermal efficiency, corrosion resistance, and structural dead-load benefits of AZ150 coated sheets against standard clay tiles.",
      readTime: "4 Min Read",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=1000"
    },
    {
      id: 3,
      slug: "rainwater-harvesting-industrial-parks",
      title: "Rainwater Harvesting: A Necessity for Industrial Parks",
      category: "Sustainability",
      date: "August 15, 2026",
      excerpt: "How implementing high-capacity seamless guttering and underground reservoirs can save large-scale factories thousands in utility costs.",
      readTime: "5 Min Read",
      img: "https://images.unsplash.com/photo-1620245451921-1632731804f8?q=80&w=1000"
    },
    {
      id: 4,
      slug: "5-signs-commercial-roof-needs-restoration",
      title: "5 Signs Your Commercial Roof Needs Immediate Restoration",
      category: "Maintenance",
      date: "July 30, 2026",
      excerpt: "Don't wait until the next monsoon. Learn how to identify early signs of structural sagging, fastener corrosion, and hidden leaks.",
      readTime: "4 Min Read",
      img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000"
    },
    {
      id: 5,
      slug: "understanding-load-bearing-capacities",
      title: "Understanding Load-Bearing Capacities in Warehouses",
      category: "Engineering Insights",
      date: "July 12, 2026",
      excerpt: "A breakdown of how wind shear, dead loads, and live loads dictate the selection between C-Purlins and heavy-duty I-Beams.",
      readTime: "7 Min Read",
      img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000"
    },
    {
      id: 6,
      slug: "architectural-shift-stone-coated-tiles",
      title: "The Architectural Shift Towards Stone-Coated Steel Tiles",
      category: "Architecture",
      date: "June 25, 2026",
      excerpt: "Why modern luxury villas are shifting away from traditional clay and asbestos towards aesthetically premium, weather-resistant stone-coated steel.",
      readTime: "5 Min Read",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000"
    }
  ];

  const featuredPost = blogPosts[0];
  const gridPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-x-clip">
  

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#050505] pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-16 lg:px-24 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white blur-[150px] opacity-[0.03] rounded-full pointer-events-none"></div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-white/60"></span>
              <p className="text-white/80 font-medium tracking-widest uppercase text-sm">Industry Insights</p>
            </div>
            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-medium leading-[1.1] text-white tracking-tight mb-8">
              Engineering thoughts, <br />
              <span className="text-zinc-500">news & perspectives.</span>
            </h1>
            <p className="text-zinc-400 text-[18px] md:text-[20px] font-light max-w-2xl leading-relaxed">
              Dive into our latest articles covering structural innovations, material science, and modern architectural trends shaping the future of construction.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        
        {/* Title Header */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="pb-6 md:pb-10 border-b border-zinc-200 mb-16"
        >
          <h2 className="text-[40px] md:text-[64px] font-semibold tracking-tighter text-[#1a1a1a]">
            Latest articles.
          </h2>
        </motion.div>

        {/* 2. FEATURED POST (Cinematic Split Layout) */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="mb-24"
        >
          <Link href={`/blogs/${featuredPost.slug}`} className="group flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-stretch">
            
            {/* Left: Huge Image */}
            <div className="w-full lg:w-[65%]">
              <div className="relative aspect-[16/10] md:aspect-[16/9] w-full rounded-[24px] lg:rounded-[40px] overflow-hidden">
                <img 
                  src={featuredPost.img} 
                  alt={featuredPost.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-md text-[#1a1a1a] text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-widest shadow-sm">
                    Featured
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full lg:w-[35%] flex flex-col justify-center py-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[12px] font-semibold text-[#1a1a1a] uppercase tracking-widest">{featuredPost.category}</span>
                <span className="w-1 h-1 rounded-full bg-zinc-300"></span>
                <span className="text-[13px] text-zinc-500 font-light">{featuredPost.date}</span>
              </div>

              <h3 className="text-[32px] md:text-[42px] font-medium text-[#1a1a1a] mb-6 tracking-tight leading-[1.1] group-hover:text-zinc-600 transition-colors duration-300">
                {featuredPost.title}
              </h3>
              
              <p className="text-[16px] md:text-[17px] text-zinc-500 font-light leading-[1.7] mb-10">
                {featuredPost.excerpt}
              </p>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-zinc-200">
                <span className="text-[13px] font-medium text-zinc-400">{featuredPost.readTime}</span>
                <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:border-[#1a1a1a] transition-all duration-300">
                  <ArrowUpRight size={20} className="text-[#1a1a1a] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* 3. GRID POSTS (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {gridPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/blogs/${post.slug}`} className="group flex flex-col h-full">
                {/* Image */}
                <div className="relative w-full aspect-[4/3] rounded-[24px] lg:rounded-[32px] overflow-hidden mb-6">
                  <img 
                    src={post.img} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-[#1a1a1a] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 px-2">
                  <span className="text-[13px] text-zinc-500 font-light mb-3">{post.date}</span>
                  
                  <h3 className="text-[22px] md:text-[24px] font-medium text-[#1a1a1a] mb-4 leading-[1.2] tracking-tight group-hover:text-zinc-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-[15px] text-zinc-500 font-light leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-5 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-[12px] font-medium text-zinc-400 uppercase tracking-widest">Read Article</span>
                    <ArrowUpRight size={18} className="text-[#1a1a1a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </section>

      <CTASection />
     
    </div>
  );
}