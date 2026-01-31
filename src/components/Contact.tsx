import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <motion.div 
        className="container mx-auto px-6 text-center max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-accent">05. Get In Touch</h2>
        <p className="text-md text-gray-300 mb-12">
          I'm currently looking for new opportunities. If you have any questions, I'll try my best to get back to you!
        </p>
        <a href="mailto:louiejustinljdev@gmail.com" className="border border-accent text-accent px-8 py-4 font-mono hover:bg-accent/10 transition-colors">
          Say Hello
        </a>
      </motion.div>
    </section>
  )
}

export default Contact
