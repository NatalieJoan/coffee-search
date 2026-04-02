import { BuildCafesQueryParams } from '@/features/cafes/types/params.types';

export function buildCafesQuery({
  page,
  pageSize,
  searchTerm = '',
  selectedMethods = [],
  sort,
}: BuildCafesQueryParams) {
  const params = new URLSearchParams();

  params.append('populate[0]', 'image');
  params.append('populate[1]', 'brew_methods');
  params.append('populate[2]', 'brew_methods.icon');
  params.append('pagination[page]', String(page));
  params.append('pagination[pageSize]', String(pageSize));
  params.append('sort[0]', `${sort.field}:${sort.order}`);

  let andIndex = 0;

  if (searchTerm) {
    params.append(`filters[$and][${andIndex}][name][$containsi]`, searchTerm);
    andIndex++;
  }

  if (selectedMethods.length > 0) {
    selectedMethods.forEach((slug, index) => {
      params.append(
        `filters[$and][${andIndex}][$or][${index}][brew_methods][slug][$eq]`,
        slug,
      );
    });
  }

  return params.toString();
}
