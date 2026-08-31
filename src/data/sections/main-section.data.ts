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
    'Full Stack Developer with 4 years of experience in designing and implementing robust and scalable web applications. Skilled in Java, Java EE, C#, Spring MVC, Struts, and Node.js for backend development, and Angular, jQuery, JavaScript, and TypeScript for frontend development.\n\n Experienced with Kubernetes and Docker for application orchestration and containerization. Expert in Oracle databases (SQL Developer) and PostgreSQL. Skilled in version control with Git and automated deployments using Jenkins and Maven. Familiar with IntelliJ IDEA as a development environment and Agile methodologies for efficient and continuous software delivery. \n\n Passionate about code optimization, application performance, and solving complex problems. Always eager to take on new challenges and grow in the world of web development. 🚀',
  tags: [
    { name: 'Looking for new opportunities' },
    { name: 'Interested in startups' },
    { name: 'Currently upskilling' },
  ],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Roberto_Gonzalez.pdf',
  },
  links: [
    website({ url: 'https://robergj.netlify.app' }),
    github({ url: 'https://github.com/robergj' }),
    linkedin({ url: 'https://www.linkedin.com/in/robergj' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
