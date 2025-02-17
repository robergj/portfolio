import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Perfil',
    slug: 'perfil',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Roberto González Jiménez',
  role: 'Desarrollador Full Stack',
  details: [
    { label: 'Correo electrónico', value: 'rgonzalezjz0@gmail.com', url: 'mailto:rgonzalezjz0@gmail.com' },
    { label: 'Desde', value: 'Torrelavega, Cantabria, España' },
  ],
  pdfDetails: [
    { label: 'Correo electrónico', value: 'rgonzalezjz0@gmail.com' },
    { label: 'LinkedIn', value: '/robergj', url: 'https://linkedin.com/in/robergj' },
    { label: 'GitHub', value: '/robergj', url: 'https://github.com/robergj' },
    //{ label: 'Sitio web', value: 'mark-freeman-personal-website.com', url: '/', fullRow: true },
  ],
  description:
    'Desarrollador Full Stack con 3 años de experiencia en el diseño e implementación de aplicaciones web robustas y escalables. Habilidades en Java, Java EE, Spring MVC, Struts y Node.js para el desarrollo backend, y Angular, jQuery, JavaScript y TypeScript para el desarrollo frontend.\n\n Experto en gestión de bases de datos con Oracle SQL Developer, control de versiones con Git y despliegues automatizados usando Jenkins y Maven. Experiencia con IntelliJ IDEA como entorno de desarrollo y familiarizado con metodologías ágiles para una entrega eficiente de software.\n\n Apasionado por la optimización de código, el rendimiento de aplicaciones y la resolución de problemas complejos. Siempre dispuesto a asumir nuevos desafíos y crecer en el mundo del desarrollo web. 🚀',
  tags: [
    { name: 'Buscando nuevas oportunidades' },
    { name: 'Interesado en startups' },
    { name: 'Actualmente mejorando habilidades' },
  ],
  action: {
    label: 'Descargar CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Roberto_Gonzalez.pdf',
  },
  links: [github({ url: 'https://github.com/robergj' }), linkedin({ url: 'https://www.linkedin.com/in/robergj' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
