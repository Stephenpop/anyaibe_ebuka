"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <img
              src="/favicon-16x16.png"
              alt="Anyaibe Ebuka Logo"
              className="w-6 h-6 sm:w-8 sm:h-8"
              onError={(e) => {
                // Fallback to a simple colored circle if logo doesn't exist
                e.currentTarget.style.display = "none"
                e.currentTarget.nextElementSibling.style.display = "block"
              }}
            />
            {/* Fallback logo */}
            <div
              className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hidden"
              style={{ display: "none" }}
            ></div>
            <div className="text-xl sm:text-2xl font-bold gradient-text">Anyaibe Ebuka</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 hover:scale-105"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-md font-medium hover:scale-105 transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 rounded-lg mt-2 p-4">
            {[...navItems, { href: "/resume.pdf", label: "Resume", target: "_blank" }].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block py-2 text-gray-300 hover:text-white transition-colors px-4 ${
                  item.label === "Resume"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md mt-2"
                    : ""
                }`}
                onClick={() => setIsOpen(false)}
                {...(item.target && { target: item.target, rel: "noopener noreferrer" })}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
