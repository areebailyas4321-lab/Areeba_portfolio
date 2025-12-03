import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414]/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="text-white flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer font-mono" onClick={() => window.scrollTo(0, 0)}>
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Areeba</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Ilyas</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
          {menuItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.1, color: "#8245ec" }}
              className={`cursor-pointer transition-colors ${activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <motion.a whileHover={{ y: -3, color: "#8245ec" }} href="https://github.com/areebailyas4321-lab" target="_blank" rel="noopener noreferrer" className="text-gray-300 transition-colors">
            <FaGithub size={24} />
          </motion.a>


        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-[#8245ec] focus:outline-none">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050414]/95 backdrop-blur-xl overflow-hidden rounded-b-2xl border-t border-gray-800 mt-4"
          >
            <ul className="flex flex-col items-center space-y-6 py-8 text-gray-300">
              {menuItems.map((item) => (
                <motion.li
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer text-lg font-medium ${activeSection === item.id ? "text-[#8245ec]" : ""
                    }`}
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <div className="flex space-x-6 pt-4">
                <a href="https://github.com/areebailyas4321-lab" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
                  <FaGithub size={28} />
                </a>

              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
