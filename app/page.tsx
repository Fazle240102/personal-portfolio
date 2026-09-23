"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Brain,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { FaGithub, FaFacebookF } from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "NBody Robotics",
    category: "Computer Networks",
    description:
      "An enterprise network infrastructure project developed for the Computer Networks Lab, featuring VLAN segmentation, DHCP, routing, redundancy, wireless access, NAT, and simulated internet connectivity.",
    tags: ["Networking", "Cisco Packet Tracer", "VLAN", "Routing", "DHCP"],
    live: "https://nbody-robotics.vercel.app/",
    image: "/projects/nbody-topology.png",
    featured: true,
  },
  {
    number: "02",
    title: "SENTRY-1",
    category: "Embedded Systems · Radar",
    description:
      "A low-cost ESP32-based ultrasonic radar system using an HC-SR04 sensor and SG90 servo, with real-time browser visualization.",
    tags: ["ESP32", "HC-SR04", "Node.js", "Socket.IO"],
    live: null,
    image: "/projects/sentry-1.png",
    featured: false,
  },
  {
    number: "03",
    title: "Tour Management System",
    category: "Full-Stack Web Application",
    description:
      "A full-stack platform for managing tour packages, customers, bookings, payments, and reviews.",
    tags: ["FastAPI", "Python", "MySQL", "Bootstrap"],
    live: null,
    image: "/projects/tms.png",
    featured: false,
  },
  {
    number: "04",
    title: "Interpolation Simulator",
    category: "Numerical Computing",
    description:
      "A web application for implementing and visualizing numerical interpolation methods with intermediate computational steps.",
    tags: ["Python", "Numerical Methods", "JavaScript", "Visualization"],
    live: "https://interpsim.vercel.app/",
    image: "/projects/interpsim.png",
    featured: false,
  },
];

const skills = [
  {
    icon: Code2,
    title: "Programming",
    items: ["C", "C++", "Java", "Python", "JavaScript"],
  },
  {
    icon: Globe2,
    title: "Web Development",
    items: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "React", "Next.js"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MySQL", "PostgreSQL"],
  },
  {
    icon: Brain,
    title: "AI / ML",
    items: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib"],
  },
];

const achievements = [
  {
    title: "Dean's Award",
    description:
      "Academic recognition received for outstanding academic performance.",
    meta: "Spring 2024",
  },
  {
    title: "Take-Off Programming Contest",
    description:
      "Participated in the final round of the programming contest at DIU.",
    meta: "Programming",
  },
  {
    title: "Unlock The Algorithm",
    description:
      "Participated in the final round of the programming contest at DIU.",
    meta: "Programming",
  },
  {
    title: "PPS Lab Prefect",
    description: "Served as a Programming and Problem Solving Lab prefect.",
    meta: "Fall 2024",
  },
];

