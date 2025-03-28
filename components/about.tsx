"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import neha from '@/public/pp.jpg'

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 md:py-32 opacity-0">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden border-4 border-primary/20">
                <Image src={neha} alt="Neha Shah" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-lg"></div>
            </div>
            <div className="space-y-6">
              <p className="text-lg">
                I'm a passionate Software Engineer with expertise in frontend web development. My journey in tech began
                with a curiosity about how digital products work, which led me to pursue a career in software
                engineering.
              </p>
              <p className="text-lg">
                With a strong foundation in both frontend and backend technologies, I enjoy creating seamless user
                experiences while ensuring robust and scalable backend systems. I'm particularly interested in web
                technologies and building accessible applications.
              </p>
              <p className="text-lg">
                When I'm not coding, you can find me exploring new technologies, gathering indepth knowlwdge,
                or sharing my knowledge through technical writing and mentoring.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <Card>
                  <CardContent className="p-4">
                    <p className="text-4xl font-bold text-primary">3+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <p className="text-4xl font-bold text-primary">15+</p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

