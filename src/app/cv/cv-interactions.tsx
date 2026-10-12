'use client';
import { useEffect, useState } from 'react';
import { Check, Link2, Printer } from 'lucide-react';
import styles from './cv.module.css';

export function CvActions() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  useEffect(() => {
    if (status === 'idle') return;
    const timeout = setTimeout(() => setStatus('idle'), 3500);
    return () => clearTimeout(timeout);
  }, [status]);
  async function copy() {
    try { await navigator.clipboard.writeText(window.location.origin + window.location.pathname); setStatus('copied'); }
    catch { setStatus('failed'); }
  }
  return <div className={styles.actions}><button onClick={() => window.print()} aria-label="Print or save CV as PDF"><Printer size={16} /><span>Save PDF</span></button><button onClick={copy}><span aria-hidden="true">{status === 'copied' ? <Check size={16} /> : <Link2 size={16} />}</span><span>{status === 'copied' ? 'Copied' : 'Copy link'}</span></button><span className={styles.srOnly} role="status">{status === 'copied' ? 'CV link copied to clipboard.' : status === 'failed' ? 'Could not copy the link. Copy the address from your browser.' : ''}</span></div>;
}

export function CvMotion() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-cv-reveal]');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add(styles.revealed); observer.unobserve(entry.target); } });
    }, { threshold: 0.08 });
    elements.forEach(element => { element.classList.add(styles.revealReady); observer.observe(element); });
    return () => { observer.disconnect(); elements.forEach(element => element.classList.remove(styles.revealReady)); };
  }, []);
  return null;
}
