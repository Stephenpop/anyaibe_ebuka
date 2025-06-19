"use client"

import { Heart, ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">Anyaibe Ebuka</div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions and sharing knowledge through
              blogging.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href="https://github.com/Stephenpop"
                className="block text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/anyaibe-ebuka-stephen"
                className="block text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="mailto:anyaibeebuka@gmail.com"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Email
              </a>
              <a
                href="https://bero.com.ng"
                className="block text-gray-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center">
            Made with <Heart size={16} className="mx-2 text-red-500" /> by Anyaibe Ebuka
          </p>
          <p className="text-gray-400 mt-4 md:mt-0">© 2024 All rights reserved.</p>
        </div>

        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  )
}
