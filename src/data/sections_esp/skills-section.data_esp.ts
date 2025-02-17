import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  astro,
  cypress,
  eslint,
  mongoDb,
  prettier,
  react,
  sass,
  python,
  tailwindCss,
  typescript,
  git,
  oracle,
  java,
  nodejs,
  jenkins,
  intellijidea,
  maven,
  angular,
  struts,
  jquery,
  javascript,
  spring,
  html,
  sourcetree,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Habilidades',
    slug: 'habilidades',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'Ya sé',
      skills: [
        oracle({ level: 5 }),
        git({ level: 5 }),
        sourcetree({ level: 5 }),
        java({ level: 5, description: 'También Java EE' }),
        angular({ level: 4 }),
        nodejs({ level: 4 }),
        jenkins({ level: 3 }),
        intellijidea({ level: 4 }),
        typescript({ level: 4 }),
        maven({ level: 4 }),
        struts({ level: 3 }),
        jquery({ level: 3 }),
        javascript({ level: 3 }),
        spring({ level: 4 }),
        html({ level: 4 }),
        tailwindCss({ level: 3 }),
        prettier({ level: 3 }),
        eslint({ level: 2 }),
        astro({ level: 3 }),
      ],
    },
    {
      title: 'Quiero aprender',
      skills: [react(), python(), mongoDb(), sass(), cypress()],
    },
    {
      title: 'Hablo',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Español - nativo' },
        { icon: 'circle-flags:us', name: 'Inglés - B2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
