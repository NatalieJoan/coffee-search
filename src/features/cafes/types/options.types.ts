export type SortOrder = 'asc' | 'desc';
export type SortField = 'name' | 'createdAt';

export interface SortOptions {
  field: SortField;
  order: SortOrder;
}

export interface FiltersOptions {
  selectedMethods: string[];
  sort: SortOptions;
}
