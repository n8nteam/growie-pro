import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getGuideByCategoryAndSlug, getCategoryBySlug, getAllGuidePaths } from '../../../../../lib/guides';
import Breadcrumb from '../../../../../components/Breadcrumb';

const locales = ['ru', 'en'];

export function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    const paths = getAllGuidePaths(locale);
    for (const { category, slug } of paths) {
      params.push({ locale, category, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params: { locale, category, slug } }) {
  const guide = getGuideByCategoryAndSlug(locale, category, slug);
  if (!guide) return {};

  return {
    title: `${guide.title} — Growie`,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
      publishedTime: guide.date,
    },
  };
}

export default async function GuidePage({ params: { locale, category, slug } }) {
  setRequestLocale(locale);
  const guide = getGuideByCategoryAndSlug(locale, category, slug);
  if (!guide) notFound();

  const cat = getCategoryBySlug(locale, category);
  const t = await getTranslations({ locale, namespace: 'guides' });

  const breadcrumbs = [
    { label: t('title'), href: `/${locale}/guides` },
    { label: cat?.title || category, href: `/${locale}/guides/${category}` },
    { label: guide.title },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.date,
    author: {
      '@type': 'Organization',
      name: 'Growie',
      url: 'https://growie.pro',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Growie',
      url: 'https://growie.pro',
    },
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.description,
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />

      <Breadcrumb items={breadcrumbs} locale={locale} />

      <div className="flex items-center gap-3 mb-6">
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
            guide.level === 'advanced'
              ? 'bg-orange-900/50 text-orange-300 border-orange-700/50'
              : 'bg-green-900/50 text-green-300 border-green-700/50'
          }`}
        >
          {guide.level === 'advanced'
            ? (locale === 'ru' ? 'Опытный' : 'Advanced')
            : (locale === 'ru' ? 'Новичок' : 'Beginner')}
        </span>
        <span className="text-gray-500 text-sm">
          {guide.readTime} {t('minuteRead')}
        </span>
      </div>

      <div className="prose max-w-none">
        <MDXRemote source={guide.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>
    </article>
  );
}
