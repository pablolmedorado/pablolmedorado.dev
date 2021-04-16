import { format, formatDistance, formatDistanceToNowStrict, Locale, parseISO } from "date-fns";
import { enUS, es, it } from "date-fns/locale";

const localeCatalog: Record<string, Locale> = { es, en: enUS, it };

export function formatISODate(isoDate: string, dateFormat: string, locale = "es"): string {
  const date = parseISO(isoDate);
  return format(date, dateFormat, { locale: localeCatalog[locale] });
}

export function formatISODatesDistance(isoStartDate: string, isoEndDate?: string, locale = "es"): string {
  const from = parseISO(isoStartDate);
  const to = isoEndDate ? parseISO(isoEndDate) : new Date();
  return formatDistance(from, to, { locale: localeCatalog[locale] });
}

export function calculateAge(isoBirthdate: string, locale = "es"): string {
  const birthdate = parseISO(isoBirthdate);
  return formatDistanceToNowStrict(birthdate, {
    unit: "year",
    roundingMethod: "floor",
    locale: localeCatalog[locale],
  });
}
