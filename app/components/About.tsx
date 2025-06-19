"use client"

import { Code, Wrench, PenTool, Lightbulb } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "WordPress Expertise",
      description: "Custom themes, plugins, and optimization for WordPress sites",
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Technical Blogging",
      description: "Sharing knowledge and insights about web development",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Engineering mindset applied to software development challenges",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforming ideas into digital reality through code and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                  <img
                    src="/profiles.jpg"
                    alt="Anyaibe Ebuka Stephen"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      e.currentTarget.src = "/placeholder.svg?height=320&width=320&text=Add+Your+Photo"
                    }}
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a unique background in Mechanical Engineering. This combination
              gives me a systematic approach to problem-solving and attention to detail that sets my work apart.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My journey from mechanical systems to digital solutions has equipped me with a deep understanding of both
              hardware and software principles. I specialize in creating scalable web applications, custom WordPress
              solutions, and sharing my knowledge through technical blogging.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me writing technical articles, exploring new technologies, or working on
              open-source projects that make a difference in the developer community.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm">Problem Solver</span>
              <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                Continuous Learner
              </span>
              <span className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm">Team Player</span>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlights.map((item, index) => (
            <div key={index} className="card-hover bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
              <div className="text-blue-400 mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
