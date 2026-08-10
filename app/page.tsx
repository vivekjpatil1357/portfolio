"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Dock from "@/components/ui/floating-dock";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import
  {
    Briefcase,
    Code2,
    GraduationCap,
    Mail,
    MapPin,
    Phone,
    Trophy,
    User,
    ExternalLink,
    Github,
    Linkedin,
    ChevronDown,
    ChevronUp,
    Home as IconHome,
    Folder,
    ArrowUpRight,
    Download,
    Award,
  } from "lucide-react";
import Image from "next/image";
import { ExperienceItem } from "@/components/experience-item";
import GradientWaves from "@/components/gradient-waves";

gsap.registerPlugin(ScrollTrigger);

export default function Home()
{
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-image", { scale: 0.8, opacity: 0, duration: 1 })
        .from(".hero-name", { y: 60, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-title", { y: 40, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-meta > div", { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.2")
        .from(".hero-btns > *", { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.3");

      gsap.to(".hero-image", {
        y: 120,
        ease: "none",
        scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: 1 },
      });

      gsap.to(".hero-name", {
        y: 80,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: 1 },
      });

      gsap.to(".hero-title", {
        y: 60,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: "#home", start: "top top", end: "bottom top", scrub: 1 },
      });

      gsap.to(".hero-desc", {
        y: 40,
        opacity: 0,
        ease: "none",
        scrollTrigger: { trigger: "#home", start: "top top", end: "60% top", scrub: 1 },
      });

      gsap.utils.toArray(".section-header").forEach((el) => {
        gsap.from(el as gsap.TweenTarget, {
          x: -60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el as Element, start: "top 85%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray(".skill-category").forEach((el) => {
        gsap.from(el as gsap.TweenTarget, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el as Element, start: "top 88%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray(".skill-card").forEach((el, i) => {
        gsap.from(el as gsap.TweenTarget, {
          y: 50,
          opacity: 0,
          scale: 0.9,
          duration: 0.5,
          delay: (i % 8) * 0.05,
          ease: "back.out(1.2)",
          scrollTrigger: { trigger: el as Element, start: "top 92%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray(".experience-item").forEach((el) => {
        gsap.from(el as gsap.TweenTarget, {
          x: -60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: el as Element, start: "top 85%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray(".edu-card").forEach((el, i) => {
        gsap.from(el as gsap.TweenTarget, {
          y: 60,
          opacity: 0,
          rotateX: 8,
          duration: 0.8,
          delay: i * 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: el as Element, start: "top 85%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray(".project-card").forEach((el, i) => {
        gsap.from(el as gsap.TweenTarget, {
          y: 80,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          delay: i * 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: el as Element, start: "top 88%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray(".achieve-card").forEach((el, i) => {
        gsap.from(el as gsap.TweenTarget, {
          y: 40,
          opacity: 0,
          scale: 0.85,
          duration: 0.6,
          delay: i * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: el as Element, start: "top 90%", toggleActions: "play none none none" },
        });
      });

      gsap.utils.toArray<HTMLElement>(".section-header").forEach((el) => {
        const heading = el.querySelector("h2");
        if (!heading) return;
        gsap.fromTo(heading,
          { backgroundSize: "0% 100%" },
          {
            backgroundSize: "100% 100%",
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: { trigger: el, start: "top 80%", end: "top 40%", scrub: 1 },
          }
        );
      });

      const footer = document.querySelector("footer");
      if (footer) {
        gsap.from(footer as gsap.TweenTarget, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: footer as Element, start: "top 95%", toggleActions: "play none none none" },
        });
      }
    });

    return () => ctx.revert();
  }, []);
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "C", icon: "https://skillicons.dev/icons?i=c" },
        { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
        { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
        { name: "Python", icon: "https://skillicons.dev/icons?i=py" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
        { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", icon: "https://skillicons.dev/icons?i=react" },
        { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
        { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
        { name: "Electron", icon: "https://skillicons.dev/icons?i=electron" },
        { name: "Flask", icon: "https://skillicons.dev/icons?i=flask" },
        { name: "Django", icon: "https://skillicons.dev/icons?i=django" },
      ]
    },
    {
      title: "Tools & Databases",
      skills: [
        { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
        { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
        { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
        { name: "Prisma", icon: "https://skillicons.dev/icons?i=prisma" },
        { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
        { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
        { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
        { name: "AWS", icon: "https://skillicons.dev/icons?i=aws" },
        { name: "DynamoDB", icon: "https://skillicons.dev/icons?i=dynamodb" },
      ]
    }
  ];

  const navItems = [
    { label: "Home", icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />, onClick: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Skills", icon: <Code2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />, onClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Experience", icon: <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />, onClick: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Education", icon: <GraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />, onClick: () => document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Projects", icon: <Folder className="h-full w-full text-neutral-500 dark:text-neutral-300" />, onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
    { label: "Achievements", icon: <Award className="h-full w-full text-neutral-500 dark:text-neutral-300" />, onClick: () => document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' }) },
  ];

  return (
    <div className="min-h-screen">
      {/* Gradient Waves Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <GradientWaves
          horizonColor="#1a0533"
          waveColor="#6b21a8"
          crestColor="#c084fc"
          speed={0.35}
          amplitude={2.5}
          waveScale={0.6}
          waveRatio={0.9}
          swell={35}
          turbulence={20}
          tilt={1.11}
          zoom={1.0}
          height={8.5}
          fogDepth={15}
          detail="medium"
          brightness={1.2}
          opacity={1.0}
          mouseInteraction
          parallaxStrength={0.5}
          grain
          grainIntensity={0.04}
        />
      </div>

      <div className="relative z-10">
        <div className="fixed left-0 top-0 bottom-0 z-50 flex items-center pointer-events-none">
          <div className="pointer-events-auto">
            <Dock items={navItems} />
          </div>
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
        <section id="home" className="mb-24 pt-10 sm:pt-20">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-24">
            {/* Left: Image */}
            <div className="relative w-68 h-68 md:w-80 md:h-80 lg:w-96 lg:h-96 shrink-0 hero-image">
              <div className="absolute bg-gradient-to-br from-white/10 to-transparent blur-2xl -z-10"></div>
              <Image
                src="/me.png"
                alt="Vivek Patil"
                fill
                draggable={false}
                className="object-contain "
                priority
              />
              {/* <img src="/images/header.png" alt="" /> */}
            </div>

            {/* Right: Text Content */}
            <div className="flex flex-col items-start max-w-xl pt-4 gap-4">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white hero-name">
                Vivek Patil
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-white/80 hero-title">
                SDE Intern
              </h2>
              <p className="text-lg text-white/60 leading-relaxed hero-desc">
                Leading development of scalable web applications using React, TypeScript, and Node.js.
                Passionate about building pixel-perfect UI/UX and solving complex problems.
              </p>

              {/* Meta Info */}
              <div className="space-y-2 text-sm text-white/40 font-mono hero-meta">
                <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <a href="https://veltos.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                    Pi Reality <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
                <div>Jun 2025 - Present</div>
                <div>Pune, Maharashtra, India</div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto hero-btns">
                <Button variant="outline" size="lg" className="shadow-[inset_0_2px_8px_rgba(0,0,0,0.7)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] transition-all  border-white/20 bg-white" asChild>
                  <a href="mailto:vivekjpatil1357@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Code2 className="h-4 w-4 mr-2" />
                    vivekjpatil1357@gmail.com
                  </a>
                </Button>

                <Button variant="outline" size="lg" className="shadow-[inset_0_2px_8px_rgba(0,0,0,0.7)] hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)] transition-all  border-white/20 bg-gradient-to-br from-[#f6db91] via-[#ffffff] to-[#cd8181]" asChild>
                  <a href="/VivekPatilResume.pdf" download>
                    Download CV <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <div className="flex items-center gap-3 mb-8 section-header">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Skills & Technologies</h2>
          </div>

          <div className="grid gap-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="space-y-4 skill-category">
                <h3 className="text-lg font-semibold text-white/80 border-l-4 border-blue-500/50 ml-1 pl-3">{category.title}</h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group flex flex-col items-center justify-center p-4 bg-neutral-900/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-default skill-card">
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-3 transition-transform duration-300 group-hover:scale-110">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-full h-full object-contain drop-shadow-lg"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-white/60 group-hover:text-white transition-colors text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <div className="flex w-full items-end justify-between mb-10 section-header">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter text-white">
              Experience
            </h2>
          </div>

          <ul className="space-y-0">
            <div className="experience-item">
            <ExperienceItem
              date="Jun 2025 - Present"
              title="Software Developer Intern"
              company="Pi Reality"
              link="https://veltos.ai"
              linkText="veltos.ai"
              isCurrent={true}
              description={[
                "Sole web developer for the entire Veltos.ai platform (Next.js, Node/Express), owning architecture, UI, backend services, DB design, caching, storage, auth, and deployment on Vercel.",
                "Engineered game versioning, publishing, downloading and a full community system with secure in-browser game render-ing via Iframes, backed by optimized DynamoDB tables (PK/SK + GSIs).",
                "Designed a structured AWS S3 asset pipeline for storing and retrieving game files using deterministic key patterns, removing the need for stored URLs and enabling efficient access.",
                "Developed a subscription + credit-based payment system with a separate payment microservice (Node/Express), secure checkout, webhooks and automatic subscription/credit lifecycle management.",
                "Implemented Clerk authentication, security middlewares, Redis caching for high-speed community data, and performance optimizations (SSR/CSR tuning, lazy loading, caching layers) for a fast, scalable platform."
              ]}
            />
            </div>

            <div className="experience-item">
            <ExperienceItem
              date="Jun 2023 - Aug 2023"
              title="Python Django Trainee"
              company="Sumago Infotech Pvt. Ltd."
              description={[
                "Built a video calling application using Django which supports 50+ people at one Meet, while learning full-stack development.",
                "Acquired experience in REST APIs, models and frontend-backend integration."
              ]}
            />
            </div>
          </ul>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <div className="flex items-center gap-3 mb-8 section-header">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-neutral-900/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 group edu-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">B.E in Computer Engineering</CardTitle>
                    <CardDescription className="text-white/60 mt-2">RMD Sinhgad School of Engineering, Pune</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-white/10 text-white/60 bg-white/5">2024 - 2027</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mt-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                  <p className="font-medium text-white">CGPA: 9.23</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 group edu-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">Diploma in Computer Engineering</CardTitle>
                    <CardDescription className="text-white/60 mt-2">KCE&apos;s College of Engineering, Jalgaon</CardDescription>
                  </div>
                  <Badge variant="outline" className="border-white/10 text-white/60 bg-white/5">2021 - 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mt-2">
                  <div className="h-2 w-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                  <p className="font-medium text-white">Percentage: 89.88%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <div className="flex items-center gap-3 mb-8 section-header">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <Folder className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-neutral-900/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 group flex flex-col project-card">
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">Active File CoPilot</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary" className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10">Electron.js</Badge>
                      <Badge variant="secondary" className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10">Flask</Badge>
                      <Badge variant="secondary" className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10">Gemini API</Badge>
                    </div>
                  </div>
                  <a href="https://github.com/vivekjpatil1357/Pixel-2.0" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 text-sm text-white/60 mb-6 flex-1">
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Built a free GitHub Copilot alternative for AI-powered code completions, debugging, and coding assistance.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Made with Electron.js for cross-platform apps, Flask for backend, and Gemini API for AI integration.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Features include coding suggestions, error detection, and a real-time chat interface.</span>
                  </li>
                </ul>
                <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all group-hover:border-white/20" asChild>
                  <a href="https://github.com/vivekjpatil1357/Pixel-2.0" target="_blank" rel="noopener noreferrer">
                    View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 group flex flex-col project-card">
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">Personal Virtual Assistant</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary" className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10">Electron.js</Badge>
                      <Badge variant="secondary" className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10">Flask</Badge>
                      <Badge variant="secondary" className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10">Gemini API</Badge>
                    </div>
                  </div>
                  <a href="https://github.com/vivekjpatil1357/Virtual_AI_assistant_for_PC" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-3 text-sm text-white/60 mb-6 flex-1">
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Created an AI assistant with song playback, news, and weather, along with code error solving.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Designed a cross-platform desktop app with Electron.js and Flask.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>Added Google&apos;s Gemini API for live Q&A, news, weather, and music integration.</span>
                  </li>
                </ul>
                <Button className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all group-hover:border-white/20" asChild>
                  <a href="https://github.com/vivekjpatil1357/Virtual_AI_assistant_for_PC" target="_blank" rel="noopener noreferrer">
                    View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900/50 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 group lg:col-span-2 project-card">
              <CardHeader>
                <div className="flex justify-between items-start gap-2">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">EasyMeet - Video Calling App</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="secondary" className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10">Python Django</Badge>
                      <Badge variant="secondary" className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10">JavaScript</Badge>
                      <Badge variant="secondary" className="bg-white/5 text-white/80 border-white/10 hover:bg-white/10">ZEGOCLOUD API</Badge>
                    </div>
                  </div>
                  <a href="https://github.com/vivekjpatil1357/easymeet" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-sm text-white/60">
                    <li className="flex gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Created a real-time video calling web application using Django.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>Unique and secure generation of meeting names for user sessions.</span>
                    </li>
                  </ul>
                  <div className="flex items-end justify-end">
                    <Button className="w-full md:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all group-hover:border-white/20" asChild>
                      <a href="https://github.com/vivekjpatil1357/easymeet" target="_blank" rel="noopener noreferrer">
                        View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="mb-16">
          <div className="flex items-center gap-3 mb-8 section-header">
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Achievements</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group flex items-start gap-4 p-6 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 achieve-card">
              <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                <Code2 className="h-6 w-6 text-white flex-shrink-0" />
              </div>
              <div>
                <p className="font-bold text-2xl text-white group-hover:text-blue-400 transition-colors">450+</p>
                <p className="text-sm text-white/60 mt-1">LeetCode DSA problems solved</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 p-6 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 achieve-card">
              <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                <Award className="h-6 w-6 text-white flex-shrink-0" />
              </div>
              <div>
                <p className="font-bold text-base text-white group-hover:text-blue-400 transition-colors">Best Project</p>
                <p className="text-sm text-white/60 mt-1">KCE state-level competition winner</p>
              </div>
            </div>

            <div className="group flex items-start gap-4 p-6 rounded-xl bg-neutral-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-300 sm:col-span-2 lg:col-span-1 achieve-card">
              <div className="p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                <Award className="h-6 w-6 text-white flex-shrink-0" />
              </div>
              <div>
                <p className="font-bold text-base text-white group-hover:text-blue-400 transition-colors">Best Trainee</p>
                <p className="text-sm text-white/60 mt-1">Sumago Infotech Award</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative backdrop-blur-sm bg-black/80 border-t border-white/10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)] mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm text-white/70 mb-2">© 2025 Vivek Patil. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
