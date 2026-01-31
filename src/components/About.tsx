import profileImage from '../assets/profile.JPG'
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiTypescript, SiSupabase, SiFastapi, SiPostgresql } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-accent">01. About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hello! I'm a full stack software developer with a passion for building minimal, efficient, and accessible web applications.
              I have experience in <span className="text-accent">react, typescript, tailwindcss, nodejs, python, and postgresql.</span>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Fun fact: I'm a big fan of monospace font!
            </p>
                          <p className="flex text-lg text-gray-300 leading-relaxed mb-4">Tech Stack:</p>
            <div className="flex flex-wrap gap-4 text-4xl text-gray-400 ">

                <motion.div whileHover={{ y: -5, color: "#64ffda" }}><FaReact title="React" /></motion.div>
                <motion.div whileHover={{ y: -5, color: "#64ffda" }}><TbBrandReactNative title="React Native" /></motion.div>
                <motion.div whileHover={{ y: -5, color: "#64ffda" }}><SiTypescript title="TypeScript" /></motion.div>
                <motion.div whileHover={{ y: -5, color: "#64ffda" }}><FaNodeJs title="Node.js" /></motion.div>
                <motion.div whileHover={{ y: -5, color: "#64ffda" }}><SiSupabase title="Supabase" /></motion.div>
                <motion.div whileHover={{ y: -5, color: "#64ffda" }}><FaPython title="Python" /></motion.div>
                <motion.div whileHover={{ y: -5, color: "#64ffda" }}><SiFastapi title="FastAPI" /></motion.div>
                <motion.div whileHover={{ y: -5, color: "#64ffda" }}><SiPostgresql title="Postgresql" /></motion.div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
              <div className="relative group">
               
                <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="relative w-64 h-64 md:w-80 md:h-80 rounded-sm transition-all duration-300" 
                />
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
