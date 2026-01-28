const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-accent">04. Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project placeholder */}
          <div className="border border-white/10 p-6 rounded hover:border-accent/50 transition-colors flex flex-col justify-around">
            <h3 className="text-xl font-bold mb-2">SafeKeep</h3>
            <p className="text-gray-400 mb-4">A multi-playform AI application for lost and found items.</p>
            <div className="flex flex-wrap gap-2 text-sm text-accent font-mono">
              <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">React Native</span>
              <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">TypeScript</span>
              <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">Tailwindcss</span>
              <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">Python</span>
              <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">FastAPI</span>
              <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">PostgreSQL</span>
            </div>
          </div>

          <div className="border border-white/10 p-6 rounded hover:border-accent/50 transition-colors flex flex-col justify-around">
            <h3 className="text-xl font-bold mb-2">Alaga</h3>
            <p className="text-gray-400 mb-4">A social media mobile application for rescuing, tracking, and improving the lives of stray animals.</p>
            <div className="flex flex-wrap gap-2 text-sm text-accent font-mono">
              <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">React Native</span>
              <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">TypeScript</span>
              <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">Tailwindcss</span>
              <span className="bg-accent px-2 py-1 rounded-md text-white text-xs">Supabase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
