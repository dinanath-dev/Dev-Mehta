/* ============================================
 * Portfolio data — from Dev Mehta resume
 * ============================================ */

import type {
  HeroData,
  Project,
  Skill,
  Experience,
  AboutData,
  Education,
  Certificate,
} from '@/types';

export const heroData: HeroData = {
  name: 'Dev Mehta',
  role: 'Software Developer',
  tagline:
    'Building scalable cloud-native and AI-powered applications end to end.',
  typingStrings: [
    'React & TypeScript',
    'Python & Django',
    'AWS & Microservices',
    'LangChain & RAG',
    'Node.js & PostgreSQL',
    'LLM Integrations',
  ],
  resumeUrl: '/resume.docx',
};

export const aboutData: AboutData = {
  bio: [
    'Full Stack Developer with 1.3 years of experience designing and delivering scalable cloud-native and AI-powered applications at Oodles Technologies, Gurugram.',
    'Skilled in building production-ready systems end to end, optimizing performance and infrastructure costs, and deploying LLM-based solutions for real client products.',
    'Experienced in collaborating with clients and stakeholders to translate business requirements into effective technical solutions across multiple delivered projects.',
  ],
  stats: [
    { label: 'Experience', value: '1.3+ yrs' },
    { label: 'Company', value: 'Oodles' },
    { label: 'Projects', value: '3+' },
    { label: 'Location', value: 'Gurugram' },
  ],
};

export const projects: Project[] = [
  {
    id: 'miseit',
    title: 'MiseIT',
    description:
      'AI-powered knowledge base for restaurant SOPs, recipes, menus, policies, and training documents with RAG and semantic search.',
    longDescription:
      'Developed an AI-powered knowledge base for managing restaurant operations. Implemented RAG-based retrieval, semantic search with embeddings, and LLM assistants using Google Gemini. Built token usage tracking, cost controls, and multi-tenant backend APIs.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    techStack: [
      'Django',
      'DRF',
      'PostgreSQL',
      'Redis',
      'Celery',
      'Supabase',
      'Stripe',
      'Gemini',
      'RAG',
    ],
    githubUrl: '#',
    liveUrl: 'https://miseit.ai',
    featured: true,
    category: 'ai',
  },
  {
    id: 'id-verification',
    title: 'ID Verification Kiosk',
    description:
      'Backend-driven ID verification platform for hotel guest and visitor onboarding with AWS Rekognition, Textract, and face liveness.',
    longDescription:
      'Developed a kiosk platform using Next.js, Node.js, Supabase, and Docker. Integrated AWS Rekognition, Textract, S3, and Amplify Face Liveness for OCR, face comparison, and liveness checks. Built Cloudbeds and TTLock integrations for check-in automation and access codes.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    techStack: [
      'Next.js',
      'Node.js',
      'Supabase',
      'Docker',
      'AWS Rekognition',
      'Textract',
      'S3',
    ],
    githubUrl: '#',
    featured: true,
    category: 'fullstack',
  },
  {
    id: 'now-video',
    title: 'Now Video',
    description:
      'Video conferencing platform backend with instant/scheduled meetings, waiting rooms, calendar sync, and realtime features.',
    longDescription:
      'Built and maintained Node.js/Express APIs for meetings, scheduling, recurrence, and moderation. Integrated SignalWire, PSTN, Google Calendar, Outlook, Socket.IO, JWT/OAuth, 2FA, billing, chat, and admin modules with PostgreSQL and Sequelize.',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b39348527?w=800&q=80',
    techStack: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Sequelize',
      'Socket.IO',
      'JWT',
      'SignalWire',
    ],
    githubUrl: '#',
    featured: true,
    category: 'backend',
  },
];

export const experiences: Experience[] = [
  {
    id: 'oodles',
    company: 'Oodles Technologies',
    location: 'Gurugram, India',
    role: 'Software Developer',
    duration: 'Feb 2025 — Present',
    startDate: '2025-02',
    endDate: 'Present',
    description: [
      'Led end-to-end architecture and delivery of scalable production systems serving users, ensuring high performance and reliability.',
      'Built event-driven microservices using Python and AWS (Lambda, API Gateway, SQS), reducing infrastructure costs by 25% and improving system resilience.',
      'Optimized performance through Redis caching, query tuning, and containerized deployments — response time under 200ms and deployment time reduced by 40%.',
      'Delivered AI-powered products including RAG workflows, LLM integrations, and document intelligence features for client-facing platforms.',
      'Collaborated with clients and stakeholders to translate business requirements into production-ready technical solutions.',
    ],
    techStack: [
      'Python',
      'Django',
      'React',
      'AWS',
      'PostgreSQL',
      'Redis',
      'Docker',
      'LangChain',
    ],
    logo: 'https://ui-avatars.com/api/?name=OT&background=0d9488&color=fff',
  },
];

export const education: Education[] = [
  {
    id: 'mca',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'GD Goenka University, Gurugram',
    duration: '2023 — 2025',
    description: 'Postgraduate program in computer applications.',
  },
  {
    id: 'bsc',
    degree: 'Bachelor of Science in Computer Science',
    institution:
      'Guru Jambheshwar University of Science & Technology, Hisar',
    duration: '2019 — 2022',
    description: 'Undergraduate degree in computer science.',
  },
];

export const skills: Skill[] = [
  { name: 'React', percentage: 90, icon: 'Code2', category: 'frontend' },
  { name: 'TypeScript', percentage: 88, icon: 'FileCode2', category: 'languages' },
  { name: 'JavaScript', percentage: 90, icon: 'Globe', category: 'languages' },
  { name: 'Python', percentage: 92, icon: 'Terminal', category: 'languages' },
  { name: 'Django', percentage: 90, icon: 'Server', category: 'backend' },
  { name: 'FastAPI', percentage: 85, icon: 'Server', category: 'backend' },
  { name: 'Node.js', percentage: 88, icon: 'Cpu', category: 'backend' },
  { name: 'PostgreSQL', percentage: 87, icon: 'Database', category: 'database' },
  { name: 'MongoDB', percentage: 82, icon: 'Database', category: 'database' },
  { name: 'Redis', percentage: 85, icon: 'Zap', category: 'database' },
  { name: 'AWS', percentage: 85, icon: 'Cloud', category: 'devops' },
  { name: 'Docker', percentage: 83, icon: 'Container', category: 'devops' },
  { name: 'LangChain', percentage: 80, icon: 'Share2', category: 'backend' },
  { name: 'OpenAI', percentage: 78, icon: 'Zap', category: 'tools' },
  { name: 'Git', percentage: 90, icon: 'GitBranch', category: 'tools' },
];

/** Kept for legacy pages / API stubs */
export const githubStats = {
  repos: 0,
  stars: 0,
  contributions: 0,
  followers: 0,
};

export const certificates: Certificate[] = [
  {
    id: 'adca',
    title: 'Advance Diploma in Computer Application',
    issuer: 'NILETS',
  },
  {
    id: 'ccc',
    title: 'CCC Certificate',
    issuer: 'NILETS',
  },
  {
    id: 'olevel',
    title: "NILETS O' Level Certification",
    issuer: 'NILETS',
  },
];
