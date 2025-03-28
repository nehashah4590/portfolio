"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Layout, Server } from "lucide-react"

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="h-8 w-8 text-primary" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "JavaScript", "Bootstrap", "Redux"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: ["Node.js", "Express","RESTful APIs"],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      title: "DevOps & Tools",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["Git", "Docker", "CI/CD", "Vercel", "Jest"],
    },
    // {
    //   title: "Mobile Development",
    //   icon: <Smartphone className="h-8 w-8 text-primary" />,
    //   skills: ["React Native", "Mobile-First Design", "App Optimization"],
    // },
    {
      title: "Other Skills",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: ["UI/UX Design", "Agile Methodology", "Problem Solving", "Leadership"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center opacity-0 animate-fade-in">My Skills</h2>
          <p
            className="text-lg text-center mb-12 text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            I've worked with a variety of technologies and frameworks to create efficient, scalable, and user-friendly
            solutions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
              key={category.title}
              className="opacity-0"
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

