'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer({ locale }) {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');

  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-primary-400 mb-3">Growie</h3>
            <p className="text-gray-400 text-sm">{t('description')}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">{t('product')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {nav('home')}
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-gray-400 hover:text-white text-sm transition-colors">
                  {nav('download')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">{t('resources')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/guides`} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {nav('guides')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">{t('legal')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/privacy`} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-gray-400 hover:text-white text-sm transition-colors">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Growie. {t('rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}
