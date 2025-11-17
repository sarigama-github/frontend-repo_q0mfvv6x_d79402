import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <GradientBackground />
        <FloatingOrbs />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900"
        >
          Redefine Strength. Redefine You.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto"
        >
          Elite training, science-backed programming, and a community that pushes you further. Welcome to the next level of fitness.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-colors">
            Join Now
          </a>
          <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur px-6 py-3 text-gray-900 font-semibold border border-gray-200 hover:bg-white transition-colors">
            Explore Plans
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute left-1/2 -bottom-4 sm:bottom-10 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-gray-600 hover:text-gray-900">
            <span className="text-xs mb-1">Scroll</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function GradientBackground() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-purple-50" />
  )
}

function FloatingOrbs() {
  return (
    <div aria-hidden className="absolute inset-0">
      <motion.div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-16 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-pink-400/20 blur-3xl"
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
