import { SortOption } from '@/features/cafes/types/filter.types';

export interface CafeParams {
  page: number;
  searchTerm: string;
  pageSize?: number;
  selectedMethods?: string[];
  sort?: SortOption;
}