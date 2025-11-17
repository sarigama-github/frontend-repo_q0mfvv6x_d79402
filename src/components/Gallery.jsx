import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const images = [
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1597074866923-3eb6f3df8b08?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558611848-014dcdcbecb0?q=80&w=1600&auto=format&fit=crop',
]

export default function Gallery() {
  const [active, setActive] = useState(null)

  return (
    <section id="gallery" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Gallery</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">A peek into our space, our people, and the energy that drives us.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.button
              key={src}
              onClick={() => setActive(src)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-white/70 backdrop-blur shadow-sm"
            >
              <img src={src} alt={`Gallery ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <button onClick={() => setActive(null)} className="absolute -top-10 right-0 text-white hover:text-gray-200">
                <X className="h-8 w-8" />
              </button>
              <img src={active} alt="Preview" className="w-full h-auto rounded-xl shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
