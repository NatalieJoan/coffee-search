'use client';

import { useTranslations } from 'next-intl';
import { BrewMethodsFilterProps } from '@/features/cafes/types/props.types';
import { cn, toggleSelectedMethod } from '@/features/cafes/lib/utils';

export default function BrewMethodsFilter({
  methods,
  selectedMethods,
  onChange,
}: BrewMethodsFilterProps) {
  const t = useTranslations('HomePage');
  const baseClasses =
    'flex items-center bg-[var(--accent)] text-[var(--accent-foreground)] px-4 py-2 rounded-xl border cursor-pointer transition hover:opacity-90';
  const selectedClasses =
    'bg-black text-white bg-[var(--accent)] text-[var(--accent-foreground)] border-[var(--accent)]';
  const unselectedClasses =
    'bg-[var(--card)] text-[var(--foreground)] border-[var(--border)] hover:bg-black/5 dark:hover:bg-white/5';

  const handleToggleMethod = (slug: string) => {
    onChange(toggleSelectedMethod(selectedMethods, slug));
  };

  return (
    <div className="mb-6">
      <h2 className="mb-3 text-lg font-semibold tracking-tight">
        {t('brewMethods')}
      </h2>

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
