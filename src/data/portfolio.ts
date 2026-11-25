// Single source of content for the portfolio.
// Edit text here; components only render what is in this file.
//
// Every value that still needs input is marked with a TODO comment.
// Search the project for "TODO" to find them all (also listed in README.md).

export type Placeholder = { placeholder: string };

export const site = {
  name: 'Swastik Dolas',
  // TODO: headline is from the earlier draft; confirm against the options in your sheet.
  headline: 'Full Stack Developer | AI & GenAI Engineer',
  // Taken from the first sentence of the Profile intro.
  pitch:
    "I'm a Software Engineer with 4+ years of experience building scalable web and mobile applications.",
  location: 'Madhya Pradesh, India',
  // Shown in the browser tab, search results and social previews.
  seo: {
    title: 'Swastik Dolas | Full Stack Developer & AI & GenAI Engineer',
    description:
      'Swastik Dolas: Software Engineer with 4+ years of experience building scalable web and mobile applications with React, React Native and Node.js.',
    // Custom domain from the repo's CNAME. Also served at https://sd-git-04.github.io/ once Pages is enabled.
    url: 'https://swastikdolas.me/',
  },
};

export const about = {
  // Profile intro, already trimmed to three sentences in the sheet.
  paragraphs: [
    "I'm a Software Engineer with 4+ years of experience building scalable web and mobile applications. I specialize in full-stack development, with expertise in React.js, React Native, Node.js, and modern JavaScript technologies. I'm actively exploring AI, GenAI, LLMs, AI Agents, and DevOps.",
  ],
};

export type SkillTier = {
  label: string;
  items: string[];
  // Items in this tier are still being learned.
  learning?: boolean;
  // TODO: confirm Jenkins and Kubernetes were used in practice; remove them if not (sheet note).
  todo?: string;
};

export const skills: SkillTier[] = [
  { label: 'Frontend', items: ['React.js', 'JavaScript', 'HTML5', 'CSS3'] },
  { label: 'Mobile', items: ['React Native'] },
  { label: 'Backend', items: ['Node.js', 'REST APIs', 'Python (Flask)'] },
  { label: 'Database', items: ['Oracle'] },
  {
    label: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Jenkins', 'Kubernetes'],
    todo: 'Confirm Jenkins and Kubernetes were used in practice; remove them if not.',
  },
  { label: 'Tools', items: ['Git', 'GitHub', 'Postman'] },
  // Kept in the learning tier until there are projects to back it up.
  {
    label: 'Learning',
    items: ['LLMs', 'RAG', 'Generative AI', 'AI Agents'],
    learning: true,
  },
];

export type Job = {
  role: string;
  company: string;
  // Only the duration from the sheet; no exact dates were given.
  period: string;
  summary: string;
  highlights: string[];
  results: string | Placeholder;
};

export const experience: Job[] = [
  {
    role: 'Software Engineer',
    company: 'Ksolves India Ltd.',
    period: '4+ years',
    summary:
      'Enterprise web and mobile applications for banking-domain and campaign management systems.',
    highlights: [
      'Built enterprise web and mobile apps with React.js and React Native.',
      'Developed Node.js REST APIs.',
      'Worked on cloud deployment workflows.',
    ],
    // TODO: add measurable results for this role (no metrics were provided in the sheet).
    results: { placeholder: 'Results and metrics to add.' },
  },
];

export type Project = {
  title: string;
  description: string;
  // 'Work project' | 'Concept' | a short tag
  tags: string[];
  // Set true for work projects that must not expose internals.
  workProject?: boolean;
  // TODO: add a link (demo or repo) once one can be shared.
  link?: string;
};

// Projects shown on the site.
export const projects: Project[] = [
  {
    title: 'IDFC Bank app',
    description:
      'Enterprise banking application for campaign management across SMS, WhatsApp, Email, Salesforce, App and Web Banner, with dynamic JSON configuration.',
    tags: ['Work project'],
    workProject: true,
    // TODO: check your employer's policy on naming the client and the product before publishing.
  },
  {
    title: 'Alfred AI chatbot',
    description:
      'AI-powered conversational assistant with potential for enterprise workflow integration.',
    tags: ['Concept'],
  },
  {
    title: 'AI workflow automation',
    description:
      'Identifies form fields with AI, auto-populates data, asks follow-up questions for missing information, and reduces manual configuration.',
    tags: ['Concept'],
  },
];

// On hold: list only once deployed or the repo is public. Keep commented out until then.
// export const heldProjects: Project[] = [
//   {
//     title: 'Dependency exit-cost analyzer',
//     description: 'Dependency exit-cost analyzer.',
//     tags: ['Hold'],
//   },
//   {
//     title: 'System design prep tracker',
//     description: 'System design prep tracker. Local app for now.',
//     tags: ['Hold'],
//   },
// ];

export type LearningItem = {
  title: string;
  topics: string[];
  status: 'In progress';
};

// Learning is shown as in progress, never as certifications.
// CCDV-F is preparation, not earned, so it is intentionally not listed.
export const learning: LearningItem[] = [
  {
    title: 'AI and GenAI',
    topics: ['Claude API and MCP', 'Claude Code', 'Python and AI/ML', 'RAG'],
    status: 'In progress',
  },
  {
    title: 'Cloud and DevOps',
    topics: ['AWS', 'Docker', 'Jenkins', 'Kubernetes'],
    status: 'In progress',
  },
];

export type Degree = {
  degree: string;
  institution: string;
  location: string;
  cgpa: string;
};

// CGPA is optional. Set showCgpa to true to display it.
// TODO: decide whether to show CGPA (sheet note: include only if you want it shown).
export const showCgpa = false;

export const education: Degree[] = [
  {
    degree: 'MCA',
    institution: 'Bansal Institute',
    location: 'Bhopal',
    cgpa: '8.24',
  },
  {
    degree: 'BCA',
    institution: 'MCNUJC',
    location: 'Bhopal',
    cgpa: '7.98',
  },
];

export const contact = {
  // TODO: add your professional email. Empty string shows a placeholder on the site.
  email: '',
  github: 'https://github.com/swastik-git',
  linkedin: 'https://www.linkedin.com/in/swastikdolas/',
  // TODO: add resume.pdf to public/ and set resumeAvailable to true.
  resumePath: '/resume.pdf',
  resumeAvailable: false,
};

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'learning', label: 'Learning' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];
