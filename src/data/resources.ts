/**
 * ARC-01 — The Lantern Archive
 * Maintained by CSI VIT Chennai Technical Team
 */
export const topics = ['All', 'Git', 'Web', 'Debugging', 'Accessibility', 'Safety'] as const

export type Topic = Exclude<(typeof topics)[number], 'All'>

export type Resource = {
  slug: string
  title: string
  topic: Topic
  summary: string
  description: string
  duration: string
  level: 'Starter'
  file: string
  archiveMark: string
  checksum: string
}

export const resources: Resource[] = [
  {
    slug: 'git-first-steps',
    title: 'Git First Steps',
    topic: 'Git',
    summary: 'A short journey from an empty folder to a useful, reviewable commit.',
    description: 'Learn the purpose of a repository, inspect changes, stage deliberately, and write a commit that another person can understand.',
    duration: '18 minutes',
    level: 'Starter',
    file: '/resources/git-first-steps.txt',
    archiveMark: 'ARC-GIT-001',
    checksum: '7f3a-11c2',
  },
  {
    slug: 'web-foundations',
    title: 'Web Foundations Field Notes',
    topic: 'Web',
    summary: 'A plain-language map of HTML, CSS, JavaScript, and the browser.',
    description: 'Understand which part of a small website owns structure, presentation, and behaviour before reaching for a framework.',
    duration: '24 minutes',
    level: 'Starter',
    file: '/resources/web-foundations.txt',
    archiveMark: 'ARC-WEB-002',
    checksum: '94b0-2d18',
  },
  {
    slug: 'debugging-compass',
    title: 'The Debugging Compass',
    topic: 'Debugging',
    summary: 'A repeatable path from a vague symptom to a tested explanation.',
    description: 'Use observation, reduction, hypotheses, and controlled checks to debug without changing several things at once.',
    duration: '20 minutes',
    level: 'Starter',
    file: '/resources/debugging-compass.txt',
    archiveMark: 'ARC-DBG-003',
    checksum: '61de-004b',
  },
  {
    slug: 'accessible-interfaces',
    title: 'Interfaces for More People',
    topic: 'Accessibility',
    summary: 'Practical checks for labels, focus, keyboard use, contrast, and language.',
    description: 'Review a small interface from the perspective of visitors who navigate, perceive, or understand it differently.',
    duration: '16 minutes',
    level: 'Starter',
    file: '/resources/accessible-interfaces.txt',
    archiveMark: 'ARC-ACC-004',
    checksum: 'a11y-0005',
  },
  {
    slug: 'safer-inputs',
    title: 'Safer Inputs, Calmer Systems',
    topic: 'Safety',
    summary: 'A beginner guide to validating unexpected values and protecting secrets.',
    description: 'Treat input as untrusted, validate it for the real use case, produce useful errors, and keep secrets out of client code.',
    duration: '22 minutes',
    level: 'Starter',
    file: '/resources/safer-inputs.txt',
    archiveMark: 'ARC-SAFE-005',
    checksum: '2ce4-881a',
  },
]

export function findResource(slug: string | undefined) {
  return resources.find((resource) => resource.slug === slug)
}
