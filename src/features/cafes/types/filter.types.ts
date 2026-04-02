export type SortOrder = "asc" | "desc";
export type SortField = "name" | "createdAt";

export interface SortOption {
  field: SortField;
  order: SortOrder;
}

export interface FiltersOptions {
  selectedMethods: string[];
  sort: SortOption;
}