export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
}

export const projectsData = {
  title: 'My Projects',
  subtitle: 'A showcase of my recent work across different platforms and industries.',
  imageAlt: 'Project Image'
};

export const projectCategories = ['All', 'Web', 'Mobile', 'E-commerce', 'UI/UX'];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product management, payment processing, and user authentication.',
    category: 'E-commerce',
    image: '/project-1.jpg',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    description: 'Mobile application for tracking workouts, nutrition, and fitness progress with analytics.',
    category: 'Mobile',
    image: '/project-2.jpg',
    tags: ['React Native', 'Firebase', 'Redux'],
  },
  {
    id: 3,
    title: 'Corporate Website',
    description: 'Modern responsive website for a technology company with animated sections and contact form.',
    category: 'Web',
    image: '/project-3.jpg',
    tags: ['React', 'GSAP', 'Styled Components'],
  },
  {
    id: 4,
    title: 'Food Delivery Service',
    description: 'Platform connecting restaurants with customers for online food ordering and delivery tracking.',
    category: 'E-commerce',
    image: '/project-4.jpg',
    tags: ['Next.js', 'MongoDB', 'Mapbox'],
  },
  {
    id: 5,
    title: 'Task Management Dashboard',
    description: 'Interactive dashboard for team task management with real-time updates and progress tracking.',
    category: 'Web',
    image: '/project-5.jpg',
    tags: ['React', 'Socket.io', 'Chart.js'],
  },
  {
    id: 6,
    title: 'Travel Companion App',
    description: 'Mobile app for travelers to discover attractions, create itineraries, and share experiences.',
    category: 'Mobile',
    image: '/project-6.jpg',
    tags: ['React Native', 'GraphQL', 'AWS'],
  },
]; 