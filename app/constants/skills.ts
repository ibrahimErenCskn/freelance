export interface Skill {
  name: string;
  level: number;
}

export const skillsData = {
  title: 'My Skills'
};

export const experienceData = {
  title: 'Experience'
};

export const skills: Skill[] = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'React Native', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Redux', level: 80 },
];

export const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Company',
    period: '2020 - Present',
    current: true,
  },
  {
    title: 'Mobile App Developer',
    company: 'App Agency',
    period: '2018 - 2020',
    current: false,
  },
  {
    title: 'Web Developer',
    company: 'Digital Studio',
    period: '2016 - 2018',
    current: false,
  }
]; 