import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="px-6 md:px-20 py-8 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {year} Abhinav Marlingaplar</p>

        <p className="text-slate-600">
          Built with React & Tailwind CSS
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
