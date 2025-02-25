import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github } from '../helpers/links';
import { android, git, java, mqtt, sourcetree } from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'RemoteSoft',
      image: import('@/assets/portfolio/project-remotesoft.png'),
      dates: [new Date('2021-02'), new Date('2021-06')],
      details: [
        { label: 'Team size', value: 'Just me' },
        { label: 'My role', value: ['Front-end Developer', 'Mobile Developer', 'Designer'] },
        { label: 'Category', value: ['Mobile app'] },
      ],
      pdfDetails: [
        {
          label: 'Repository',
          value: 'RemoteSoft',
          url: 'https://github.com/robergj/remotesoft',
        },
      ],
      description:
        '<b> Prototype of a Teleassistance System for Dependent People</b>  \n\n This project develops a low-cost teleassistance system based on mobile phones and sensors, allowing caregivers (family members, healthcare personnel, etc.) to monitor dependent individuals remotely. \n\n  <b> System Components:</b>  \n\n <b>RemoteSoft:</b> Installed on the dependent person&#39;s mobile phone, this app collects data from sensors and an activity wristband.\n\n <b>RemoteSoft Receives:</b> Installed on the caregiver&#39;s mobile phone, this app receives and displays the information sent by RemoteSoft.',
      tagsList: {
        title: 'Technologies',
        tags: [java(), git(), android(), mqtt(), sourcetree()],
      },
      links: [github({ url: 'https://github.com/robergj/remotesoft' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
