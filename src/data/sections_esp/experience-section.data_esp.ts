import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, linkedin, website } from '../helpers/links';
import {
  angular,
  git,
  html,
  intellijidea,
  java,
  javascript,
  jenkins,
  jquery,
  maven,
  nodejs,
  oracle,
  spring,
  struts,
  typescript,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Experiencia laboral',
    slug: 'experiencia',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Desarrollador Full Stack',
      company: 'Grupo Piñero',
      image: import('@/assets/logos/gp-logo.png'),
      dates: [new Date('2023-02'), new Date('2025-02')],
      description: `
        - Desarrollo y mantenimiento de aplicaciones web utilizando Angular y TypeScript.
        - Implementación de servicios backend con Node.js y Java, optimizando el rendimiento y la escalabilidad.
        - Gestión de bases de datos en Oracle, asegurando la integridad y eficiencia en las consultas.
        - Control de versiones y flujos de trabajo colaborativos utilizando Git y Jenkins.
        - Configuración y automatización de entornos de desarrollo con Maven e IntelliJ IDEA.
        - Integración continua y despliegue automatizado para asegurar entregas rápidas y seguras.
      `,
      tagsList: {
        title: 'Tecnologías',
        tags: [oracle(), typescript(), angular(), git(), java(), nodejs(), jenkins(), intellijidea(), maven()],
      },
      links: [
        website({ url: 'https://www.grupo-pinero.com' }),
        facebook({ url: 'https://www.facebook.com/GrupoPinero' }),
        linkedin({ url: 'https://www.linkedin.com/company/grupo-pinero/posts/?feedView=all' }),
      ],
    },
    {
      role: 'Desarrollador Full Stack Junior',
      company: 'Axpe Consulting',
      image: import('@/assets/logos/axpe-logo.jpg'),
      dates: [new Date('2021-10'), new Date('2025-02')],
      description: `
        - Desarrollo de aplicaciones web utilizando Java y Struts, asegurando una arquitectura robusta y escalable.
        - Implementación de interfaces dinámicas con JavaScript, jQuery y HTML para mejorar la experiencia del usuario.
        - Optimización y gestión de bases de datos en Oracle, asegurando la eficiencia de las consultas.
        - Mantenimiento y refactorización de código utilizando las mejores prácticas en Spring y Maven.
        - Control de versiones y trabajo colaborativo con Git para una integración eficiente.
      `,
      tagsList: {
        title: 'Tecnologías',
        tags: [oracle(), java(), struts(), jquery(), git(), javascript(), html(), spring(), maven()],
      },
      links: [
        website({ url: 'https://www.axpe.com/' }),
        facebook({ url: 'https://www.facebook.com/AxpeConsultingSpain/' }),
        linkedin({ url: 'https://www.linkedin.com/company/axpe-cantabria/posts/?feedView=all' }),
      ],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
