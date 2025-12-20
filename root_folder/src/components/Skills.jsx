import { motion } from "framer-motion";

function Skills() {
  return (
    <section id="skills" className="px-6 md:px-20 py-20 border-t border-slate-800">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-semibold mb-14"
      >
        Technical Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            title: "Programming",
            items: "C++, Python, JavaScript",
          },
          {
            title: "Frontend Development",
            items: "React, HTML, CSS",
          },
          {
            title: "Backend Development",
            items: "Node.js, Express, MongoDB",
          },
          {
            title: "AI / Machine Learning",
            items: "Scikit-learn, NumPy, Pandas",
          },
          {
            title: "Developer Tools",
            items: "Git, GitHub, Postman, Vercel",
          },
        ].map((skill, i) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="
              p-8 rounded-2xl bg-[#060a1f]
              border border-slate-700/60
              shadow-[0_8px_24px_rgba(0,0,0,0.45)]
              transition-all duration-500
              hover:-translate-y-1 hover:border-teal-400
            "
          >
            {/* Skill Category */}
            <h3 className="text-lg font-semibold mb-3 tracking-tight text-teal-400">
              {skill.title}
            </h3>

            {/* Skill Items */}
            <p className="text-slate-400 leading-relaxed">
              {skill.items}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
