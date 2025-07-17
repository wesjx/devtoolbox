type Category = 'tips' | 'ui/ux' | 'data_base' | 'ai' | 'tools';
type Locale = 'en' | 'pt';

const labels: Record<Category, Record<Locale, string>> = {
  tips: { en: 'Tips', pt: 'Dicas' },
  'ui/ux': { en: 'UI/UX', pt: 'UI/UX' },
  'data_base': { en: 'Database', pt: 'Banco de dados' },
  ai: { en: 'AI', pt: 'IA' },
  tools: { en: 'Tools', pt: 'Ferramentas' },
};

export function getCategoryLabel(category: string, locale: string) {
  if (category in labels) {
    return labels[category as Category][locale as Locale] || category;
  }
  return category;
}

//Get colors

export function getCategoryColor(category: string) {
  switch (category) {
    case 'tips':
      return { color: 'bg-green-100 text-green-800' };
    case 'ui/ux':
      return { color: 'bg-pink-100 text-pink-800' };
    case 'data_base':
      return { color: 'bg-yellow-100 text-yellow-800' };
    case 'ai':
      return { color: 'bg-purple-100 text-purple-800' };
    case 'tools':
      return { color: 'bg-blue-100 text-blue-800' };
    default:
      return { color: 'bg-red text-gray-800' };
  }
}