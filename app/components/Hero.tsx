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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 mt-8">
            Hi, I'm <span className="gradient-text">Anyaibe Ebuka</span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
            <span className="typing-animation">{roles[currentRole]}</span>
          </div>

          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative web solutions and sharing knowledge through blogging. Mechanical
            Engineering graduate turned full-stack developer with expertise in modern web technologies.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="#contact"
              className="glow-effect bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Stephenpop"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/anyaibe-ebuka-stephen"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:anyaibeebuka@gmail.com"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <Mail size={28} />
            </a>
            <a
              href="/resume.pdf"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={28} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </div>
    </section>
  )
}
