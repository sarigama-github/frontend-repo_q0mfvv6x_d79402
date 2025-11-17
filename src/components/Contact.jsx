import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-28 bg-gradient-to-t from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Get in Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700">Have questions or ready to start? Send a message and we’ll get back to you.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border bg-white/70 backdrop-blur p-6 shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-600 focus:ring-indigo-600" placeholder="Your name" required />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-600 focus:ring-indigo-600" placeholder="you@email.com" required />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-gray-700">Message</label>
                <textarea rows="5" className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-600 focus:ring-indigo-600" placeholder="How can we help?" required />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-colors">Send Message</button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border bg-white/70 backdrop-blur p-6 shadow-sm"
          >
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-indigo-600 mt-0.5" />
                <p>123 Strength Ave, Iron City, USA</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-indigo-600 mt-0.5" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-indigo-600 mt-0.5" />
                <p>hello@ironpulse.fit</p>
              </div>
              <div className="pt-2 flex items-center gap-4">
                <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-indigo-600"><Instagram className="h-5 w-5" /></a>
                <a href="#" aria-label="Facebook" className="text-gray-700 hover:text-indigo-600"><Facebook className="h-5 w-5" /></a>
                <a href="#" aria-label="Twitter" className="text-gray-700 hover:text-indigo-600"><Twitter className="h-5 w-5" /></a>
              </div>
            </div>

            <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl">
              <iframe
                title="map"
                className="h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.840149554973!2d144.9537353158448!3d-37.81627917975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAzLjYiUyAxNDTCsDU3JzE0LjQiRQ!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
