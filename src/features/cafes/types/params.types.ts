import { SortOptions } from '@/features/cafes/types/options.types';

export interface CafeParams {
  page: number;
  searchTerm: string;
  pageSize?: number;
  selectedMethods?: string[];
  sort?: SortOptions;
}

export interface BuildCafesQueryParams {
  page: number;
  pageSize: number;
  searchTerm?: string;
  selectedMethods?: string[];
  sort: SortOptions;
}
