import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Code2, Database, Workflow, Globe2, Phone } from 'lucide-react';
import { IconBrandGithub as Github, IconBrandLinkedin as Linkedin } from '@tabler/icons-react';
import { CvActions, CvMotion } from '../cv-interactions';
import styles from '../cv.module.css';

export const metadata: Metadata = {
  title: 'Maroš Studenič | AI Automation Developer',
  description: 'AI agents, workflow automation and production software. Selected experience and projects by Maroš Studenič, based in Brno.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: { title: 'Maroš Studenič | AI Automation Developer', description: 'From AI workflows to production systems. Explore my experience, projects and engineering toolkit.', type: 'profile' },
};

const experience = [
  { company: 'Riqmi', role: 'Co-founder · Product & engineering', period: '2026 — present', text: 'Building a content automation platform that connects website analysis, keyword research, writing and publishing. Working with custom agents, agentic orchestration and MCP.', tags: ['TypeScript', 'TanStack Start', 'Convex', 'MCP'] },
  { company: 'Talsec', role: 'DevOps & Fullstack Developer', period: '2024 — present', text: 'Responsible for the App Security Portal and the data platform behind it. Built and scaled a global ingestion pipeline processing 900M+ mobile security events every month.', tags: ['GCP', 'Terraform', 'Kubernetes', 'NestJS', 'ClickHouse', 'BigQuery'] },
  { company: 'Weelet', role: 'Technical Co-founder', period: '2024 — present', text: 'Own architecture and delivery of an interactive travel app with 1,500+ users and 50 journeys across Czechia. Deliver the shared web and mobile experience, including App Store and Google Play releases.', tags: ['React Native', 'Next.js', 'Convex', 'PWA'] },
  { company: 'BeCode', role: 'Software architect & Account manager', period: '2023 — 2024', text: 'Project manager and fullstack developer for Edison CRM, a custom system that automated manual processes for a renewable-energy sales company and helped the team handle more clients.', tags: ['React', 'Flask', 'Node.js', 'Firebase', 'CI/CD'] },
  { company: 'Softacus', role: 'Backend Developer', period: '2023', text: 'Backend development for ELWIS, a no-code platform for building internal tools.', tags: ['NestJS', 'TypeScript', 'MongoDB', 'Docker'] },
];
const skills = [
  { name: 'AI & automation', Icon: Workflow, items: ['Agentic orchestration', 'Custom agents', 'MCP', 'LLM applications', 'Natural-language SQL'] },
  { name: 'Fullstack engineering', Icon: Code2, items: ['TypeScript', 'Python', 'Node.js / NestJS', 'Flask / Django', 'React / Next.js', 'TanStack Start'] },
  { name: 'Data & infrastructure', Icon: Database, items: ['PostgreSQL', 'BigQuery / ClickHouse', 'Redis / MongoDB', 'Convex / Firebase', 'GCP / Terraform', 'Kubernetes / Docker', 'GitHub Actions'] },
];

