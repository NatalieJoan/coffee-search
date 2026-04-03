import { BrewMethod, Cafe } from '@/features/cafes/types/cafe.types';
import { SortOptions } from '@/features/cafes/types/options.types';

export interface BrewMethodsFilterProps {
  methods: BrewMethod[];
  selectedMethods: string[];
  onChange: (methods: string[]) => void;
}

export interface CafesSortProps {
  value: SortOptions;
  onChange: (value: SortOptions) => void;
}

export interface CafeCardProps {
  cafe: Cafe;
}

export interface CafesMapProps {
  cafes: Cafe[];
}

export interface CafesMapPanelProps {
  cafes: CafesMapProps['cafes'];
  isOpen: boolean;
  onClose: () => void;
}
