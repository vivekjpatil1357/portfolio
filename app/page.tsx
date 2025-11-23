import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Linkedin, Github, Code2, Award, Briefcase, GraduationCap, Folder, ExternalLink, Globe, ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-white/5 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-white/5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header Section */}
      <header className="backdrop-blur-xl bg-black/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Vivek Patil
            </h1>
            <div className="flex gap-2 flex-wrap justify-center">
              <Button variant="outline" size="sm" className="shadow-[inset_0_2px_8px_rgba(0,0,0,0.7)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] transition-all hover:scale-105 border-white/20 bg-white" asChild>
                <a href="mailto:vivekjpatil1357@gmail.com">
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </Button>
              <Button variant="outline" size="sm" className="shadow-[inset_0_2px_8px_rgba(0,0,0,0.7)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] transition-all  hover:scale-105 border-white/20 bg-white" asChild>
                <a href="https://linkedin.com/in/vivekjpatil1357" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" className="shadow-[inset_0_2px_8px_rgba(0,0,0,0.7)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] transition-all hover:scale-105 border-white/20 bg-white" asChild>
                <a href="https://github.com/vivekjpatil1357" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" className="shadow-[inset_0_2px_8px_rgba(0,0,0,0.7)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] transition-all hover:scale-105 border-white/20 bg-white" asChild>
                <a href="https://leetcode.com/vivekjpatil1357" target="_blank" rel="noopener noreferrer">
                  <Code2 className="h-4 w-4 mr-2" />
                  LeetCode
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <section className="mb-24 pt-10 sm:pt-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
            {/* Left: Image */}
            <div className="relative w-68 h-68 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0">
               <div className="absolute bg-gradient-to-br from-white/10 to-transparent blur-2xl -z-10"></div>
               <Image
                  src="/me.png"
                  alt="Vivek Patil"
                  fill
                  className="object-contain "
                  priority
               />
            </div>

            {/* Right: Text Content */}
            <div className="flex flex-col items-start max-w-xl pt-4 gap-4">
               <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white">
                  Vivek Patil
               </h1>
               <h2 className="text-2xl md:text-3xl font-medium text-white/80 ">
                  Full Stack Developer
               </h2>
               <p className="text-lg text-white/60 leading-relaxed">
                  Leading development of scalable web applications using React, TypeScript, and Node.js.
                  Passionate about building pixel-perfect UI/UX and solving complex problems.
               </p>

               {/* Meta Info */}
               <div className="space-y-2 text-sm text-white/40 font-mono">
                  <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                     <a href="https://veltos.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                        Pi Reality <ArrowUpRight className="h-3 w-3" />
                     </a>
                  </div>
                  <div>Jun 2025 - Present</div>
                  <div>Pune, Maharashtra, India</div>
               </div>

               {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button variant="outline" size="lg" className="shadow-[inset_0_2px_8px_rgba(0,0,0,0.7)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] transition-all  border-white/20 bg-white" asChild>
                <a href="mailto:vivekjpatil1357@gmail.com" target="_blank" rel="noopener noreferrer">
                  <Code2 className="h-4 w-4 mr-2" />
                  vivekjpatil1357@gmail.com
                </a>
              </Button>
                  
                <Button variant="outline" size="lg" className="shadow-[inset_0_2px_8px_rgba(0,0,0,0.7)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] transition-all  border-white/20 bg-gradient-to-br from-[#f6db91] via-[#ffffff] to-[#cd8181]" asChild>
                     <a href="/resume.pdf" download>
                        Download CV <Download className="ml-2 h-4 w-4" />
                     </a>
                  </Button>
               </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-neutral-800 to-black rounded-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),0_4px_15px_rgba(255,255,255,0.1)] border border-white/10">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Skills & Abilities</h2>
          </div>
          <Card className="shadow-[inset_0_2px_20px_rgba(0,0,0,0.8),0_10px_40px_rgba(255,255,255,0.1)] bg-gradient-to-br from-neutral-900 to-black backdrop-blur-sm border-2 border-white/10 hover:shadow-[inset_0_2px_30px_rgba(0,0,0,0.9),0_15px_50px_rgba(255,255,255,0.15)] transition-all duration-300">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-sm text-white/60 uppercase tracking-wider">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "PHP"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] transition-all hover:scale-105 cursor-default bg-white/5 text-white border border-white/10">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <Separator className="bg-white/10" />
                <div>
                  <h3 className="font-semibold mb-3 text-sm text-white/60 uppercase tracking-wider">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Tailwind", "React.js", "ShadCN", "Next.js", "Express.js", "Electron.js", "Node.js", "Flask", "Django", "Socket.io"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] transition-all hover:scale-105 cursor-default bg-white/5 text-white border border-white/10">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <Separator className="bg-white/10" />
                <div>
                  <h3 className="font-semibold mb-3 text-sm text-white/60 uppercase tracking-wider">Tools & Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Vercel", "Github", "Postman", "Mongoose", "Prisma", "MongoDB", "MySQL", "PostgreSQL"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] transition-all hover:scale-105 cursor-default bg-white/5 text-white border border-white/10">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <Separator className="bg-white/10" />
                <div>
                  <h3 className="font-semibold mb-3 text-sm text-white/60 uppercase tracking-wider">Cloud & Others</h3>
                  <div className="flex flex-wrap gap-2">
                    {["AWS DynamoDB", "AWS S3", "AWS EC2", "DSA (450+ Leetcode)"].map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] transition-all hover:scale-105 cursor-default bg-white/5 text-white border border-white/10">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex w-full items-end justify-between mb-10">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-white">
              Experience
            </h2>
          </div>

          <ul className="space-y-0">
            <li className="flex flex-col justify-between border-b border-white/20 py-10 md:flex-row gap-6">
              <div className="max-w-lg text-lg lg:text-xl font-semibold tracking-tighter lg:w-1/3 text-white/90">
                Jun 2025 - Present
              </div>
              <div className="lg:w-1/3">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tighter text-white">
                    Software Developer Intern
                  </h3>
                  <Badge variant="default" className="bg-white text-black hover:bg-white/90 text-xs">Current</Badge>
                </div>
                <div className="flex items-center gap-2 mb-4 text-white/70">
                  <Globe className="h-4 w-4" />
                  <a href="https://veltos.ai" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">veltos.ai</a>
                </div>
                <ul className="space-y-2 text-white/60 text-sm sm:text-base">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Developed and deployed a full-stack web platform that integrates APIs to generate 3D models, environments, and games from text prompts, managing assets and user interactions using NEXT.JS, Three.js, AWS S3, and DynamoDB, now live with 500+ users and 1000s of generated assets.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Independently designed and implemented DynamoDB tables, APIs, and frontend, integrating React Query and secure public game links (dynamically generated and encoded with salt).</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Built game versioning and prompt-based evolution features, storing chats and enabling undo/redo navigation across multiple versions.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Integrated Razorpay subscription payments (with webhook handling) and Clerk authentication for secure onboarding and access control.</span>
                  </li>
                </ul>
              </div>
              <div className="text-left md:text-right lg:w-1/4 text-white font-semibold text-lg">
                Pi Reality
              </div>
            </li>

            <li className="flex flex-col justify-between border-b border-white/20 py-10 md:flex-row gap-6">
              <div className="max-w-lg text-lg lg:text-xl font-semibold tracking-tighter lg:w-1/3 text-white/90">
                Jun 2023 - Aug 2023
              </div>
              <div className="lg:w-1/3">
                <h3 className="mb-4 text-xl sm:text-2xl font-semibold tracking-tighter text-white">
                  Python Django Trainee
                </h3>
                <ul className="space-y-2 text-white/60 text-sm sm:text-base">
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Implemented a video calling application using Django which supports 50+ people at one Meet, while learning full-stack development.</span>
                  </li>
                  <li className="flex gap-2">
                    <span>•</span>
                    <span>Acquired experience in REST APIs, models and frontend-backend integration.</span>
                  </li>
                </ul>
              </div>
              <div className="text-left md:text-right lg:w-1/4 text-white font-semibold text-lg">
                Sumago Infotech Pvt. Ltd.
              </div>
            </li>
          </ul>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-neutral-800 to-black rounded-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),0_4px_15px_rgba(255,255,255,0.1)] border border-white/10">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-[inset_0_2px_20px_rgba(0,0,0,0.8),0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_30px_rgba(0,0,0,0.9),0_15px_50px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-neutral-900 to-black border-t-4 border-t-white border-2 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-white">B.E in Computer Engineering</CardTitle>
                <CardDescription className="font-medium text-white/70 mt-1">RMD Sinhgad School of Engineering, Pune</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="text-white/60">Aug 2024 - May 2027</p>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-white rounded-full shadow-md"></div>
                    <p className="font-semibold text-white text-lg">CGPA: 9.23</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-[inset_0_2px_20px_rgba(0,0,0,0.8),0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_30px_rgba(0,0,0,0.9),0_15px_50px_rgba(255,255,255,0.15)] transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-neutral-900 to-black border-t-4 border-t-white/60 border-2 border-white/10">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl text-white">Diploma in Computer Engineering</CardTitle>
                <CardDescription className="font-medium text-white/70 mt-1">KCE&apos;s College of Engineering, Jalgaon</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="text-white/60">Jun 2021 - May 2024</p>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-white/60 rounded-full shadow-md"></div>
                    <p className="font-semibold text-white text-lg">Percentage: 89.88%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-neutral-800 to-black rounded-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),0_4px_15px_rgba(255,255,255,0.1)] border border-white/10">
              <Folder className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="shadow-[inset_0_2px_20px_rgba(0,0,0,0.8),0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_30px_rgba(0,0,0,0.9),0_20px_60px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-3 bg-gradient-to-br from-neutral-900 to-black border-t-4 border-t-white border-2 border-white/10 group">
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl text-white group-hover:scale-105 transition-transform duration-300">Active File CoPilot</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="bg-white/5 border-white/20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">Electron.js</Badge>
                      <Badge variant="outline" className="bg-white/5 border-white/20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">Flask</Badge>
                      <Badge variant="outline" className="bg-white/5 border-white/20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">Gemini API</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm sm:text-base mb-4">
                  <li className="flex gap-3">
                    <span className="text-white mt-1 font-bold">•</span>
                    <span className="text-white/80">Built a free GitHub Copilot alternative for AI-powered code completions, debugging, and coding assistance.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1 font-bold">•</span>
                    <span className="text-white/80">Made with Electron.js for cross-platform apps, Flask for backend, and Gemini API for AI integration.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1 font-bold">•</span>
                    <span className="text-white/80">Features include coding suggestions, error detection, and a real-time chat interface.</span>
                  </li>
                </ul>
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-white/90 shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-all" asChild>
                  <a href="https://github.com/vivekjpatil1357/Pixel-2.0" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-[inset_0_2px_20px_rgba(0,0,0,0.8),0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_30px_rgba(0,0,0,0.9),0_20px_60px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-3 bg-gradient-to-br from-neutral-900 to-black border-t-4 border-t-white/80 border-2 border-white/10 group">
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl text-white group-hover:scale-105 transition-transform duration-300">Personal Virtual Assistant for PC</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="bg-white/5 border-white/20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">Electron.js</Badge>
                      <Badge variant="outline" className="bg-white/5 border-white/20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">Flask</Badge>
                      <Badge variant="outline" className="bg-white/5 border-white/20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">Gemini API</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm sm:text-base mb-4">
                  <li className="flex gap-3">
                    <span className="text-white mt-1 font-bold">•</span>
                    <span className="text-white/80">Created an AI assistant with song playback, news, and weather, along with code error solving.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1 font-bold">•</span>
                    <span className="text-white/80">Designed a cross-platform desktop app with Electron.js and Flask.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1 font-bold">•</span>
                    <span className="text-white/80">Added Google&apos;s Gemini API for live Q&A, news, weather, and music integration.</span>
                  </li>
                </ul>
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-white/90 shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-all" asChild>
                  <a href="https://github.com/vivekjpatil1357/Virtual_AI_assistant_for_PC" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-[inset_0_2px_20px_rgba(0,0,0,0.8),0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-[inset_0_2px_30px_rgba(0,0,0,0.9),0_20px_60px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-3 bg-gradient-to-br from-neutral-900 to-black border-t-4 border-t-white/60 border-2 border-white/10 group lg:col-span-2">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl sm:text-2xl text-white group-hover:scale-105 transition-transform duration-300">Video Calling Web App - EasyMeet</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline" className="bg-white/5 border-white/20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">Python Django</Badge>
                      <Badge variant="outline" className="bg-white/5 border-white/20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">JavaScript</Badge>
                      <Badge variant="outline" className="bg-white/5 border-white/20 shadow-[inset_0_1px_3px_rgba(0,0,0,0.4)]">ZEGOCLOUD API</Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm sm:text-base mb-4">
                  <li className="flex gap-3">
                    <span className="text-white mt-1 font-bold">•</span>
                    <span className="text-white/80">Created a real-time video calling web application using Django that supports 50+ participants.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-white mt-1 font-bold">•</span>
                    <span className="text-white/80">Unique and secure generation of meeting names for user sessions with robust authentication.</span>
                  </li>
                </ul>
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-white/90 shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)] hover:shadow-[inset_0_2px_6px_rgba(0,0,0,0.4)] transition-all" asChild>
                  <a href="https://github.com/vivekjpatil1357/easymeet" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View on GitHub
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-neutral-800 to-black rounded-xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.8),0_4px_15px_rgba(255,255,255,0.1)] border border-white/10">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Achievements</h2>
          </div>
          <Card className="shadow-[inset_0_2px_20px_rgba(0,0,0,0.8),0_10px_40px_rgba(255,255,255,0.1)] bg-gradient-to-br from-neutral-900 to-black border-2 border-white/10">
            <CardContent className="pt-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border-2 border-white/10 hover:scale-105 hover:shadow-[inset_0_2px_15px_rgba(0,0,0,0.8),0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-300 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)]">
                  <div className="p-3 bg-white rounded-lg shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)]">
                    <Code2 className="h-6 w-6 text-black flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-white">400+</p>
                    <p className="text-sm text-white/70 mt-1">LeetCode DSA problems solved</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border-2 border-white/10 hover:scale-105 hover:shadow-[inset_0_2px_15px_rgba(0,0,0,0.8),0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-300 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)]">
                  <div className="p-3 bg-white rounded-lg shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)]">
                    <Award className="h-6 w-6 text-black flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-bold text-base text-white">Best Project</p>
                    <p className="text-sm text-white/70 mt-1">KCE state-level competition winner</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border-2 border-white/10 hover:scale-105 hover:shadow-[inset_0_2px_15px_rgba(0,0,0,0.8),0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-300 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)] sm:col-span-2 lg:col-span-1">
                  <div className="p-3 bg-white rounded-lg shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)]">
                    <Award className="h-6 w-6 text-black flex-shrink-0" />
                  </div>
                  <div>
                    <p className="font-bold text-base text-white">Best Trainee</p>
                    <p className="text-sm text-white/70 mt-1">Sumago Infotech Award</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative backdrop-blur-sm bg-black/80 border-t border-white/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-white/70 mb-2">© 2025 Vivek Patil. All rights reserved.</p>
            <p className="text-xs text-white/60">Built with ❤️ using Next.js, TypeScript & ShadCN UI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
