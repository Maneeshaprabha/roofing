"use client";

import CTASection from "@/src/components/CTASection";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Share2, CornerDownRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

// Blog Database (Full Content with 6 Matching Posts)
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
    image: "https://img.magnific.com/free-photo/interior-airport-with-windows_116348-70.jpg?t=st=1788919114~exp=1788922714~hmac=cbb96d81d59c007d4a865523cf505fd5c408e5cf8483d0ebc983e0a08f498f2d&w=2000",
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
  
  "why-zinc-aluminium-outperforms-traditional-roofing": {
    title: "Why Zinc-Aluminium Outperforms Traditional Roofing",
    category: "Material Science",
    date: "August 28, 2026",
    readTime: "4 Min Read",
    image: "https://img.magnific.com/free-photo/high-angle-beautiful-wooden-house-with-new-roof_23-2149343703.jpg?t=st=1788919199~exp=1788922799~hmac=51a7cde91d232296c9435c8c31ee02ed5c55c4275d5fe99cedb2c67df2330d0e&w=2000",
    excerpt: "Comparing the thermal efficiency, corrosion resistance, and structural dead-load benefits of AZ150 coated sheets against standard clay tiles.",
    content: [
      { type: "p", text: "For decades, traditional clay and concrete tiles have dominated the residential roofing market. However, the commercial and modern residential sectors are experiencing a massive shift towards Zinc-Aluminium (Zn-Al) coated steel sheets. But what exactly makes this material superior?" },
      { type: "h2", text: "The Science of AZ150 Coating" },
      { type: "p", text: "Zinc-Aluminium sheets are not just painted steel. They undergo a continuous hot-dip process where the steel core is coated with an alloy of 55% Aluminum, 43.4% Zinc, and 1.6% Silicon (commonly known as AZ150). The aluminum provides barrier protection, while the zinc provides sacrificial protection. If the sheet gets scratched, the zinc oxidizes first, protecting the steel underneath from rusting." },
      { type: "quote", text: "An AZ150 Zinc-Aluminium roof can outlast standard galvanized roofing by up to four times under the same environmental conditions." },
      { type: "h2", text: "Dead Load and Structural Savings" },
      { type: "p", text: "One of the most overlooked factors in roofing is the 'Dead Load'—the sheer weight of the roof itself. Clay tiles are incredibly heavy, requiring massive, expensive timber or heavy-gauge steel trusses to support them. Zn-Al sheets are remarkably lightweight. This allows engineers to use lighter C-Purlins and wider spans, drastically reducing the overall cost of the structural framework." },
      { type: "list", items: [
        "High thermal reflectivity reduces indoor temperatures by up to 3°C.",
        "Significantly lower structural framework costs due to reduced dead load.",
        "Zero risk of cracking or shattering during installation or extreme weather.",
        "Rapid installation speeds, covering larger areas in a fraction of the time."
      ]},
      { type: "p", text: "When you factor in longevity, structural savings, and thermal efficiency, Zinc-Aluminium is undeniably the smartest investment for modern roofing projects." }
    ]
  },

  "rainwater-harvesting-industrial-parks": {
    title: "Rainwater Harvesting: A Necessity for Industrial Parks",
    category: "Sustainability",
    date: "August 15, 2026",
    readTime: "5 Min Read",
    image: "https://img.magnific.com/free-photo/cinematic-style-mall_23-2151551280.jpg?t=st=1788919339~exp=1788922939~hmac=3cf54541516c3ba468f2e6266f653040df99602fa0f631a060e09d4bdf41fc38&w=2000",
    excerpt: "How implementing high-capacity seamless guttering and underground reservoirs can save large-scale factories thousands in utility costs.",
    content: [
      { type: "p", text: "Industrial parks consist of massive roof areas—sometimes spanning tens of thousands of square meters. During a heavy monsoon, millions of liters of water cascade off these roofs. Traditionally, this water is simply directed into municipal drains. Today, forward-thinking engineers view this not as runoff, but as liquid capital." },
      { type: "h2", text: "The ROI of Rainwater Harvesting" },
      { type: "p", text: "Water utility costs for manufacturing plants (especially textile, chemical, and food processing) are staggering. By installing high-capacity seamless aluminium guttering networks connected to underground filtration reservoirs, factories can capture and reuse this water for cooling towers, cleaning, and sanitary systems." },
      { type: "quote", text: "A well-engineered industrial rainwater harvesting system can achieve a return on investment (ROI) within just 3 to 5 years through utility savings alone." },
      { type: "h2", text: "Engineering the Catchment System" },
      { type: "p", text: "Standard residential PVC gutters will fail under the immense volume and velocity of water coming off a factory roof. Industrial setups require custom-fabricated, heavy-gauge seamless metal gutters and oversized square downpipes. The lack of seams is crucial; seams are the weakest point in any drainage system and the first place a leak will occur under pressure." },
      { type: "list", items: [
        "Reduces dependency on erratic municipal water supplies.",
        "Lowers overall operational and utility costs significantly.",
        "Prevents localized flooding and foundation erosion around the factory perimeter.",
        "Enhances corporate sustainability profiles and LEED certification scores."
      ]},
      { type: "p", text: "Rainwater harvesting is no longer just an environmental initiative; it is a critical economic strategy for modern industrial engineering." }
    ]
  },

  "5-signs-commercial-roof-needs-restoration": {
    title: "5 Signs Your Commercial Roof Needs Immediate Restoration",
    category: "Maintenance",
    date: "July 30, 2026",
    readTime: "4 Min Read",
    image: "https://img.magnific.com/free-photo/vertical-low-angle-shot-ceiling-cool-house-with-modern-minimalistic-interior_181624-6635.jpg?t=st=1788919444~exp=1788923044~hmac=5f5a0d73be40b382c184b11dff3777bea6d0c2480d9a7047d479d4f4933addb9&w=2000",
    excerpt: "Don't wait until the next monsoon. Learn how to identify early signs of structural sagging, fastener corrosion, and hidden leaks.",
    content: [
      { type: "p", text: "A commercial roof is out of sight and, unfortunately, often out of mind. Facility managers usually only realize there is a problem when water starts dripping onto valuable machinery or inventory. Proactive engineering maintenance is the key to preventing catastrophic roof failures." },
      { type: "h2", text: "The 5 Warning Signs" },
      { type: "p", text: "If you notice any of these indicators during a visual inspection, it is time to call in structural engineers for a comprehensive assessment." },
      { type: "list", items: [
        "1. Sagging Roof Deck: A clear indicator that the structural purlins or trusses are failing under load or have been compromised by moisture.",
        "2. Corroded Fasteners: The screws holding your roof down have rubber washers. Once these washers degrade and the screws rust, water enters directly into the purlins.",
        "3. Daylight Through the Roof: If you can see daylight from inside the warehouse looking up, water can definitely get in.",
        "4. Ponding Water: Flat or low-slope roofs that hold water for more than 48 hours after rain have failed drainage systems, accelerating material decay.",
        "5. Peeling Interior Paint or Stains: Often the first indoor sign that moisture is traveling along structural beams before dripping down."
      ]},
      { type: "quote", text: "Ignoring minor roof maintenance today guarantees a major structural replacement tomorrow." },
      { type: "p", text: "Routine inspections using drone technology and thermal imaging can identify thermal leaks and trapped moisture long before they become visible to the naked eye. Protect your assets by staying ahead of the decay." }
    ]
  },

  "understanding-load-bearing-capacities": {
    title: "Understanding Load-Bearing Capacities in Warehouses",
    category: "Engineering Insights",
    date: "July 12, 2026",
    readTime: "7 Min Read",
    image: "https://img.magnific.com/free-photo/warehouse-workers-discussing-about-logistics-distribution-packages-market_342744-1558.jpg?t=st=1788919576~exp=1788923176~hmac=1abaf4058e71a94830b9f0e4b17e185bd8900e1133900538f78aa9be6427210f&w=1480",
    excerpt: "A breakdown of how wind shear, dead loads, and live loads dictate the selection between C-Purlins and heavy-duty I-Beams.",
    content: [
      { type: "p", text: "Designing a warehouse is an exercise in balancing vast open spaces with immense structural integrity. The primary challenge for any structural engineer is managing 'loads'. An incorrectly calculated load can result in structural deflection or, in extreme cases, a total collapse." },
      { type: "h2", text: "Dead Loads vs. Live Loads vs. Environmental Loads" },
      { type: "p", text: "To determine the correct steel profile, engineers calculate three main forces. Dead loads are the permanent weights of the building materials (roofing sheets, insulation, the steel itself). Live loads include temporary weights like maintenance workers or suspended equipment. Environmental loads are the most unpredictable—encompassing wind shear, heavy monsoon rain accumulation, and seismic activity." },
      { type: "quote", text: "In warehouse engineering, you are not just building for the calmest day; you are mathematically ensuring the structure survives the worst 100-year storm." },
      { type: "h2", text: "Selecting the Right Steel" },
      { type: "p", text: "For massive, uninterrupted spans (like the center of a logistics hub), heavy-duty hot-rolled I-Beams are mandatory. Their web-and-flange design resists bending and torsion under extreme vertical loads. However, for the secondary framework that supports the roof itself, cold-formed C-Purlins and Z-Purlins are used. They are lighter, easier to overlap for continuous spans, and provide excellent support without adding unnecessary dead weight to the primary I-Beams." },
      { type: "p", text: "Precision engineering ensures that the right material is used in the exact right place, optimizing both structural safety and project costs." }
    ]
  },

  "architectural-shift-stone-coated-tiles": {
    title: "The Architectural Shift Towards Stone-Coated Steel Tiles",
    category: "Architecture",
    date: "June 25, 2026",
    readTime: "5 Min Read",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
    excerpt: "Why modern luxury villas are shifting away from traditional clay and asbestos towards aesthetically premium, weather-resistant stone-coated steel.",
    content: [
      { type: "p", text: "Luxury residential architecture is experiencing a renaissance. Homeowners and architects are no longer willing to compromise between aesthetic beauty and structural durability. This demand has sparked a massive surge in the popularity of Stone-Coated Steel Roof Tiles." },
      { type: "h2", text: "The Best of Both Worlds" },
      { type: "p", text: "Traditional clay tiles look beautiful but are incredibly heavy, brittle, and prone to algae growth in humid climates. Bare metal sheets are highly durable but often look too 'industrial' for a luxury villa and can be noisy during heavy rain. Stone-coated steel bridges this gap perfectly." },
      { type: "quote", text: "Stone-coated steel offers the classical, textured elegance of traditional clay tiles, backed by the unbreakable, lightweight core of industrial steel." },
      { type: "h2", text: "Acoustics and Aesthetics" },
      { type: "p", text: "The natural stone chips embedded in the acrylic resin coating serve two purposes. Aesthetically, they provide a rich, matte, multi-tonal finish that elevates the visual profile of the house. Functionally, the textured surface diffuses the impact of raindrops, drastically reducing the 'drumming' noise associated with standard metal roofs." },
      { type: "list", items: [
        "Class A fire resistance rating.",
        "Lightweight design requires less structural timber/steel, saving costs.",
        "Interlocking panel design provides exceptional resistance against hurricane-force winds.",
        "Highly resistant to fading, algae, and UV degradation."
      ]},
      { type: "p", text: "For high-end residential projects, stone-coated steel has established itself as the ultimate roofing material, blending timeless design with cutting-edge metallurgy." }
    ]
  },

  // Fallback content for any undefined slugs
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

      {/* 1. HERO SECTION (Consistent Left-Aligned Layout with Breadcrumbs) */}
      <section className="relative bg-[#050505] pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-16 lg:px-24 rounded-b-[40px] md:rounded-b-[60px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white blur-[150px] opacity-[0.02] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            
            {/* Breadcrumbs & Back Button */}
            <div className="flex items-center gap-4 mb-8">
              <Link href="/blogs" className="w-10 h-10 shrink-0 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10">
                <ArrowLeft size={18} className="text-white" />
              </Link>
              <div className="flex items-center gap-2 text-[11px] md:text-[13px] font-medium tracking-widest uppercase text-white/60">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link>
                <span>/</span>
                <span className="text-white truncate max-w-[150px] md:max-w-[300px]">{blog.title}</span>
              </div>
            </div>

            {/* Category Tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-white text-[#1a1a1a] text-[12px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                {blog.category}
              </span>
            </div>

            <h1 className="text-[40px] md:text-[60px] lg:text-[72px] font-medium leading-[1.1] text-white tracking-tight mb-8">
              {blog.title}
            </h1>

            {/* Meta Tags (Date & Read Time) */}
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-[14px] text-zinc-400 font-light">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{blog.date}</span>
              </div>
              <span className="hidden md:block w-1 h-1 rounded-full bg-zinc-600"></span>
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