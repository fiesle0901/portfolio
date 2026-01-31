import { motion } from "framer-motion";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-accent">04. Projects</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Project placeholder */}
          <motion.div
            variants={projectVariants}
            whileHover={{ y: -5 }}
            className="border border-white/10 p-6 rounded hover:border-accent/50 transition-colors flex justify-around flex-col"
          >
            <a href="https://github.com/fiesle0901/SafeKeep" target="_blank">
              <h3 className="text-xl font-bold mb-2">SafeKeep</h3>
              <p className="text-gray-400 mb-4">
                A multi-playform AI application for lost and found items.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-accent font-mono">
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  React Native
                </span>
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  TypeScript
                </span>
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  Tailwindcss
                </span>
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  Python
                </span>
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  FastAPI
                </span>
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  PostgreSQL
                </span>
              </div>
            </a>
          </motion.div>

          <motion.div
            variants={projectVariants}
            whileHover={{ y: -5 }}
            className="border border-white/10 p-6 rounded hover:border-accent/50 transition-colors flex flex-col justify-around"
          >
            <a href="https://github.com/fiesle0901/pawws" target="_blank">
              <h3 className="text-xl font-bold mb-2">Alaga</h3>
              <p className="text-gray-400 mb-4">
                A social media mobile application for rescuing, tracking, and
                improving the lives of stray animals.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-accent font-mono">
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  React Native
                </span>
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  TypeScript
                </span>
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  Tailwindcss
                </span>
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  Supabase
                </span>
              </div>
            </a>
          </motion.div>

          <motion.div
            variants={projectVariants}
            whileHover={{ y: -5 }}
            className="border border-white/10 p-6 rounded hover:border-accent/50 transition-colors flex flex-col justify-around"
          >
            <a href="https://github.com/fiesle0901/Alaga" target="_blank">
              <h3 className="text-xl font-bold mb-2">Pawws</h3>
              <p className="text-gray-400 mb-4">
                A buy-me-a-coffee inspired website but for Rescue Shelters. It
                features milestone-based donation and rescue management system
                that allows shelters to manage their rescue animals and
                donations.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-accent font-mono">
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  React
                </span>
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  TypeScript
                </span>
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  Tailwindcss
                </span>
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  Python
                </span>
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  FastAPI
                </span>
                <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">
                  PostgreSQL
                </span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
