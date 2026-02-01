import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getCategoriesByLocale } from '../../../lib/guides';
import CategoryCard from '../../../components/CategoryCard';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'guides' });
  return {
    title: `${t('title')} — Growie`,
    description: t('subtitle'),
  };
}

export default async function GuidesPage({ params: { locale } }) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'guides' });
  const categories = getCategoriesByLocale(locale);

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('title')}</h1>
        <p className="text-gray-400 text-lg">{t('subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
            locale={locale}
            comingSoonLabel={t('comingSoon')}
          />
        ))}
      </div>
    </section>
  );
}
