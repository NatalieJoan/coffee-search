import { BrewMethod } from '@/features/cafes/types/cafe.types';

export interface BrewMethodsFilterProps {
  methods: BrewMethod[];
  selectedMethods: string[];
  onChange: (methods: string[]) => void;
}
