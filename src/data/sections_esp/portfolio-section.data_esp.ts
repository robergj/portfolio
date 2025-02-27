import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { java, git, android, mqtt, sourcetree } from '../helpers/skills';
import { github } from '../helpers/links';

const portfolioSectionData = {
  config: {
    title: 'Proyectos',
    slug: 'proyectos',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Capturas de pantalla',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'RemoteSoft',
      image: import('@/assets/portfolio/project-remotesoft.png'),
      dates: [new Date('2021-02'), new Date('2021-06')],
      details: [
        { label: 'Tamaño del equipo', value: 'Solo yo' },
        { label: 'Mi rol', value: ['Desarrollador Front-end', 'Desarrollador Mobile', 'Diseñador'] },
        { label: 'Categoría', value: ['Aplicación móvil'] },
      ],
      pdfDetails: [
        {
          label: 'Repositorio',
          value: 'RemoteSoft',
          url: 'https://github.com/robergj/remotesoft',
        },
      ],
      description:
        '<b> Prototipo de un Sistema de Teleasistencia para Personas Dependientes</b>  \n\n Este proyecto desarrolla un sistema de teleasistencia de bajo costo basado en teléfonos móviles y sensores, permitiendo a los cuidadores (familiares, personal sanitario, etc.) monitorear de forma remota a personas dependientes. \n\n  <b> Componentes del Sistema:</b>  \n\n <b>RemoteSoft:</b> Instalado en el teléfono móvil de la persona dependiente, esta aplicación recopila datos de sensores y una pulsera de actividad.\n\n <b>RemoteSoft Receives:</b> Instalado en el teléfono móvil del cuidador, esta aplicación recibe y muestra la información enviada por RemoteSoft.',
      tagsList: {
        title: 'Tecnologías',
        tags: [java(), git(), android(), mqtt(), sourcetree()],
      },
      links: [github({ url: 'https://github.com/robergj/remotesoft' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
