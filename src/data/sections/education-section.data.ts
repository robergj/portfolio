import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Degree in Computer Engineering',
      institution: 'Universidad de Cantabria',
      image: import('@/assets/logos/uc-logo.png'),
      dates: [new Date('2018.09'), new Date('2021.07')],
      description:
        'Computer engineering specialized in Software. \n Focused on designing, developing, and optimizing software solutions, with a strong foundation in programming, databases, and system architecture.',
      links: [website({ url: 'https://web.unican.es/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
