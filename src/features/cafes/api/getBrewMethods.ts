import { BrewMethod } from '@/features/cafes/types/cafe.types';
import { STRAPI_URL } from '@/shared/config/env';

export async function getBrewMethods(): Promise<BrewMethod[]> {
  const response = await fetch(`${STRAPI_URL}/api/brew-methods?populate=*`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch brew methods');
  }

  const json = await response.json();

  return json.data.map((item: any) => ({
    id: item.id.toString(),
    name: item.name,
    slug: item.slug,
    icon: item.icon,
  }));
}
