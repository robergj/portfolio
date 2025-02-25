import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

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
    { label: 'Email', value: 'rgonzalezjz0@gmail.com' },
    { label: 'LinkedIn', value: '/robergj', url: 'https://linkedin.com/in/robergj' },
    { label: 'GitHub', value: '/robergj', url: 'https://github.com/robergj' },
    //{ label: 'Website', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    'Full Stack Developer with 3 years of experience in designing and implementing robust and scalable web applications. Skilled in Java, Java EE, Spring MVC, Struts, and Node.js for backend development, and Angular, jQuery, JavaScript, and TypeScript for frontend development.\n\n Proficient in database management with Oracle SQL Developer, version control with Git, and automated deployments using Jenkins and Maven. Experienced with IntelliJ IDEA as a development environment and familiar with agile methodologies for efficient software delivery.\n\n Passionate about code optimization, application performance, and solving complex problems. Always eager to take on new challenges and grow in the world of web development. 🚀',
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
  links: [github({ url: 'https://github.com/robergj' }), linkedin({ url: 'https://www.linkedin.com/in/robergj' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
