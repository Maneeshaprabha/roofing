"use client";

import CTASection from "@/src/components/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CornerDownRight, Search } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const categoryStructure = [
  { name: "All", subCategories: [] },
  {
    name: "Roofing",
    subCategories: [
      "All Roofing",
      "Zinc-Aluminium",
      "Stone-Coated",
      "Polycarbonate",
      "Corrugated",
    ],
  },
  {
    name: "Ceiling",
    subCategories: [
      "All Ceiling",
      "Suspended Ceilings",
      "Wood Panels",
      "Gypsum Boards",
    ],
  },
  { name: "Wall Systems", subCategories: [] },
  { name: "Floor Boards", subCategories: [] },
  {
    name: "Rainwater Systems",
    subCategories: ["All Rainwater", "Seamless Gutters", "Downpipes"],
  },
  { name: "Paints & Putty", subCategories: ["All Paints & Putty", "Exterior Paint", "Wall Putty"] },
  { name: "Motorized Gates", subCategories: [] },
  {
    name: "Structures",
    subCategories: ["All Structures", "Heavy-Duty I-Beams", "Purlins", "Wire Mesh & Rebar"],
  },
  {
    name: "Accessories",
    subCategories: ["All Accessories", "Fasteners", "Sealants"],
  },
];

// ✨ 24 PRODUCTS: 18 from Home Page + 6 Additional Products ✨
const productsData = [
  // --- ROOFING ---
  {
    id: 1,
    slug: "clay-roofing-tiles",
    title: "Clay Roofing Tiles",
    category: "Roofing",
    subCategory: "",
    desc: "Classic aesthetic with excellent thermal insulation.",
    specs: "Durability: 50+ Years",
    img: "https://images.unsplash.com/photo-1628774942553-bd4b553e7457?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80&w=800",
  },
  {
    id: 2,
    slug: "zinc-aluminium-roofing-sheets",
    title: "Zinc-Aluminium Sheets",
    category: "Roofing",
    subCategory: "Zinc-Aluminium",
    desc: "High-grade alloy coated steel sheets providing superior corrosion resistance.",
    specs: "Thickness: 0.40mm - 0.50mm",
    img: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=800",
  },
  {
    id: 3,
    slug: "stone-coated-steel-tiles",
    title: "Stone-Coated Steel Tiles",
    category: "Roofing",
    subCategory: "Stone-Coated",
    desc: "Combines the strength of steel with natural stone chips. Excellent sound insulation.",
    specs: "Warranty: 25 Years",
    img: "https://images.unsplash.com/photo-1589562733209-fab72552a40b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80&w=800",
  },
  {
    id: 4,
    slug: "concrete-roof-tiles",
    title: "Concrete Roof Tiles",
    category: "Roofing",
    subCategory: "",
    desc: "Heavy-duty structural integrity engineered for severe weather.",
    specs: "Weight: Heavy Profile",
    img: "https://img.magnific.com/free-photo/photo-wood-texture-pattern_58702-13174.jpg?t=st=1788893883~exp=1788897483~hmac=2de3cc02b389df9bb317c4824e1dae2277585470d5408e74bc34e4f1d64f394c&w=1480=80&w=800",
  },
  {
    id: 5,
    slug: "asphalt-shingles",
    title: "Asphalt Shingles",
    category: "Roofing",
    subCategory: "",
    desc: "Flexible, waterproof, and highly cost-effective roofing solutions.",
    specs: "Finish: Textured",
    img: "https://img.magnific.com/premium-photo/brown-shingle-roof-with-wood-trim_1179475-39977.jpg?w=2000=80&w=800",
  },
  {
    id: 6,
    slug: "polycarbonate-skylight-sheets",
    title: "Polycarbonate Panels",
    category: "Roofing",
    subCategory: "Polycarbonate",
    desc: "High-transparency corrugated panels allowing natural daylight.",
    specs: "Light Transmission: 90%",
    img: "https://img.magnific.com/free-photo/business-building-interior-with-plants_1127-2173.jpg?t=st=1788894190~exp=1788897790~hmac=703965cf7141a34ada746db9b4f31cbdef1d051d2b8d47b242706d904fbd20c2&w=2000=80&w=800",
  },
  {
    id: 7,
    slug: "corrugated-metal-sheets",
    title: "Corrugated Metal Sheets",
    category: "Roofing",
    subCategory: "Corrugated",
    desc: "Traditional wavy metal sheets perfect for industrial and agricultural buildings.",
    specs: "Gauge: 26 to 29",
    img: "https://images.unsplash.com/photo-1620440713551-67b10bbe350d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80&w=800",
  },

  // --- STRUCTURES ---
  {
    id: 8,
    slug: "heavy-duty-steel-i-beams",
    title: "Heavy-Duty I-Beams",
    category: "Structures",
    subCategory: "Heavy-Duty I-Beams",
    desc: "Hot-rolled structural steel beams engineered to support massive load-bearing.",
    specs: "Grade: ASTM A36",
    img: "https://images.unsplash.com/photo-1671022442106-c787685d9fed?q=80&w=800",
  },
  {
    id: 9,
    slug: "galvanized-c-purlins",
    title: "Galvanized C-Purlins",
    category: "Structures",
    subCategory: "Purlins",
    desc: "Cold-formed steel purlins offering exceptional structural support for cladding.",
    specs: "Coating: Galvanized",
    img: "https://img.magnific.com/free-photo/close-up-metallic-pipes_23-2151113214.jpg?t=st=1788895073~exp=1788898673~hmac=bf0ad5581e6ec6f1f25724395ff3e1e0a6070dee9b3a8f3981a0fbe64af89bd4&w=2000=80&w=800",
  },
  {
    id: 10,
    slug: "structural-z-purlins",
    title: "Structural Z-Purlins",
    category: "Structures",
    subCategory: "Purlins",
    desc: "Z-shaped purlins allowing overlaps for continuous spans in large warehouses.",
    specs: "Yield Strength: 450 MPa",
    img: "https://img.magnific.com/free-photo/large-steel-factory-warehouse_1127-3285.jpg?t=st=1788894763~exp=1788898363~hmac=9eb8ab086bc8d34b23d7ca19e149461aa964d815291b1c178df44d2e70163d75&w=1480=80&w=800",
  },
  {
    id: 11,
    slug: "welded-wire-mesh",
    title: "Welded Wire Mesh",
    category: "Structures",
    subCategory: "Wire Mesh & Rebar",
    desc: "High-tensile steel mesh used heavily for concrete slab reinforcement.",
    specs: "Mesh Size: Custom",
    img: "https://images.unsplash.com/photo-1651890331040-b3e99782661f?q=80&w=800",
  },
  {
    id: 12,
    slug: "reinforcing-steel-rebar",
    title: "Reinforcing Steel Rebar",
    category: "Structures",
    subCategory: "Wire Mesh & Rebar",
    desc: "TMT ribbed bars providing core structural stability to concrete columns.",
    specs: "Standard: SLS 375",
    img: "https://images.unsplash.com/photo-1763771420551-18bc44399f0c?q=80&w=800",
  },

  // --- RAINWATER SYSTEMS ---
  {
    id: 13,
    slug: "seamless-aluminium-gutters",
    title: "Seamless Aluminium Gutters",
    category: "Rainwater Systems",
    subCategory: "Seamless Gutters",
    desc: "Custom-formed seamless gutter systems designed to handle heavy downpours.",
    specs: "Material: Heavy gauge aluminum",
    img: "https://img.magnific.com/free-photo/low-angle-shot-two-pipes-as-they-go-up-building-window_181624-16532.jpg?t=st=1788895613~exp=1788899213~hmac=8f8c76acdda3bedaf83f83ee7372dfe1aeb1c894d3a97cbb84fe3e251c2c8127&w=2000=80&w=800",
  },
  {
    id: 14,
    slug: "square-downpipe-networks",
    title: "Square Downpipe Networks",
    category: "Rainwater Systems",
    subCategory: "Downpipes",
    desc: "Architecturally sleek square downpipes engineered for high-capacity drainage.",
    specs: "Finish: Powder coated",
    img: "https://images.unsplash.com/photo-1562545714-62c15e7fdf9e?q=80&w=800",
  },

  // --- CEILING ---
  {
    id: 15,
    slug: "acoustic-wood-ceiling",
    title: "Acoustic Wood Paneling",
    category: "Ceiling",
    subCategory: "Wood Panels",
    desc: "Premium interior wooden slats designed for sound absorption and modern aesthetics.",
    specs: "Material: Oak Veneer",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800",
  },
  {
    id: 16,
    slug: "gypsum-ceiling-boards",
    title: "Gypsum Ceiling Boards",
    category: "Ceiling",
    subCategory: "Gypsum Boards",
    desc: "Fire-resistant and smooth finishing interior boards for seamless ceilings.",
    specs: "Thickness: 9mm - 12mm",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800",
  },
  {
    id: 17,
    slug: "suspended-grid-ceilings",
    title: "Suspended Grid Ceilings",
    category: "Ceiling",
    subCategory: "Suspended Ceilings",
    desc: "Aluminium T-grid systems paired with acoustic mineral fiber tiles for offices.",
    specs: "Tile Size: 600x600mm",
    img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800",
  },

  // --- WALL SYSTEMS & FLOOR BOARDS ---
  {
    id: 18,
    slug: "exterior-wall-cladding",
    title: "Exterior Steel Cladding",
    category: "Wall Systems",
    subCategory: "",
    desc: "Durable and weather-resistant wall systems for commercial facades.",
    specs: "Thickness: 0.50mm",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  },
  {
    id: 19,
    slug: "industrial-floor-boards",
    title: "Industrial Floor Boards",
    category: "Floor Boards",
    subCategory: "",
    desc: "Heavy-duty load bearing floor boards for mezzanine structures and factories.",
    specs: "Capacity: High Load",
    img: "https://images.unsplash.com/photo-1632255758400-d51330d2279a?q=80&w=800",
  },

  // --- MOTORIZED GATES ---
  {
    id: 20,
    slug: "automated-sliding-gates",
    title: "Automated Sliding Gates",
    category: "Motorized Gates",
    subCategory: "",
    desc: "Heavy-duty structural gates equipped with high-torque motorized systems.",
    specs: "Power: 1200W Motor",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  },

  // --- PAINTS & PUTTY ---
  {
    id: 21,
    slug: "weather-shield-exterior-paint",
    title: "Weather-Shield Exterior Paint",
    category: "Paints & Putty",
    subCategory: "Exterior Paint",
    desc: "Premium UV and rain-resistant emulsion paint for long-lasting vibrant walls.",
    specs: "Coverage: High",
    img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800",
  },
  {
    id: 22,
    slug: "premium-wall-putty",
    title: "Premium Wall Putty",
    category: "Paints & Putty",
    subCategory: "Wall Putty",
    desc: "White cement-based putty that provides a silky smooth base for painting.",
    specs: "Type: Acrylic / Cement",
    img: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&w=800",
  },

  // --- ACCESSORIES ---
  {
    id: 23,
    slug: "high-tensile-fasteners",
    title: "High-Tensile Fasteners",
    category: "Accessories",
    subCategory: "Fasteners",
    desc: "Professional-grade self-drilling screws for roofing and steel structures.",
    specs: "Coating: Anti-Rust",
    img: "https://images.unsplash.com/photo-1605701249987-f0bb9b505d06?q=80&w=800",
  },
  {
    id: 24,
    slug: "polyurethane-roof-sealants",
    title: "Polyurethane Sealants",
    category: "Accessories",
    subCategory: "Sealants",
    desc: "High-elasticity waterproof sealant for joints, gutters, and roofing overlaps.",
    specs: "Durability: Weatherproof",
    img: "https://images.unsplash.com/photo-1588698066547-83d47d0e82ec?q=80&w=800",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubCategory, setActiveSubCategory] = useState("");

  const mainScrollRef = useRef<HTMLDivElement | null>(null);
  const subScrollRef = useRef<HTMLDivElement | null>(null);

  const isDraggingRef = useRef(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    isDraggingRef.current = false;
    ref.current.dataset.isDown = "true";
    ref.current.dataset.startX = e.pageX.toString();
    ref.current.dataset.scrollLeft = ref.current.scrollLeft.toString();
  };

  const handleMouseLeaveOrUp = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    ref.current.dataset.isDown = "false";
    setTimeout(() => { isDraggingRef.current = false; }, 50);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;
    if (ref.current.dataset.isDown !== "true") return;
    e.preventDefault();
    const startX = parseFloat(ref.current.dataset.startX || "0");
    const scrollLeft = parseFloat(ref.current.dataset.scrollLeft || "0");
    const walk = (e.pageX - startX) * 1.5;
    if (Math.abs(walk) > 5) isDraggingRef.current = true;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const handleCategoryClick = (catName: string) => {
    if (isDraggingRef.current) return;
    setActiveCategory(catName);
    const categoryDetails = categoryStructure.find((category) => category.name === catName);
    if (categoryDetails && categoryDetails.subCategories.length > 0) {
      setActiveSubCategory(categoryDetails.subCategories[0]);
    } else {
      setActiveSubCategory("");
    }
  };

  const handleSubCategoryClick = (subCatName: string) => {
    if (isDraggingRef.current) return;
    setActiveSubCategory(subCatName);
  };

  const filteredProducts = productsData.filter((product) => {
    if (activeCategory !== "All" && product.category !== activeCategory) {
      return false;
    }
    if (activeSubCategory && !activeSubCategory.startsWith("All") && product.subCategory !== activeSubCategory) {
      return false;
    }
    return true;
  });

  const activeCategoryDetails = categoryStructure.find((category) => category.name === activeCategory);
  const hasSubCategories = !!activeCategoryDetails && activeCategoryDetails.subCategories.length > 0;

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-x-clip">

      {/* Hero Section */}
      <section className="relative bg-[#050505] pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-16 lg:px-24 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white blur-[150px] opacity-[0.03] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-white/60" />
              <p className="text-white/80 font-medium tracking-widest uppercase text-sm">
                Comprehensive Catalog
              </p>
            </div>

            <h1 className="text-[48px] md:text-[72px] lg:text-[84px] font-medium leading-[1.1] text-white tracking-tight mb-8">
              Engineered materials
              <br />
              <span className="text-zinc-500">
                for every requirement.
              </span>
            </h1>

            <p className="text-zinc-400 text-[18px] md:text-[20px] font-light max-w-2xl leading-relaxed">
              Explore our vast inventory covering structural
              engineering, architectural roofing, wall systems,
              and high-grade accessories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">

        {/* Header & Main Categories */}
        <div className="flex flex-col gap-8 pb-8 border-b border-zinc-200 mb-8 select-none">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-[40px] md:text-[64px] font-semibold tracking-tighter text-[#1a1a1a]">
              Browse Products.
            </h2>
          </motion.div>

          {/* Main Categories */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            ref={mainScrollRef}
            onMouseDown={(e) => handleMouseDown(e, mainScrollRef)}
            onMouseLeave={() => handleMouseLeaveOrUp(mainScrollRef)}
            onMouseUp={() => handleMouseLeaveOrUp(mainScrollRef)}
            onMouseMove={(e) => handleMouseMove(e, mainScrollRef)}
            className="w-full overflow-x-auto pb-4 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div className="flex items-center gap-2.5 w-max pr-6 pointer-events-none">
              {categoryStructure.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => handleCategoryClick(cat.name)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-[14px] font-medium transition-all duration-300 whitespace-nowrap border pointer-events-auto ${
                    activeCategory === cat.name
                      ? "bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-md"
                      : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  {cat.name}
                  {cat.subCategories.length > 0 && (
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeCategory === cat.name ? "text-white/70" : "text-zinc-400"}`} />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sub Categories */}
        <AnimatePresence>
          {hasSubCategories && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: "auto", marginBottom: "40px" }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="select-none"
            >
              <div
                ref={subScrollRef}
                onMouseDown={(e) => handleMouseDown(e, subScrollRef)}
                onMouseLeave={() => handleMouseLeaveOrUp(subScrollRef)}
                onMouseUp={() => handleMouseLeaveOrUp(subScrollRef)}
                onMouseMove={(e) => handleMouseMove(e, subScrollRef)}
                className="w-full overflow-x-auto cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                <div className="flex items-center gap-2 p-1.5 bg-[#f4f5f7] rounded-full w-max pointer-events-none">
                  {activeCategoryDetails?.subCategories.map((subCat) => (
                    <button
                      key={subCat}
                      onClick={() => handleSubCategoryClick(subCat)}
                      className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 whitespace-nowrap pointer-events-auto ${
                        activeSubCategory === subCat
                          ? "bg-white text-[#1a1a1a] shadow-sm"
                          : "text-zinc-500 hover:text-[#1a1a1a]"
                      }`}
                    >
                      {subCat}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Products Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="bg-[#fafafa] border border-zinc-200/80 rounded-[32px] overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl hover:border-zinc-300 transition-all duration-500 h-full block"
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-white/90 backdrop-blur-md text-[#1a1a1a] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="text-[22px] font-medium text-[#1a1a1a] mb-3 leading-snug">
                          {product.title}
                        </h3>
                        <p className="text-[15px] text-zinc-600 font-light leading-relaxed mb-6 line-clamp-2">
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
                  </Link>
                </motion.div>
              ))
            ) : (
              /* Empty State */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 md:py-24 px-6 flex flex-col items-center justify-center text-center border border-dashed border-zinc-200 rounded-[32px] bg-[#fafafa]/50"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-zinc-100 shadow-sm rounded-full flex items-center justify-center mb-6">
                  <Search className="w-6 h-6 md:w-8 md:h-8 text-zinc-400" strokeWidth={1.5} />
                </div>
                <h3 className="text-[20px] md:text-[24px] font-medium text-[#1a1a1a] mb-3">
                  No products found
                </h3>
                <p className="text-[14px] md:text-[15px] text-zinc-500 font-light max-w-sm md:max-w-md leading-relaxed">
                  We are currently updating our inventory for this category. Please check back later or contact us for custom orders.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTASection />
    </div>
  );
}