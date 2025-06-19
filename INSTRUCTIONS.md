# Portfolio Setup Instructions

## How to Add Your Files

### 1. Adding Your Resume
- Replace the file `public/resume.pdf` with your actual resume
- The resume link in the hero section will automatically work

### 2. Adding Your Profile Image
- Add your profile image as `public/profile.jpg` or `public/profile.png`
- Update the About section to include your image

### 3. Adding Project Images
- Add project screenshots to `public/projects/`
- Update the image URLs in `app/components/Projects.tsx`

### 4. Adding Favicon and Social Media Images
- Replace `public/favicon-16x16.png` with your 16x16 favicon
- Replace `public/favicon-32x32.png` with your 32x32 favicon  
- Replace `public/apple-touch-icon.png` with your 180x180 Apple touch icon
- Replace `public/og-image.png` with your 1200x630 social media preview image

## Checking Form Submissions

### Method 1: Terminal Logs
When someone submits the contact form, you'll see the details logged in your terminal where you're running `npm run dev`.

### Method 2: Admin Page
Visit `http://localhost:3000/admin` to see all form submissions in a nice interface.

### Method 3: Data File
Form submissions are saved to `data/submissions.json` in your project folder.

## Customizing Content

### Personal Information
Update these files with your information:
- `app/components/Hero.tsx` - Your name, roles, social links
- `app/components/About.tsx` - About section content
- `app/components/Skills.tsx` - Your skills and levels
- `app/components/Experience.tsx` - Work experience
- `app/components/Projects.tsx` - Your projects
- `app/components/Contact.tsx` - Contact information

### Social Media Links
Update the social media links in:
- `app/components/Hero.tsx`
- `app/components/Contact.tsx`
- `app/components/Footer.tsx`

### SEO and Metadata
Update `app/layout.tsx` with your:
- Name and title
- Description
- Keywords
- Website URL

## Email Integration (Optional)

To receive form submissions via email, you can integrate with:

1. **Resend** (Recommended for Next.js)
2. **SendGrid**
3. **Nodemailer with Gmail**
4. **EmailJS**

Add your preferred email service to `app/actions/contact.ts`.

## Deployment

1. Push your code to GitHub
2. Connect to Vercel
3. Deploy automatically
4. Your portfolio will be live!

## File Structure

\`\`\`
public/
├── resume.pdf              # Your resume
├── og-image.png           # Social media preview
├── favicon-16x16.png      # Small favicon
├── favicon-32x32.png      # Medium favicon
├── apple-touch-icon.png   # Apple devices icon
└── projects/              # Project screenshots
    ├── project1.png
    ├── project2.png
    └── ...

data/
└── submissions.json       # Form submissions storage

app/
├── admin/                 # Admin panel to view submissions
├── actions/               # Server actions
├── components/            # React components
└── ...
\`\`\`
\`\`\`

Now let's update the Projects component to show you how to add your actual project images:

\`\`\`typescriptreact file="app/components/Projects.tsx"
[v0-no-op-code-block-prefix]"use client"

import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution built with Next.js, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "/projects/ecommerce-project.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/ecommerce",
      featured: true,
    },
    {
      title: "WordPress Custom Theme",
      description:
        "Responsive WordPress theme for a digital agency with custom post types, ACF integration, and performance optimization.",
      image: "/projects/wordpress-theme.png",
      technologies: ["WordPress", "PHP", "JavaScript", "SCSS", "ACF"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/wp-theme",
      featured: true,
    },
    {
      title: "Task Management App",
      description:
        "React-based task management application with drag-and-drop functionality, real-time updates, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/task-app",
      featured: false,
    },
    {
      title: "Blog Platform",
      description: "Custom blogging platform with markdown support, SEO optimization, and social media integration.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/blog",
      featured: false,
    },
    {
      title: "API Gateway Service",
      description:
        "Microservices API gateway built with Node.js, featuring rate limiting, authentication, and request routing.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Node.js", "Express", "Redis", "Docker", "JWT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/yourusername/api-gateway",
      featured: false,
    },
    {
      title: "WordPress Plugin",
      description: "Custom WordPress plugin for advanced form handling with conditional logic and email automation.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["WordPress", "PHP", "jQuery", "MySQL"],
      liveUrl: "https://wordpress.org/plugins/your-plugin",
      githubUrl: "https://github.com/yourusername/wp-plugin",
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
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
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
