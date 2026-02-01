import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const locales = ['ru', 'en'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const messages = await getMessages({ locale });
  return {
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: `https://growie.pro/${locale}`,
      languages: {
        ru: 'https://growie.pro/ru',
        en: 'https://growie.pro/en',
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      url: `https://growie.pro/${locale}`,
      siteName: 'Growie',
      locale: locale === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}