export default function CvPage() {
  return <div className={styles.page}>
    <CvMotion />
    <header className={styles.header}>
      <Link href="/" className={styles.wordmark}>studenic<span>.</span></Link>
      <nav aria-label="CV navigation"><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact <ArrowUpRight size={14} /></a></nav>
      <CvActions />
    </header>
    <main className={styles.main}>
      <section className={styles.hero} aria-labelledby="cv-title">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}><span className={styles.dot} /> Brno, Czech Republic <span className={styles.separator}>/</span> Curriculum vitae</p>
          <h1 id="cv-title">Maroš <br />Studenič<span className={styles.period}>.</span></h1>
          <p className={styles.role}>AI Automation Developer</p>
          <p className={styles.intro}>I turn complex workflows into useful software. AI agents, business automation and the infrastructure that gets them into production.</p>
          <div className={styles.heroLinks}><a className={styles.primary} href="#experience">Explore my experience <ArrowRight size={18} /></a><a className={styles.secondary} href="https://github.com/marosstudenic">GitHub <ArrowUpRight size={16} /></a></div>
        </div>
        <div className={styles.workflow} aria-label="Riqmi content workflow: research, write, review and publish">
          <div className={styles.workflowTop}><span>Selected work / Riqmi</span><Workflow size={18} /></div>
          <p className={styles.workflowTitle}>A workflow.<br /><span>A working product.</span></p>
          <div className={styles.flowSteps}>
            {['Research', 'Write', 'Review', 'Publish'].map((step, i) => <div className={styles.flowStep} key={step}><span className={styles.flowIndex}>0{i+1}</span><span>{step}</span><span className={styles.flowMarker} aria-hidden="true" /></div>)}
          </div>
          <div className={styles.workflowBottom}><span>Agent orchestration + MCP</span><Link href="/projects/riqmi" aria-label="View the Riqmi project"><ArrowUpRight size={20} /></Link></div>
        </div>
        <div className={styles.heroFooter}><p>Fullstack developer. Technical co-founder. Builder.</p><a href="#projects">Selected work ↓</a></div>
      </section>
      <section id="projects" className={styles.section}>
        <div className={styles.sectionHeader} data-cv-reveal><div><p className={styles.eyebrow}>Projects with a purpose</p><h2>Built. Shipped.<br /><span>Used.</span></h2></div><p>Selected projects where I connect AI, data and product engineering.</p></div>
        <div className={styles.projects}>
          <article className={`${styles.project} ${styles.riqmi}`} data-cv-reveal>
            <div className={styles.projectTop}><span>AI content automation</span><Workflow size={24} /></div>
            <h3>Riqmi</h3><p>A content engine that researches, writes and publishes. Custom agents and MCP connect the process from keyword opportunities to SEO-ready articles.</p>
            <div className={styles.projectMetric}><strong>Research → publish</strong><span>One connected workflow</span></div>
            <Link href="/projects/riqmi">Explore project <ArrowUpRight size={18} /></Link>
          </article>
          <article className={styles.project} data-cv-reveal>
            <div className={styles.projectTop}><span>Production data infrastructure</span><Database size={24} /></div>
            <h3>Talsec</h3><p>The App Security Portal and the global data platform behind it. Cloud infrastructure, event ingestion and security analytics at scale.</p>
            <div className={styles.projectMetric}><strong>900M+</strong><span>Security events processed monthly</span></div>
            <Link href="/projects/talsec-log-ingestion">Explore project <ArrowUpRight size={18} /></Link>
          </article>
          <article className={styles.project} data-cv-reveal>
            <div className={styles.projectTop}><span>Business process automation</span><Code2 size={24} /></div>
            <h3>Edison CRM</h3><p>A custom CRM for renewable-energy sales. Automated manual processes and a clearer way for the team to manage more clients.</p>
            <div className={styles.projectMetric}><strong>End-to-end</strong><span>Project management + fullstack delivery</span></div>
            <Link href="/projects/edison-crm">Explore project <ArrowUpRight size={18} /></Link>
          </article>
        </div>
      </section>
      <section id="experience" className={`${styles.section} ${styles.experience}`}>
        <div className={styles.experienceHeading} data-cv-reveal><p className={styles.eyebrow}>Professional experience</p><h2>From the idea<br />to <span>production.</span></h2><p>I work across architecture, backend, interfaces and deployment — with the product and its users in mind.</p></div>
        <div className={styles.timeline}>{experience.map(job => <article className={styles.job} data-cv-reveal key={job.company}><div className={styles.jobTop}><h3>{job.company}</h3><span>{job.period}</span></div><p className={styles.jobRole}>{job.role}</p><p>{job.text}</p><ul className={styles.tags}>{job.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionHeader} data-cv-reveal><div><p className={styles.eyebrow}>Engineering toolkit</p><h2>The tools behind<br /><span>the work.</span></h2></div></div>
        <div className={styles.skills}>{skills.map(({name, Icon, items}) => <article className={styles.skill} key={name} data-cv-reveal><Icon size={24} /><h3>{name}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>
      <section className={`${styles.section} ${styles.education}`} data-cv-reveal>
        <div><p className={styles.eyebrow}>Education & applied AI</p><h2>Natural language.<br /><span>Real data.</span></h2></div>
        <div><p className={styles.educationMeta}>Masaryk University · Faculty of Informatics · 2025</p><h3>A platform for generating database queries for data-driven decisions using LLMs</h3><p>Successfully defended bachelor’s thesis. Built a platform that translates natural language into SQL for BigQuery, with a NestJS backend and Next.js frontend. Supports cloud and local LLMs, read-only queries, and row- and column-level data protection.</p><a href="https://is.muni.cz/th/et7f6/" className={styles.textLink}>View thesis <ArrowUpRight size={16} /></a><div className={styles.erasmus}><strong>Universidade do Porto</strong><span>Erasmus · Computer Science · 2023–2024</span></div></div>
      </section>
      <section id="contact" className={styles.contact} data-cv-reveal><p className={styles.eyebrow}>Let’s connect</p><h2>Have a workflow<br />worth <span>improving?</span></h2><p>I’d be happy to talk about the role, your team and what you’re building.</p><div className={styles.contactLinks}><a href="tel:+421917481025"><Phone size={19} /> +421 917 481 025 <ArrowUpRight size={17} /></a><a href="https://www.linkedin.com/in/maros-studenic/"><Linkedin size={19} /> LinkedIn <ArrowUpRight size={17} /></a><a href="https://github.com/marosstudenic"><Github size={19} /> GitHub <ArrowUpRight size={17} /></a></div></section>
    </main>
    <footer className={styles.footer}><span>Maroš Studenič · AI Automation Developer</span><Link href="/"><Globe2 size={14} /> Visit portfolio <ArrowUpRight size={14} /></Link></footer>
  </div>;
}
