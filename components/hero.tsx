"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

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

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-3 dark:opacity-[0.02]"></div>
      <div ref={containerRef} className="container mx-auto px-4 py-16 md:py-24 opacity-0">
        <div className="max-w-3xl mx-auto">
          <div className="stagger-animation">
            <p className="text-primary font-medium mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Neha Shah</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80 mb-6">
              Software Engineer & React Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I am an experienced Software Engineer with in-depth knowledge in frontend web development with React.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Button asChild size="lg">
                <Link href="/#projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/#contact">Get In Touch</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="https://github.com/nehashah4590"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/nehashah822/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:er.nehashah822@gmail.com"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

