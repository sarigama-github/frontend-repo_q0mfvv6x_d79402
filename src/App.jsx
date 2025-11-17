import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <footer className="border-t bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} IronPulse Fitness. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-gray-900">Home</a>
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
