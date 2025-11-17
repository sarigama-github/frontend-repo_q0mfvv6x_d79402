import { motion } from 'framer-motion'
import { Dumbbell, HeartPulse, Flame, Salad, Timer, Users } from 'lucide-react'

const services = [
  { icon: Dumbbell, title: 'Personal Training', desc: '1:1 coaching tailored to your goals and schedule.' },
  { icon: Flame, title: 'Body Transformation', desc: 'Comprehensive programs for fat loss and muscle gain.' },
  { icon: HeartPulse, title: 'Strength & Conditioning', desc: 'Athlete-grade performance training for everyone.' },
  { icon: Users, title: 'CrossFit / Classes', desc: 'High-energy group workouts that build strength and community.' },
  { icon: Salad, title: 'Nutrition Guidance', desc: 'Practical nutrition strategies that fuel your progress.' },
  { icon: Timer, title: 'Progress Tracking', desc: 'Data-driven insights to keep you accountable.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">Everything you need to become the strongest version of yourself.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-indigo-600/10 text-indigo-700 flex items-center justify-center">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
