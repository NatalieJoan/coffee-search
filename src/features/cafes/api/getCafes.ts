import { STRAPI_URL } from '@/shared/config/env';
import { buildCafesQuery } from '@/features/cafes/api/buildCafesQuery';
import { CafeParams } from '@/features/cafes/types/params.types';

export const getCafes = async ({
    page,
    searchTerm = "",
    pageSize = 9,
    selectedMethods = [],
    sort = { field: 'name', order: 'asc' },
}: CafeParams) => {
  const query = buildCafesQuery({ page, pageSize, searchTerm, selectedMethods, sort });

  const response = await fetch(`${STRAPI_URL}/api/cafes?${query}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch cafes');
  }

  return response.json();
};