const certifications = [
  {
    title: "AWS Academy Graduate — Cloud Foundations",
    organization: "AWS Academy",
    date: "August 2026",
    detail: "20-hour training",
    link: "https://www.credly.com/go/hkzQSndl",
  },
  {
    title: "Ask questions and analyze content with Microsoft 365 Copilot",
    organization: "Microsoft",
    date: "June 2025",
    detail: "Microsoft Learn achievement",
    link: null,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-zinc-500">
      <span className="h-px w-8 bg-zinc-700" />
      {children}
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050505] text-zinc-100">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute left-1/2 top-[12%] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/[0.04] blur-[120px]" />
      </div>

      {/* Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight"
            onClick={closeMobile}
          >
            Fazle<span className="text-zinc-500">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {["About", "Projects", "Skills", "Journey", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs text-zinc-500 transition hover:text-white"
                >
                  {item}
                </a>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/Fazle_Rabbi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-5 py-2.5 text-xs font-medium transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              Resume
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/10 px-5 py-2.5 text-xs font-medium transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-white/[0.06] bg-[#050505] px-6 py-5 md:hidden">
            <nav className="flex flex-col gap-5">
              {["About", "Projects", "Skills", "Journey", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={closeMobile}
                    className="text-sm text-zinc-400 transition hover:text-white"
                  >
                    {item}
                  </a>
                ),
              )}
              <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-4">
                <a
                  href="/Fazle_Rabbi_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className="rounded-full border border-white/10 px-5 py-2.5 text-center text-sm font-medium transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  Resume
                </a>

                <a
                  href="#contact"
                  onClick={closeMobile}
                  className="rounded-full border border-white/10 px-5 py-2.5 text-center text-sm font-medium transition hover:border-white/20 hover:bg-white/[0.05]"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center px-6 pt-20 lg:px-8"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-3 text-xs text-zinc-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
              CSE Undergraduate · AI/ML Explorer
            </div>

            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
              Computer Science &amp; Engineering
            </p>

            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              Md. Fazle
              <br />
              <span className="text-zinc-600">Rabbi.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
              A CSE student exploring AI/ML, building software, solving
              problems, and turning ideas into practical systems.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                Explore my work
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-white/25 hover:bg-white/[0.05]"
              >
                Get in touch
                <Mail size={15} />
              </a>
            </div>

            <div className="mt-9 flex items-center gap-6 text-xs text-zinc-500">
              <span className="flex items-center gap-2">
                <MapPin size={13} />
                Dhaka, Bangladesh
              </span>

              <a
                href="https://github.com/Fazle240102"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <FaGithub size={13} />
                GitHub
              </a>

              <a
                href="https://www.facebook.com/fazle.rabbi20046"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <FaFacebookF size={12} />
                Facebook
              </a>
            </div>
          </motion.div>
          {/* Mobile profile image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 flex justify-center lg:hidden"
          >
            <div className="relative h-[300px] w-[240px]">
              <div className="absolute inset-0 rounded-[2rem] bg-emerald-400/10 blur-2xl" />

              <div className="absolute -inset-2 rounded-[2.2rem] border border-emerald-400/20" />

              <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-1">
                <div className="relative h-full w-full overflow-hidden rounded-[1.7rem]">
                  <Image
                    src="/profile.jpg"
                    alt="Md. Fazle Rabbi"
                    fill
                    sizes="240px"
                    className="object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden lg:block"
          >
            <div className="relative mx-auto aspect-square w-full max-w-[480px]">
              {/* Soft background glow */}
              <div className="absolute inset-[8%] rounded-full bg-emerald-400/10 blur-3xl" />

              {/* Rotating outer ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[4%] rounded-full border border-dashed border-emerald-400/30"
              />

              {/* Inner frame */}
              <div className="absolute inset-[10%] rounded-[2rem] border border-white/10 bg-white/[0.02] p-2 backdrop-blur-sm">
                <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-[#090909]">
                  <Image
                    src="/profile.jpg"
                    alt="Md. Fazle Rabbi"
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 430px"
                    className="object-cover object-top"
                  />

                  {/* Subtle image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>

              {/* Small identity badge */}
              <div className="absolute left-[2%] top-[20%] rounded-full border border-white/10 bg-[#090909]/90 px-4 py-2 text-xs text-zinc-400 backdrop-blur-md">
                CSE Student
              </div>

              {/* AI/ML badge */}
              <div className="absolute bottom-[18%] right-[0%] rounded-full border border-white/10 bg-[#090909]/90 px-4 py-2 text-xs text-zinc-400 backdrop-blur-md">
                AI / ML Explorer
              </div>

              {/* Emerald center dot */}
              <div className="absolute left-1/2 top-[3%] h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.7)]" />
            </div>
          </motion.div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-zinc-600 transition hover:text-zinc-400 sm:flex"
        >
          Scroll to explore
          <ArrowDown size={13} />
        </a>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t border-white/[0.06] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <SectionLabel>About me</SectionLabel>
            <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Building today.
              <br />
              Exploring what&apos;s next.
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-zinc-300">
              I&apos;m a Computer Science &amp; Engineering undergraduate at
              Daffodil International University, interested in software
              development, problem solving, and intelligent systems.
            </p>

            <p className="mt-6 leading-8 text-zinc-500">
              My journey started with programming and software engineering, and
              I&apos;m now exploring AI/ML as the next direction of my technical
              growth. I&apos;m preparing to use AI/ML in my FYDP and working
              toward future research and Q1 journal publication opportunities.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                ["2024–2027", "Undergraduate"],
                ["CSE", "Daffodil International University"],
                ["AI/ML", "Current direction"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5"
                >
                  <div className="text-lg font-semibold">{value}</div>
                  <div className="mt-2 text-xs leading-5 text-zinc-600">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-white/[0.06] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Selected work</SectionLabel>

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-5xl font-semibold tracking-tight sm:text-6xl">
              Projects that turn
              <br />
              ideas into systems.
            </h2>

            <p className="max-w-sm text-sm leading-6 text-zinc-500">
              A selection of academic and personal projects across networking,
              embedded systems, full-stack development, and numerical computing.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl border p-7 transition ${
                  project.featured
                    ? "border-emerald-400/20 bg-gradient-to-br from-emerald-400/[0.07] to-white/[0.02]"
                    : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14]"
                }`}
              >
                {project.image && (
                  <div className="relative -mx-7 -mt-7 mb-7 overflow-hidden border-b border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-56 w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  </div>
                )}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium text-zinc-600">
                    {project.number}
                  </span>

                  {project.featured && (
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.08] px-3 py-1 text-[10px] uppercase tracking-wider text-emerald-300">
                      Featured
                    </span>
                  )}
                </div>

                <div className="mt-16">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-base leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.07] px-3 py-1.5 text-[10px] text-zinc-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-zinc-300 transition hover:text-white"
                    >
                      Visit live project
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>

                <ArrowUpRight
                  size={22}
                  className="absolute bottom-7 right-7 text-zinc-700 transition group-hover:text-zinc-400"
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-t border-white/[0.06] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Technical toolkit</SectionLabel>

          <div className="mb-14 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Tools I use to
              <br />
              build and learn.
            </h2>

            <p className="max-w-2xl self-end text-base leading-7 text-zinc-400">
              A growing toolkit built through academic projects, software
              development, programming practice, and my ongoing exploration of
              AI/ML.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.title}
                  className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-2.5">
                      <Icon size={18} className="text-zinc-300" />
                    </div>
                    <h3 className="font-medium">{skill.title}</h3>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/[0.04] px-3 py-2 text-xs text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI / ML Journey */}
      <section
        id="journey"
        className="border-t border-white/[0.06] px-6 py-28 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionLabel>AI / ML journey</SectionLabel>

          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
                From foundations
                <br />
                to intelligent systems.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400">
                AI/ML is the direction I&apos;m actively exploring as I prepare
                for my FYDP and future research work.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: "01",
                  title: "Foundations",
                  text: "Python, NumPy, Pandas, Matplotlib and data handling.",
                  status: "Current",
                },
                {
                  step: "02",
                  title: "Machine Learning",
                  text: "Data preprocessing, supervised learning, evaluation and Scikit-learn.",
                  status: "Learning",
                },
                {
                  step: "03",
                  title: "Exploring Next",
                  text: "Deep Learning, Computer Vision, NLP and AI-powered systems.",
                  status: "Next",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
                >
                  <span className="pt-1 text-xs text-zinc-700">
                    {item.step}
                  </span>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-medium">{item.title}</h3>
                      <span className="rounded-full border border-white/[0.07] px-3 py-1 text-[10px] uppercase tracking-wider text-zinc-600">
                        {item.status}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-t border-white/[0.06] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Achievements</SectionLabel>

          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
                Milestones
                <br />
                along the way.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <Award size={18} className="text-zinc-500" />
                    <span className="text-[10px] uppercase tracking-wider text-zinc-700">
                      {item.meta}
                    </span>
                  </div>

                  <h3 className="mt-8 font-medium">{item.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-t border-white/[0.06] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Certifications</SectionLabel>

          <div className="grid gap-4 md:grid-cols-2">
            {certifications.map((certificate) => (
              <div
                key={certificate.title}
                className="group rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 transition hover:border-white/[0.14]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="rounded-xl border border-white/[0.07] bg-white/[0.03] p-3">
                    <CheckCircle2 size={20} className="text-emerald-400" />
                  </div>

                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/[0.08] p-2 text-zinc-500 transition hover:text-white"
                      aria-label="View credential"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <p className="mt-7 text-xs uppercase tracking-[0.18em] text-zinc-600">
                  {certificate.organization}
                </p>

                <h3 className="mt-3 text-lg font-medium leading-7">
                  {certificate.title}
                </h3>

                <div className="mt-5 flex gap-4 text-xs text-zinc-600">
                  <span>{certificate.date}</span>
                  <span>•</span>
                  <span>{certificate.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-white/[0.06] px-6 py-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionLabel>Education</SectionLabel>

          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 sm:p-10">
            <div className="flex flex-col justify-between gap-8 md:flex-row">
              <div className="flex gap-5">
                <div className="h-fit rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3">
                  <GraduationCap size={22} className="text-zinc-300" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                    Undergraduate · 2024–2027
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold">
                    Daffodil International University
                  </h3>

                  <p className="mt-2 text-sm text-zinc-500">
                    Bachelor of Science in Computer Science &amp; Engineering
                  </p>
                </div>
              </div>

              <div className="text-sm text-zinc-600 md:text-right">
                <p>Dhaka, Bangladesh</p>
                <p className="mt-2">Computer Science &amp; Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/[0.06] px-6 py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] border border-white/[0.07] bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-8 sm:p-12 lg:p-16">
            <SectionLabel>Get in touch</SectionLabel>

            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                  Have an idea?
                  <br />
                  Let&apos;s build something.
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500">
                  I&apos;m interested in software development, AI/ML, research,
                  and opportunities to build meaningful technical projects.
                </p>
              </div>

              <a
                href="mailto:dev.fazlerabbi@gmail.com"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                <Mail size={16} />
                Email me
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/[0.07] pt-7 text-xs text-zinc-500">
              <a
                href="mailto:dev.fazlerabbi@gmail.com"
                className="transition hover:text-white"
              >
                dev.fazlerabbi@gmail.com
              </a>

              <a
                href="tel:+8809611065856"
                className="transition hover:text-white"
              >
                +880 9611-065856
              </a>

              <a
                href="https://github.com/Fazle240102"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <FaGithub size={13} />
                GitHub
              </a>

              <a
                href="https://www.facebook.com/fazle.rabbi20046"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <FaFacebookF size={12} />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-zinc-700 sm:flex-row">
          <p>© 2026 Md. Fazle Rabbi. All rights reserved.</p>
          <p>Built with Next.js &amp; TypeScript.</p>
        </div>
      </footer>
    </main>
  );
}
