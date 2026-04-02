'use client';

import type { SortOptions } from '@/features/cafes/types/options.types';
import type { CafesSortProps } from '@/features/cafes/types/props.types';
import { useTranslations } from 'next-intl';

export default function CafesSort({ value, onChange }: CafesSortProps) {
  const t = useTranslations('Sort');

  return (
    <select
      value={`${value.field}:${value.order}`}
      onChange={(e) => {
        const [field, order] = e.target.value.split(':') as [
          SortOptions['field'],
          SortOptions['order'],
        ];

        onChange({ field, order });
      }}
    >
      <option value="name:asc">{t('nameAsc')}</option>
      <option value="name:desc">{t('nameDesc')}</option>
      <option value="createdAt:desc">{t('createdAtAsc')}</option>
      <option value="createdAt:asc">{t('createdAtDesc')}</option>
    </select>
  );
}
