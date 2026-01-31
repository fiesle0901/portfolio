import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Education from "./components/Education"
import BackgroundBlobs from "./components/BackgroundBlobs"


function App() {
  return (
    <div className="min-h-screen text-gray-200 font-mono relative">
      <BackgroundBlobs />
      <div className="max-w-6xl mx-auto relative z-10">
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
    </div>
  )
}

export default App
