"use client";

import CTASection from "@/src/components/CTASection";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  CornerDownRight,
  Search,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

const categoryStructure = [
  {
    name: "All",
    subCategories: [],
  },
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
  {
    name: "Wall Systems",
    subCategories: [],
  },
  {
    name: "Floor Boards",
    subCategories: [],
  },
  {
    name: "Rainwater Systems",
    subCategories: [
      "All Rainwater",
      "Seamless Gutters",
      "Downpipes",
    ],
  },
  {
    name: "Paints & Putty",
    subCategories: [],
  },
  {
    name: "Motorized Gates",
    subCategories: [],
  },
  {
    name: "Structures",
    subCategories: [
      "All Structures",
      "Heavy-Duty I-Beams",
      "Purlins",
    ],
  },
  {
    name: "Accessories",
    subCategories: [
      "All Accessories",
      "Fasteners",
      "Sealants",
    ],
  },
];

const productsData = [
  {
    id: 1,
    slug: "zinc-aluminium-roofing-sheets",
    title: "Zinc-Aluminium Roofing Sheets",
    category: "Roofing",
    subCategory: "Zinc-Aluminium",
    desc: "High-grade alloy coated steel sheets providing superior corrosion resistance.",
    specs: "Thickness: 0.40mm - 0.50mm",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356f78?q=80&w=1000",
  },
  {
    id: 2,
    slug: "stone-coated-steel-tiles",
    title: "Stone-Coated Steel Tiles",
    category: "Roofing",
    subCategory: "Stone-Coated",
    desc: "Combines the strength of steel with natural stone chips. Excellent sound insulation.",
    specs: "Warranty: 25 Years",
    img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=1000",
  },
  {
    id: 3,
    slug: "polycarbonate-skylight-sheets",
    title: "Polycarbonate Skylight Sheets",
    category: "Roofing",
    subCategory: "Polycarbonate",
    desc: "High-transparency corrugated panels allowing natural daylight.",
    specs: "Light Transmission: 90%",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
  },
  {
    id: 4,
    slug: "heavy-duty-steel-i-beams",
    title: "Heavy-Duty Steel I-Beams",
    category: "Structures",
    subCategory: "Heavy-Duty I-Beams",
    desc: "Hot-rolled structural steel beams engineered to support massive load-bearing.",
    specs: "Grade: ASTM A36",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000",
  },
  {
    id: 5,
    slug: "c-purlins-z-purlins",
    title: "C-Purlins & Z-Purlins",
    category: "Structures",
    subCategory: "Purlins",
    desc: "Cold-formed steel purlins offering exceptional structural support for cladding.",
    specs: "Coating: Galvanized",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000",
  },
  {
    id: 6,
    slug: "seamless-aluminium-gutters",
    title: "Seamless Aluminium Gutters",
    category: "Rainwater Systems",
    subCategory: "Seamless Gutters",
    desc: "Custom-formed seamless gutter systems designed to handle heavy downpours.",
    specs: "Material: Heavy gauge aluminum",
    img: "https://images.unsplash.com/photo-1620245451921-1632731804f8?q=80&w=1000",
  },
  {
    id: 7,
    slug: "square-downpipe-networks",
    title: "Square Downpipe Networks",
    category: "Rainwater Systems",
    subCategory: "Downpipes",
    desc: "Architecturally sleek square downpipes engineered for high-capacity drainage.",
    specs: "Finish: Powder coated",
    img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000",
  },
  {
    id: 8,
    slug: "roof-waterproofing-sealants",
    title: "Waterproofing Sealants & Fasteners",
    category: "Accessories",
    subCategory: "Sealants",
    desc: "Professional-grade self-drilling screws and high-elasticity sealants.",
    specs: "Durability: Weatherproof seal",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1000",
  },
  {
    id: 9,
    slug: "acoustic-wood-ceiling",
    title: "Acoustic Wood Paneling",
    category: "Ceiling",
    subCategory: "Wood Panels",
    desc: "Premium interior wooden slats designed for sound absorption and modern aesthetics.",
    specs: "Material: Oak Veneer",
    img: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000",
  },
  {
    id: 10,
    slug: "exterior-wall-cladding",
    title: "Exterior Steel Cladding",
    category: "Wall Systems",
    subCategory: "",
    desc: "Durable and weather-resistant wall systems for commercial facades.",
    specs: "Thickness: 0.50mm",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
  },
  {
    id: 11,
    slug: "industrial-epoxy-flooring",
    title: "Industrial Floor Boards",
    category: "Floor Boards",
    subCategory: "",
    desc: "Heavy-duty load bearing floor boards for mezzanine structures and factories.",
    specs: "Capacity: High Load",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000",
  },
  {
    id: 12,
    slug: "automated-sliding-gates",
    title: "Automated Sliding Gates",
    category: "Motorized Gates",
    subCategory: "",
    desc: "Heavy-duty structural gates equipped with high-torque motorized systems.",
    specs: "Power: 1200W Motor",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubCategory, setActiveSubCategory] = useState("");

  /*
   * We use HTMLElement references directly instead of
   * React.RefObject types. This avoids the React 19 /
   * Next.js 16 RefObject nullability type conflict.
   */
  const mainScrollRef = useRef<HTMLDivElement | null>(null);
  const subScrollRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  /*
   * Get the actual element instead of passing RefObject
   * to helper functions.
   */
  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const element = e.currentTarget;

    isDraggingRef.current = false;

    element.dataset.isDown = "true";
    element.dataset.startX = e.pageX.toString();
    element.dataset.scrollLeft =
      element.scrollLeft.toString();
  };

  const handleMouseLeaveOrUp = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const element = e.currentTarget;

    element.dataset.isDown = "false";

    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const element = e.currentTarget;

    if (element.dataset.isDown !== "true") {
      return;
    }

    e.preventDefault();

    const startX = parseFloat(
      element.dataset.startX || "0"
    );

    const scrollLeft = parseFloat(
      element.dataset.scrollLeft || "0"
    );

    const walk = (e.pageX - startX) * 1.5;

    if (Math.abs(walk) > 5) {
      isDraggingRef.current = true;
    }

    element.scrollLeft = scrollLeft - walk;
  };

  const handleCategoryClick = (catName: string) => {
    if (isDraggingRef.current) return;

    setActiveCategory(catName);

    const categoryDetails = categoryStructure.find(
      (category) => category.name === catName
    );

    if (
      categoryDetails &&
      categoryDetails.subCategories.length > 0
    ) {
      setActiveSubCategory(
        categoryDetails.subCategories[0]
      );
    } else {
      setActiveSubCategory("");
    }
  };

  const handleSubCategoryClick = (
    subCatName: string
  ) => {
    if (isDraggingRef.current) return;

    setActiveSubCategory(subCatName);
  };

  const filteredProducts = productsData.filter(
    (product) => {
      if (
        activeCategory !== "All" &&
        product.category !== activeCategory
      ) {
        return false;
      }

      if (
        activeSubCategory &&
        !activeSubCategory.startsWith("All") &&
        product.subCategory !== activeSubCategory
      ) {
        return false;
      }

      return true;
    }
  );

  const activeCategoryDetails = categoryStructure.find(
    (category) => category.name === activeCategory
  );

  const hasSubCategories =
    !!activeCategoryDetails &&
    activeCategoryDetails.subCategories.length > 0;

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-x-clip">
      {/* HERO SECTION */}
      <section className="relative bg-[#050505] pt-40 pb-24 md:pt-52 md:pb-32 px-6 md:px-16 lg:px-24 overflow-hidden rounded-b-[40px] md:rounded-b-[60px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white blur-[150px] opacity-[0.03] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-4xl"
          >
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
              Explore our vast inventory covering
              structural engineering, architectural roofing,
              wall systems, and high-grade accessories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto">
        {/* HEADER */}
        <div className="flex flex-col gap-8 pb-8 border-b border-zinc-200 mb-8 select-none">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-[40px] md:text-[64px] font-semibold tracking-tighter text-[#1a1a1a]">
              Browse Products.
            </h2>
          </motion.div>

          {/* MAIN CATEGORIES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            ref={mainScrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            className="w-full overflow-x-auto pb-4 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div className="flex items-center gap-2.5 w-max pr-6">
              {categoryStructure.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() =>
                    handleCategoryClick(cat.name)
                  }
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-[14px] font-medium transition-all duration-300 whitespace-nowrap border ${
                    activeCategory === cat.name
                      ? "bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-md"
                      : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                  }`}
                >
                  {cat.name}

                  {cat.subCategories.length > 0 && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${
                        activeCategory === cat.name
                          ? "text-white/70"
                          : "text-zinc-400"
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SUB CATEGORIES */}
        <AnimatePresence>
          {hasSubCategories && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
                marginBottom: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                marginBottom: "40px",
              }}
              exit={{
                opacity: 0,
                height: 0,
                marginBottom: 0,
              }}
              className="select-none"
            >
              <div
                ref={subScrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeaveOrUp}
                onMouseUp={handleMouseLeaveOrUp}
                onMouseMove={handleMouseMove}
                className="w-full overflow-x-auto cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                <div className="flex items-center gap-2 p-1.5 bg-[#f4f5f7] rounded-full w-max">
                  {activeCategoryDetails?.subCategories.map(
                    (subCat) => (
                      <button
                        key={subCat}
                        onClick={() =>
                          handleSubCategoryClick(subCat)
                        }
                        className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 whitespace-nowrap ${
                          activeSubCategory === subCat
                            ? "bg-white text-[#1a1a1a] shadow-sm"
                            : "text-zinc-500 hover:text-[#1a1a1a]"
                        }`}
                      >
                        {subCat}
                      </button>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PRODUCTS GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  key={product.id}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    className="bg-[#fafafa] border border-zinc-200/80 rounded-[32px] overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl hover:border-zinc-300 transition-all duration-500 h-full block"
                  >
                    {/* IMAGE */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <img
                        src={product.img}
                        alt={product.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      />

                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="bg-white/90 backdrop-blur-md text-[#1a1a1a] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-8 flex flex-col flex-1 justify-between">
                      <div>
                        <h3 className="text-[22px] font-medium text-[#1a1a1a] mb-3 leading-snug">
                          {product.title}
                        </h3>

                        <p className="text-[15px] text-zinc-600 font-light leading-relaxed mb-6 line-clamp-2">
                          {product.desc}
                        </p>
                      </div>

                      <div className="pt-6 border-t border-zinc-200/60 flex items-center justify-between gap-4">
                        <span className="text-[12px] text-zinc-500 font-medium tracking-wide">
                          {product.specs}
                        </span>

                        <div className="shrink-0 w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center group-hover:bg-[#1a1a1a] group-hover:border-[#1a1a1a] transition-all duration-300">
                          <CornerDownRight
                            size={16}
                            className="text-[#1a1a1a] group-hover:text-white transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              /* EMPTY STATE */
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-16 md:py-24 px-6 flex flex-col items-center justify-center text-center border border-dashed border-zinc-200 rounded-[32px] bg-[#fafafa]/50"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white border border-zinc-100 shadow-sm rounded-full flex items-center justify-center mb-6">
                  <Search
                    className="w-6 h-6 md:w-8 md:h-8 text-zinc-400"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-[20px] md:text-[24px] font-medium text-[#1a1a1a] mb-3">
                  No products found
                </h3>

                <p className="text-[14px] md:text-[15px] text-zinc-500 font-light max-w-sm md:max-w-md leading-relaxed">
                  We are currently updating our inventory
                  for this category. Please check back later
                  or contact us for custom orders.
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

