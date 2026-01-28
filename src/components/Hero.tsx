import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-mono mb-4 italic">Hi! I am</h1>
        <h1 className="text-2xl md:text-6xl font-bold mb-4 tracking-tight">
          Louie Justin C. Saturno
        </h1>
        <p className="text-xl md:text-2xl text-accent font-mono mb-2">
          Full Stack Developer
        </p>
        <p className="text-md font-mono italic mb-8">
          Passionate in building efficient and useful web applications.
        </p>

          <div className="flex flex-col items-center mb-4">
    
          <div className="flex justify-center gap-6">
          <a href="https://github.com/fiesle0901" target="_blank" className="text-3xl text-gray-400 hover:text-accent transition-colors" >
            <FaGithub />
          </a>
          <a href="https://x.com/ljcsaturno" target="_blank" className="text-3xl text-gray-400 hover:text-accent transition-colors">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank"  className="text-3xl text-gray-400 hover:text-accent transition-colors" >
            <FaFacebook />
          </a>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
