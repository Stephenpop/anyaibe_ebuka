"use client"

import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Logistics Platform",
      description:
        "PHP-based errand management application with drag-and-drop functionality, real-time updates, and team collaboration features, including pages for posting errands and viewing tasks, built with HTML, CSS, JavaScript, and MySQL.",
      image: "/projects/errandplus.png",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      liveUrl: "https://www.errandplus.org/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "LingslatePal",
      description: "Language translation platform with real-time text translation, speech-to-text, and collaborative editing, built with React, TypeScript, Node.js, HTML, and CSS.",
      image: "/projects/lingslatepal.png",
      technologies: ["React", "TypeScript", "Node.js", "HTML", "CSS"],
      liveUrl: "https://lingslatepal.vercel.app/",
      githubUrl: "https://github.com/Stephenpop/lingslatepal222",
      featured: true
    }, 
   {
  title: "Luminforge Photography Agency",
  description: "Professional photography agency capturing stunning moments with high-quality services, built with Next.js, Plasmic, and CSS.",
  image: "/projects/luminforge.png",
  technologies: ["Next.js", "Plasmic", "CSS"],
  liveUrl: "https://luminforge.vercel.app/",
  githubUrl: "https://github.com/Stephenpop/luminforge233",
  featured: true
},
    {
      title: "WordVale",
      description: "Word processing application with rich text editing, cloud storage, and team collaboration features, built with React, TypeScript, Node.js, HTML, and CSS.",
      image: "/projects/wordvale.png",
      technologies: ["React", "TypeScript", "Node.js", "HTML", "CSS"],
      liveUrl: "https://wordvale.vercel.app/",
      githubUrl: "#",
      featured: true
    },
    {
      title: "WordPress Custom Theme",
      description:
        "Responsive WordPress theme for a digital agency with custom post types, ACF integration, and performance optimization.",
      image: "/projects/bero.png",
      technologies: ["WordPress", "PHP", "JavaScript", "SCSS", "ACF"],
      liveUrl: "bero.com.ng",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "AgriTech Solutions",
      description:
        "PHP-based agro-tech platform for managing farming tasks with drag-and-drop functionality, real-time updates, and collaboration features, including equipment hiring and worker management.",
      image: "/projects/ouragrosoft.png",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      liveUrl: "https://www.errandplus.org/agrosoft/index.php",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "StaffSync Portal",
      description:
        "PHP-based staff management system for schools and churches with task assignment, real-time updates, and collaboration features, built with HTML, CSS, JavaScript, and MySQL.",
      image: "/projects/staff.png",
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "TechLearn Platform",
      description:
        "WordPress-based online learning platform offering courses in cybersecurity and other tech subjects, with task assignment, real-time updates, and collaboration features, built with HTML, CSS, JavaScript, and MySQL.",
      image: "/projects/e-learning.png",
      technologies: ["WordPress", "HTML", "CSS", "JavaScript", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution built with Next.js, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/projects/e-commerce.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "React-based task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Blog Platform",
      description: "Custom blogging platform with markdown support, SEO optimization, and social media integration.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "API Gateway Service",
      description:
        "Microservices API gateway built with Node.js, featuring rate limiting, authentication, and request routing.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Node.js", "Express", "Redis", "Docker", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "WordPress Plugin",
      description: "Custom WordPress plugin for advanced form handling with conditional logic and email automation.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["WordPress", "PHP", "jQuery", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">A showcase of my recent work and contributions</p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="card-hover glow-effect bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
            >
              <div className="relative group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-full transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="card-hover bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="text-gray-400 hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-500 text-xs">+{project.technologies.length - 3} more</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
