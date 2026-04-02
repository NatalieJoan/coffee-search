"use client";

import type { SortOption } from '@/features/cafes/types/filter.types';
import {useTranslations} from "next-intl";

interface CafesSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function CafesSort({ value, onChange }: CafesSortProps) {
  const t = useTranslations('Sort');

  return (
    <select
      value={`${value.field}:${value.order}`}
      onChange={(e) => {
        const [field, order] = e.target.value.split(":") as [
          SortOption["field"],
          SortOption["order"],
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