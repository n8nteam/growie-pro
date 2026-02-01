'use client';

import { useTranslations } from 'next-intl';

export default function DownloadCTA() {
  const t = useTranslations('download');

  return (
    <section id="download" className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-gradient-to-br from-primary-900/40 to-gray-900 border border-primary-800/30 rounded-3xl p-10 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('title')}</h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">{t('subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-primary-600/25 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              {t('cta')}
            </a>
            <a
              href="#"
              className="border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.38l2.458 1.422c.548.316.548 1.186 0 1.502l-2.458 1.422-2.534-2.534 2.534-2.812zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              {t('ctaAndroid')}
              <span className="text-xs bg-gray-700 px-2 py-0.5 rounded-full ml-1">{t('comingSoon')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
