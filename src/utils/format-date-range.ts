import { format, differenceInYears, differenceInMonths } from 'date-fns';
import { es, enUS } from 'date-fns/locale';
import type { DateRange } from '@/types/shared';

const DATE_FORMAT = 'MMMM yyyy';

const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatDateRange = ([from, to]: DateRange, lang: 'es' | 'en' = 'en'): string => {
  const isEs = lang === 'es';
  const locale = isEs ? es : enUS;

  const fromFormatted = format(from, DATE_FORMAT, { locale });
  const toFormatted = to ? format(to, DATE_FORMAT, { locale }) : isEs ? 'actualmente' : 'now';

  const fromCapitalized = capitalizeFirstLetter(fromFormatted);
  const toCapitalized = capitalizeFirstLetter(toFormatted);

  const years = differenceInYears(to || new Date(), from);
  const months = differenceInMonths(to || new Date(), from) % 12;

  const unit = isEs ? { years: 'años', months: 'meses' } : { years: 'years', months: 'months' };
  const timeElapsed = [
    years > 0 ? `${years} ${unit.years}` : '',
    months > 0 ? `${months} ${unit.months}` : '',
  ]
    .filter(Boolean)
    .join(', ');

  return `${fromCapitalized} - ${toCapitalized} (${timeElapsed})`;
};

export default formatDateRange;
