type Category =
  | 'general'
  | 'business'
  | 'entertainment'
  | 'sports'
  | 'technology'
  | 'health'
  | 'science'

export const getCategoryBasedTitle = (category: Category): string => {
  const categoryContent: Record<Category, string> = {
    general: 'Latest Top Stories',
    business: 'Market Insights News',
    entertainment: 'Trending Now News',
    sports: 'Game Highlights News',
    technology: 'Tech Innovations News',
    health: 'Wellness Tips News',
    science: 'New Discoveries News'
  }

  return categoryContent[category] || 'Latest Top Stories'
}
