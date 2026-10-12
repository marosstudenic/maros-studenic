import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Workflow, Bot, Database, Blocks, Phone, MoveUpRight } from 'lucide-react';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { CvActions, CvMotion, WorkflowExplorer } from '../cv-interactions';
import styles from '../cv.module.css';

export const metadata: Metadata = {
  title: 'Maroš Studenič | AI & Automation Development',
  description: 'Custom AI agents, connected workflows and AI-powered data tools. Designed and built by Maroš Studenič.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: { title: 'Maroš Studenič | AI & Automation Development', description: 'Explore what AI and automation can do for your business.', type: 'website' },
};
const services = [
  { name: 'AI agents that can take action.', label: 'Custom AI agents', icon: Bot, description: 'Connect an AI assistant to the tools and information it needs to do useful work. Give it a defined job, clear permissions and a way to ask for human approval.', examples: ['Internal research assistants', 'Agents connected to your business tools', 'Multi-step research and content workflows'], delivery: 'Agent logic, tool integrations, approval steps and a usable interface.', tags: ['Custom agents', 'MCP', 'TypeScript', 'Python'] },
  { name: 'Less copy-paste. More flow.', label: 'Workflow & API automation', icon: Workflow, description: 'Make the systems you already use work together. Replace repetitive handoffs with connected processes that move information from one step to the next.', examples: ['CRM updates and lead routing', 'Content research, review and publishing', 'Data synchronisation between applications'], delivery: 'Connected APIs, workflow logic, validation and clear handling of failed steps.', tags: ['APIs', 'Webhooks', 'Node.js', 'Background jobs'] },
  { name: 'Ask a question. Work with the data.', label: 'AI-powered data tools', icon: Database, description: 'Build an interface between people and their data. Translate natural-language questions into useful queries, reports or internal tools with deliberate access controls.', examples: ['Natural-language database queries', 'Internal analytics assistants', 'AI features inside existing dashboards'], delivery: 'A working application with data connections, read-only boundaries where needed and access controls.', tags: ['LLMs', 'SQL', 'BigQuery', 'NestJS'] },
  { name: 'A prototype is the beginning.', label: 'Production engineering', icon: Blocks, description: 'Take an AI workflow beyond a demo. Build the backend, interface and infrastructure around it so it can become part of the way your team works.', examples: ['Custom web applications and internal tools', 'Data pipelines and cloud deployment', 'Integrating AI into an existing product'], delivery: 'Fullstack implementation, deployment, documentation and a clear handoff.', tags: ['React', 'Next.js', 'GCP', 'Docker', 'CI/CD'] },
];
export default function ServicesPage() {
  return <div className={styles.page}>
    <CvMotion />
    <header className={styles.header}><Link href="/" className={styles.identity}><span className={styles.identityMark}>ms<span>↗</span></span><span>Maroš Studenič<small>AI & automation development</small></span></Link><nav aria-label="Services navigation"><a href="#services">What I build</a><a href="#work">Selected work</a><a href="#contact" className={styles.navContact}>Let’s talk <ArrowUpRight size={15} /></a></nav><CvActions /></header>
    <main>
      <section className={styles.hero} aria-labelledby="services-title">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}><span className={styles.signal} /> Custom AI systems / Built around your business</p>
          <h1 id="services-title">Give the repetitive <br />work <span>some intelligence.</span></h1>
          <div className={styles.heroBottom}><p>I build AI agents and connected workflows that turn manual steps into working systems. From the first integration to the application your team actually uses.</p><a href="#services" className={styles.primary}>See what I can build <ArrowRight size={18} /></a></div>
          <WorkflowExplorer />
        </div>
        <div className={styles.heroCaption}><span>Designed and built by Maroš Studenič</span><span>Brno, CZ · TypeScript / Python / AI</span></div>
      </section>
      <section id="services" className={styles.services}>
        <div className={styles.sectionIntro} data-cv-reveal><p className={styles.eyebrow}>What I can build for you</p><h2>Start with the work.<br /><span>Build the right system.</span></h2><p>A specific process, a useful integration or a complete AI application. The scope follows the problem.</p></div>
        <div>{services.map(({name,label,icon:Icon,description,examples,delivery,tags},i) => <article key={label} className={styles.service} data-cv-reveal><div className={styles.serviceLabel}><span>0{i+1}</span><Icon size={22} /><p>{label}</p></div><div className={styles.serviceBody}><h3>{name}</h3><p>{description}</p><ul className={styles.examples}>{examples.map(example=><li key={example}><MoveUpRight size={13} />{example}</li>)}</ul><div className={styles.delivery}><span>You get</span><p>{delivery}</p></div><ul className={styles.tags}>{tags.map(tag=><li key={tag}>{tag}</li>)}</ul></div></article>)}</div>
      </section>
      <section id="work" className={styles.work}>
        <div className={styles.sectionIntro} data-cv-reveal><p className={styles.eyebrow}>Experience behind the offer</p><h2>Built beyond<br /><span>the demo.</span></h2></div>
        <div className={styles.evidence}>
          <Link href="/projects/riqmi" className={styles.featuredWork} data-cv-reveal><div className={styles.workLabel}>Riqmi <ArrowUpRight size={20} /></div><h3>From keyword research<br />to published content.</h3><p>Co-founder, product & engineering. A content engine using custom agents, agentic orchestration and MCP to connect research, writing and publishing.</p><div className={styles.miniFlow}><span>Research</span><ArrowRight size={14} /><span>Write</span><ArrowRight size={14} /><span>Publish</span></div><span className={styles.caseLink}>Explore the project <ArrowUpRight size={16} /></span></Link>
          <Link href="/projects/talsec-log-ingestion" className={styles.dataWork} data-cv-reveal><div className={styles.workLabel}>Talsec <ArrowUpRight size={20} /></div><strong>900M<span>+</span></strong><p className={styles.metricLabel}>mobile security events processed every month</p><p>Responsible for the App Security Portal and the data platform behind it. Cloud infrastructure and global event ingestion at production scale.</p><span className={styles.caseLink}>Explore the project <ArrowUpRight size={16} /></span></Link>
          <a href="https://is.muni.cz/th/et7f6/" className={styles.thesisWork} data-cv-reveal><Database size={22} /><div><p className={styles.eyebrow}>Applied AI / Bachelor’s thesis · 2025</p><h3>Natural language → SQL</h3><p>An LLM application for querying BigQuery, with cloud and local models, read-only operations and row- and column-level data protection.</p></div><ArrowUpRight size={20} /></a>
        </div>
      </section>
      <section className={styles.process}>
        <div className={styles.sectionIntro} data-cv-reveal><p className={styles.eyebrow}>How we work together</p><h2>Clear steps.<br /><span>Something you can use.</span></h2></div>
        <ol className={styles.processSteps}>{[{title:'Find the useful starting point',text:'We look at your current process, its inputs and the systems involved. Then define one concrete outcome.'},{title:'Build a working version',text:'I connect the tools and build the core workflow. You can try it and give feedback before the scope grows.'},{title:'Put it into real use',text:'Add the interface, validation, approval steps and deployment needed for your team. Document the system and hand it over.'}].map((step,i)=><li key={step.title} data-cv-reveal><span className={styles.processNumber}>0{i+1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
      </section>
      <section id="contact" className={styles.contact} data-cv-reveal><div><p className={styles.eyebrow}>Bring the process you want to improve</p><h2>What’s still<br /><span>being done manually?</span></h2><p>Tell me what happens today, which tools you use and what you’d like to happen instead.</p><div className={styles.contactLinks}><a href="https://www.linkedin.com/in/maros-studenic/"><IconBrandLinkedin size={18} />Message me on LinkedIn <ArrowUpRight size={17} /></a><a href="tel:+421917481025"><Phone size={17} />+421 917 481 025</a></div></div><aside className={styles.about}><div className={styles.avatar}>M<span>S</span></div><h3>Maroš Studenič</h3><p>Fullstack developer & technical co-founder</p><p>I work across AI applications, backend systems, interfaces and cloud infrastructure. My experience includes Riqmi, Talsec, Weelet and business process automation with Edison CRM.</p><div><Link href="/">Full portfolio <ArrowUpRight size={15}/></Link><a href="https://github.com/marosstudenic"><IconBrandGithub size={17}/>GitHub</a></div></aside></section>
    </main>
    <footer className={styles.footer}><span>Maroš Studenič · AI & automation development</span><a href="#services">Explore services ↑</a></footer>
  </div>;
}
