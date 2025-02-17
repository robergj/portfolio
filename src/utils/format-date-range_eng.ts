import { format, differenceInYears, differenceInMonths } from 'date-fns';
import type { DateRange } from '@/types/shared';
import config from '@/data/config_eng';

const { locale, dateFormat, translations } = config.i18n;

const formatDateRange = ([from, to]: DateRange): string => {
  const fromFormatted = format(from, dateFormat, { locale });
  const toFormatted = to ? format(to, dateFormat, { locale }) : translations.now;

  const years = differenceInYears(to || new Date(), from);
  const months = differenceInMonths(to || new Date(), from) % 12;

  const timeElapsed = [years > 0 ? `${years} years` : '', months > 0 ? `${months} months` : '']
    .filter(Boolean)
    .join(', ');

  return `${fromFormatted} - ${toFormatted} (${timeElapsed})`;
};

export default formatDateRange;
