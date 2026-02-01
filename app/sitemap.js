import { getAllCategorySlugs, getAllGuidePaths } from '../lib/guides';

export default function sitemap() {
  const baseUrl = 'https://growie.pro';
  const locales = ['ru', 'en'];

  const staticPages = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/${locale}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]);

  const categoryPages = locales.flatMap((locale) => {
    const slugs = getAllCategorySlugs(locale);
    return slugs.map((slug) => ({
      url: `${baseUrl}/${locale}/guides/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  });

  const guidePages = locales.flatMap((locale) => {
    const paths = getAllGuidePaths(locale);
    return paths.map(({ category, slug }) => ({
      url: `${baseUrl}/${locale}/guides/${category}/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }));
  });

  return [...staticPages, ...categoryPages, ...guidePages];
}
