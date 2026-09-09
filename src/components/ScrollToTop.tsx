"use Client";

import { motion,AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";


export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400 ) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
  return (
   <AnimatePresence>
    {isVisible && (
       <motion.button
       initial={{ opacity: 0 , scale:0.5,y:20}}
       animate={{ opacity: 1, scale: 1, y: 0 }}
       exit={{ opacity: 0, scale: 0.5, y: 20 }}
       transition ={{duration: 0.3}}
       className="fixed bottom-8 right-8 z-50 bg-[#cc3333] text-white p-4 rounded-full shadow-lg hover:bg-[#ff4d4d] transition-colors duration-300"
      onClick={scrollToTop}
       >
        <ArrowUp size={24}  className=" group-hover: -translate-y-0.5  transition-transform duration-300"/>
      </motion.button>
    )}
   </AnimatePresence>
  )
}
