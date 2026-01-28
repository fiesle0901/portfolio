const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-99 border-b bg-primary  border-white/10">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold font-mono text-accent">LS</div>
        <div className="hidden md:flex space-x-8">
          <a href="#projects" className="text-gray-300 hover:text-accent transition-colors">Projects</a>
          <a href="#about" className="text-gray-300 hover:text-accent transition-colors">About</a>
          <a href="#resume" className="text-gray-300 hover:text-accent transition-colors">Resume</a>
          <a href="#contact" className="text-gray-300 hover:text-accent t">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
