import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Education from "./components/Education"


function App() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto bg-primary text-gray-200 font-mono">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Education/>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
