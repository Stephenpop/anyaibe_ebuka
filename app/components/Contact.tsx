"use client"

import { Mail, Phone, MapPin, Send } from "lucide-react"
import { submitContactForm } from "../actions/contact"
import { useActionState } from "react"

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null)

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's discuss your next project or collaboration opportunity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities, whether it's a freelance project, full-time
                position, or just a chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">anyaibeebuka@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">+234 901 503 5012</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-pink-500/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">Owerri, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-gray-400 mb-4">Follow me on social media:</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Stephenpop"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/anyaibe-ebuka-stephen"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/Stephen22656799"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a href="https://bero.com.ng" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-hover bg-gray-800 p-8 rounded-lg border border-gray-700">
            <form action={formAction} className="space-y-6">
              {state && (
                <div
                  className={`p-4 rounded-lg ${state.success ? "bg-green-500/20 text-green-300" : "bg-red-500/20 text-red-300"}`}
                >
                  {state.message}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    disabled={isPending}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    disabled={isPending}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  disabled={isPending}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  disabled={isPending}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:opacity-50"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full glow-effect bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send size={20} />
                <span>{isPending ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
