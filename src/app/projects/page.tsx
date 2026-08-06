import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { IconArrowUpRight } from '@tabler/icons-react'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Project archive — Maroš Studenič',
  description: 'Products, platforms and systems I have built since 2020 — from mobile apps and content automation to security data pipelines and connected hardware.',
}

const orderedProjects = [...projects].sort((a, b) => {
  const priority = (slug: string) => slug === 'weelet' ? 0 : slug === 'riqmi' ? 1 : 2
  return priority(a.slug) - priority(b.slug)
})

export default function ProjectsPage() {
  return <main className="min-h-screen bg-paper text-ink"><div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pt-16 lg:px-10"><Link href="/" className="text-sm text-ink/55 transition hover:text-orange">← Back home</Link><div className="mt-10 max-w-3xl sm:mt-16"><p className="eyebrow">Project archive / 2020—now</p><h1 className="mt-5 font-display text-[clamp(2.5rem,13vw,4.5rem)] leading-[.9] tracking-[-.06em] sm:text-9xl">Things I&apos;ve<br /><span className="text-orange">made work.</span></h1><p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/60">A complete list of products, platforms, systems and experiments from my work across Brno, Porto and everywhere in between.</p></div><div className="mt-16 grid gap-x-8 gap-y-16 sm:mt-24 md:grid-cols-2">{orderedProjects.map((project, index) => <Link href={`/projects/${project.slug}`} key={project.slug} className="group"><div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-ink/10 bg-ink/5"><Image src={project.image} alt={`${project.title} preview`} fill sizes="(min-width: 768px) 37rem, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" /><span className="absolute right-5 top-5 rounded-full bg-paper/90 p-2 text-ink opacity-0 transition group-hover:opacity-100"><IconArrowUpRight size={18} /></span><span className="absolute bottom-5 left-5 font-mono text-xs uppercase tracking-widest text-white">{project.category}</span></div><div className="mt-4 flex items-start justify-between gap-4"><div><p className="text-sm text-ink/45">{String(index + 1).padStart(2, '0')} / {project.year}</p><h2 className="mt-1 font-display text-3xl tracking-tight group-hover:text-orange">{project.title}</h2><p className="mt-2 max-w-md text-sm leading-relaxed text-ink/60">{project.summary}</p></div><IconArrowUpRight className="mt-1 text-ink/35 transition group-hover:text-orange" /></div></Link>)}</div></div></main>
}
