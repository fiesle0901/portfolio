import profileImage from '../assets/IMG_5368.JPG'
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiTypescript, SiSupabase, SiFastapi, SiPostgresql } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const About = () => {
  return (
    <section id="about" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-accent">01. About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Hello! I'm a full stack software developer with a passion for building minimal, efficient, and accessible web applications.
              I have experience in <span className="text-accent">react, typescript, tailwindcss, nodejs, python, and postgresql.</span>
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Fun fact: I'm a big fan of monospace font!
            </p>
                          <p className="flex text-lg text-gray-300 leading-relaxed mb-4">Tech Stack:</p>
            <div className="flex flex-wrap gap-4 text-4xl text-gray-400 ">

                <FaReact className="hover:text-accent transition-colors duration-300" title="React" />
                <TbBrandReactNative className="hover:text-accent transition-colors duration-300" title="React Native" />
                <SiTypescript className="hover:text-accent transition-colors duration-300" title="TypeScript" />
                <FaNodeJs className="hover:text-accent transition-colors duration-300" title="Node.js" />
                <SiSupabase className="hover:text-accent transition-colors duration-300" title="Supabase" />
                <FaPython className="hover:text-accent transition-colors duration-300" title="Python" />
                <SiFastapi className="hover:text-accent transition-colors duration-300" title="FastAPI" />
                <SiPostgresql className="hover:text-accent transition-colors duration-300" title="Postgresql" />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-sm" 
              />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
