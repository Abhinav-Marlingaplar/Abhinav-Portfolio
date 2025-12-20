import { motion } from "framer-motion";
import bgImage from "../assets/background.jpg";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 md:px-20 pt-32"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl space-y-6"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white"
        >
          Abhinav Marlingaplar
        </motion.h1>

        <motion.p
          variants={item}
          className="text-teal-400 text-lg md:text-xl font-semibold"
        >
          Computer Science Undergraduate · AI & Data Science
        </motion.p>

        <motion.p
          variants={item}
          className="text-slate-300 max-w-2xl leading-relaxed"
        >
          Computer Science professional specializing in Artificial Intelligence
          and Data Science, with experience in building machine learning models
          and full-stack software applications.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-wrap gap-3 pt-2"
        >
          {[
            "Full-Stack Development",
            "Data Structures & Algorithms",
            "AI-Driven Systems",
            "Machine Learning",
          ].map((item) => (
            <span
              key={item}
              className="
                px-4 py-1.5 rounded-full
                text-sm font-medium
                border border-white/20
                text-slate-200
                backdrop-blur-sm
                transition-colors duration-300
                hover:border-teal-400 hover:text-teal-400
              "
            >
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="pt-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3 rounded-lg
              bg-teal-400 text-black font-semibold
              transition-all duration-300 ease-out
              hover:-translate-y-1
              hover:shadow-[0_10px_25px_-8px_rgba(45,212,191,0.6)]
            "
          >
            View Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
