import Link from 'next/link';

export default function GuideCard({ guide, locale, readMore, minuteRead }) {
  const levelColors = {
    beginner: 'bg-green-900/50 text-green-300 border-green-700/50',
    advanced: 'bg-orange-900/50 text-orange-300 border-orange-700/50',
  };

  const levelLabels = {
    beginner: locale === 'ru' ? 'Новичок' : 'Beginner',
    advanced: locale === 'ru' ? 'Опытный' : 'Advanced',
  };

  return (
    <article className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-primary-600/50 transition-colors flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${levelColors[guide.level] || levelColors.beginner}`}
        >
          {levelLabels[guide.level] || guide.level}
        </span>
        <span className="text-gray-500 text-xs">
          {guide.readTime} {minuteRead}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{guide.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{guide.description}</p>
      <Link
        href={`/${locale}/guides/${guide.category}/${guide.slug}`}
        className="text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
      >
        {readMore} &rarr;
      </Link>
    </article>
  );
}
