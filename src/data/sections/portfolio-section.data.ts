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
    // {
    //   name: 'Software Chasers',
    //   image: import('@/assets/portfolio/project-3.jpeg'),
    //   dates: [new Date('2018-01'), new Date('2020-12')],
    //   details: [
    //     { label: 'Team size', value: '3 people' },
    //     { label: 'My role', value: ['Front-end Developer', 'Designer'] },
    //     { label: 'Company', value: 'None' },
    //     { label: 'Category', value: ['Web app', 'Open source'] },
    //   ],
    //   pdfDetails: [
    //     { label: 'Demo', value: 'https://software-chasers-e82l8e.netlify.app', url: '#' },
    //     { label: 'Repository', value: 'https://github.com/mark-freeman/software-chasers', url: '#' },
    //   ],
    //   description:
    //     'Quisque id consectetur eros. In hac habitasse platea dictumst. Sed eu pulvinar orci. Mauris consequat, est in dignissim varius, neque nisl commodo mauris, id blandit risus justo eu nulla.',
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [react(), chakraUi(), typescript(), nx(), pnpm()],
    //   },
    //   links: [website({ url: '#' }), github({ url: '#' })],
    //  },
    //   {
    //     name: 'Disco Ninjas',
    //     image: import('@/assets/portfolio/project-4.jpeg'),
    //     dates: [new Date('2016-05'), new Date('2018-07')],
    //     details: [
    //       { label: 'Team size', value: '11 people' },
    //       { label: 'My role', value: 'Front-end Developer' },
    //       { label: 'Company', value: 'Google' },
    //       { label: 'Category', value: ['Mobile app', 'Open source'] },
    //     ],
    //     pdfDetails: [
    //       { label: 'Demo', value: 'https://disco-ninjas-g321ol.netlify.app', url: '#' },
    //       { label: 'Repository', value: 'https://github.com/mark-freeman/disco-ninjas', url: '#' },
    //     ],
    //     description:
    //       'Praesent eu neque tortor. Vestibulum ac magna nisl. Vivamus massa sem, feugiat in pharetra non, convallis egestas purus. Ut consequat ullamcorper sem, in euismod nibh posuere ut. ',
    //     tagsList: {
    //       title: 'Technologies',
    //       tags: [typescript(), jest(), firebase()],
    //     },
    //     links: [mockups({ url: '#' }), github({ url: '#' })],
    //   },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
