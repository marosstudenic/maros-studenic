export type Project = {
  slug: string
  title: string
  client: string
  year: string
  role: string
  category: string
  summary: string
  description: string
  technologies: string[]
  image: string
  link?: string
  appStoreLink?: string
  androidLink?: string
  videoUrl?: string
  videoTitle?: string
  source: 'LinkedIn' | 'Portfolio'
  gallery?: string[]
  galleryTitle?: string
  galleryLayout?: 'portrait' | 'wide'
  caseStudy?: { title: string; description: string; link: string }
  facts?: { label: string; value: string }[]
  highlights?: string[]
}

export const projects: Project[] = [
  {
    slug: 'talsec-log-ingestion', title: 'App Security Portal', client: 'Talsec', year: '2024—now', role: 'DevOps + Fullstack Developer — portal & data platform', category: 'Security infrastructure',
    summary: 'The customer portal and the data platform behind Talsec’s mobile app security suite.',
    description: 'Talsec protects mobile apps against tampering, malware and reverse engineering. Responsible for the App Security Portal — where customers monitor threats detected in their apps — and the entire data platform behind it, processing more than 900M security events per month.',
    technologies: ['GCP', 'Terraform', 'Kubernetes', 'NestJS', 'TypeScript', 'ClickHouse', 'ElasticSearch', 'BigQuery'], image: '/projects/talsec.svg', link: 'https://www.talsec.app',
    facts: [{ label: 'Events processed', value: '900M+ / month' }, { label: 'Responsibility', value: 'Portal + data platform' }, { label: 'Protected platforms', value: 'iOS, Android, Flutter & more' }, { label: 'Products', value: 'RASP+, freeRASP, AppiCrypt' }],
    highlights: ['Talsec provides App Safety as a Service: runtime application self-protection (RASP+ and the open-source freeRASP), an App Hardening SDK, malware detection and AppiCrypt app-integrity verification.', 'The SDKs run inside customer apps on iOS, Android, Flutter, React Native and other platforms, streaming security signals from protected devices worldwide.', 'The App Security Portal is where customers monitor and manage the security of their apps — threat insights, malware findings and device intelligence.', 'Behind the portal sits a global ingestion pipeline on GCP that processes more than 900M security events per month, with ClickHouse, ElasticSearch and BigQuery powering search and analytics.'],
    source: 'LinkedIn'
  },
  {
    slug: 'weelet', title: 'Weelet', client: 'Weelet', year: '2024—now', role: 'Technical Co-Founder — architecture & delivery', category: 'Product development',
    summary: 'Ten times more fun on everyday trips through Czechia, with stories, tasks and logic puzzles built into the route.',
    description: 'Weelet is an interactive travel game for discovering Czechia through stories, maps and puzzles.',
    technologies: ['React Native', 'Next.js', 'ConvexDB', 'PWA', 'Mobile delivery'], image: '/projects/weelet-preview.png', gallery: ['/projects/weelet-app-1.jpg', '/projects/weelet-app-2.jpg', '/projects/weelet-app-3.jpg', '/projects/weelet-app-4.jpg', '/projects/weelet-app-5.jpg'], link: 'https://weelet.cz/landing', appStoreLink: 'https://apps.apple.com/cz/app/weelet-objevuj-%C4%8Desko-hrou/id6740415309?l=en', androidLink: 'https://play.google.com/store/apps/details?id=com.weelet.weelet', videoUrl: 'https://www.youtube.com/embed/lONXZlbaVEk?start=22', facts: [{ label: 'Users', value: '1,500+' }, { label: 'Journeys', value: '50 across Czechia' }, { label: 'Completed monthly', value: '100+ routes' }, { label: 'Team', value: 'About 5 people' }], highlights: [ 'Each journey runs through a city or place and includes around 10–15 tasks, stops, facts and riddles.',  'Players follow GPS through the route and discover places they might otherwise miss.',  'Creators publish journey information and GPS points from the platform, then test routes with tester accounts before release.', 'At least 100 journeys are finished every month.', 'The kid-friendly UX makes the experience approachable for families while keeping the puzzles engaging for adults.',   'The app and website share the same live journey data.',  'The PWA remains available because some users still rely on it, while the native mobile apps are the main product experience.'], source: 'LinkedIn'
  },
  {
    slug: 'riqmi', title: 'Riqmi', client: 'Riqmi', year: '2026—now', role: 'Technical Co-Founder — product & engineering', category: 'Content automation',
    summary: 'A content engine that turns research into organic growth and AI visibility.',
    description: 'Riqmi researches, writes and publishes SEO-ready articles for businesses that want to grow organic traffic and show up in AI answers. It analyses a website, finds keyword opportunities the business can realistically win, builds a monthly publishing calendar and ships one article a day — complete with images, metadata and internal links.',
    technologies: ['TanStack Start', 'ConvexDB', 'TypeScript', 'Agentic orchestration', 'Custom agents', 'MCP', 'SEO'], image: '/projects/riqmi.png', link: 'https://www.riqmi.com',
    gallery: ['/projects/riqmi-graph-impressions.png', '/projects/riqmi-graph-articles.png', '/projects/riqmi-ai-overview-1.png', '/projects/riqmi-ai-overview-2.png', '/projects/riqmi-ai-overview-3.png'],
    galleryTitle: 'Case study results', galleryLayout: 'wide',
    caseStudy: { title: 'BeCode × Riqmi', description: 'How BeCode increased Google Search impressions by 50% in 30 days — from 7 articles ever published to 30 in a single month, with several cited in Google AI Overviews.', link: 'https://www.riqmi.com/en/case-studies/becode' },
    facts: [{ label: 'Case study result', value: '+50% Google impressions in 30 days' }, { label: 'Publishing cadence', value: '1 article per day' }, { label: 'Setup time', value: 'About 30 minutes' }, { label: 'Integrations', value: 'WordPress, Wix, Webflow, Notion' }],
    highlights: ['Riqmi learns a business from its existing pages, products and terminology, so articles stay on-brand instead of generic.', 'Content is optimised for classic search and for AI answers — ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews.', 'Each month starts with keyword research mapped into a 30-day publishing calendar before any writing begins.', 'Publishing is fully automatic or gated behind a manual review step, depending on how much control the customer wants.', 'A Webhook API connects custom sites: the first case study plugged Riqmi into a custom Next.js website in about 30 minutes.', 'In that case study, BeCode went from 7 articles ever published to 30 in a single month — with +50% Google Search impressions, every article indexed and several cited in Google AI Overviews.'],
    source: 'Portfolio'
  },
  {
    slug: 'edison-crm', title: 'Edison CRM', client: 'BeCode', year: '2023—24', role: 'Project manager + Full-stack developer', category: 'Business software',
    summary: 'A custom CRM that made a renewable-energy sales operation easier to run.',
    description: 'A custom CRM for a company selling solar panels and wind turbines. The system automated manual processes and gave the team a smarter way to handle more clients.',
    technologies: ['React', 'Flask', 'Node.js', 'Firebase', 'Next.js', 'CI/CD'], image: '/projects/edison-electric.png', source: 'LinkedIn'
  },
  {
    slug: 'beehive-monitoring', title: 'Beehive Monitoring', client: 'Beehivemonitoring.com', year: '2023—now', role: 'C++ embedded developer', category: 'Connected hardware',
    summary: 'Connected hardware that helps beekeepers understand the hive without opening it.',
    description: 'New features for an existing beehive monitoring system, working close to the hardware with Silicon Labs chips, GSM modems and BLE communication.',
    technologies: ['C++', 'Bluetooth LE', 'GSM', 'Silicon Labs', 'Embedded systems'], image: '/projects/beehive.svg', gallery: ['/projects/beehive-app-1.jpg', '/projects/beehive-app-2.jpg', '/projects/beehive-app-3.jpg'], link: 'https://beehivemonitoring.com', source: 'LinkedIn'
  },
  {
    slug: 'festival-amplion', title: 'Festival Amplión', client: 'Festival Amplión', year: '2020—now', role: 'Frontend web developer', category: 'Cultural platform',
    summary: 'A fresh, maintainable digital home for a live cultural festival.',
    description: 'Keeping the festival website fresh and useful across seasons, with a focus on content, discoverability and an experience that reflects the energy of the event.',
    technologies: ['React', 'TypeScript', 'Tailwind'], image: '/projects/amplion.png', link: 'https://amplion.eu', source: 'LinkedIn'
  },
  {
    slug: 'draxard', title: 'Draxard', client: 'Pixwell', year: '2020—21', role: 'Backend developer', category: 'Social analytics',
    summary: 'Social connectors and analytics for a social management platform.',
    description: 'Integrated social media connectors and analytics into a platform for managing social channels, with backend work focused on reliable data flow and useful reporting.',
    technologies: ['Laravel', 'PHP', 'PostgreSQL', 'Redis', 'Docker'], image: '/projects/draxard.svg', source: 'LinkedIn'
  },
  {
    slug: 'nasdomov', title: 'Nasdomov.sk', client: 'Nasdomov.sk', year: '2022', role: 'Django web developer', category: 'Commerce catalogue',
    summary: 'A searchable home and furniture catalogue with a little magic underneath.',
    description: 'Created a product catalogue for home and furniture discovery, combining a playful front-end experience with a structured catalogue backend.',
    technologies: ['Django', 'Python', 'PostgreSQL'], image: '/projects/nasdomov.png', link: 'https://nasdomov.sk/katalog', source: 'LinkedIn'
  },
  {
    slug: '3un', title: '3UN Group', client: '3UN Group', year: '2020—21', role: 'React web developer', category: 'Digital studio',
    summary: 'A studio website that made new technology feel approachable.',
    description: 'Solved website problems and evolved the studio presence using React, Vue, Bootstrap and Laravel, balancing a strong visual identity with practical maintainability.',
    technologies: ['React', 'Vue', 'Bootstrap', 'Laravel'], image: '/projects/3un.png', link: 'https://3un.eu', source: 'LinkedIn'
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
