import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, linkedin, website } from '../helpers/links';
import {
  angular,
  csharp,
  docker,
  git,
  html,
  intellijidea,
  java,
  javascript,
  jenkins,
  jquery,
  kubernetes,
  maven,
  nodejs,
  oracle,
  postgreSql,
  spring,
  struts,
  swagger,
  typescript,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Full Stack Developer',
      company: 'CIC Consulting Informático',
      image: import('@/assets/logos/cic-logo.png'),
      dates: [new Date('2025-06'), null],
      description: `
        - Development and maintenance of web applications with Angular and TypeScript, ensuring clean architecture and responsive design.
        - Implementation of backend services with Node.js, Java, and C#, focused on performance, scalability, and security.
        - Database management in Oracle and PostgreSQL, guaranteeing data integrity and efficient query optimization.
        - API design and documentation using Swagger, improving interoperability and developer experience.
        - Containerization and orchestration with Docker and Kubernetes, enabling scalable and portable deployments.
        - Build automation and dependency management with Maven, streamlining development workflows.
        - Collaborative version control with Git, applying best practices in branching strategies and code reviews.
        - Continuous integration and deployment pipelines to deliver high-quality solutions quickly and reliably.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          oracle(),
          typescript(),
          angular(),
          git(),
          java(),
          csharp(),
          nodejs(),
          kubernetes(),
          docker(),
          postgreSql(),
          swagger(),
          maven(),
        ],
      },
      links: [
        website({ url: 'https://www.cic.es/' }),
        facebook({ url: 'https://www.facebook.com/CIC.Consulting' }),
        linkedin({ url: 'https://www.linkedin.com/company/cic-consulting-informatico/posts/?feedView=all' }),
      ],
    },
    {
      role: 'Full Stack Developer',
      company: 'Grupo Piñero',
      image: import('@/assets/logos/gp-logo.png'),
      dates: [new Date('2023-02'), new Date('2025-02')],
      description: `
        - Development and maintenance of web applications using Angular and TypeScript.
        - Implementation of backend services with Node.js and Java, optimizing performance and scalability.
        - Database management in Oracle, ensuring integrity and efficiency in queries.
        - Version control and collaborative workflows using Git and Jenkins.
        - Configuration and automation of development environments with Maven and IntelliJ IDEA.
        - Continuous integration and automated deployment to ensure fast and secure deliveries.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [oracle(), typescript(), angular(), git(), java(), nodejs(), jenkins(), intellijidea(), maven()],
      },
      links: [
        website({ url: 'https://www.grupo-pinero.com' }),
        facebook({ url: 'https://www.facebook.com/GrupoPinero' }),
        linkedin({ url: 'https://www.linkedin.com/company/grupo-pinero/posts/?feedView=all' }),
      ],
    },
    {
      role: 'Junior Full Stack Developer',
      company: 'Axpe Consulting',
      image: import('@/assets/logos/axpe-logo.jpg'),
      dates: [new Date('2021-08'), new Date('2023-02')],
      description: `
        - Development of web applications using Java and Struts, ensuring a robust and scalable architecture.
        - Implementation of dynamic interfaces with JavaScript, jQuery, and HTML to enhance user experience.
        - Optimization and management of databases in Oracle, ensuring query efficiency.
        - Maintenance and refactoring of code using best practices in Spring and Maven.
        - Version control and collaborative teamwork with Git for efficient integration.
      `,
      tagsList: {
        title: 'Technologies',
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
