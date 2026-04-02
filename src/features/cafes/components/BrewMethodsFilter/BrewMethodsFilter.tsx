'use client';

import { useTranslations } from 'next-intl';
import { BrewMethodsFilterProps } from './BrewMethodsFilter.types';
import { toggleSelectedMethod } from './BrewMethodsFilter.utils';
import { cn } from '@/features/cafes/lib/utils';

export default function BrewMethodsFilter({
  methods,
  selectedMethods,
  onChange,
}: BrewMethodsFilterProps) {
  const t = useTranslations('HomePage');
  const baseClasses =
    'flex items-center gap-2 px-3 py-2 rounded-full border cursor-pointer transition';
  const selectedClasses =
    'bg-black text-white border-black hover:bg-black/90 dark:bg-white dark:text-black dark:border-white dark:hover:bg-white/90';
  const unselectedClasses =
    'bg-white text-black border-gray-300 hover:bg-gray-100 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-800';

  const handleToggleMethod = (slug: string) => {
    onChange(toggleSelectedMethod(selectedMethods, slug));
  };

  return (
    <div className="mb-6">
      <h2 className="mb-3 text-lg font-semibold">{t('brewMethods')}</h2>

      <div className="flex flex-wrap gap-3">
        {methods.map((method) => {
          const isSelected = selectedMethods.includes(method.slug);

          return (
            <label
              key={method.id}
              className={cn(
                baseClasses,
                isSelected ? selectedClasses : unselectedClasses,
              )}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleToggleMethod(method.slug)}
                className="hidden"
              />
              <span>{method.name}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}
