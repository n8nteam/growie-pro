import Link from 'next/link';

const iconMap = {
  sprout: '🌱',
  box: '📦',
  dna: '🧬',
  seedling: '🌾',
  leaf: '🌿',
  mountain: '⛰️',
  droplets: '💧',
  flask: '🧪',
  scan: '🔍',
  copy: '🔄',
  wind: '💨',
  'alert-triangle': '⚠️',
  scissors: '✂️',
  sun: '☀️',
  'shopping-bag': '🛍️',
  'heart-pulse': '❤️‍🩹',
};

export default function CategoryCard({ category, locale, comingSoonLabel }) {
  const emoji = iconMap[category.icon] || '📁';
  const isEmpty = category.guidesCount === 0;

  const content = (
    <div
      className={`bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col items-center text-center transition-colors ${
        isEmpty ? 'opacity-60' : 'hover:border-primary-600/50 cursor-pointer'
      }`}
    >
      <span className="text-3xl mb-3">{emoji}</span>
      <h3 className="text-lg font-semibold text-white mb-1">{category.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-3">{category.description}</p>
      {isEmpty ? (
        <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-gray-800 text-gray-400 border-gray-700">
          {comingSoonLabel}
        </span>
      ) : (
        <span className="text-xs text-gray-500">
          {category.guidesCount} {category.guidesCount === 1 ? 'guide' : 'guides'}
        </span>
      )}
    </div>
  );

  if (isEmpty) return content;

  return (
    <Link href={`/${locale}/guides/${category.slug}`}>
      {content}
    </Link>
  );
}
