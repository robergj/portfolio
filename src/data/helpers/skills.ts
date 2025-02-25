import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const git = createSkillFactory({
  name: 'Git',
  icon: 'simple-icons:git',
  iconColor: '#F05032',
  url: 'https://git-scm.com/',
});

export const android = createSkillFactory({
  name: 'Android',
  icon: 'fa:android',
  iconColor: '#65A30D',
  url: 'https://www.android.com',
});

export const mqtt = createSkillFactory({
  name: 'MQTT',
  icon: 'simple-icons:mqtt',
  iconColor: '#C026D3',
  url: 'https://mqtt.org',
});

export const oracle = createSkillFactory({
  name: 'Oracle',
  icon: 'lineicons:oracle',
  iconColor: '#F05032',
  url: 'https://www.oracle.com/',
});

export const java = createSkillFactory({
  name: 'Java',
  icon: 'devicon:java',
  url: 'https://www.java.com/',
});

export const nodejs = createSkillFactory({
  name: 'Node.js',
  icon: 'simple-icons:nodedotjs',
  iconColor: '#5FA04E',
  url: 'https://nodejs.org/',
});

export const jenkins = createSkillFactory({
  name: 'Jenkins',
  icon: 'simple-icons:jenkins',
  iconColor: '#D24939',
  url: 'https://www.jenkins.io/',
});

export const intellijidea = createSkillFactory({
  name: 'IntelliJ IDEA',
  icon: 'simple-icons:intellijidea',
  iconColor: '#000000',
  url: 'https://www.jetbrains.com/idea/',
});

export const maven = createSkillFactory({
  name: 'Maven',
  icon: 'simple-icons:apachemaven',
  iconColor: '#C71A36',
  url: 'https://maven.apache.org/',
});

export const angular = createSkillFactory({
  name: 'Angular',
  icon: 'simple-icons:angular',
  iconColor: '#0F0F11',
  url: 'https://angular.dev/',
});

export const struts = createSkillFactory({
  name: 'Struts',
  icon: 'logos:struts',
  url: 'https://struts.apache.org/',
});

export const jquery = createSkillFactory({
  name: 'jQuery',
  icon: 'simple-icons:jquery',
  iconColor: '#0769AD',
  url: 'https://jquery.com/',
});

export const javascript = createSkillFactory({
  name: 'JavaScript',
  icon: 'simple-icons:javascript',
  iconColor: '#F7DF1E',
  url: 'https://web.dev/javascript/',
});

export const spring = createSkillFactory({
  name: 'Spring',
  icon: 'simple-icons:spring',
  iconColor: '#6DB33F',
  url: 'https://spring.io/',
});

export const html = createSkillFactory({
  name: 'HTML',
  icon: 'simple-icons:html5',
  iconColor: '#E34F26',
  url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'devicon:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const sourcetree = createSkillFactory({
  name: 'SourceTree',
  icon: 'simple-icons:sourcetree',
  iconColor: '#0052CC',
  url: 'https://www.sourcetreeapp.com/',
});

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});
