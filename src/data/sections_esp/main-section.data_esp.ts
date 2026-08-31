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
    'Especializado en desarrollo full stack moderno con 5 años de experiencia en el diseño e implementación de aplicaciones web robustas y escalables. Experto en C# y .NET para desarrollo backend, combinado con TypeScript y Angular para interfaces frontend sofisticadas. Hábil en la construcción de aplicaciones de alto rendimiento utilizando Node.js, Java y Spring MVC para diversos requisitos de backend.\n\nProficiente en tecnologías de contenedorización y orquestación incluyendo Docker y Kubernetes. Experto en diseño y optimización de bases de datos con Oracle y PostgreSQL. Experimentado en control de versiones con Git y pipelines de despliegue automatizado usando Jenkins y Maven. Dominio sólido de IntelliJ IDEA y comprometido con metodologías Ágiles para una entrega de software continua y eficiente.\n\nApasionado por la arquitectura limpia, optimización de rendimiento y resolución de desafíos técnicos complejos. En constante evolución de mis habilidades para mantenerme en la vanguardia de las tecnologías web. Ansioso por colaborar en proyectos innovadores y contribuir a aplicaciones críticas para el negocio. 🚀',
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
