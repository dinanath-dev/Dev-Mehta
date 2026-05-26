/* ============================================
 * Tech logos for floating background
 * Stable CDN paths (no @latest — avoids load failures)
 * ============================================ */

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const SIMPLE = (slug: string, color?: string) =>
  color
    ? `https://cdn.simpleicons.org/${slug}/${color}`
    : `https://cdn.simpleicons.org/${slug}`;

export interface TechIconDef {
  name: string;
  src: string;
  category: 'frontend' | 'backend' | 'database' | 'cloud' | 'ai' | 'devops';
}

export const floatingTechIcons: TechIconDef[] = [
  /* Frontend */
  { name: 'React', src: `${DEVICON}/react/react-original.svg`, category: 'frontend' },
  { name: 'Next.js', src: `${DEVICON}/nextjs/nextjs-original.svg`, category: 'frontend' },
  { name: 'TypeScript', src: `${DEVICON}/typescript/typescript-original.svg`, category: 'frontend' },
  { name: 'JavaScript', src: `${DEVICON}/javascript/javascript-original.svg`, category: 'frontend' },
  { name: 'HTML5', src: `${DEVICON}/html5/html5-original.svg`, category: 'frontend' },
  { name: 'CSS3', src: `${DEVICON}/css3/css3-original.svg`, category: 'frontend' },
  { name: 'Tailwind', src: `${DEVICON}/tailwindcss/tailwindcss-plain.svg`, category: 'frontend' },
  { name: 'Vue', src: `${DEVICON}/vuejs/vuejs-original.svg`, category: 'frontend' },
  { name: 'Vite', src: `${DEVICON}/vitejs/vitejs-original.svg`, category: 'frontend' },
  { name: 'Sass', src: `${DEVICON}/sass/sass-original.svg`, category: 'frontend' },
  { name: 'Redux', src: `${DEVICON}/redux/redux-original.svg`, category: 'frontend' },
  { name: 'Bootstrap', src: `${DEVICON}/bootstrap/bootstrap-original.svg`, category: 'frontend' },

  /* Backend */
  { name: 'Python', src: `${DEVICON}/python/python-original.svg`, category: 'backend' },
  { name: 'Django', src: `${DEVICON}/django/django-plain.svg`, category: 'backend' },
  { name: 'Node.js', src: `${DEVICON}/nodejs/nodejs-original.svg`, category: 'backend' },
  { name: 'Express', src: `${DEVICON}/express/express-original.svg`, category: 'backend' },
  { name: 'FastAPI', src: SIMPLE('fastapi', '009688'), category: 'backend' },
  { name: 'Flask', src: `${DEVICON}/flask/flask-original.svg`, category: 'backend' },
  { name: 'GraphQL', src: `${DEVICON}/graphql/graphql-plain.svg`, category: 'backend' },

  /* Database */
  { name: 'PostgreSQL', src: `${DEVICON}/postgresql/postgresql-original.svg`, category: 'database' },
  { name: 'MongoDB', src: `${DEVICON}/mongodb/mongodb-original.svg`, category: 'database' },
  { name: 'Redis', src: `${DEVICON}/redis/redis-original.svg`, category: 'database' },
  { name: 'Supabase', src: SIMPLE('supabase', '3FCF8E'), category: 'database' },
  { name: 'MySQL', src: `${DEVICON}/mysql/mysql-original.svg`, category: 'database' },

  /* Cloud */
  { name: 'AWS', src: SIMPLE('amazonaws', 'FF9900'), category: 'cloud' },
  { name: 'Azure', src: `${DEVICON}/azure/azure-original.svg`, category: 'cloud' },
  { name: 'GCP', src: `${DEVICON}/googlecloud/googlecloud-original.svg`, category: 'cloud' },
  { name: 'Firebase', src: `${DEVICON}/firebase/firebase-plain.svg`, category: 'cloud' },

  /* AI / ML */
  { name: 'TensorFlow', src: `${DEVICON}/tensorflow/tensorflow-original.svg`, category: 'ai' },
  { name: 'PyTorch', src: `${DEVICON}/pytorch/pytorch-original.svg`, category: 'ai' },
  { name: 'OpenAI', src: SIMPLE('openai', '412991'), category: 'ai' },
  { name: 'Hugging Face', src: SIMPLE('huggingface', 'FFD21E'), category: 'ai' },
  { name: 'Pandas', src: `${DEVICON}/pandas/pandas-original.svg`, category: 'ai' },

  /* DevOps */
  { name: 'Docker', src: `${DEVICON}/docker/docker-original.svg`, category: 'devops' },
  { name: 'Kubernetes', src: `${DEVICON}/kubernetes/kubernetes-plain.svg`, category: 'devops' },
  { name: 'Linux', src: `${DEVICON}/linux/linux-original.svg`, category: 'devops' },
  { name: 'Git', src: `${DEVICON}/git/git-original.svg`, category: 'devops' },
  { name: 'Nginx', src: `${DEVICON}/nginx/nginx-original.svg`, category: 'devops' },
  { name: 'Kafka', src: `${DEVICON}/apachekafka/apachekafka-original.svg`, category: 'devops' },
];

/** Preload one icon; returns index + image or null */
export function loadTechIcon(index: number): Promise<{
  index: number;
  image: HTMLImageElement;
} | null> {
  const icon = floatingTechIcons[index];
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve({ index, image: img });
    img.onerror = () => resolve(null);
    img.src = icon.src;
  });
}

/** Preload all icons in parallel */
export async function preloadAllTechIcons(): Promise<
  Map<number, HTMLImageElement>
> {
  const results = await Promise.all(
    floatingTechIcons.map((_, i) => loadTechIcon(i)),
  );
  const map = new Map<number, HTMLImageElement>();
  results.forEach((r) => {
    if (r) map.set(r.index, r.image);
  });
  return map;
}

/** Build shuffled pool cycling every category for max variety */
export function buildIconPool(loaded: Map<number, HTMLImageElement>): number[] {
  const indices = [...loaded.keys()];
  if (indices.length === 0) return [0];

  const byCategory = (cat: TechIconDef['category']) =>
    indices.filter((i) => floatingTechIcons[i].category === cat);

  const categories: TechIconDef['category'][] = [
    'frontend',
    'backend',
    'database',
    'cloud',
    'ai',
    'devops',
  ];

  const pool: number[] = [];
  let added = true;
  while (added) {
    added = false;
    for (const cat of categories) {
      const group = byCategory(cat);
      if (group.length > 0) {
        pool.push(group[Math.floor(Math.random() * group.length)]);
        added = true;
      }
    }
  }

  /* Shuffle */
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.length > 0 ? pool : indices;
}

export function getParticleCount(width: number, height: number): number {
  const area = width * height;
  if (area < 500_000) return 32;
  if (area < 900_000) return 40;
  if (area < 1_500_000) return 48;
  return 56;
}
