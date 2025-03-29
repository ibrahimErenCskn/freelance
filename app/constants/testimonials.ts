export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: '/testimonial-1.jpg',
    content: 'Working with this developer was an absolute pleasure. They delivered our web application ahead of schedule and exceeded all our expectations. Their attention to detail and technical expertise are outstanding.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager, InnovateCorp',
    image: '/testimonial-2.jpg',
    content: 'I\'ve worked with many developers over the years, but none have been as reliable and skilled. They transformed our concept into a beautiful and functional mobile app that our users love. Highly recommended!',
  },
  {
    id: 3,
    name: 'Lisa Rodriguez',
    role: 'Marketing Director, BrandSmart',
    image: '/testimonial-3.jpg',
    content: 'Our company website needed a complete overhaul, and this developer delivered beyond our expectations. The site is now faster, more responsive, and has helped us increase conversions significantly.',
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Founder, AppLaunch',
    image: '/testimonial-4.jpg',
    content: 'From the initial consultation to the final delivery, the entire process was smooth and professional. They understood our vision perfectly and created an e-commerce platform that truly represents our brand.',
  },
  {
    id: 5,
    name: 'Emma Wilson',
    role: 'CTO, DataFlow',
    image: '/testimonial-5.jpg',
    content: 'We had a complex project with tight deadlines, and this developer rose to the challenge. Their technical skills, communication, and problem-solving abilities made them a valuable partner for our business.',
  },
]; 