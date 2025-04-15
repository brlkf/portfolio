import Image from "next/image";
import Link from "next/link";
import { Github, Mail, Linkedin, Calendar, Building } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Project data - you can customize each project here
const projects = [
  {
    id: 1,
    name: "Students emotions and behaviours detection system",
    description:
      "A system to monitor, analyze, and interpret students' emotional states and behavioral patterns in educational environments.",
    technologies: ["Pyhton", "OpenCV", "MongoDB", "CUDA"],
    codeUrl:
      "https://github.com/brlkf/Students-emotions-and-behaviours-detection-system",
  },
  {
    id: 2,
    name: "Text and Document Content Summarization Chrome Extension",
    description:
      "This Chrome extension provides AI-powered summarization capabilities for both webpage text and uploaded documents. It utilizes Google's Gemini model for generating summaries and key takeaways.",
    technologies: ["React", "WXT", "Tailwind CSS", "API"],
    codeUrl: "https://github.com/Sheerwin02/Chrome-Content-Summarizer",
  },
  {
    id: 3,
    name: "Vet Store Management System",
    description:
      "The APU Veterinary Clinic System (AVCS) is a web-based platform that streamlines clinic operations by enabling managing staff, vets and receptionists to efficiently manage schedules, appointments, user profiles and pet care information through role-based access.",
    technologies: ["Java", "Servlet", "JSP", "HTML", "CSS"],
    codeUrl: "https://github.com/brlkf/Vet_Store_Management",
  },
];

// Work experience data - customize with your own experience
const workExperience = [
  {
    id: 1,
    position: "Associate Technical Consultant Internship",
    company: " Awansoft Technology Sdn Bhd",
    duration: "Aug 2023 - Nov 2023",
    description:
      "Leveraged Power BI tools to create interactive dashboards and reports for decision-makers, enabling data-driven insights.",
    technologies: ["Microsoft Power BI", "SQL", "Acumatica ERP"],
  },
  {
    id: 2,
    position: "Web Developer Internship",
    company: " Fireworks Solutions Sdn Bhd",
    duration: "May 2022 - Jul 2022",
    description:
      "Maintained and updated client websites. Collaborated with designers to implement pixel-perfect interfaces.",
    technologies: ["HTML", "CSS"],
  },
];

const links = [
  {
    github: "https://github.com/brlkf",
    linkedin: "https://www.linkedin.com/in/lee-khoon-fang-6084a1233/",
    email: "brlkflee@gmail.com",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-xl">Portfolio</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="flex flex-col justify-center items-center text-center space-y-4">
                <div className="space-y-2 max-w-[1000px]">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Hi, I'm <span className="text-primary">Lee Khoon Fang</span>
                  </h1>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    className="bg-black text-white hover:bg-black/90"
                    asChild
                  >
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#projects">View My Work</Link>
                  </Button>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link href={links[0].github} target="_blank" rel="noreferrer">
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link
                    href={links[0].linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href={`mailto:${links[0].email}`}>
                    <Button variant="ghost" size="icon" className="h-10 w-10">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {/* Replace with your own profile image */}
                <div className="relative w-[350px] h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/pf.jpg?height=400&width=350&text=Your+Photo"
                    alt="Profile Photo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                About Me
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                A dedicated and driven professional with a strong ambition to
                expand expertise in information technology. Eager about
                acquiring hands-on experience and knowledge to further enhance
                skills in the field.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">My Background</h3>
                <p className="text-muted-foreground">
                  I am a graduate with a Bachelor of Computer Science (Hons)
                  (Artificial Intelligence) degree from Asia Pacific University
                  (APU). With a strong passion for software development and
                  programming, I am motivated to apply my skills in practical
                  settings and continue enhancing my expertise in software
                  development.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">My Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-zinc-800 hover:bg-zinc-800/90 text-white">
                    JavaScript
                  </Badge>
                  <Badge className="bg-zinc-800 hover:bg-zinc-800/90 text-white">
                    Python
                  </Badge>
                  <Badge className="bg-zinc-800 hover:bg-zinc-800/90 text-white">
                    TypeScript
                  </Badge>
                  <Badge className="bg-zinc-800 hover:bg-zinc-800/90 text-white">
                    Java
                  </Badge>
                  <Badge className="bg-zinc-800 hover:bg-zinc-800/90 text-white">
                    C++
                  </Badge>
                  <Badge className="bg-zinc-800 hover:bg-zinc-800/90 text-white">
                    R
                  </Badge>
                  <Badge className="bg-zinc-800 hover:bg-zinc-800/90 text-white">
                    HTML
                  </Badge>
                  <Badge className="bg-zinc-800 hover:bg-zinc-800/90 text-white">
                    CSS
                  </Badge>
                  <Badge className="bg-zinc-800 hover:bg-zinc-800/90 text-white">
                    PHP
                  </Badge>
                  <Badge className="bg-zinc-800 hover:bg-zinc-800/90 text-white">
                    SQL
                  </Badge>
                  <Badge className="bg-zinc-800 hover:bg-zinc-800/90 text-white">
                    Power BI
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Work Experience
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                My professional journey and the companies I've had the pleasure
                to work with.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {workExperience.map((job) => (
                <div key={job.id} className="border rounded-lg p-6 bg-card">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{job.position}</h3>
                      <div className="flex items-center text-muted-foreground mt-1">
                        <Building className="h-4 w-4 mr-1" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{job.duration}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/40"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                My Projects
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px]">
                Check out some of my recent work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-bold">{project.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-2 pt-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link
                            href={project.codeUrl}
                            className="inline-flex items-center gap-1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <Github className="h-3.5 w-3.5" />
                            Code
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Get in Touch
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[700px] mb-8">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out!
              </p>

              <div className="w-full max-w-sm space-y-4">
                <div className="flex justify-center gap-4">
                  <Link
                    href="mailto:your-email@example.com"
                    className="flex items-center gap-2"
                  >
                    <Mail className="h-5 w-5" />
                    brlkflee@gmail.com
                  </Link>
                </div>
                <div className="flex justify-center gap-4">
                  <Link
                    href="https://github.com/brlkf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/lee-khoon-fang-6084a1233/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:brlkflee@gmail.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  );
}
