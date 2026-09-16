import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, website } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Roberto González Jiménez',
  role: 'Full Stack Developer',
  details: [
    { label: 'Email', value: 'rgonzalezjz0@gmail.com', url: 'mailto:rgonzalezjz0@gmail.com' },
    { label: 'From', value: 'Torrelavega, Cantabria, Spain' },
  ],
  pdfDetails: [
    { label: 'Email', value: 'rgonzalezjz0@gmail.com', url: 'mailto:rgonzalezjz0@gmail.com', fullRow: true },
    { label: 'LinkedIn', value: 'LinkedIn Profile', url: 'https://linkedin.com/in/robergj' },
    { label: 'GitHub', value: 'GitHub Profile', url: 'https://github.com/robergj' },
    { label: 'Website', value: 'Personal Website', url: 'https://robergj.netlify.app' },
  ],
  description:
    'Specializing in modern full-stack development with 5 years of experience designing and implementing robust, scalable web applications. Expert in C# and .NET for backend development, combined with TypeScript and Angular for sophisticated frontend interfaces. Skilled in building high-performance applications using Node.js, Java, and Spring MVC for diverse backend requirements.\n\nProficient with containerization and orchestration technologies including Docker and Kubernetes. Expert in database design and optimization with Oracle and PostgreSQL. Experienced in version control with Git and automated deployment pipelines using Jenkins and Maven. Strong command of IntelliJ IDEA and committed to Agile methodologies for continuous, efficient software delivery.\n\nPassionate about clean architecture, performance optimization, and solving complex technical challenges. Continuously evolving my skills to stay at the forefront of web development technologies. Eager to collaborate on innovative projects and contribute to mission-critical applications. 🚀',
  tags: [
    { name: 'Looking for new opportunities' },
    { name: 'Interested in startups' },
    { name: 'Currently upskilling' },
  ],
  action: {
    label: 'Download CV',
    url: '/EnglishCv_RobertoGonzalez.pdf',
    downloadedFileName: 'CV-Roberto_Gonzalez.pdf',
  },
  links: [
    website({ url: 'https://robergj.netlify.app' }),
    github({ url: 'https://github.com/robergj' }),
    linkedin({ url: 'https://www.linkedin.com/in/robergj' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
