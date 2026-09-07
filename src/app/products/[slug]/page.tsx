"use client";

import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, CornerDownRight, ShieldCheck, Truck, Wrench } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Full details database for all 8 products
const productsContent: Record<string, {
  title: string;
  category: string;
  heroDesc: string;
  image: string;
  overview: string;
  features: string[];
  specifications: { label: string; value: string }[];
  applications: string[];
}> = {
  "zinc-aluminium-roofing-sheets": {
    title: "Zinc-Aluminium Roofing Sheets",
    category: "Roofing Sheets",
    heroDesc: "High-grade alloy coated steel sheets providing superior corrosion resistance and long-lasting durability for modern roofs.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=2000",
    overview: "Our Zinc-Aluminium roofing sheets are manufactured using superior alloy-coated steel, combining 55% Aluminium, 43.5% Zinc, and 1.5% Silicon. This unique composition offers exceptional barrier and galvanic corrosion protection, making it ideal for tropical climates subject to heavy rains and high humidity.",
    features: [
      "Superior thermal reflectivity to keep interiors cooler.",
      "High tensile strength protecting against severe wind uplift.",
      "Advanced anti-peel and anti-fade exterior coating.",
      "Lightweight structure reducing overall dead load on buildings."
    ],
    specifications: [
      { label: "Base Metal", value: "High Tensile Steel G550" },
      { label: "Alloy Coating", value: "AZ150 (150g/m² coating mass)" },
      { label: "Standard Thickness", value: "0.40mm, 0.45mm, 0.50mm" },
      { label: "Effective Coverage", value: "1000mm standard profile" },
      { label: "Expected Lifespan", value: "Up to 30+ Years" }
    ],
    applications: ["Commercial warehouses", "Residential housing complexes", "Industrial manufacturing plants", "Agricultural sheds"]
  },
  "stone-coated-steel-tiles": {
    title: "Stone-Coated Steel Tiles",
    category: "Roofing Sheets",
    heroDesc: "Combines the strength of steel with the natural aesthetic beauty of stone chips. Excellent sound and heat insulation.",
    image: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2000",
    overview: "Stone-coated steel tiles bring together the robust security of high-grade steel panels and the timeless elegance of natural stone texture. Finished with ceramic-coated natural stone chips, these tiles resist fading, algal growth, and extreme weather damage while significantly dampening rain noise.",
    features: [
      "Natural stone coating absorbs heavy rain sounds.",
      "Interlocking design ensures maximum cyclone and wind resistance.",
      "Class-A fire resistant material rating.",
      "Maintains vibrant color stability across decades."
    ],
    specifications: [
      { label: "Overall Length", value: "1300mm - 1350mm" },
      { label: "Covered Length", value: "1200mm - 1250mm" },
      { label: "Weight per Sqm", value: "Approx. 6.2 kg (Super lightweight)" },
      { label: "Warranty", value: "25-Year Manufacturer Warranty" }
    ],
    applications: ["Luxury residential villas", "Hotels & holiday resorts", "Architectural institutional buildings"]
  },
  "heavy-duty-steel-i-beams": {
    title: "Heavy-Duty Steel I-Beams",
    category: "Structural Steel",
    heroDesc: "Hot-rolled structural steel beams engineered to support massive load-bearing requirements in commercial and industrial construction.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2000",
    overview: "Our hot-rolled structural steel I-beams are fabricated to strict international quality benchmarks, offering exceptional cross-sectional strength. Designed specifically to handle heavy bending moments and compressive loads, they serve as the fundamental backbone of large industrial facilities.",
    features: [
      "Optimized flange geometry for high resistance to bending.",
      "High weldability and ductility for effortless on-site fabrication.",
      "Strict compliance with international load metrics.",
      "Uniform thickness and structural integrity across full lengths."
    ],
    specifications: [
      { label: "Steel Grade", value: "ASTM A36 / SS400 / S275JR" },
      { label: "Manufacturing Process", value: "Hot Rolled Structural Steel" },
      { label: "Standard Lengths", value: "6m, 12m (Custom cutting available)" },
      { label: "Surface Finish", value: "Mill finish / Anti-rust primer coated" }
    ],
    applications: ["Multi-story commercial skyscrapers", "Industrial factory floor framing", "Bridge construction & heavy gantries"]
  },
  "seamless-aluminium-gutters": {
    title: "Seamless Aluminium Gutters",
    category: "Rainwater Systems",
    heroDesc: "Custom-formed seamless gutter systems designed to handle heavy tropical downpours without leaking or sagging.",
    image: "https://images.unsplash.com/photo-1620245451921-1632731804f8?q=80&w=2000",
    overview: "Engineered specifically to combat heavy seasonal tropical rains, our seamless aluminium gutters are custom-rolled on-site to match exact building dimensions. The complete absence of middle joints eliminates traditional weak points prone to leakage and rust.",
    features: [
      "Continuous custom length fabrication with zero mid-joints.",
      "Heavy gauge aluminium that will never rust or corrode.",
      "Sleek architectural contour that matches modern roofing edges.",
      "High-capacity volume handling during torrential downpours."
    ],
    specifications: [
      { label: "Material", value: "Heavy Gauge Architectural Aluminium" },
      { label: "Thickness", value: "0.9mm - 1.2mm" },
      { label: "Profiles", value: "Box Profile / Ogee Profile" },
      { label: "Fastening", value: "Hidden internal brackets with screws" }
    ],
    applications: ["Residential perimeter drainage", "Commercial complexes", "Educational campuses"]
  },
  "square-downpipe-networks": {
    title: "Square Downpipe Networks",
    category: "Rainwater Systems",
    heroDesc: "Architecturally sleek square downpipes engineered for high-capacity drainage and secure wall mounting.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000",
    overview: "Square downpipe networks combine high-velocity water discharge capacity with a clean, geometric architectural silhouette. Finished with durable powder coatings, they integrate seamlessly into modern exterior wall styling.",
    features: [
      "Square cross-section handles higher water velocity than standard round pipes.",
      "Scratch and UV resistant exterior powder coating.",
      "Heavy-duty secure wall clips preventing vibration during heavy winds."
    ],
    specifications: [
      { label: "Dimensions", value: "75mm x 75mm / 100mm x 100mm" },
      { label: "Coating", value: "Electrostatic Matte Powder Coating" },
      { label: "Color Options", value: "Matte Black, Charcoal Grey, Pure White" }
    ],
    applications: ["Exterior drainage routing", "High-rise commercial buildings", "Modern residential villas"]
  },
  "c-purlins-z-purlins": {
    title: "C-Purlins & Z-Purlins",
    category: "Structural Steel",
    heroDesc: "Cold-formed steel purlins offering exceptional structural support for roof and wall cladding systems.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000",
    overview: "Cold-formed C and Z purlins act as secondary structural members supporting roof sheets and wall claddings. Fabricated from high-tensile galvanized steel, they provide excellent rigidity and load span efficiency.",
    features: [
      "Pre-punched holes for fast, accurate bolt assembly.",
      "High strength-to-weight ratio minimizing structural load.",
      "Galvanized zinc coating protecting against long-term site humidity."
    ],
    specifications: [
      { label: "Material", value: "Galvanized High Tensile Steel Z275" },
      { label: "Depth Range", value: "100mm to 300mm web height" },
      { label: "Yield Strength", value: "Minimum 340 MPa" }
    ],
    applications: ["Roof purlins & wall girts", "Mezzanine floor framing", "Industrial shed skeletons"]
  },
  "polycarbonate-skylight-sheets": {
    title: "Polycarbonate Skylight Sheets",
    category: "Accessories",
    heroDesc: "High-transparency corrugated polycarbonate panels allowing natural daylight into industrial warehouses while blocking UV rays.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
    overview: "Polycarbonate skylight sheets provide brilliant natural illumination for industrial and commercial buildings, slashing daytime electricity costs. Coated with a protective UV layer, they prevent yellowing and brittle degradation under intense sunlight.",
    features: [
      "Up to 90% light transmission with soft diffusion.",
      "Co-extruded UV protection layer on outer surface.",
      "Virtually unbreakable impact resistance compared to glass or fiberglass."
    ],
    specifications: [
      { label: "Profiles", value: "Matched to standard roofing sheet profiles" },
      { label: "Thickness", value: "1.0mm - 2.0mm" },
      { label: "UV Protection", value: "Single/Double sided UV co-extrusion" }
    ],
    applications: ["Warehouse natural lighting bays", "Greenhouses & agricultural structures", "Covered walkways"]
  },
  "roof-waterproofing-sealants-fasteners": {
    title: "Roof Waterproofing Sealants & Fasteners",
    category: "Accessories",
    heroDesc: "Professional-grade self-drilling screws with EPDM washers and high-elasticity waterproof sealants for leak-free joints.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000",
    overview: "The longevity of any roof relies heavily on its joints and fasteners. Our comprehensive hardware line features professional self-drilling screws equipped with weather-tight EPDM rubber washers alongside industrial-grade elastomeric waterproofing sealants.",
    features: [
      "Bulls-eye sealing action from high-grade EPDM rubber washers.",
      "Corrosion-resistant coating tested against salt spray.",
      "High elasticity sealants that expand and contract with temperature shifts."
    ],
    specifications: [
      { label: "Screw Material", value: "Class 4 Galvanized / Stainless Steel" },
      { label: "Washer Type", value: "UV-Resistant Vulcanized EPDM" },
      { label: "Sealant Base", value: "Polyurethane / Silicone Hybrid" }
    ],
    applications: ["Roof sheet side & end lap sealing", "Flashing joint waterproofing", "Industrial cladding installation"]
  }
};

