import { getRequestConfig } from 'next-intl/server';

export const locales = ['ru', 'en'];
export const defaultLocale = 'ru';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) || defaultLocale;

  return {
    locale,
    messages: (await import(`../content/i18n/${locale}.json`)).default,
  };
});
