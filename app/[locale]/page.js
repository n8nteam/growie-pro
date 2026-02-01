import { setRequestLocale } from 'next-intl/server';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import DownloadCTA from '../../components/DownloadCTA';

export default function HomePage({ params: { locale } }) {
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Features />
      <DownloadCTA />
    </>
  );
}
