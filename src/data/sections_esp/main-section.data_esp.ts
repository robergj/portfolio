import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, website } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Perfil',
    slug: 'perfil',
    visible: true,
  },
  image: import('@/assets/my-image.jpg'),
  fullName: 'Roberto González Jiménez',
  role: 'Desarrollador Full Stack',
  details: [
    { label: 'Correo electrónico', value: 'rgonzalezjz0@gmail.com', url: 'mailto:rgonzalezjz0@gmail.com' },
    { label: 'Desde', value: 'Torrelavega, Cantabria, España' },
  ],
  pdfDetails: [
    { label: 'Correo electrónico', value: 'rgonzalezjz0@gmail.com', fullRow: true },
    { label: 'LinkedIn', value: 'Perfil LinkedIn', url: 'https://linkedin.com/in/robergj' },
    { label: 'GitHub', value: 'Perfil GitHub', url: 'https://github.com/robergj' },
    { label: 'Sitio Web', value: 'Web personal', url: 'https://robergj.netlify.app' },
  ],
  description:
    'Desarrollador Full Stack con 4 años de experiencia en el diseño e implementación de aplicaciones web robustas y escalables. Habilidades en Java, Java EE, C#, Spring MVC, Struts y Node.js para el desarrollo backend, y Angular, jQuery, JavaScript y TypeScript para el desarrollo frontend.\n\n Experto en gestión de bases de datos con Oracle SQL Developer, control de versiones con Git y despliegues automatizados usando Jenkins y Maven. Experiencia con IntelliJ IDEA como entorno de desarrollo y familiarizado con metodologías ágiles para una entrega eficiente de software.\n\n Apasionado por la optimización de código, el rendimiento de aplicaciones y la resolución de problemas complejos. Siempre dispuesto a asumir nuevos desafíos y crecer en el mundo del desarrollo web. 🚀',
  tags: [
    { name: 'Buscando nuevas oportunidades' },
    { name: 'Interesado en startups' },
    { name: 'Actualmente mejorando habilidades' },
  ],
  action: {
    label: 'Descargar CV',
    url: '/cvEsp.pdf',
    downloadedFileName: 'CV-Roberto_Gonzalez.pdf',
  },
  links: [
    website({ url: 'https://robergj.netlify.app' }),
    github({ url: 'https://github.com/robergj' }),
    linkedin({ url: 'https://www.linkedin.com/in/robergj' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
