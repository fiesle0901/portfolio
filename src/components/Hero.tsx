import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 variants={itemVariants} className="text-2xl md:text-4xl font-mono mb-4 italic">Hi! I am</motion.h1>
            <motion.h1 variants={itemVariants} className="text-2xl md:text-6xl font-bold mb-4 tracking-tight">
            Louie Justin C. Saturno
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-accent font-mono mb-2">
            Full Stack Developer
            </motion.p>
            <motion.p variants={itemVariants} className="text-md font-mono italic mb-8">
            Passionate in building efficient and useful web applications.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col items-center mb-4">
        
            <div className="flex justify-center gap-6">
            <motion.a whileHover={{ scale: 1.2, color: "#64ffda" }} href="https://github.com/fiesle0901" target="_blank" className="text-3xl text-gray-400 hover:text-accent transition-colors" >
                <FaGithub />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#64ffda" }} href="https://x.com/ljcsaturno" target="_blank" className="text-3xl text-gray-400 hover:text-accent transition-colors">
                <FaTwitter />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, color: "#64ffda" }} href="https://facebook.com" target="_blank"  className="text-3xl text-gray-400 hover:text-accent transition-colors" >
                <FaFacebook />
            </motion.a>
            </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
