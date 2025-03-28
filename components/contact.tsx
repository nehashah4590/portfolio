"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-secondary/50 opacity-0">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
          <p className="text-lg text-center mb-12 text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out to me through the
            form below or via my contact details.
          </p>

          <div className="grid md:grid-cols-3 gap-8"> 
            
            <Card className="md:col-span-1">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a
                        href="mailto:er.nehashah822@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                      >
                        er.nehashah822@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaWhatsapp  className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href="https://wa.me/9779844005396"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +977 9844005396
                    </a>

                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Kathmandu, Nepal</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="p-6">
                <form className="space-y-6" action="https://formsubmit.co/ade772f7c9da6742dcda7405835022d2" method="POST">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name*
                      </label>
                      <Input id="name" placeholder="Your name" name="name" required/>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email*
                      </label>
                      <Input id="email" type="email" placeholder="Your email" name="email" required/>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="Subject" name="subject"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message*
                    </label>
                    <Textarea id="message" placeholder="Your message" rows={5} name="message" required/>
                  </div>
                  <Button type="submit" className="w-full md:w-auto">
                    Send Message
                  </Button>
                  <input type="hidden" name="_next" value="https://shahneha.com.np/?submit=success"></input>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    
    </section>
  )
}