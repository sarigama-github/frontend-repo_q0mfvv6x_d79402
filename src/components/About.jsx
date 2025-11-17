import { motion } from 'framer-motion'

const trainers = [
  { name: 'Ava Carter', role: 'Head Coach • Strength & Conditioning', img: 'https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Liam Brooks', role: 'Transformation Specialist', img: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Maya Gomez', role: 'CrossFit & Mobility', img: 'https://images.unsplash.com/photo-1549049950-24dff2a6eff4?q=80&w=1200&auto=format&fit=crop' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">About IronPulse</h2>
          <p className="mt-6 text-gray-700 text-lg">
            We blend elite coaching with data-driven programming to deliver real, sustainable results. Our mission is to make you stronger—physically and mentally—through a supportive, high-performance environment.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-gray-800">
            <Card title="Mission" text="Empower people to unlock their strongest selves." />
            <Card title="Vision" text="A world where strength training is accessible and inspiring for all." />
            <Card title="Why Us" text="Top-tier coaches, premium equipment, and results that speak for themselves." />
          </div>
        </motion.div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Meet the Coaches</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group overflow-hidden rounded-2xl border bg-white/70 backdrop-blur shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-gray-900">{t.name}</h4>
                  <p className="mt-1 text-sm text-gray-600">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Card({ title, text }) {
  return (
    <div className="rounded-xl border bg-white/70 backdrop-blur p-4">
      <p className="text-sm font-semibold text-indigo-700">{title}</p>
      <p className="mt-2 text-gray-700">{text}</p>
    </div>
  )
}
