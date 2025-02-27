import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Educación',
    slug: 'educacion',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Grado en Ingeniería Informática',
      institution: 'Universidad de Cantabria',
      image: import('@/assets/logos/uc-logo.png'),
      dates: [new Date('2017.09'), new Date('2021.07')],
      description:
        'Ingeniería informática especializada en Software. \n\n Enfocada en el diseño, desarrollo y optimización de soluciones de software, con una sólida base en programación, bases de datos y arquitectura de sistemas.',
      links: [website({ url: 'https://web.unican.es/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
