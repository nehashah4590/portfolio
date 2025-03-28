import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Neha Shah
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">Software Engineer & React Developer</p>
          </div>
          <div className="flex items-center gap-6 mb-6 md:mb-0">
            <Link
              href="https://github.com/nehashah4590"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/nehashah822/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:er.nehashah822@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">© {currentYear} Neha Shah. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

