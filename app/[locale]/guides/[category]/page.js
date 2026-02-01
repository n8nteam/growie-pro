import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getCategoryBySlug, getGuidesByCategory, getAllCategorySlugs } from '../../../../lib/guides';
import Breadcrumb from '../../../../components/Breadcrumb';
import GuidesFilter from '../GuidesFilter';

const locales = ['ru', 'en'];

export function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    const slugs = getAllCategorySlugs(locale);
    for (const category of slugs) {
      params.push({ locale, category });
    }
  }
  return params;
}

export async function generateMetadata({ params: { locale, category } }) {
  const cat = getCategoryBySlug(locale, category);
  if (!cat) return {};

  return {
    title: `${cat.title} — Growie`,
    description: cat.description,
  };
}

export default async function CategoryPage({ params: { locale, category } }) {
  setRequestLocale(locale);
  const cat = getCategoryBySlug(locale, category);
  if (!cat) notFound();

  const t = await getTranslations({ locale, namespace: 'guides' });
  const guides = getGuidesByCategory(locale, category);

  const breadcrumbs = [
    { label: t('title'), href: `/${locale}/guides` },
    { label: cat.title },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <Breadcrumb items={breadcrumbs} locale={locale} />

      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{cat.title}</h1>
        <p className="text-gray-400 text-lg">{cat.description}</p>
      </div>

      {guides.length > 0 ? (
        <GuidesFilter
          guides={guides}
          locale={locale}
          labels={{
            all: t('filterAll'),
            beginner: t('filterBeginner'),
            advanced: t('filterAdvanced'),
            readMore: t('readMore'),
            minuteRead: t('minuteRead'),
          }}
        />
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">{t('noGuidesYet')}</p>
        </div>
      )}
    </section>
  );
}
