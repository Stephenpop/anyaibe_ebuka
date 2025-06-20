"use client"

import { Code, Wrench, PenTool, Lightbulb } from "lucide-react"

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies",
    },
    {
      icon: <Wrench className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "WordPress Expertise",
      description: "Custom themes, plugins, and optimization for WordPress sites",
    },
    {
      icon: <PenTool className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Technical Blogging",
      description: "Sharing knowledge and insights about web development",
    },
    {
      icon: <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Problem Solving",
      description: "Engineering mindset applied to software development challenges",
    },
  ]

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto px-4 sm:px-0">
            Transforming ideas into digital reality through code and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                  <img
                    src="/profile.png"
                    alt="Anyaibe Ebuka Stephen"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=320&width=320&text=Add+Your+Photo"
                    }}
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-4 h-4 sm:w-6 sm:h-6 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 order-2 lg:order-2 px-4 sm:px-0">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a unique background in Mechanical Engineering. This combination
              gives me a systematic approach to problem-solving and attention to detail that sets my work apart.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              My journey from mechanical systems to digital solutions has equipped me with a deep understanding of both
              hardware and software principles. I specialize in creating scalable web applications, custom WordPress
              solutions, and sharing my knowledge through technical blogging.
            </p>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me writing technical articles, exploring new technologies, or working on
              open-source projects that make a difference in the developer community.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-4 pt-4">
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
                Problem Solver
              </span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
                Continuous Learner
              </span>
              <span className="bg-pink-500/20 text-pink-300 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
                Team Player
              </span>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 px-4 sm:px-0">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="card-hover bg-gray-800 p-4 sm:p-6 rounded-lg border border-gray-700 text-center"
            >
              <div className="text-blue-400 mb-3 sm:mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-sm sm:text-base text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
