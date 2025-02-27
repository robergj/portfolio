import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  astro,
  cypress,
  eslint,
  prettier,
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
  android,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        oracle({ level: 5 }),
        git({ level: 5 }),
        sourcetree({ level: 5 }),
        java({ level: 5, description: 'Also Java EE' }),
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
        android({ level: 3 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [python(), sass(), cypress()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Spanish - native' },
        { icon: 'circle-flags:us', name: 'English - B2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
