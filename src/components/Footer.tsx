import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-gray-400 py-16 px-8 md:px-20 relative overflow-hidden">
      {/* Big Watermark Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 text-[20vw] font-black text-white/5 pointer-events-none select-none z-0">
        VINTA
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="text-white text-3xl font-bold tracking-widest mb-2 flex items-center gap-2">
            <div className="w-6 h-6 bg-white shrink-0" style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}></div>
            VINTA
          </h3>
          <p className="text-sm mb-6">Roof and Rain Water Solution</p>
          <div className="flex gap-4">
            <FaFacebook className="w-5 h-5 hover:text-white cursor-pointer transition"/>
            <FaTwitter className="w-5 h-5 hover:text-white cursor-pointer transition"/>
            <FaInstagram className="w-5 h-5 hover:text-white cursor-pointer transition"/>
            <FaLinkedin className="w-5 h-5 hover:text-white cursor-pointer transition"/>
          </div>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Contact Us</h4>
          <p className="mb-4 text-sm">+94 70 123 4562</p>
          <p className="mb-4 text-sm">Hello@vintaengineering</p>
          <p className="text-sm leading-relaxed">Haputale Road, Welimada</p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-6">Pages</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Projects</a></li>
            <li><a href="#" className="hover:text-white transition">Blogs</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-xl font-medium mb-4">Subscribe now</h4>
          <p className="text-sm mb-6">It is a long established fact that a reader will be distracted by the readable.</p>
          <div className="flex bg-white/10 rounded-md overflow-hidden p-1">
            <input type="email" placeholder="email@example.com" className="bg-transparent border-none outline-none px-4 py-2 text-sm text-white w-full" />
            <button className="bg-white text-black px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-200 transition">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs">
        <p>© 2023 All Rights Reserved Vinta Roofing</p>
        <p>Create by Netxium</p>
        <div className="flex gap-4">
           <a href="#" className="hover:text-white">Terms</a>
           <a href="#" className="hover:text-white">Privacy</a>
           <a href="#" className="hover:text-white">Cookies</a>
        </div>
      </div>
    </footer>
  );
}