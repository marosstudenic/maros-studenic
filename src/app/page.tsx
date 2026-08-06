import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin, IconMapPin, IconPhone } from "@tabler/icons-react";
import { HeroHeader } from "@/components/hero-section-2-header";

export const metadata: Metadata = {
  title: "Maroš Studenič — Product-minded engineer in Brno",
  description: "Maroš Studenič is a full-stack developer building clear, useful digital products from Brno.",
};

const phone = { display: "+421 917 481 025", href: "tel:+421917481025" };

const projects = [
  { title: "Weelet", type: "Technical co-founder · 2024—now", description: "10× more fun on trips through Czechia — 50 journeys, 1,500 users and an offline-first mobile architecture.", image: "/projects/weelet-preview.png", href: "/projects/weelet", accent: "bg-[#f3edcf]" },
  { title: "Riqmi", type: "Co-founder · 2026", description: "A content engine that researches, writes and publishes for organic growth and AI visibility.", image: "/projects/riqmi.png", href: "/projects/riqmi", accent: "bg-[#dbe8f4]" },
  { title: "Talsec", type: "Security infrastructure · 2024—now", description: "The App Security Portal and the data platform behind it — 900M+ mobile security events every month.", image: "/projects/talsec.svg", href: "/projects/talsec-log-ingestion", accent: "bg-[#d9efdf]" },
];

const experience = [
  { date: "2026—now", company: "Riqmi", role: "Co-founder", description: "Building the product and engineering side of a content engine that turns research into organic growth and AI visibility.", stack: ["TypeScript", "TanStack Start", "Convex", "Agentic orchestration", "MCP", "SEO"] },
  { date: "2024—now", company: "Weelet", role: "Technical co-founder", description: "Architecture and delivery for an interactive travel game that turns everyday trips through Czechia into stories and puzzles.", stack: ["React Native", "Next.js", "TypeScript", "Convex", "PWA", "App Store & Play delivery"] },
  { date: "2024—now", company: "Talsec", role: "DevOps & fullstack developer", description: "Responsible for the App Security Portal and the data platform behind it, processing 900M+ mobile security events every month.", stack: ["GCP", "Terraform", "Kubernetes", "NestJS", "TypeScript", "ClickHouse", "ElasticSearch", "BigQuery"] },
  { date: "2023—now", company: "Beehive Monitoring", role: "Embedded developer", description: "Building features for connected beehive monitoring systems.", stack: ["C++", "Silicon Labs", "Bluetooth LE", "GSM"] },
  { date: "2023—24", company: "BeCode", role: "Software architect & account manager", description: "Web design, content, SEO and product direction for a growing digital team, including the Edison CRM project.", stack: ["React", "Next.js", "Node.js", "Flask", "Firebase", "CI/CD", "SEO"] },
  { date: "2023", company: "Softacus", role: "Backend developer", description: "NestJS and MongoDB for ELWIS, a no-code tool for internal systems.", stack: ["NestJS", "TypeScript", "MongoDB", "Docker"] },
  { date: "2020—21", company: "Pixwell", role: "Backend developer", description: "Laravel, PostgreSQL and Redis for Draxard, a social media management platform.", stack: ["Laravel", "PHP", "PostgreSQL", "Redis", "Docker"] },
];

