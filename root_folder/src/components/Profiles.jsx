import { motion } from "framer-motion";

function Profiles() {
  return (
    <section
      id="profiles"
      className="px-6 md:px-20 py-24 border-t border-slate-800"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-semibold mb-14"
      >
        Profiles & Links
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        <ProfileCard
          label="Email"
          value="abhinavsmv0503@gmail.com"
          href="mailto:abhinavsm0503@gmail.com"
          icon={<MailIcon />}
          delay={0}
        />

        <ProfileCard
          label="GitHub"
          value="github.com/Abhinav-Marlingaplar"
          href="https://github.com/Abhinav-Marlingaplar"
          icon={<GitHubIcon />}
          delay={0.1}
        />

        <ProfileCard
          label="LinkedIn"
          value="linkedin.com/abhinav-marlingaplar1"
          href="https://www.linkedin.com/in/abhinav-marlingaplar1/"
          icon={<LinkedInIcon />}
          delay={0.2}
        />

        <ProfileCard
          label="LeetCode"
          value="leetcode.com/Abhinav-Marlingaplar"
          href="https://leetcode.com/u/Abhinav-Marlingaplar/"
          icon={<LeetCodeIcon />}
          delay={0.3}
        />

        <ProfileCard
          label="Instagram"
          value="@_abhinav.01_"
          href="https://www.instagram.com/_abhinav.01_/"
          icon={<InstagramIcon />}
          delay={0.4}
        />
      </div>
    </section>
  );
}

/* ---------- PROFILE CARD ---------- */

function ProfileCard({ label, value, href, icon, delay }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{ y: -4 }}
      className="
        p-6 rounded-2xl
        bg-[#060a1f]
        border border-slate-700/60
        shadow-[0_8px_24px_rgba(0,0,0,0.45)]
        flex items-center gap-4
        transition-colors duration-300
        hover:border-teal-400
      "
    >
      <div className="text-teal-400">{icon}</div>

      <div className="flex flex-col">
        <span className="text-sm font-medium text-slate-300">
          {label}
        </span>
        <span className="text-sm text-slate-400">
          {value}
        </span>
      </div>
    </motion.a>
  );
}

export default Profiles;


function MailIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.4-1-.9-1.3-.9-1.3-.7-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.7 1.3 1.9.9 2.4.7.1-.5.3-.9.5-1.1-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.2 9.2 0 014.8 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5A10.2 10.2 0 0022 12.2C22 6.6 17.5 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM0 8h5v16H0zM7.5 8h4.8v2.2h.1c.7-1.3 2.3-2.7 4.7-2.7 5 0 6 3.3 6 7.6V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-5z" />
    </svg>
  );
}

function LeetCodeIcon() {
  return (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* < */}
      <polyline points="9 6 3 12 9 18" />

      {/* /> */}
      <polyline points="17 6 23 12 17 18" />

      {/* / */}
      <line x1="15" y1="4" x2="11" y2="20" />
    </svg>
  );
}


function InstagramIcon() {
  return (
    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" />
    </svg>
  );
}
