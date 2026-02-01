'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Header({ locale }) {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const otherLocale = locale === 'ru' ? 'en' : 'ru';

  const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-xl font-bold text-primary-400">
          Growie
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href={`/${locale}`}
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            {t('home')}
          </Link>
          <Link
            href={`/${locale}/guides`}
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            {t('guides')}
          </Link>
          <Link
            href="#download"
            className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {t('download')}
          </Link>
          <Link
            href={switchLocalePath}
            className="text-gray-400 hover:text-white transition-colors text-sm border border-gray-700 px-2 py-1 rounded"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>
      </nav>
    </header>
  );
}
