"use client";

import CTASection from "@/src/components/CTASection";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, CornerDownRight, ShieldCheck, Truck, Wrench } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Full details database for all 24 products
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
  "clay-roofing-tiles": {
    title: "Clay Roofing Tiles",
    category: "Roofing",
    heroDesc: "Classic aesthetic with excellent thermal insulation, perfect for traditional and modern homes.",
    image: "https://images.unsplash.com/photo-1628774942553-bd4b553e7457?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80&w=800",
    overview: "Manufactured from high-quality natural clay, our roofing tiles offer a timeless architectural appeal while providing superior heat insulation. They are highly resistant to harsh UV rays and heavy rainfall, maintaining their color and structural integrity over decades.",
    features: [
      "Natural thermal insulation keeping interiors naturally cool.",
      "Eco-friendly and 100% recyclable material.",
      "Fade-resistant natural terracotta finish.",
      "Interlocking design for enhanced weatherproofing."
    ],
    specifications: [
      { label: "Material", value: "Natural Fired Clay" },
      { label: "Durability", value: "50+ Years" },
      { label: "Weight per Sqm", value: "Approx. 40 kg" },
      { label: "Water Absorption", value: "< 8%" }
    ],
    applications: ["Heritage renovations", "Luxury residential homes", "Eco-resorts"]
  },
  "zinc-aluminium-roofing-sheets": {
    title: "Zinc-Aluminium Roofing Sheets",
    category: "Roofing",
    heroDesc: "High-grade alloy coated steel sheets providing superior corrosion resistance and long-lasting durability.",
    image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?q=80&w=800",
    overview: "Our Zinc-Aluminium roofing sheets are manufactured using superior alloy-coated steel, combining 55% Aluminium, 43.5% Zinc, and 1.5% Silicon. This unique composition offers exceptional barrier and galvanic corrosion protection, making it ideal for tropical climates.",
    features: [
      "Superior thermal reflectivity to keep interiors cooler.",
      "High tensile strength protecting against severe wind uplift.",
      "Advanced anti-peel and anti-fade exterior coating.",
      "Lightweight structure reducing overall dead load."
    ],
    specifications: [
      { label: "Base Metal", value: "High Tensile Steel G550" },
      { label: "Alloy Coating", value: "AZ150 (150g/m² coating mass)" },
      { label: "Standard Thickness", value: "0.40mm, 0.47mm" },
      { label: "Effective Coverage", value: "1000mm standard profile" }
    ],
    applications: ["Commercial warehouses", "Residential housing complexes", "Industrial plants"]
  },
  "stone-coated-steel-tiles": {
    title: "Stone-Coated Steel Tiles",
    category: "Roofing",
    heroDesc: "Combines the strength of steel with the natural aesthetic beauty of stone chips. Excellent sound and heat insulation.",
    image: "https://images.unsplash.com/photo-1589562733209-fab72552a40b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80&w=800",
    overview: "Stone-coated steel tiles bring together the robust security of high-grade steel panels and the timeless elegance of natural stone texture. Finished with ceramic-coated natural stone chips, these tiles resist fading and extreme weather damage while dampening rain noise.",
    features: [
      "Natural stone coating absorbs heavy rain sounds.",
      "Interlocking design ensures maximum wind resistance.",
      "Class-A fire resistant material rating.",
      "Maintains vibrant color stability across decades."
    ],
    specifications: [
      { label: "Overall Length", value: "1340mm" },
      { label: "Covered Length", value: "1260mm" },
      { label: "Weight per Sqm", value: "Approx. 6.2 kg" },
      { label: "Warranty", value: "25-Year Manufacturer Warranty" }
    ],
    applications: ["Luxury residential villas", "Hotels & holiday resorts", "Architectural buildings"]
  },
  "concrete-roof-tiles": {
    title: "Concrete Roof Tiles",
    category: "Roofing",
    heroDesc: "Heavy-duty structural integrity engineered for severe weather and extreme durability.",
    image: "https://img.magnific.com/free-photo/photo-wood-texture-pattern_58702-13174.jpg?t=st=1788893883~exp=1788897483~hmac=2de3cc02b389df9bb317c4824e1dae2277585470d5408e74bc34e4f1d64f394c&w=1480=80&w=800",
    overview: "Concrete roof tiles offer unmatched durability and a high-end profile for residential structures. Engineered to withstand high winds, hail, and heavy monsoons, these tiles provide a long-lasting, fire-safe roofing solution with minimal maintenance requirements.",
    features: [
      "Extreme resistance to high impact and severe weather.",
      "Excellent acoustic properties reducing external noise.",
      "Non-combustible Class A fire rating.",
      "Available in a variety of pigmented colors."
    ],
    specifications: [
      { label: "Material", value: "High-density extruded concrete" },
      { label: "Weight", value: "Heavy Profile (~45 kg/sqm)" },
      { label: "Water Resistance", value: "Highly impermeable" },
      { label: "Lifespan", value: "Up to 50 Years" }
    ],
    applications: ["High-end residential areas", "Coastal properties", "Commercial structures"]
  },
  "asphalt-shingles": {
    title: "Asphalt Shingles",
    category: "Roofing",
    heroDesc: "Flexible, waterproof, and highly cost-effective roofing solutions with a textured finish.",
    image: "https://img.magnific.com/premium-photo/brown-shingle-roof-with-wood-trim_1179475-39977.jpg?w=2000=80&w=800",
    overview: "Asphalt shingles are one of the most versatile and cost-effective roofing materials available. Featuring a fiberglass mat base coated with asphalt and ceramic granules, they provide excellent waterproofing, flexibility for complex roof shapes, and a sleek textured look.",
    features: [
      "Highly flexible, suitable for multi-angled roof designs.",
      "Excellent waterproofing and leak prevention.",
      "Cost-effective installation and low maintenance.",
      "Ceramic granules protect against UV degradation."
    ],
    specifications: [
      { label: "Base", value: "Fiberglass Mat" },
      { label: "Coating", value: "Weather-grade Asphalt" },
      { label: "Wind Resistance", value: "Up to 110 mph" },
      { label: "Warranty", value: "15 to 20 Years" }
    ],
    applications: ["Suburban homes", "Gazebos and sheds", "Sloped commercial roofs"]
  },
  "polycarbonate-skylight-sheets": {
    title: "Polycarbonate Skylight Sheets",
    category: "Roofing",
    heroDesc: "High-transparency corrugated panels allowing natural daylight while blocking harmful UV rays.",
    image: "https://img.magnific.com/free-photo/business-building-interior-with-plants_1127-2173.jpg?t=st=1788894190~exp=1788897790~hmac=703965cf7141a34ada746db9b4f31cbdef1d051d2b8d47b242706d904fbd20c2&w=2000=80&w=800",
    overview: "Polycarbonate skylight sheets provide brilliant natural illumination for industrial and commercial buildings, slashing daytime electricity costs. Coated with a protective UV layer, they prevent yellowing and brittle degradation under intense sunlight.",
    features: [
      "Up to 90% light transmission with soft diffusion.",
      "Co-extruded UV protection layer on outer surface.",
      "Virtually unbreakable impact resistance.",
      "Lightweight and easy to install alongside metal sheets."
    ],
    specifications: [
      { label: "Material", value: "High-grade Polycarbonate Resin" },
      { label: "Thickness", value: "1.0mm - 2.0mm" },
      { label: "Light Transmission", value: "Approx. 90%" },
      { label: "UV Protection", value: "Single/Double sided" }
    ],
    applications: ["Warehouse natural lighting bays", "Greenhouses", "Covered walkways"]
  },
  "corrugated-metal-sheets": {
    title: "Corrugated Metal Sheets",
    category: "Roofing",
    heroDesc: "Traditional wavy metal sheets perfect for industrial and agricultural buildings.",
    image: "https://images.unsplash.com/photo-1620440713551-67b10bbe350d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D=80&w=800",
    overview: "Corrugated metal sheets offer a classic, highly structural design that maximizes strength across wide spans. The wavy corrugations increase the bending strength of the sheet, making it a highly reliable and affordable option for large-scale utilitarian structures.",
    features: [
      "Corrugated design increases structural rigidity.",
      "Highly affordable and cost-effective for large spans.",
      "Fast and easy installation process.",
      "Excellent runoff for heavy rain and debris."
    ],
    specifications: [
      { label: "Profile", value: "Traditional Sinusoidal Wave" },
      { label: "Material", value: "Galvanized / Pre-painted Steel" },
      { label: "Gauge", value: "26 to 29 Gauge" },
      { label: "Coverage", value: "Standard 800mm width" }
    ],
    applications: ["Agricultural barns", "Temporary construction shelters", "Industrial roofing"]
  },
  "heavy-duty-steel-i-beams": {
    title: "Heavy-Duty Steel I-Beams",
    category: "Structures",
    heroDesc: "Hot-rolled structural steel beams engineered to support massive load-bearing requirements.",
    image: "https://images.unsplash.com/photo-1671022442106-c787685d9fed?q=80&w=800",
    overview: "Our hot-rolled structural steel I-beams are fabricated to strict international quality benchmarks, offering exceptional cross-sectional strength. Designed specifically to handle heavy bending moments and compressive loads, they serve as the fundamental backbone of large industrial facilities.",
    features: [
      "Optimized flange geometry for high resistance to bending.",
      "High weldability and ductility for effortless on-site fabrication.",
      "Strict compliance with international load metrics.",
      "Uniform thickness and structural integrity."
    ],
    specifications: [
      { label: "Steel Grade", value: "ASTM A36 / SS400" },
      { label: "Manufacturing Process", value: "Hot Rolled Structural Steel" },
      { label: "Standard Lengths", value: "6m, 12m" },
      { label: "Surface Finish", value: "Mill finish / Primer coated" }
    ],
    applications: ["Multi-story skyscrapers", "Industrial factory framing", "Heavy gantries"]
  },
  "galvanized-c-purlins": {
    title: "Galvanized C-Purlins",
    category: "Structures",
    heroDesc: "Cold-formed steel purlins offering exceptional structural support for roof and wall cladding systems.",
    image: "https://img.magnific.com/free-photo/close-up-metallic-pipes_23-2151113214.jpg?t=st=1788895073~exp=1788898673~hmac=bf0ad5581e6ec6f1f25724395ff3e1e0a6070dee9b3a8f3981a0fbe64af89bd4&w=2000=80&w=800",
    overview: "Cold-formed C-Purlins act as secondary structural members supporting roof sheets and wall claddings. Fabricated from high-tensile galvanized steel, they provide excellent rigidity, load span efficiency, and corrosion resistance for building skeletons.",
    features: [
      "Pre-punched holes available for fast, accurate assembly.",
      "High strength-to-weight ratio minimizing structural load.",
      "Galvanized zinc coating protecting against humidity.",
      "Clean, straight profiles for easy cladding installation."
    ],
    specifications: [
      { label: "Material", value: "Galvanized High Tensile Steel" },
      { label: "Coating", value: "Z275 Galvanized" },
      { label: "Web Depth", value: "100mm to 300mm" },
      { label: "Yield Strength", value: "Min 340 MPa" }
    ],
    applications: ["Roof purlins", "Wall girts", "Industrial shed skeletons"]
  },
  "structural-z-purlins": {
    title: "Structural Z-Purlins",
    category: "Structures",
    heroDesc: "Z-shaped purlins allowing overlaps for continuous spans in large commercial warehouses.",
    image: "https://img.magnific.com/free-photo/large-steel-factory-warehouse_1127-3285.jpg?t=st=1788894763~exp=1788898363~hmac=9eb8ab086bc8d34b23d7ca19e149461aa964d815291b1c178df44d2e70163d75&w=1480=80&w=800",
    overview: "Z-Purlins feature one broad and one narrow flange, allowing them to overlap precisely at the structural supports. This overlapping capability creates a continuous span across multiple bays, significantly increasing the structural load capacity of massive warehouse roofs.",
    features: [
      "Overlapping design doubles strength at support joints.",
      "Ideal for extremely wide uninterrupted building spans.",
      "Reduces the number of primary structural beams required.",
      "High tensile galvanized finish prevents rust."
    ],
    specifications: [
      { label: "Profile Shape", value: "Asymmetrical Z-Section" },
      { label: "Yield Strength", value: "450 MPa" },
      { label: "Thickness", value: "1.5mm - 3.0mm" },
      { label: "Coating", value: "Galvanized" }
    ],
    applications: ["Large logistics hubs", "Aircraft hangars", "Continuous span warehouses"]
  },
  "welded-wire-mesh": {
    title: "Welded Wire Mesh",
    category: "Structures",
    heroDesc: "High-tensile steel mesh used heavily for concrete slab reinforcement and crack prevention.",
    image: "https://images.unsplash.com/photo-1651890331040-b3e99782661f?q=80&w=800",
    overview: "Welded wire mesh (BRC mesh) is an essential component for reinforcing concrete slabs. Made by electrically welding high-tensile steel wires at intersections, it provides uniform stress distribution, preventing concrete from cracking under heavy pressure.",
    features: [
      "Uniform grid ensures even load distribution across concrete.",
      "Significantly faster to install than tying loose rebar.",
      "Prevents thermal expansion cracks in massive slabs.",
      "High tensile strength steel prevents structural failure."
    ],
    specifications: [
      { label: "Material", value: "High-Tensile Cold Drawn Steel" },
      { label: "Mesh Spacing", value: "Customizable (e.g. 150x150mm)" },
      { label: "Wire Diameter", value: "5mm to 10mm" },
      { label: "Sheet Size", value: "Standard 2.4m x 4.8m" }
    ],
    applications: ["Industrial concrete flooring", "Driveways & pavements", "Precast concrete panels"]
  },
  "reinforcing-steel-rebar": {
    title: "Reinforcing Steel Rebar",
    category: "Structures",
    heroDesc: "TMT ribbed bars providing core structural stability and tensile strength to concrete columns.",
    image: "https://images.unsplash.com/photo-1763771420551-18bc44399f0c?q=80&w=800",
    overview: "Thermo-Mechanically Treated (TMT) steel rebars are the backbone of modern concrete structures. Concrete is strong under compression but weak under tension; our ribbed rebars provide the essential tensile strength needed to keep high-rise buildings standing tall.",
    features: [
      "Prominent ribbed surface ensures optimal bond with concrete.",
      "High ductility to absorb seismic vibrations.",
      "Corrosion-resistant outer martensite layer.",
      "Exceptional bendability without cracking."
    ],
    specifications: [
      { label: "Steel Type", value: "TMT (Thermo-Mechanically Treated)" },
      { label: "Standard", value: "SLS 375 / BS 4449" },
      { label: "Diameters", value: "8mm, 10mm, 12mm, 16mm, 20mm" },
      { label: "Length", value: "Standard 12m lengths" }
    ],
    applications: ["High-rise foundations", "Concrete columns & beams", "Bridge infrastructure"]
  },
  "seamless-aluminium-gutters": {
    title: "Seamless Aluminium Gutters",
    category: "Rainwater Systems",
    heroDesc: "Custom-formed seamless gutter systems designed to handle heavy tropical downpours without leaking.",
    image: "https://img.magnific.com/free-photo/low-angle-shot-two-pipes-as-they-go-up-building-window_181624-16532.jpg?t=st=1788895613~exp=1788899213~hmac=8f8c76acdda3bedaf83f83ee7372dfe1aeb1c894d3a97cbb84fe3e251c2c8127&w=2000=80&w=800",
    overview: "Engineered specifically to combat heavy seasonal tropical rains, our seamless aluminium gutters are custom-rolled on-site to match exact building dimensions. The complete absence of middle joints eliminates traditional weak points prone to leakage.",
    features: [
      "Continuous custom length fabrication with zero mid-joints.",
      "Heavy gauge aluminium that will never rust or corrode.",
      "Sleek architectural contour matching modern roofs.",
      "High-capacity volume handling during torrential downpours."
    ],
    specifications: [
      { label: "Material", value: "Heavy Gauge Aluminium" },
      { label: "Thickness", value: "0.9mm - 1.2mm" },
      { label: "Profiles", value: "Box Profile / Ogee Profile" },
      { label: "Fastening", value: "Hidden internal brackets" }
    ],
    applications: ["Residential perimeter drainage", "Commercial complexes", "Educational campuses"]
  },
  "square-downpipe-networks": {
    title: "Square Downpipe Networks",
    category: "Rainwater Systems",
    heroDesc: "Architecturally sleek square downpipes engineered for high-capacity drainage and secure wall mounting.",
    image: "https://images.unsplash.com/photo-1562545714-62c15e7fdf9e?q=80&w=800",
    overview: "Square downpipe networks combine high-velocity water discharge capacity with a clean, geometric architectural silhouette. Finished with durable powder coatings, they integrate seamlessly into modern exterior wall styling.",
    features: [
      "Square cross-section handles higher water velocity.",
      "Scratch and UV resistant exterior powder coating.",
      "Heavy-duty secure wall clips preventing vibration.",
      "Seamless integration with box-profile gutters."
    ],
    specifications: [
      { label: "Dimensions", value: "75mm x 75mm / 100mm x 100mm" },
      { label: "Coating", value: "Electrostatic Powder Coating" },
      { label: "Color Options", value: "Matte Black, Grey, White" },
      { label: "Joints", value: "Interlocking sleeve design" }
    ],
    applications: ["Exterior drainage routing", "High-rise buildings", "Modern residential villas"]
  },
  "acoustic-wood-ceiling": {
    title: "Acoustic Wood Paneling",
    category: "Ceiling",
    heroDesc: "Premium interior wooden slats designed for superior sound absorption and modern aesthetic appeal.",
    image: "https://img.magnific.com/free-photo/gray-sofa-living-room-with-copy-space_43614-926.jpg?t=st=1788923508~exp=1788927108~hmac=d525802408c50e14ec2d57d86d763759458b0594c4e2c70569c417fa78245748&w=1480=80&w=800",
    overview: "Acoustic wood paneling transforms interior spaces by drastically reducing echo and noise reverberation while adding a warm, luxurious wooden texture. These slatted panels are backed with high-density acoustic felt to absorb sound waves effectively.",
    features: [
      "Significantly dampens room echo and background noise.",
      "Real wood veneer providing a premium, natural finish.",
      "Easy installation over existing drywall or concrete.",
      "Fire-retardant backing materials available."
    ],
    specifications: [
      { label: "Material", value: "MDF Core + Natural Oak Veneer" },
      { label: "Backing", value: "High-Density Recycled Acoustic Felt" },
      { label: "Panel Size", value: "2400mm x 600mm" },
      { label: "Slat Spacing", value: "13mm gaps" }
    ],
    applications: ["Corporate boardrooms", "Home theaters", "Luxury hotel lobbies"]
  },
  "gypsum-ceiling-boards": {
    title: "Gypsum Ceiling Boards",
    category: "Ceiling",
    heroDesc: "Fire-resistant and smooth finishing interior boards for seamless, modern flat ceilings.",
    image: "https://img.magnific.com/free-photo/plasterboard-installers-men-assembling-drywall-false-ceiling-simple-affordable-renovation-premises_166373-1909.jpg?t=st=1788923625~exp=1788927225~hmac=17f28797f71855dd1eb8fc7583ed10d5509ac3e95053ed846f5f0d5679255af7&w=2000=80&w=800",
    overview: "Gypsum boards (drywall) are the standard for achieving perfectly flat, seamless interior ceilings. They offer excellent fire resistance due to the natural water molecules trapped in the gypsum core, and provide a pristine canvas for interior paint.",
    features: [
      "Creates perfectly smooth, jointless ceiling surfaces.",
      "Inherent fire-resistant properties for building safety.",
      "Lightweight and easy to cut for lighting fixtures.",
      "Moisture-resistant variants available for bathrooms."
    ],
    specifications: [
      { label: "Core Material", value: "Aerated Gypsum Plaster" },
      { label: "Facing", value: "Heavy-duty paper liner" },
      { label: "Thickness", value: "9.5mm to 12.5mm" },
      { label: "Sheet Size", value: "1220mm x 2440mm (4ft x 8ft)" }
    ],
    applications: ["Residential interiors", "Commercial office spaces", "Retail showrooms"]
  },
  "suspended-grid-ceilings": {
    title: "Suspended Grid Ceilings",
    category: "Ceiling",
    heroDesc: "Aluminium T-grid systems paired with acoustic mineral fiber tiles for fast commercial installations.",
    image: "https://img.magnific.com/free-photo/vertical-low-angle-shot-metal-ceiling-concrete-building_181624-7530.jpg?t=st=1788923681~exp=1788927281~hmac=739c7a779998e7d74dfec463f4bf51ecb62803c968e3f6ea0b63310e8f3613b5&w=2000=80&w=800",
    overview: "Suspended T-grid ceilings are the ultimate solution for commercial spaces, allowing easy access to HVAC ducts, electrical wiring, and plumbing hidden above. Paired with mineral fiber tiles, they provide excellent acoustic control in busy offices.",
    features: [
      "Removable tiles allow instant access to hidden utilities.",
      "Mineral fiber tiles absorb office noise and chatter.",
      "Fast, modular installation requiring no painting.",
      "Light-reflective white finish reduces lighting costs."
    ],
    specifications: [
      { label: "Grid Material", value: "Pre-painted Galvanized Steel / Aluminium" },
      { label: "Tile Material", value: "Acoustic Mineral Fiber" },
      { label: "Tile Size", value: "600mm x 600mm" },
      { label: "Grid Profile", value: "Exposed T-Bar (24mm width)" }
    ],
    applications: ["Corporate offices", "Hospitals & clinics", "Supermarkets"]
  },
  "exterior-wall-cladding": {
    title: "Exterior Steel Cladding",
    category: "Wall Systems",
    heroDesc: "Durable and weather-resistant wall systems providing a sleek, industrial facade for commercial buildings.",
    image: "https://img.magnific.com/free-photo/beautiful-building-exterior-design_23-2151917337.jpg?t=st=1788923764~exp=1788927364~hmac=6ab7c09b83039ccd5340e207e53977726af92a4c85679b73c495c19b21ac7d3e&w=2000=80&w=800",
    overview: "Exterior steel cladding protects building frameworks from harsh elements while delivering a sharp, modern aesthetic. Installed horizontally or vertically, these profiled sheets are coated with advanced weather-resistant paints to prevent fading and rust.",
    features: [
      "Provides a protective shield against rain, wind, and UV.",
      "Fast installation covering large exterior areas quickly.",
      "Low maintenance compared to painted concrete walls.",
      "Available in multiple profiles and architectural colors."
    ],
    specifications: [
      { label: "Material", value: "Color-Coated Zinc-Aluminium" },
      { label: "Thickness", value: "0.47mm - 0.50mm" },
      { label: "Paint System", value: "Silicon Modified Polyester (SMP)" },
      { label: "Profile", value: "Trapezoidal / Architectural Rib" }
    ],
    applications: ["Factory exteriors", "Commercial showrooms", "Sports arenas"]
  },
  "industrial-floor-boards": {
    title: "Industrial Floor Boards",
    category: "Floor Boards",
    heroDesc: "Heavy-duty load bearing floor boards engineered specifically for mezzanine structures and elevated factory floors.",
    image: "https://images.unsplash.com/photo-1632255758400-d51330d2279a?q=80&w=800",
    overview: "Industrial fiber cement or high-density structural floor boards provide a rock-solid foundation for elevated spaces. They are engineered to handle extreme point-loads from heavy machinery, pallets, and constant foot traffic without deflecting.",
    features: [
      "High point-load capacity for heavy industrial storage.",
      "Water-resistant and termite-proof core.",
      "Non-combustible material ensuring factory fire safety.",
      "Smooth finish ready for epoxy coating or vinyl tiles."
    ],
    specifications: [
      { label: "Material", value: "High-Density Fiber Cement" },
      { label: "Thickness", value: "18mm - 24mm" },
      { label: "Board Size", value: "1220mm x 2440mm" },
      { label: "Load Capacity", value: "Industrial Grade Heavy Load" }
    ],
    applications: ["Warehouse mezzanine floors", "Prefabricated steel buildings", "Server rooms"]
  },
  "automated-sliding-gates": {
    title: "Automated Sliding Gates",
    category: "Motorized Gates",
    heroDesc: "Heavy-duty structural gates equipped with high-torque motorized systems for secure industrial access.",
    image: "https://img.magnific.com/free-photo/exterior-modern-residential-building_637285-1921.jpg?t=st=1788923836~exp=1788927436~hmac=f3d1d89f873ec988c75326d093cdf7863509ac7257f64fa89dd26e021399a00e&w=1060=80&w=800",
    overview: "Our automated sliding gates combine rugged steel fabrication with intelligent motor technology. Designed for high-frequency use in factories and commercial estates, they provide smooth, secure, and reliable access control backed by remote and sensor operations.",
    features: [
      "Fabricated using heavy-gauge galvanized steel framing.",
      "High-torque gear motors designed for continuous operation.",
      "Infrared safety sensors prevent crushing accidents.",
      "Manual override capability during power outages."
    ],
    specifications: [
      { label: "Frame Material", value: "Galvanized Box Sections" },
      { label: "Motor Power", value: "1200W - 2000W (Gate weight dependent)" },
      { label: "Operation", value: "Remote / RFID / Keypad" },
      { label: "Finish", value: "Anti-rust Epoxy Paint" }
    ],
    applications: ["Factory main entrances", "Residential gated communities", "Logistics hubs"]
  },
  "weather-shield-exterior-paint": {
    title: "Weather-Shield Exterior Paint",
    category: "Paints & Putty",
    heroDesc: "Premium UV and rain-resistant emulsion paint formulated for long-lasting, vibrant exterior walls.",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800",
    overview: "Formulated specifically for harsh tropical climates, our exterior weather-shield emulsion protects masonry from intense UV rays and heavy monsoon rains. It contains advanced anti-fungal properties to keep exterior walls looking fresh and free from algae for years.",
    features: [
      "Elastomeric properties bridge hairline cracks in plaster.",
      "Superior UV resistance prevents color fading and chalking.",
      "Anti-algae and anti-fungal chemical composition.",
      "Excellent hiding power and coverage per liter."
    ],
    specifications: [
      { label: "Type", value: "100% Acrylic Exterior Emulsion" },
      { label: "Finish", value: "Smooth Matte / Mid-Sheen" },
      { label: "Drying Time", value: "Surface dry in 30 mins" },
      { label: "Durability", value: "7 to 10 Year Protection" }
    ],
    applications: ["Exterior concrete walls", "Boundary walls", "Commercial building facades"]
  },
  "premium-wall-putty": {
    title: "Premium Wall Putty",
    category: "Paints & Putty",
    heroDesc: "White cement-based putty that fills pores and provides a silky smooth base for premium painting.",
    image: "https://plus.unsplash.com/premium_photo-1681589433879-c823909b13be?q=80&w=800",
    overview: "Achieve the perfect flawless finish with our premium white cement-based wall putty. It acts as an excellent bonding agent between the plaster and the paint, filling fine pores and ensuring a rich, even spread of expensive topcoats.",
    features: [
      "Provides an ultra-smooth, bright white canvas for paint.",
      "High water resistance prevents paint flaking and blistering.",
      "Reduces paint consumption by decreasing wall porosity.",
      "Excellent workability and easy sanding properties."
    ],
    specifications: [
      { label: "Base", value: "White Cement & High-grade Polymers" },
      { label: "Application", value: "Interior & Exterior walls" },
      { label: "Coverage", value: "Approx. 1.5 kg / sqm (2 coats)" },
      { label: "Curing", value: "No water curing required" }
    ],
    applications: ["New plastered walls", "Concrete ceilings", "Renovation surface prep"]
  },
  "high-tensile-fasteners": {
    title: "High-Tensile Fasteners",
    category: "Accessories",
    heroDesc: "Professional-grade self-drilling screws with EPDM rubber washers designed for roofing and steel structures.",
    image: "https://images.unsplash.com/photo-1605701249987-f0bb9b505d06?q=80&w=800",
    overview: "The integrity of a steel structure or roof relies entirely on its fasteners. Our Class-3 and Class-4 self-drilling screws are engineered to penetrate thick steel purlins effortlessly while their vulcanized EPDM washers create a watertight seal that outlasts the roof itself.",
    features: [
      "Self-drilling tips eliminate the need for pre-drilling.",
      "Class-4 galvanized coating resists severe coastal rust.",
      "UV-resistant EPDM rubber washers guarantee zero leaks.",
      "High shear strength prevents snapping under wind load."
    ],
    specifications: [
      { label: "Material", value: "Carbon Steel / Stainless Steel" },
      { label: "Coating", value: "Class 3 / Class 4 Mechanical Galvanized" },
      { label: "Washer", value: "Vulcanized EPDM Rubber" },
      { label: "Head Type", value: "Hex Flange Head" }
    ],
    applications: ["Fixing roofing sheets", "Wall cladding assembly", "Steel frame connections"]
  },
  "polyurethane-roof-sealants": {
    title: "Polyurethane Sealants",
    category: "Accessories",
    heroDesc: "High-elasticity waterproof sealant for expansion joints, gutters, and roofing overlaps.",
    image: "https://img.magnific.com/free-vector/caulking-gun-metallic-bottle-with-construction-foam-sealing-adhesive-pu-foam_1441-1629.jpg?t=st=1788896441~exp=1788900041~hmac=3f78e3dd7d47f8674dff278827ab969c4ccb25c37e0452dc3e49f710e61b3d71&w=1480=80&w=800",
    overview: "When dealing with metal roofs and concrete joints, thermal expansion is inevitable. Our industrial polyurethane (PU) sealants offer extreme elasticity, expanding and contracting with the building without cracking or losing their watertight grip.",
    features: [
      "Remains permanently elastic even under extreme heat.",
      "Excellent adhesion to steel, concrete, wood, and glass.",
      "Completely waterproof and highly weather-resistant.",
      "Can be painted over once fully cured."
    ],
    specifications: [
      { label: "Base Chemistry", value: "Polyurethane (PU)" },
      { label: "Elastic Recovery", value: "> 90%" },
      { label: "Curing Rate", value: "~3mm per 24 hours" },
      { label: "Temperature Resistance", value: "-40°C to +90°C" }
    ],
    applications: ["Roof sheet overlaps", "Gutter joint sealing", "Concrete expansion gaps"]
  }
};

export default function ProductDetailsPage() {
  const params = useParams();
  const slug = (params?.slug as string) || "clay-roofing-tiles";
  
  // Match slug or fallback to the first item (clay-roofing-tiles)
  const product = productsContent[slug] || productsContent["clay-roofing-tiles"];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans overflow-x-clip">

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