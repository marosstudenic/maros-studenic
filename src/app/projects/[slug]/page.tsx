import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { IconArrowUpRight } from '@tabler/icons-react'
import { getProject, projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug)
  if (!project) return { title: 'Project not found — Maroš Studenič' }

  const headline = `${project.title} — ${project.category}`

  return {
    title: `${headline} | Maroš Studenič`,
    description: project.summary,
    openGraph: { title: headline, description: project.summary, images: [project.image], type: 'article' },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pt-16 lg:px-10">
        <div className="flex items-center justify-between">
          <Link href="/projects" className="text-sm text-ink/55 transition hover:text-orange">← All projects</Link>
          <span className="eyebrow">{project.year}</span>
        </div>

        <div className="mt-10 grid gap-14 sm:mt-20 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="eyebrow">{project.category} / {project.client}</p>
            <h1 className="mt-5 break-words font-display text-[clamp(2.5rem,13vw,4.5rem)] leading-[.88] tracking-[-.06em] sm:text-9xl">{project.title}</h1>
            <p className="mt-8 max-w-lg text-xl leading-relaxed text-ink/65">{project.summary}</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-ink/10 bg-ink/5">
            <Image src={project.image} alt={`${project.title} application screenshot`} fill sizes="(min-width: 1024px) 40rem, 100vw" className="object-cover" priority />
          </div>
        </div>

        {project.facts && (
          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {project.facts.map((fact) => <div key={fact.label} className="bg-paper px-5 py-6"><p className="eyebrow break-words">{fact.label}</p><p className="mt-3 break-words font-display text-2xl tracking-tight">{fact.value}</p></div>)}
          </div>
        )}

        {project.gallery && (
          <section className="mt-10 border-t border-ink/15 pt-10">
            <p className="eyebrow">{project.galleryTitle ?? 'Official App Store previews'}</p>
            {project.galleryLayout === 'wide' ? (
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {project.gallery.map((image, index) => <div key={image} className={`relative aspect-[16/9] overflow-hidden rounded-2xl border border-ink/10 bg-ink/5 ${index === 0 ? 'sm:col-span-2' : ''}`}><Image src={image} alt={`${project.title} screenshot ${index + 1}`} fill sizes={index === 0 ? '(min-width: 640px) 75rem, 100vw' : '(min-width: 640px) 37rem, 100vw'} className="object-contain" /></div>)}
              </div>
            ) : (
              <div className="mt-6 flex gap-5 overflow-x-auto pb-4">
                {project.gallery.map((image, index) => <div key={image} className="relative min-w-[210px] overflow-hidden rounded-2xl border border-ink/10 bg-ink/5 sm:min-w-[250px]"><Image src={image} alt={`${project.title} App Store screenshot ${index + 1}`} width={600} height={1300} sizes="(min-width: 640px) 250px, 210px" className="h-auto w-full" /></div>)}
              </div>
            )}
          </section>
        )}

        {project.caseStudy && (
          <section className="mt-10 border-t border-ink/15 pt-10">
            <p className="eyebrow">Case study</p>
            <a href={project.caseStudy.link} target="_blank" rel="noreferrer" className="group mt-6 flex flex-col justify-between gap-8 rounded-2xl border border-ink/10 bg-ink/5 px-7 py-8 transition hover:border-orange/40 hover:bg-orange/5 sm:flex-row sm:items-end">
              <div className="max-w-xl">
                <p className="font-display text-3xl tracking-tight sm:text-4xl">{project.caseStudy.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{project.caseStudy.description}</p>
              </div>
              <span className="contact-link w-fit shrink-0">Read the case study <IconArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
            </a>
          </section>
        )}

        {project.videoUrl && (
          <section className="mt-10 border-t border-ink/15 pt-10">
            <p className="eyebrow">{project.videoTitle ?? `See ${project.title} in action`}</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-ink/10 bg-black shadow-2xl shadow-black/20">
              <div className="aspect-video">
                <iframe className="size-full" src={project.videoUrl} title={`${project.title} product video`} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
            </div>
          </section>
        )}

        <div className="mt-20 grid gap-16 border-t border-ink/15 pt-12 lg:grid-cols-[.7fr_1.3fr]">
          <div className="grid h-fit grid-cols-2 gap-8 text-sm">
            <div><p className="eyebrow">Role</p><p className="mt-2 leading-relaxed">{project.role}</p></div>
            <div><p className="eyebrow">Client</p><p className="mt-2 leading-relaxed">{project.client}</p></div>
            <div className="col-span-2"><p className="eyebrow">Technologies</p><div className="mt-3 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="rounded-full border border-ink/15 px-3 py-1.5 text-xs">{tech}</span>)}</div></div>
            <div className="col-span-2 flex flex-wrap gap-5">{project.link && <a href={project.link} target="_blank" rel="noreferrer" className="contact-link w-fit">Visit project <IconArrowUpRight size={16} /></a>}{project.appStoreLink && <a href={project.appStoreLink} target="_blank" rel="noreferrer" className="contact-link w-fit">View on the App Store <IconArrowUpRight size={16} /></a>}{project.androidLink && <a href={project.androidLink} target="_blank" rel="noreferrer" className="contact-link w-fit">View on Google Play <IconArrowUpRight size={16} /></a>}</div>
          </div>
          <div className="max-w-2xl">
            <p className="eyebrow">The short version</p>
            <p className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">{project.description}</p>
            {project.highlights && <><p className="eyebrow mt-12">How it works</p><ul className="mt-5 grid gap-4 text-sm leading-relaxed text-ink/65">{project.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-orange" />{highlight}</li>)}</ul></>}
          </div>
        </div>
      </div>
    </main>
  )
}
