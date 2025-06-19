"use client"

import { Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "WordPress Developer & Blogger",
      company: "Bero Technologies",
      location: "Remote",
      period: "2023 - Present",
      description: [
        "Developed custom WordPress themes and plugins for 50+ clients",
        "Published 100+ technical articles reaching 10k+ monthly readers",
        "Optimized WordPress sites achieving 95+ PageSpeed scores",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Iprosoft Tech LTD",
      location: "Owerri, Nigeria",
      period: "2022 - Present",
      description: [
        "Built responsive web applications using React, PHP, and MySQL",
        "Collaborated with design team to implement pixel-perfect UI/UX",
        "Integrated third-party APIs and payment gateways for e-commerce solutions",
      ],
    },
    {
      title: "Mechanical Engineering Graduate",
      company: "Imo State University",
      location: "Owerri, Nigeria",
      period: "2023 - Present",
      description: [
        "Bachelor's degree in Mechanical Engineering",
        "Specialized in automation and control systems",
        "Applied engineering principles to software development projects",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">From mechanical systems to digital solutions</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10"></div>

                {/* Content */}
                <div
                  className={`card-hover bg-gray-800 p-6 rounded-lg border border-gray-700 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  } md:w-5/12`}
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center text-blue-400">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-blue-400 mb-4">{exp.company}</p>

                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
