"use client"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 88 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PHP", level: 88 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "WordPress & CMS",
      skills: [
        { name: "WordPress Development", level: 92 },
        { name: "Custom Themes", level: 90 },
        { name: "Plugin Development", level: 85 },
        { name: "WooCommerce", level: 80 },
        { name: "Gutenberg Blocks", level: 75 },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 75 },
        { name: "Vercel", level: 85 },
        { name: "Figma", level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card-hover bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-center gradient-text">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
