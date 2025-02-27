import type { Config } from '@/types/data';
import { es } from 'date-fns/locale';
import type { ReadonlyDeep } from 'type-fest';

const config = {
  i18n: {
    locale: es,
    dateFormat: 'MMMM yyyy',
    translations: {
      now: 'ahora',
    },
  },
  meta: {
    title: 'Roberto González Jiménez - Desarrollador Full Stack',
    description:
      'Desarrollador Full Stack con 3 años de experiencia en el diseño e implementación de aplicaciones web robustas y escalables.',
    faviconPath: '/src/assets/my-image.jpg',
  },
  pdf: {
    footer:
      'Por la presente doy mi consentimiento para que mis datos personales incluidos en mi solicitud sean procesados con fines del proceso de reclutamiento.',
  },
} as const satisfies ReadonlyDeep<Config>;

export default config;