const toolkit = [
  { group: "Languages", items: ["TypeScript", "Python", "PHP", "C++"] },
  { group: "Frontend", items: ["React", "Next.js", "TanStack Start", "React Native", "Vue", "Tailwind", "PWA"] },
  { group: "Backend", items: ["NestJS", "Node.js", "Django", "Flask", "Laravel"] },
  { group: "Data", items: ["PostgreSQL", "ClickHouse", "BigQuery", "ElasticSearch", "MongoDB", "Redis", "Convex", "Firebase"] },
  { group: "Infra", items: ["GCP", "Terraform", "Kubernetes", "Docker", "CI/CD", "App Store & Play"] },
  { group: "AI & search", items: ["Agentic orchestration", "Custom agents", "MCP", "SEO"] },
  { group: "Embedded", items: ["Bluetooth LE", "GSM", "Silicon Labs"] },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <HeroHeader />

      <main id="top" className="mx-auto max-w-7xl px-6 pt-20 lg:px-10 lg:pt-24">
        <section className="grid min-h-[calc(100vh-96px)] items-center gap-12 pb-20 pt-6 lg:grid-cols-[1.2fr_.8fr] lg:gap-24 lg:pt-10">
          <div>
            <div className="mb-8 flex items-center gap-3 text-sm font-medium text-ink/60"><span className="status-dot" /> Available for selected projects <span className="mx-1 text-ink/20">/</span> Brno, CZ</div>
            <h1 className="max-w-3xl font-display text-[clamp(2.75rem,7vw,6.5rem)] leading-[.9] tracking-[-.05em]">I build products<br /><span className="text-orange">that make it</span><br />to production.</h1>
            <p className="mt-10 max-w-lg text-lg leading-relaxed text-ink/65">I&apos;m Maroš — a full-stack developer who likes turning complex ideas into simple, useful software. Currently building from Brno.</p>
            <div className="mt-10 flex flex-wrap items-center gap-4"><a href="#work" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition hover:bg-orange hover:text-ink">See selected work <IconArrowUpRight className="ml-2 inline" size={16} /></a><a href="#contact" className="text-sm font-semibold underline decoration-ink/30 underline-offset-8 transition hover:decoration-orange">Let&apos;s talk</a></div>
          </div>
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="rotate-3 bg-[#f3edcf] p-4 shadow-2xl shadow-ink/10"><div className="relative aspect-[4/5] overflow-hidden bg-[#FEFBEA]"><Image src="/projects/weelet-app-2.jpg" alt="Weelet mobile application preview" fill sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 100vw" priority className="object-contain" /></div><p className="pb-1 pt-4 text-center font-mono text-[11px] uppercase tracking-[.2em] text-[#41402f]/75">Tech co-founder / Weelet<br className="sm:hidden" /><span className="hidden sm:inline"> · </span>Co-founder / Riqmi</p></div>
            <div className="absolute -bottom-8 -left-8 -rotate-6 rounded-full bg-orange px-6 py-5 font-display text-2xl leading-none shadow-xl">Make it<br />useful.</div>
          </div>
        </section>

        <section id="work" className="border-t border-ink/15 py-24 lg:py-32"><div className="mb-14 flex items-end justify-between"><div><p className="eyebrow">01 / Selected work</p><h2 className="section-title">A few things<br /><em>I&apos;ve shipped.</em></h2></div><p className="hidden max-w-xs text-right text-sm leading-relaxed text-ink/55 md:block">Stop designing. Stop developing. <span className="text-orange">Start shipping</span> — the people using it will tell you what they actually want.</p></div><div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <Link key={project.title} href={project.href} className="group block"><div className={`relative mb-5 aspect-[4/3] overflow-hidden p-5 ${project.accent}`}><Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 24rem, (min-width: 768px) 45vw, 100vw" className="object-contain p-5 transition duration-500 group-hover:scale-105" /><span className="absolute right-4 top-4 rounded-full bg-paper/80 p-2 opacity-0 transition group-hover:opacity-100"><IconArrowUpRight size={18} /></span></div><p className="eyebrow text-ink/45">0{index + 1} — {project.type}</p><h3 className="mt-2 font-display text-3xl tracking-tight group-hover:text-orange">{project.title}</h3><p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/60">{project.description}</p></Link>)}</div></section>

        <section id="about" className="grid gap-12 border-t border-ink/15 py-24 lg:grid-cols-[.7fr_1.3fr] lg:py-32"><div><p className="eyebrow">02 / About</p><h2 className="section-title">The short<br /><em>version.</em></h2></div><div className="max-w-2xl"><p className="font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">I work across the full stack, but I&apos;m most interested in the space between a good idea and a product people actually want to use.</p><p className="mt-8 max-w-xl text-base leading-8 text-ink/60">From early architecture and interface design to the last API endpoint, I enjoy making things feel considered — whether that means a mobile app, a data pipeline handling hundreds of millions of events, or a board with a battery on it.</p><div className="mt-10 space-y-5">{toolkit.map(({ group, items }) => <div key={group} className="grid gap-2 sm:grid-cols-[110px_1fr] sm:items-start sm:gap-4"><p className="eyebrow sm:pt-2">{group}</p><ul className="flex flex-wrap gap-2">{items.map((item) => <li key={item} className="rounded-full border border-ink/15 px-4 py-2 text-sm">{item}</li>)}</ul></div>)}</div></div></section>

        <section id="experience" className="border-t border-ink/15 py-24 lg:py-32"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">03 / Experience</p><h2 className="section-title">Built in<br /><em>the real world.</em></h2></div><div>{experience.map(({ date, company, role, description, stack }) => <div key={company} className="grid gap-3 border-b border-ink/15 py-7 sm:grid-cols-[130px_1fr]"><p className="font-mono text-xs uppercase tracking-widest text-ink/45">{date}</p><div><h3 className="font-display text-2xl tracking-tight">{company}</h3><p className="mt-1 text-sm font-medium text-orange">{role}</p><p className="mt-3 max-w-lg text-sm leading-relaxed text-ink/60">{description}</p><ul className="mt-4 flex flex-wrap gap-2">{stack.map((item) => <li key={item} className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[11px] uppercase tracking-[.1em] text-ink/55">{item}</li>)}</ul></div></div>)}</div></div></section>

        <section id="contact" className="relative overflow-hidden border-t border-ink/15 py-24 lg:py-32"><div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange/20 blur-3xl" /><p className="eyebrow">04 / Contact</p><h2 className="relative mt-5 max-w-3xl font-display text-[clamp(3.5rem,8vw,8rem)] leading-[.88] tracking-[-.06em]">Have a good<br /><span className="text-orange">one?</span> Let&apos;s talk.</h2><p className="relative mt-8 max-w-xl text-base leading-8 text-ink/60">Just call me. Don&apos;t hesitate — even if it&apos;s only a quick chat about an idea.</p><div className="relative mt-10 flex flex-wrap gap-x-10 gap-y-5 text-lg"><a href={phone.href} className="contact-link font-display text-3xl tracking-tight sm:text-4xl"><IconPhone size={24} /> {phone.display}</a></div><div className="relative mt-8 flex flex-wrap gap-x-10 gap-y-5 text-lg"><a href="https://www.linkedin.com/in/maros-studenic/" className="contact-link"><IconBrandLinkedin size={20} /> LinkedIn <IconArrowUpRight size={16} /></a><a href="https://github.com/marosstudenic" className="contact-link"><IconBrandGithub size={20} /> GitHub <IconArrowUpRight size={16} /></a></div></section>
      </main>
      <footer className="border-t border-ink/15"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-6 text-xs text-ink/50 sm:flex-row lg:px-10"><p>© {new Date().getFullYear()} Maroš Studenič</p><p className="flex items-center gap-1"><IconMapPin size={14} /> Brno, Czech Republic · Built with curiosity</p></div></footer>
    </div>
  );
}
