import type { Sections } from '@/types/data';
import type { ReadonlyDeep } from 'type-fest';
import educationData from '../sections_esp/education-section.data_esp';
import experienceData from '../sections_esp/experience-section.data_esp';
// import favoritesData from './favorites-section.data';
import mainData from '../sections_esp/main-section.data_esp';
import portfolioData from '../sections_esp/portfolio-section.data_esp';
import skillsData from '../sections_esp/skills-section.data_esp';
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
