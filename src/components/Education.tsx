import { motion } from 'framer-motion'

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-accent">03. Education</h2>
        <div className="space-y-12 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-l-2 border-white/10 pl-8 relative"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="text-xl font-bold">Cagayan State University - Undergraduate</h3>
            <p className="text-accent font-mono mb-2">Bachelor of Science in Computer Science • July. 2021 - May. 2026</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-l-2 border-white/10 pl-8 relative"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="text-xl font-bold">Santiago City National High School</h3>
            <p className="text-accent font-mono mb-2"> Grade 12 Batch Valedictorian • 2020-2021</p>
                        <h3 className="text-xl font-bold">ISAP - Penablanca</h3>
            <p className="text-accent font-mono mb-2"> Grade 11 • 2019-2020</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-l-2 border-white/10 pl-8 relative"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="text-xl font-bold">Santiago City National High School - Science Curriculum</h3>
            <p className="text-accent font-mono mb-2">Junior High School • 2015-2019</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="border-l-2 border-white/10 pl-8 relative"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
            <h3 className="text-xl font-bold">United Methodist School</h3>
            <p className="text-accent font-mono mb-2">Elementary • 2009-2015</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