export default function ProductDetailsPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "zinc-aluminium-roofing-sheets";
  
  // Match slug or fallback to the first item
  const product = productsContent[slug] || productsContent["zinc-aluminium-roofing-sheets"];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-x-clip">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#050505] pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-16 lg:px-24 rounded-b-[40px] md:rounded-b-[60px] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white blur-[150px] opacity-[0.02] rounded-full pointer-events-none"></div>
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            
            {/* Breadcrumbs & Back Button */}
            <div className="flex items-center gap-4 mb-10">
              <Link href="/products" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors border border-white/10">
                <ArrowLeft size={18} className="text-white" />
              </Link>
              <div className="flex items-center gap-2 text-[13px] font-medium tracking-widest uppercase text-white/60">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/products" className="hover:text-white transition-colors">Products</Link>
                <span>/</span>
                <span className="text-white">{product.title}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#cc3333] text-white text-[12px] font-medium px-3.5 py-1 rounded-[6px] uppercase tracking-wider">
                {product.category}
              </span>
            </div>

            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-medium leading-[1.1] text-white tracking-tight mb-8">
              {product.title}
            </h1>
            <p className="text-zinc-400 text-[18px] md:text-[20px] font-light max-w-2xl leading-relaxed">
              {product.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN CONTENT AREA (Split Layout with Sticky Inquiry Card) */}
      <section className="py-16 md:py-24 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto mb-10">
        
        {/* Massive Featured Product Image */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="w-full aspect-[16/10] md:aspect-[21/9] rounded-[24px] md:rounded-[40px] overflow-hidden relative mb-16 md:mb-24"
        >
          <img 
            src={product.image} 
            alt={product.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Split Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start relative">
          
          {/* LEFT COLUMN: Overview, Features & Specs */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="w-full lg:w-[60%] flex flex-col"
          >
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.15] text-[#1a1a1a] tracking-tight mb-6">
              Product Overview
            </h2>
            <p className="text-[16px] md:text-[18px] text-zinc-600 font-light leading-[1.7] mb-12 md:mb-16">
              {product.overview}
            </p>

            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.15] text-[#1a1a1a] tracking-tight mb-6">
              Key Engineering Features
            </h2>
            <div className="flex flex-col gap-4 mb-16">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-4 text-[16px] md:text-[17px] text-zinc-700 font-light leading-[1.6]">
                  <CheckCircle2 size={20} className="text-[#cc3333] mt-1 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Technical Specifications List */}
            <h2 className="text-[36px] md:text-[48px] font-medium leading-[1.15] text-[#1a1a1a] tracking-tight mb-6">
              Technical Specifications
            </h2>
            <div className="border border-zinc-200 rounded-[24px] overflow-hidden mb-16">
              {product.specifications.map((spec, i) => (
                <div key={i} className={`flex flex-col sm:flex-row justify-between p-5 md:p-6 ${i !== product.specifications.length - 1 ? 'border-b border-zinc-200' : ''} bg-[#fafafa]`}>
                  <span className="text-[14px] text-zinc-500 font-medium uppercase tracking-wider">{spec.label}</span>
                  <span className="text-[15px] text-[#1a1a1a] font-semibold mt-1 sm:mt-0">{spec.value}</span>
                </div>
              ))}
            </div>

            {/* Ideal Applications */}
            <h3 className="text-[24px] font-medium text-[#1a1a1a] mb-6">Recommended Applications</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {product.applications.map((app, i) => (
                <span key={i} className="bg-[#f0f1f4] rounded-full text-[#1a1a1a] text-[12px] md:text-[13px] font-medium px-4 py-2">
                  {app}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Sticky Inquiry & Order Card */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: 0.2 }}
            className="w-full lg:w-[40%] lg:sticky lg:top-32 h-fit"
          >
            <div className="border border-zinc-200 rounded-[32px] p-8 md:p-10 bg-white shadow-sm flex flex-col">
              
              <h3 className="text-[26px] md:text-[32px] font-medium leading-[1.2] text-[#1a1a1a] tracking-tight mb-4">
                Inquire about this product
              </h3>
              <p className="text-[15px] text-zinc-500 font-light leading-relaxed mb-8">
                Need custom lengths, bulk pricing, or technical consultation for <span className="text-[#1a1a1a] font-medium">{product.title}</span>? Get in touch with our engineering team today.
              </p>

              {/* Perks list */}
              <div className="flex flex-col gap-4 mb-8 pb-8 border-b border-zinc-100 text-[14px] text-zinc-600">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={18} className="text-[#cc3333]" />
                  <span>Certified High-Grade Material</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck size={18} className="text-[#cc3333]" />
                  <span>Island-wide Site Delivery Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <Wrench size={18} className="text-[#cc3333]" />
                  <span>Expert Installation Support</span>
                </div>
              </div>

              {/* Action Button */}
              <Link href="/contact" className="flex items-center justify-center gap-3 border border-[#1a1a1a] rounded-full text-[#1a1a1a] px-6 py-4 w-full hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300">
                <CornerDownRight size={18} strokeWidth={1.5} />
                <span className="text-[13px] font-semibold tracking-[0.15em] uppercase mt-0.5">
                  Request a Quotation
                </span>
              </Link>

            </div>
          </motion.div>

        </div>
      </section>

      <CTASection />
   
    </div>
  );
}