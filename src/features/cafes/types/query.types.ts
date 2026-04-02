import { SortOption } from '@/features/cafes/types/filter.types';

export interface BuildCafesQueryParams {
  page: number;
  pageSize: number;
  searchTerm?: string;
  selectedMethods?: string[];
  sort: SortOption;
}