import Link from 'next/link';

export default function Breadcrumb({ items, locale }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          {index > 0 && <span className="text-gray-600">/</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="text-primary-400 hover:text-primary-300 transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-300">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
