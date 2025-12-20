import { motion } from "framer-motion";
import logo from "../assets/logo.png";

function Navbar() {
  const navItems = ["education", "projects", "skills", "profiles"];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#010514]/70 backdrop-blur-md
        border-b border-slate-800
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-6 md:px-12
          h-20
          flex items-center justify-between
        "
      >
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-4 group">
          <img
            src={logo}
            alt="Portfolio Logo"
            className="
              h-10 w-auto
              transition-transform duration-300
              group-hover:scale-105
            "
          />
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="
                relative text-base font-medium
                text-slate-400
                transition-colors duration-300
                hover:text-teal-400
                after:absolute after:-bottom-1 after:left-0
                after:h-[2px] after:w-0
                after:bg-teal-400
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
