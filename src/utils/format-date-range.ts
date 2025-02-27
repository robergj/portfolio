import { format, differenceInYears, differenceInMonths } from 'date-fns';
import { es } from 'date-fns/locale';
import type { DateRange } from '@/types/shared';
import config from '@/data/config_eng';

const { dateFormat, translations } = config.i18n;

const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatDateRange = ([from, to]: DateRange): string => {
  const lang = localStorage.getItem('lang');

  const locale = lang === 'es' ? es : config.i18n.locale;

  const fromFormatted = format(from, dateFormat, { locale });
  const toFormatted = to ? format(to, dateFormat, { locale }) : translations.now;

  const fromCapitalized = capitalizeFirstLetter(fromFormatted);
  const toCapitalized = capitalizeFirstLetter(toFormatted);

  const years = differenceInYears(to || new Date(), from);
  const months = differenceInMonths(to || new Date(), from) % 12;

  if (lang === 'es') {
    const timeElapsed = [years > 0 ? `${years} años` : '', months > 0 ? `${months} meses` : '']
      .filter(Boolean)
      .join(', ');

    return `${fromCapitalized} - ${toCapitalized} (${timeElapsed})`;
  } else {
    const timeElapsed = [years > 0 ? `${years} years` : '', months > 0 ? `${months} months` : '']
      .filter(Boolean)
      .join(', ');

    return `${fromCapitalized} - ${toCapitalized} (${timeElapsed})`;
  }
};

export default formatDateRange;
