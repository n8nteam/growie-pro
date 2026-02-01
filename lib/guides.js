import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const guidesDirectory = path.join(process.cwd(), 'content/guides');

/**
 * Get all categories for a locale with article counts
 */
export function getCategoriesByLocale(locale) {
  const localeDir = path.join(guidesDirectory, locale);
  if (!fs.existsSync(localeDir)) return [];

  const entries = fs.readdirSync(localeDir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const metaPath = path.join(localeDir, entry.name, '_meta.json');
      if (!fs.existsSync(metaPath)) return null;

      const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
      const files = fs
        .readdirSync(path.join(localeDir, entry.name))
        .filter((f) => f.endsWith('.mdx'));

      return {
        slug: entry.name,
        ...meta,
        guidesCount: files.length,
      };
    })
    .filter(Boolean)
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

/**
 * Get a single category's metadata by slug
 */
export function getCategoryBySlug(locale, slug) {
  const metaPath = path.join(guidesDirectory, locale, slug, '_meta.json');
  if (!fs.existsSync(metaPath)) return null;

  const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
  return { slug, ...meta };
}

/**
 * Get all guides in a specific category
 */
export function getGuidesByCategory(locale, category) {
  const categoryDir = path.join(guidesDirectory, locale, category);
  if (!fs.existsSync(categoryDir)) return [];

  const fileNames = fs.readdirSync(categoryDir).filter((f) => f.endsWith('.mdx'));

  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(categoryDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        category,
        content,
        ...data,
      };
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0));
}

/**
 * Get a single guide by category and slug
 */
export function getGuideByCategoryAndSlug(locale, category, slug) {
  const fullPath = path.join(guidesDirectory, locale, category, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    category,
    content,
    ...data,
  };
}

/**
 * Get all category slugs for static generation
 */
export function getAllCategorySlugs(locale) {
  const localeDir = path.join(guidesDirectory, locale);
  if (!fs.existsSync(localeDir)) return [];

  return fs
    .readdirSync(localeDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .filter((entry) => fs.existsSync(path.join(localeDir, entry.name, '_meta.json')))
    .map((entry) => entry.name);
}

/**
 * Get all guide paths (category + slug) for static generation
 */
export function getAllGuidePaths(locale) {
  const categories = getAllCategorySlugs(locale);
  const paths = [];

  for (const category of categories) {
    const categoryDir = path.join(guidesDirectory, locale, category);
    const files = fs.readdirSync(categoryDir).filter((f) => f.endsWith('.mdx'));

    for (const file of files) {
      paths.push({
        category,
        slug: file.replace(/\.mdx$/, ''),
      });
    }
  }

  return paths;
}
