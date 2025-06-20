"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Github, Linkedin, Mail, FileText } from "lucide-react"

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = ["Full Stack Developer", "WordPress Expert", "Technical Blogger", "Mechanical Engineer"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <div className="animate-float">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Hi, I'm <span className="gradient-text block sm:inline mt-2 sm:mt-0">Anyaibe Ebuka</span>
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 h-8 sm:h-10 md:h-12">
            <span className="typing-animation inline-block">{roles[currentRole]}</span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 sm:mb-12 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Passionate about creating innovative web solutions and sharing knowledge through blogging. Mechanical
            Engineering graduate turned full-stack developer with expertise in modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0">
            <a
              href="#contact"
              className="glow-effect bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300 text-center"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 text-center"
            >
              View My Work
            </a>
          </div>

          <div className="flex justify-center space-x-4 sm:space-x-6">
            <a
              href="https://github.com/Stephenpop"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 p-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/anyaibe-ebuka-stephen"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 p-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
              href="mailto:anyaibeebuka@gmail.com"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 p-2"
              aria-label="Email"
            >
              <Mail size={24} className="sm:w-7 sm:h-7" />
            </a>
            <a
              href="/resume.pdf"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300 p-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
            >
              <FileText size={24} className="sm:w-7 sm:h-7" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={28} className="sm:w-8 sm:h-8 text-gray-400" />
        </div>
      </div>
    </section>
  )
}
