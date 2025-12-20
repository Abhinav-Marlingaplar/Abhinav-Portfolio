import { motion } from "framer-motion";

function Projects() {
  return (
    <section
      id="projects"
      className="px-6 md:px-20 py-20 border-t border-slate-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-semibold mb-14"
      >
        Projects
      </motion.h2>

      <div className="space-y-12">
        <Project
          title="NLP Studio"
          tech="MERN Stack · Supabase Vector DB · Groq API"
          points={[
            "Built a multi-service NLP platform providing resume parsing, sentiment analysis, and document QA.",
            "Integrated Retrieval-Augmented Generation (RAG) pipelines using vector-based semantic search.",
            "Designed scalable REST APIs and deployed a production-ready frontend.",
          ]}
          github="https://github.com/Abhinav-Marlingaplar/NLP-Studio"
          demo="https://nlp-studio.vercel.app/"
          delay={0}
        />

        <Project
          title="BlogZone"
          tech="MERN Stack · Google Gemini API · JWT"
          points={[
            "Developed an AI-powered blogging platform with intelligent content generation and moderation.",
            "Implemented JWT-based authentication with role-based access control.",
            "Built and deployed secure RESTful backend services.",
          ]}
          github="https://github.com/Abhinav-Marlingaplar/Blog-App-Mern-Stack"
          demo="https://blog-app-mern-stack-seven.vercel.app/"
          delay={0.15}
        />

        <Project
          title="House Price Prediction"
          tech="Python · Scikit-learn · XGBoost"
          points={[
            "Designed XGBoost Regressor Model with extensive feature engineering and preprocessing.",
            "Compared multiple algorithms to optimize prediction accuracy.",
            "Validated model performance using Kaggle RMSE benchmarks.",
          ]}
          github="https://github.com/Abhinav-Marlingaplar/House-Price-Prediction"
          demo="https://github.com/Abhinav-Marlingaplar/House-Price-Prediction/blob/main/House_Price_Prediction.ipynb"
          delay={0.3}
        />
      </div>
    </section>
  );
}

function Project({ title, tech, points, github, demo, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      className="
        p-8 rounded-2xl
        bg-[#060a1f]
        border border-slate-700/60
        shadow-[0_8px_24px_rgba(0,0,0,0.45)]
        transition-all duration-500 ease-out
        hover:-translate-y-1 hover:border-teal-400
      "
    >
      <h3 className="text-xl font-semibold mb-3 tracking-tight">
        {title}
      </h3>

      <p className="text-sm text-teal-400 mb-5">
        {tech}
      </p>

      <ul className="list-disc pl-5 space-y-2 text-slate-400 leading-relaxed mb-6">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors"
        >
          GitHub →
        </a>

        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-teal-400 hover:underline transition-all"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
}

export default Projects;
