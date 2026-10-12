import { Bot, FileText, Database, Check, ArrowRight, Globe, BarChart3, Map } from 'lucide-react';
import styles from './cv.module.css';

/** Decorative diagrams explain the workflow; adjacent text carries its meaning. */
export function AutomationMotion() {
  return <div className={`${styles.motionScene} ${styles.automationMotion}`} data-motion-scene aria-hidden="true">
    <div className={styles.motionTitle}><span>From repeated tasks to a connected workflow</span><span className={styles.motionIndicator} /> </div>
    <div className={styles.automationGrid}>
      <div className={styles.taskStack}><span className={styles.motionCaption}>The repeated work</span>{['New enquiries', 'Source documents', 'Website content', 'Usage events'].map((task,i)=><div key={task} className={styles.taskTicket} style={{animationDelay:`${i * -.9}s`}}><FileText size={14}/>{task}<span /></div>)}</div>
      <div className={styles.motionConnector}><i/><ArrowRight size={18}/></div>
      <div className={styles.agentCore}><span className={styles.orbit}/><Bot size={32}/><strong>AI + automation</strong><span>Process · connect · act</span></div>
      <div className={styles.motionConnector}><i/><ArrowRight size={18}/></div>
      <div className={styles.outputStack}><span className={styles.motionCaption}>Where the work goes</span>{[{Icon:Database,label:'Your CRM'},{Icon:Globe,label:'Your website'},{Icon:BarChart3,label:'Your analytics'}].map(({Icon,label},i)=><div key={label} className={styles.resultTicket} style={{animationDelay:`${i * -1.2}s`}}><Icon size={14}/>{label}<Check size={12}/></div>)}</div>
    </div>
    <p className={styles.diagramNote}>A workflow illustration. Your process determines the steps.</p>
  </div>;
}
export function RiqmiMotion() {
  return <div className={`${styles.motionScene} ${styles.productMotion}`} data-motion-scene aria-hidden="true"><span className={styles.motionCaption}>An agentic content workflow</span><div className={styles.pipeline}>{[{Icon:Globe,title:'Research',detail:'Website + keywords'},{Icon:Bot,title:'Create',detail:'Context + tools'},{Icon:Check,title:'Publish',detail:'Review + delivery'}].map(({Icon,title,detail},i)=><div className={styles.pipelineGroup} key={title}><div className={styles.pipelineNode} style={{animationDelay:`${i * 1.4}s`}}><Icon size={21}/><strong>{title}</strong><span>{detail}</span><i/></div>{i<2&&<div className={styles.pipelineLink}><span/></div>}</div>)}</div></div>;
}
export function WeeletMotion() {
  return <div className={`${styles.motionScene} ${styles.productMotion}`} data-motion-scene aria-hidden="true"><span className={styles.motionCaption}>Content in. Insights out.</span><div className={styles.routeMotion}><FileText size={20}/><div className={styles.pipelineLink}><span/></div><div className={styles.routeCore}><Map size={22}/><strong>Route content</strong></div><div className={styles.routeDots}><i/><i/><i/></div></div><div className={styles.analyticsMotion}><span>Usage events</span><div className={styles.fanout}><i/><i/><i/></div><div>{['Product analytics','Reporting','Other analytics'].map((label,i)=><span className={styles.analyticsDestination} key={label} style={{animationDelay:`${i*.7}s`}}><BarChart3 size={13}/>{label}<i/></span>)}</div></div></div>;
}
