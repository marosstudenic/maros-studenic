'use client';
import { useEffect, useRef, useState } from 'react';
import { Check, Link2, Printer, ArrowRight, Play, RotateCcw, Circle, Pause } from 'lucide-react';
import styles from './cv.module.css';

const scenarios = [
  { label: 'Content engine', input: 'A business website + a topic', output: 'An article ready for review', nodes: ['Research the topic', 'Draft the article', 'Human review', 'Publish to your CMS'], note: 'Research and writing connect to publishing, with a person deciding what goes live.' },
  { label: 'Lead handoff', input: 'A new website enquiry', output: 'A structured CRM record', nodes: ['Validate the enquiry', 'Summarise the request', 'Route to the right team', 'Update the CRM'], note: 'An incoming request becomes a structured record your team can act on.' },
  { label: 'Data assistant', input: '“Show revenue by region”', output: 'A query result you can explore', nodes: ['Read the question', 'Generate a SQL query', 'Check access rules', 'Query read-only data'], note: 'Natural language connects to a database, with access checks before the query runs.' },
];
export function WorkflowExplorer() {
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(-1);
  const [running, setRunning] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const scenario = scenarios[selected];
  const complete = step === scenario.nodes.length;
  function reset() { if (timer.current) clearInterval(timer.current); timer.current = null; setStep(-1); setRunning(false); }
  useEffect(() => () => { if (timer.current) clearInterval(timer.current); }, []);
  function run() {
    reset();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setStep(scenario.nodes.length); return; }
    setStep(0); setRunning(true);
    let next = 0;
    timer.current = setInterval(() => { next += 1; setStep(next); if (next === scenario.nodes.length) { if (timer.current) clearInterval(timer.current); timer.current = null; setRunning(false); } }, 850);
  }
  return <div className={styles.explorer}>
    <div className={styles.explorerTop}><span className={styles.labLabel}><span className={styles.labDot}/> Workflow explorer</span><span className={styles.demoLabel}>Illustrative demo</span></div>
    <div className={styles.labToolbar}><div className={styles.scenarios} role="group" aria-label="Choose a workflow example">{scenarios.map((item,i)=><button key={item.label} aria-pressed={selected===i} onClick={()=>{reset();setSelected(i);}} className={selected===i?styles.activeScenario:''}>{item.label}</button>)}</div><button className={styles.runButton} onClick={run} disabled={running}>{complete?<RotateCcw size={14}/>:<Play size={14}/>} {running?'Running example…':complete?'Replay example':'Run example'}</button></div>
    <div className={styles.flow} aria-label={`${scenario.label} workflow`}>
      <div className={styles.inputNode}><span>Input</span><p>{scenario.input}</p></div><ArrowRight className={styles.connector} size={18}/>
      {scenario.nodes.map((node,i)=><div className={styles.flowGroup} key={node}><div className={`${styles.node} ${step===i?styles.currentNode:''} ${step>i?styles.doneNode:''}`}><span className={styles.nodeStatus}>{step>i?<Check size={15}/>:step===i?<span className={styles.spinner}/>:<Circle size={13}/>}<span>Step {i+1}</span></span><p>{node}</p></div>{i<scenario.nodes.length-1&&<ArrowRight className={styles.connector} size={18}/>}</div>)}
    </div>
    <div className={styles.labBottom}><p>{scenario.note}</p><span className={complete?styles.outputDone:styles.output} role="status">{complete?<><Check size={15}/>{scenario.output}</>:running?`Step ${step+1} of ${scenario.nodes.length}`:'Choose a workflow and see the steps'}</span></div>
  </div>;
}
export function CvActions() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const [motionPaused, setMotionPaused] = useState(false);
  useEffect(() => { const page = document.querySelector<HTMLElement>('[data-motion-page]'); if (page) page.dataset.motion = motionPaused ? 'paused' : 'playing'; return () => { if (page) delete page.dataset.motion; }; }, [motionPaused]);
  useEffect(() => { if (status==='idle') return; const t=setTimeout(()=>setStatus('idle'),3500); return()=>clearTimeout(t); },[status]);
  async function copy(){try{await navigator.clipboard.writeText(window.location.origin+window.location.pathname);setStatus('copied');}catch{setStatus('failed');}}
  return <div className={styles.actions}><button onClick={() => setMotionPaused(value => !value)} aria-label={motionPaused ? "Play decorative motion" : "Pause decorative motion"} aria-pressed={motionPaused}>{motionPaused ? <Play size={16}/> : <Pause size={16}/>}</button><button onClick={()=>window.print()} aria-label="Print or save page as PDF"><Printer size={16}/></button><button onClick={copy}>{status==='copied'?<Check size={16}/>:<Link2 size={16}/>}<span>{status==='copied'?'Copied':'Share'}</span></button><span className={styles.srOnly} role="status">{status==='copied'?'Page link copied.':status==='failed'?'Could not copy. Copy the address from your browser.':''}</span></div>;
}
export function CvMotion() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-cv-reveal]');
    const scenes = document.querySelectorAll<HTMLElement>('[data-motion-scene]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add(styles.revealed); revealObserver.unobserve(entry.target); }
    }), { threshold: .06 });
    const motionObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      entry.target.classList.toggle(styles.motionActive, entry.isIntersecting);
    }), { threshold: .1 });
    elements.forEach(element => { element.classList.add(styles.revealReady); revealObserver.observe(element); });
    scenes.forEach(scene => motionObserver.observe(scene));
    const page = document.querySelector<HTMLElement>('[data-motion-page]');
    const updateVisibility = () => { if (page) page.dataset.motionHidden = String(document.hidden); };
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      revealObserver.disconnect(); motionObserver.disconnect();
      elements.forEach(element => element.classList.remove(styles.revealReady));
      scenes.forEach(scene => scene.classList.remove(styles.motionActive));
      document.removeEventListener('visibilitychange', updateVisibility);
      if (page) delete page.dataset.motionHidden;
    };
  }, []);
  return null;
}
