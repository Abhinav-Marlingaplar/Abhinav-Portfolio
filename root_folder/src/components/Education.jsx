import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education" className="px-6 md:px-20 py-20 border-t border-slate-800" >
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-semibold mb-12"
      >
        Education
      </motion.h2>

      {/* Education Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          max-w-5xl
          p-8
          rounded-2xl
          bg-[#060a1f]
          border border-slate-700/60
          transition-all duration-500 ease-out
          hover:-translate-y-1
          hover:border-teal-400
        "
      >
        {/* University Info */}
        <div className="space-y-2 mb-6">
          <h3 className="text-xl font-semibold tracking-tight">
            Indian Institute of Information Technology, Kottayam
          </h3>

          <p className="text-slate-400">
            B.Tech in Computer Science
          </p>

          <p className="text-sm text-slate-500">
            2023 – Present · CGPA: 8.27
          </p>
        </div>

        <div className="h-px w-full bg-slate-800 mb-6" />

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-teal-400 mb-4 uppercase">
            Relevant Coursework
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Data Structures & Algorithms",
              "Database Management Systems",
              "Operating Systems",
              "Computer Networks",
              "Statistics & Probability",
              "Software Architecture",
              "Linear Algebra",
              "Calculus",
            ].map((course) => (
              <div
                key={course}
                className="
                  px-4 py-2
                  text-sm
                  rounded-lg
                  border border-slate-800
                  text-slate-300
                  transition-all duration-300
                  hover:border-teal-400 hover:text-teal-400
                "
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
