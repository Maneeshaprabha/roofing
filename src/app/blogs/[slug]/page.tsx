"use client";

import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, CornerDownRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

// Blog Database (Full Content)
const blogsContent: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: { type: "p" | "h2" | "quote" | "list"; text?: string; items?: string[] }[];
}> = {
  "future-of-structural-steel-in-tropical-climates": {
    title: "The Future of Structural Steel in Tropical Climates",
    category: "Engineering Insights",
    date: "September 02, 2026",
    readTime: "6 Min Read",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000",
    excerpt: "An in-depth look at how modern hot-rolled steel frameworks are being engineered to resist high humidity, saline environments, and extreme monsoons in South Asia.",
    content: [
      { type: "p", text: "When engineering large-scale commercial or industrial structures in tropical climates like Sri Lanka, the environment is your biggest adversary. High humidity, heavy monsoonal rains, and saline coastal air create a perfect storm for rapid material degradation. However, structural steel remains the undisputed backbone of modern construction. The question is: how are engineers adapting steel to outlast these harsh conditions?" },
      { type: "h2", text: "The Evolution of Anti-Corrosion Technologies" },
      { type: "p", text: "In the past, basic red oxide primers were the standard. Today, metallurgical advancements have introduced sophisticated hot-dip galvanization and advanced zinc-rich epoxy coatings. These multi-layered protection systems essentially seal the structural steel from moisture and oxygen, delaying the onset of oxidation by decades." },
      { type: "quote", text: "Engineering in the tropics is no longer just about calculating load-bearing capacities; it is about forecasting elemental wear and engineering a chemical shield to match the structural strength." },
      { type: "p", text: "Beyond coatings, the design of the structural joints plays a massive role. Water pooling is a critical failure point. Modern fabrication emphasizes seamless welds, angled flanges, and minimal horizontal flat spots where rainwater can accumulate." },
      { type: "h2", text: "Why Not Concrete?" },
      { type: "p", text: "While reinforced concrete is traditional, it comes with a massive dead load and slower construction timelines. Furthermore, concrete is porous. In coastal areas, salt water penetrates concrete, rusting the rebar inside—a phenomenon known as 'concrete cancer'. Structural steel, when properly treated, offers a much higher strength-to-weight ratio and completely eliminates the risk of internal expansion cracking." },
      { type: "list", items: [
        "Faster on-site erection reducing labor costs by up to 30%.",
        "Superior seismic resistance due to steel's natural ductility.",
        "Easier modification and expansion for future architectural changes.",
        "100% recyclable, making it a highly sustainable building material."
      ]},
      { type: "p", text: "As architectural demands grow more complex, pushing for wider open spans and taller structures, the reliance on high-grade structural steel in the tropics will only accelerate. The future belongs to smart metallurgy and precision fabrication." }
    ]
  },
  // Fallback content for other slugs
  "default": {
    title: "Engineering Excellence & Architectural Trends",
    category: "Industry News",
    date: "August 20, 2026",
    readTime: "5 Min Read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=2000",
    excerpt: "Discover the latest insights, techniques, and materials shaping the future of industrial and residential construction.",
    content: [
      { type: "p", text: "The construction landscape is rapidly evolving, driven by the need for sustainable, durable, and cost-effective solutions. We explore the core principles guiding today's leading architects and structural engineers." },
      { type: "h2", text: "Material Innovation" },
      { type: "p", text: "Selecting the right materials is the first step towards a resilient structure. We are seeing a massive shift towards engineered alloys and composite materials that offer superior lifespans with minimal maintenance." }
    ]
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "future-of-structural-steel-in-tropical-climates";
  
  // Use the specific blog content or fallback to default
  const blog = blogsContent[slug] || blogsContent["default"];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-x-clip">


      {/* 1. HERO SECTION (Minimalist Blog Header) */}
      <section className="relative bg-[#050505] pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-16 lg:px-24 rounded-b-[40px] md:rounded-b-[60px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white blur-[150px] opacity-[0.02] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl flex flex-col items-center">
            
            {/* Back Button */}
            <div className="mb-10">
              <Link href="/blogs" className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10">
                <ArrowLeft size={20} className="text-white" />
              </Link>
            </div>

            {/* Meta Tags */}
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white text-[#1a1a1a] text-[12px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                {blog.category}
              </span>
            </div>

            <h1 className="text-[40px] md:text-[60px] lg:text-[72px] font-medium leading-[1.1] text-white tracking-tight mb-8 max-w-4xl">
              {blog.title}
            </h1>

            <div className="flex items-center gap-6 text-[14px] text-zinc-400 font-light">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{blog.date}</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{blog.readTime}</span>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <section className="py-16 md:py-24 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto mb-10">
        
        {/* Massive Featured Image */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] md:rounded-[40px] overflow-hidden relative mb-16 md:mb-24"
        >
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Split Layout: Left Reading Content, Right Sticky Sidebar */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative max-w-[1200px] mx-auto">
          
          {/* LEFT COLUMN: Blog Text (Editorial Typography) */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="w-full lg:w-[70%] flex flex-col"
          >
            <p className="text-[20px] md:text-[24px] text-[#1a1a1a] font-medium leading-[1.6] mb-12 border-l-4 border-[#1a1a1a] pl-6">
              {blog.excerpt}
            </p>

            <div className="flex flex-col gap-8">
              {blog.content.map((block, index) => {
                if (block.type === "h2") {
                  return (
                    <h2 key={index} className="text-[28px] md:text-[36px] font-semibold leading-[1.2] text-[#1a1a1a] tracking-tight mt-6 mb-2">
                      {block.text}
                    </h2>
                  );
                }
                
                if (block.type === "quote") {
                  return (
                    <blockquote key={index} className="my-8 py-8 border-y border-zinc-200 text-center">
                      <p className="text-[22px] md:text-[28px] text-zinc-400 font-light italic leading-[1.5]">
                        "{block.text}"
                      </p>
                    </blockquote>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul key={index} className="flex flex-col gap-4 my-6 pl-4 md:pl-8">
                      {block.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-[17px] md:text-[19px] text-zinc-600 font-light leading-[1.8]">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#1a1a1a] shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }

                // Default paragraph
                return (
                  <p key={index} className="text-[17px] md:text-[19px] text-zinc-600 font-light leading-[1.8]">
                    {block.text}
                  </p>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Sticky Share & Actions */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: 0.2 }}
            className="w-full lg:w-[30%] lg:sticky lg:top-32 h-fit"
          >
            {/* Share Widget */}
            <div className="border border-zinc-200 rounded-[32px] p-8 md:p-10 bg-[#fafafa] flex flex-col mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Share2 size={20} className="text-[#1a1a1a]" />
                <h3 className="text-[18px] font-medium text-[#1a1a1a]">Share Article</h3>
              </div>
              
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 text-zinc-500">
                  <BsLinkedin size={18} />
                </button>
                <button className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 text-zinc-500">
                  <BsTwitter size={18} />
                </button>
                <button className="w-12 h-12 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 text-zinc-500">
                  <FaFacebook size={18} />
                </button>
              </div>
            </div>

            {/* CTA Box */}
            <div className="border border-[#1a1a1a] rounded-[32px] p-8 md:p-10 bg-[#1a1a1a] text-white flex flex-col shadow-xl">
              <h3 className="text-[24px] md:text-[28px] font-medium leading-[1.2] tracking-tight mb-4">
                Have an engineering project in mind?
              </h3>
              <p className="text-[15px] text-zinc-400 font-light leading-relaxed mb-8">
                Consult with our experts to find the right structural and roofing solutions for your next build.
              </p>
              
              <Link href="/contact" className="flex items-center justify-center gap-3 bg-white rounded-full text-[#1a1a1a] px-6 py-4 w-full hover:bg-zinc-200 transition-colors duration-300">
                <span className="text-[13px] font-semibold tracking-[0.15em] uppercase mt-0.5">
                  Contact Us
                </span>
                <CornerDownRight size={18} strokeWidth={1.5} />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      <CTASection />
    
    </div>
  );
}