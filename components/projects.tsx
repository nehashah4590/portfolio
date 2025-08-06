"use client"

import { useEffect, useRef, RefCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  const projectRefCallback: RefCallback<HTMLDivElement> = (el) => {
    if (el) {
      const index = projectRefs.current.push(el) - 1
      projectRefs.current[index] = el
    }
  }

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

    projectRefs.current.forEach((project) => {
      if (project) observer.observe(project)
    })

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      projectRefs.current.forEach((project) => {
        if (project) observer.unobserve(project)
      })
    }
  }, [])

  const projects = [
    {
      title: "Aecorms",
      description:
        `A comprehensive software for managing candidates and trainers to creating batches, assigning
         certificates, and track progress  of the candidates and batches.`,
      image: "/aecorms.png",
      tags: ["Reactjs","Typescript", "Tailwind CSS", "Shadcn"],
      liveUrl: "https://qa.aecorms.com/",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with product management, user authentication, and guest checkout.",
      image: "/elevationinc.png",
      tags: ["Next.js","Typescript", "Tailwind CSS", "Shadcn", "Next Auth", "Redux", "Redux Toolkit"],
      liveUrl: "https://elevationsnepal.com/",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Travel Booking App",
      description:
        "A website showcasing curated travel destinations with custom-designed themes, offering users the ability to easily browse and book tailored travel packages.",
      image: "/travelingyak.png",
      tags: ["Next.js", "Tailwind CSS", "shadcn", "Framer Motion"],
      liveUrl: "https://travelingyak.com/",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "70 years celebration of climbing kanchenjunga",
      description: "A static website dedicated to preserving and showcasing the history and milestones of the first climbing expedition, celebrating its 70th anniversary with detailed information and historical archives.",
      image: "/k70.png",
      tags: ["Next.js", "Tailwind CSS" ],
      liveUrl: "https://kanchenjunga70.com/",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      title: "Custom Construction Management ERP",
      description: "A comprehensive ERP solution to streamline complex construction management operations, including estimating, procurement, inventory, project management, asset management, and financials.",
      image: "/lancozen.webp",
      tags: ["Next.js", "Tailwind CSS", "Shadcn", "Next Auth", "Zustang", "Tanstack Query"],
      liveUrl: "https://www.lancozen.com/",
      githubUrl: "https://github.com",
    },
    {
      title: "Business Website",
      description: "A comprehensive website for a tiles and marbles business, offering a detailed catalog of available tiles, marbles, and sanitary products. Users can easily browse through various product categories, view detailed specifications, including sizes and finishes, and explore a wide range of design options to suit their needs.",
      image: "/shiv-trading.png",
      tags: ["Next js", "Tailwind CSS", "Next Auth", "Framer Motion"],
      liveUrl: "https://shiv-trading.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Customer Management System",
      description: "A comprehensive Customer Management System (CMS) designed for supermarkets, enabling efficient tracking of customer purchases. The system provides detailed insights into customer behavior, purchase history, and preferences, allowing for enhanced customer engagement, personalized marketing, and streamlined sales management.",
      image: "/CMS.png",
      tags: ["Next.js", "Expressjs", "PostgresSQL", "Vercel"],
      liveUrl: "https://customer-management-system-pi-navy.vercel.app",
      githubUrl: "https://github.com/nehashah4590/customer_management_system",
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center opacity-0 animate-fade-in">My Projects</h2>
          <p
            className="text-lg text-center mb-12 text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            Here are some of my recent projects. Each one was built to solve a specific problem and demonstrates
            different aspects of my technical skills.
          </p>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                className="opacity-0 grid md:grid-cols-12 gap-8 items-center"
                ref={projectRefCallback}
              >
                <div className={`md:col-span-7 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-primary/10 rounded-lg transform group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                    <div className="relative overflow-hidden rounded-lg border">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
                <div className={`md:col-span-5 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                  <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild size="sm">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <h3 className="text-2xl font-bold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card
                key={project.title}
                className="opacity-0 overflow-hidden group"
                ref={projectRefCallback}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {/* {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )} */}
                  </div>
                  <div className="flex gap-4">
                    <Button asChild size="sm" variant="ghost">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="ghost">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        <span className="sr-only">Live Demo</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}