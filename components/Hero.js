'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 text-center relative">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#download"
            className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-primary-600/25"
          >
            {t('cta')}
          </a>
          <a
            href="#features"
            className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors"
          >
            {t('learnMore')}
          </a>
        </div>
      </div>
    </section>
  );
}
