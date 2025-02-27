import type { Sections } from '@/types/data';
import type { ReadonlyDeep } from 'type-fest';
import educationData from './education-section.data_esp';
import experienceData from './experience-section.data_esp';
// import favoritesData from './favorites-section.data';
import mainData from './main-section.data_esp';
import portfolioData from './portfolio-section.data_esp';
import skillsData from './skills-section.data_esp';
// import testimonialsData from './testimonials-section.data';

export const sections = {
  main: mainData,
  skills: skillsData,
  experience: experienceData,
  education: educationData,
  portfolio: portfolioData,
  // testimonials: testimonialsData,
  // favorites: favoritesData,
} as const satisfies ReadonlyDeep<Sections>;

export default sections;
