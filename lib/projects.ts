import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    slug: 'icsum',
    title: 'iCSUM',
    description: 'A full-stack music review platform with user-to-user interactions',
    longDescription: 'Built a full-stack music review platform with secure user authentication, album and artist management, user reviews, ratings, and playlist support. Features include an admin dashboard for content moderation, genre and metadata management, AI-powered review summaries, personalized recommendations, community interactions, and a fully responsive, modern UI.',
    techStack: ['React.js', 'JavaScript', 'TailwindCSS', 'MongoDB', 'Express.js'],
    image: '/projects/icsum.png',
    links: {
      github: 'https://github.com/Remohavva/iCSUM',
    },
    featured: true
  },
  {
    slug: 'ecommerce-platform',
    title: 'Engg. Buddy',
    description: 'A Data Science Based Chatbot Harnessing Supervised Learning and Natural Language Processing for finding most viable college for Students on basis of their JEE/Entrance Rank',
    longDescription: 'This project presents a Data Science–driven intelligent chatbot designed to assist students in identifying the most suitable and viable colleges based on their JEE or other entrance examination ranks. By combining supervised machine learning techniques with advanced Natural Language Processing (NLP), the system delivers accurate, personalized, and conversational guidance for higher-education decision-making..',
    techStack: [ 'NLP', 'sklearn', 'matplotlib','seaborn','python','Streamlit'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    links: {
      github: 'https://github.com/Remohavva/IIT-Seat-Allocation-Analysis',

    },
    featured: false
  },
  {
    slug: 'task-manager',
    title: 'Pillion',
    description: 'Work in Progress',
    longDescription: 'A real-time task management application with drag-and-drop functionality, team collaboration features, and notifications. Built with modern React patterns and real-time synchronization.',
    techStack: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    links: {
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://task-manager-demo.vercel.app'
    },
    featured: true
  },
  {
    slug: 'social-media-dashboard',
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management',
    longDescription: 'A comprehensive social media analytics dashboard that aggregates data from multiple platforms. Features include real-time metrics, content scheduling, engagement tracking, and detailed reporting with interactive charts and graphs.',
    techStack: ['React', 'TypeScript', 'Chart.js', 'Express', 'Redis'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    links: {
      github: 'https://github.com/yourusername/social-dashboard',
      live: 'https://social-dashboard-demo.vercel.app'
    },
    featured: false
  },
  {
    slug: 'weather-forecast-app',
    title: 'Weather Forecast App',
    description: 'Modern weather app with location-based forecasts',
    longDescription: 'A beautiful and intuitive weather application that provides accurate forecasts, weather maps, and severe weather alerts. Features include geolocation support, 7-day forecasts, hourly predictions, and stunning weather animations.',
    techStack: ['Vue.js', 'TypeScript', 'OpenWeather API', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    links: {
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://weather-forecast-demo.vercel.app'
    },
    featured: false
  }
];

export function getProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(p => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
