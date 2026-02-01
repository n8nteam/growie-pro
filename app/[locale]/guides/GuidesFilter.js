'use client';

import { useState } from 'react';
import GuideCard from '../../../components/GuideCard';

export default function GuidesFilter({ guides, locale, labels }) {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? guides : guides.filter((g) => g.level === filter);

  return (
    <>
      <div className="flex justify-center gap-3 mb-10">
        {['all', 'beginner', 'advanced'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f
                ? 'bg-primary-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            {labels[f]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((guide) => (
          <GuideCard
            key={guide.slug}
            guide={guide}
            locale={locale}
            readMore={labels.readMore}
            minuteRead={labels.minuteRead}
          />
        ))}
      </div>
    </>
  );
}
