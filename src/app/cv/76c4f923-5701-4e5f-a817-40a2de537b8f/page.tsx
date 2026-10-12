import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Workflow, Bot, Database, Blocks, Phone, MoveUpRight } from 'lucide-react';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { CvActions, CvMotion, WorkflowExplorer } from '../cv-interactions';
import styles from '../cv.module.css';
import { Logo } from '@/components/logo';
import { AutomationMotion, RiqmiMotion, WeeletMotion } from '../motion-diagrams';

export const metadata: Metadata = {
  title: 'Maroš Studenič | AI & Automation Development',
  description: 'Custom AI agents, connected workflows and AI-powered data tools. Designed and built by Maroš Studenič.',
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: { title: 'Maroš Studenič | AI & Automation Development', description: 'Explore what AI and automation can do for your business.', type: 'website' },
};
const useCases = [
  { title: 'Stop copying data between tools.', icon: Workflow, task: 'Moving the same information between forms, spreadsheets and your CRM.', automation: 'Capture it once. Validate it, route it and update the connected systems automatically.' },
  { title: 'Give every enquiry a next step.', icon: Bot, task: 'Reading incoming requests, summarising them and passing them to the right person.', automation: 'Use AI to structure the request, then route it to your team and create the CRM record.' },
  { title: 'Keep your website working for you.', icon: Blocks, task: 'Researching keywords, writing articles and publishing content one piece at a time.', automation: 'Connect research, writing, review and publishing in an AI-assisted content workflow.' },
  { title: 'Turn source material into useful content.', icon: Bot, task: 'Working through documents, notes and reference material to create something new.', automation: 'Let AI organise and process the material into a structured draft your team can work with.' },
  { title: 'Send usage data where it belongs.', icon: Workflow, task: 'Duplicating product events and usage data across multiple analytics tools.', automation: 'Connect the destinations to one data flow so the same events reach the tools you use.' },
  { title: 'Ask your data a question.', icon: Database, task: 'Writing the same queries or asking someone else to pull a report.', automation: 'Build a natural-language interface that queries the data within defined access rules.' },
];
export default function ServicesPage() {
  return <div className={styles.page} data-motion-page>
    <CvMotion />
    <header className={styles.header}><Link href="/" className={styles.identity}><Logo /></Link><nav aria-label="Services navigation"><a href="#services">Use cases</a><a href="#work">Automation in action</a><a href="#contact" className={styles.navContact}>Let’s talk <ArrowUpRight size={15} /></a></nav><CvActions /></header>
    <main>
      <section className={styles.hero} aria-labelledby="services-title">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}><span className={styles.signal} /> AI & automation / Put repetitive work on autopilot</p>
          <h1 id="services-title">Still doing the same tasks <br /><span>over and over?</span></h1>
          <div className={styles.heroBottom}><p>Could AI or automation do them for you? If your team keeps copying data, processing documents or repeating the same steps, let’s find what a system can take off their hands.</p><a href="#services" className={styles.primary}>Find your use case <ArrowRight size={18} /></a></div>
          <AutomationMotion />
        </div>
        <div className={styles.heroCaption}><span>Designed and built by Maroš Studenič</span><span>Brno, CZ · TypeScript / Python / AI</span></div>
      </section>
      <section id="services" className={styles.services}>
        <div className={styles.sectionIntro} data-cv-reveal><p className={styles.eyebrow}>Recognise any of these?</p><h2>Your team’s time is worth more<br /><span>than another manual task.</span></h2><p>These are the kinds of jobs AI and automation can help with. Start with the task you repeat most often.</p></div>
        <div className={styles.useCases}>{useCases.map(({title,icon:Icon,task,automation},index) => <article key={title} className={styles.useCase} style={{transitionDelay:`${(index % 3) * 90}ms`}} data-cv-reveal><Icon size={23} /><h3>{title}</h3><p>{task}</p><div><span>What automation can do</span><p>{automation}</p></div></article>)}</div>
        <div className={styles.exampleSection} data-cv-reveal><p className={styles.eyebrow}>See how the steps connect</p><WorkflowExplorer /></div>
      </section>
      <section id="work" className={styles.work}>
        <div className={styles.sectionIntro} data-cv-reveal><p className={styles.eyebrow}>Automation in action</p><h2>Here’s what that looks like<br /><span>in real products.</span></h2><p>Two products I co-founded, with AI and automation doing work behind the scenes.</p></div>
        <div className={styles.caseStudies}>
          <article className={styles.caseStudy} data-cv-reveal><Link href="/projects/riqmi" className={`${styles.projectImage} ${styles.riqmiImage}`} aria-label="Explore the Riqmi project"><Image src="/projects/riqmi.png" alt="Riqmi website showing its automated SEO content platform" fill sizes="(max-width: 600px) calc(100vw - 48px), (max-width: 1280px) 45vw, 580px" className={styles.projectScreenshot} /></Link><div className={styles.workLabel}>Riqmi <span>Website & SEO automation</span></div><h3>Keep your website growing.<br />Without doing every step yourself.</h3><p>Riqmi connects website analysis, keyword research, article creation and publishing into one content workflow. It helps businesses build their search presence and visibility in AI answers.</p><div className={styles.caseDetail}><p className={styles.eyebrow}>Agentic behaviour</p><p>Custom AI agents work through the research and content tasks, using tools and business context to turn keyword opportunities into SEO-ready articles. Agentic orchestration and MCP connect those steps to the publishing workflow.</p></div><RiqmiMotion /><a href="https://www.riqmi.com" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>Visit Riqmi <ArrowUpRight size={16} /><span className={styles.srOnly}> (opens in a new tab)</span></a></article>
          <article className={styles.caseStudy} data-cv-reveal><Link href="/projects/weelet" className={`${styles.projectImage} ${styles.weeletImage}`} aria-label="Explore the Weelet project"><Image src="/projects/weelet-preview.png" alt="Weelet travel game website with its route map and mobile app preview" fill sizes="(max-width: 600px) calc(100vw - 48px), (max-width: 1280px) 45vw, 580px" className={styles.projectScreenshot} /></Link><div className={styles.workLabel}>Weelet <span>Route content & analytics automation</span></div><h3>Less time processing material.<br />More time creating the journey.</h3><p>Weelet uses AI automation to process source material for creating routes. It helps turn the inputs behind a journey into content the team can use to build the experience.</p><div className={styles.caseDetail}><p className={styles.eyebrow}>One event. Multiple destinations.</p><p>Automation also distributes usage data across analytics tools. The same product activity feeds the destinations the team needs, without manually duplicating the data for each one.</p></div><WeeletMotion /><a href="https://weelet.cz/landing" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>Visit Weelet <ArrowUpRight size={16} /><span className={styles.srOnly}> (opens in a new tab)</span></a></article>
        </div>
      </section>
      <section className={styles.process}>
        <div className={styles.sectionIntro} data-cv-reveal><p className={styles.eyebrow}>How we work together</p><h2>Clear steps.<br /><span>Something you can use.</span></h2></div>
        <ol className={styles.processSteps}>{[{title:'Find the useful starting point',text:'We look at your current process, its inputs and the systems involved. Then define one concrete outcome.'},{title:'Build a working version',text:'I connect the tools and build the core workflow. You can try it and give feedback before the scope grows.'},{title:'Put it into real use',text:'Add the interface, validation, approval steps and deployment needed for your team. Document the system and hand it over.'}].map((step,i)=><li key={step.title} data-cv-reveal><span className={styles.processNumber}>0{i+1}</span><h3>{step.title}</h3><p>{step.text}</p></li>)}</ol>
      </section>
      <section id="contact" className={styles.contact} data-cv-reveal><div><p className={styles.eyebrow}>Start with one repetitive task</p><h2>What’s still<br /><span>being done manually?</span></h2><p>Show me the task your team keeps repeating. We’ll look at whether AI, automation or a combination of both can take it off your hands.</p><div className={styles.contactLinks}><a href="https://www.linkedin.com/in/maros-studenic/"><IconBrandLinkedin size={18} />Message me on LinkedIn <ArrowUpRight size={17} /></a><a href="tel:+421917481025"><Phone size={17} />+421 917 481 025</a></div></div><aside className={styles.about}><div className={styles.avatar}>M<span>S</span></div><h3>Maroš Studenič</h3><p>Fullstack developer & technical co-founder</p><p>I work across AI applications, backend systems, interfaces and cloud infrastructure. My experience includes Riqmi, Talsec, Weelet and business process automation with Edison CRM.</p><div><Link href="/">Full portfolio <ArrowUpRight size={15}/></Link><a href="https://github.com/marosstudenic"><IconBrandGithub size={17}/>GitHub</a></div></aside></section>
    </main>
    <footer className={styles.footer}><span>Maroš Studenič · AI & automation development</span><a href="#services">Explore services ↑</a></footer>
  </div>;
}
