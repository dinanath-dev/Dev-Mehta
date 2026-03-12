/* ============================================
 * Mock data — will be replaced by Django API
 * ============================================ */

import type {
  HeroData,
  Project,
  Skill,
  Experience,
  AboutData,
  GitHubStats,
} from '@/types';

export const heroData: HeroData = {
  name: 'Dev Mehta',
  role: 'Full Stack Developer',
  tagline: 'Crafting digital experiences that matter.',
  typingStrings: [
    'React & Next.js',
    'Django & Python',
    'TypeScript',
    'Cloud Architecture',
    'System Design',
    'REST & GraphQL APIs',
  ],
  resumeUrl: '/resume.pdf',
};

export const aboutData: AboutData = {
  bio: [
    'I am a passionate Full Stack Developer with 4+ years of experience building scalable web applications. I specialize in React, Django, and cloud-native architectures.',
    'My approach combines clean code principles with modern design patterns to deliver performant, accessible, and maintainable solutions.',
    'When I am not coding, you will find me contributing to open source, writing technical articles, or exploring new technologies.',
  ],
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Technologies', value: '30+' },
    { label: 'Open Source Contributions', value: '100+' },
  ],
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
    longDescription:
      'A comprehensive e-commerce solution built with React, Django REST Framework, PostgreSQL, and Stripe integration. Features include real-time inventory management, order tracking, and an analytics dashboard.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    techStack: ['React', 'Django', 'PostgreSQL', 'Redis', 'Stripe', 'Docker'],
    githubUrl: 'https://github.com/devmehta/ecommerce',
    liveUrl: 'https://shop.devmehta.dev',
    featured: true,
    category: 'fullstack',
  },
  {
    id: '2',
    title: 'AI Content Generator',
    description:
      'AI-powered content generation tool with GPT integration and custom fine-tuning pipeline.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    techStack: ['Next.js', 'Python', 'FastAPI', 'OpenAI', 'Tailwind CSS'],
    githubUrl: 'https://github.com/devmehta/ai-content',
    liveUrl: 'https://ai.devmehta.dev',
    featured: true,
    category: 'ai',
  },
  {
    id: '3',
    title: 'Real-Time Chat Application',
    description:
      'WebSocket-powered chat app with end-to-end encryption, file sharing, and video calls.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'WebRTC'],
    githubUrl: 'https://github.com/devmehta/chat-app',
    featured: true,
    category: 'fullstack',
  },
  {
    id: '4',
    title: 'DevOps Dashboard',
    description:
      'Monitoring dashboard for microservices with real-time metrics, alerts, and deployment tracking.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    techStack: ['React', 'Go', 'Grafana', 'Prometheus', 'Kubernetes'],
    githubUrl: 'https://github.com/devmehta/devops-dash',
    liveUrl: 'https://dash.devmehta.dev',
    featured: false,
    category: 'devops',
  },
  {
    id: '5',
    title: 'Task Management API',
    description:
      'RESTful API for task management with role-based access, scheduling, and notification system.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    techStack: ['Django', 'DRF', 'Celery', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/devmehta/task-api',
    featured: false,
    category: 'backend',
  },
  {
    id: '6',
    title: 'Portfolio Website',
    description:
      'Modern portfolio with glassmorphism design, animations, and Django CMS backend.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    techStack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Django'],
    githubUrl: 'https://github.com/devmehta/portfolio',
    liveUrl: 'https://devmehta.dev',
    featured: false,
    category: 'frontend',
  },
];

export const skills: Skill[] = [
  { name: 'React', percentage: 95, icon: 'Code2', category: 'frontend' },
  { name: 'TypeScript', percentage: 90, icon: 'FileCode2', category: 'languages' },
  { name: 'Next.js', percentage: 88, icon: 'Globe', category: 'frontend' },
  { name: 'Tailwind CSS', percentage: 92, icon: 'Palette', category: 'frontend' },
  { name: 'Python', percentage: 93, icon: 'Terminal', category: 'languages' },
  { name: 'Django', percentage: 90, icon: 'Server', category: 'backend' },
  { name: 'Node.js', percentage: 85, icon: 'Cpu', category: 'backend' },
  { name: 'PostgreSQL', percentage: 87, icon: 'Database', category: 'database' },
  { name: 'MongoDB', percentage: 80, icon: 'Database', category: 'database' },
  { name: 'Redis', percentage: 78, icon: 'Zap', category: 'database' },
  { name: 'Docker', percentage: 85, icon: 'Container', category: 'devops' },
  { name: 'AWS', percentage: 80, icon: 'Cloud', category: 'devops' },
  { name: 'Git', percentage: 92, icon: 'GitBranch', category: 'tools' },
  { name: 'Linux', percentage: 85, icon: 'Terminal', category: 'tools' },
  { name: 'GraphQL', percentage: 75, icon: 'Share2', category: 'backend' },
  { name: 'Kubernetes', percentage: 70, icon: 'Network', category: 'devops' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp Inc.',
    role: 'Senior Full Stack Developer',
    duration: 'Jan 2024 — Present',
    startDate: '2024-01',
    endDate: 'Present',
    description: [
      'Led a team of 5 developers building a SaaS platform serving 100K+ users',
      'Architected microservices backend reducing response times by 40%',
      'Implemented CI/CD pipelines cutting deployment time from hours to minutes',
      'Mentored junior developers through code reviews and pair programming',
    ],
    techStack: ['React', 'Django', 'PostgreSQL', 'AWS', 'Docker'],
    logo: 'https://ui-avatars.com/api/?name=TC&background=6366f1&color=fff',
  },
  {
    id: '2',
    company: 'StartupXYZ',
    role: 'Full Stack Developer',
    duration: 'Jun 2022 — Dec 2023',
    startDate: '2022-06',
    endDate: '2023-12',
    description: [
      'Built and maintained React-based web apps with 99.9% uptime',
      'Developed RESTful APIs with Django REST Framework handling 10K+ requests/day',
      'Optimized database queries reducing load times by 60%',
      'Integrated third-party services including Stripe, SendGrid, and Twilio',
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Redis', 'GCP'],
    logo: 'https://ui-avatars.com/api/?name=SX&background=6366f1&color=fff',
  },
  {
    id: '3',
    company: 'Freelance',
    role: 'Frontend Developer',
    duration: 'Jan 2021 — May 2022',
    startDate: '2021-01',
    endDate: '2022-05',
    description: [
      'Delivered 20+ client projects across various industries',
      'Built responsive, accessible UIs with React and Tailwind CSS',
      'Implemented complex animations and interactions with Framer Motion',
      'Maintained long-term client relationships with 100% satisfaction rate',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    logo: 'https://ui-avatars.com/api/?name=FL&background=6366f1&color=fff',
  },
];

export const githubStats: GitHubStats = {
  repos: 45,
  stars: 320,
  contributions: 1247,
  followers: 180,
};
