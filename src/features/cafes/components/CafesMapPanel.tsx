'use client';

import dynamic from 'next/dynamic';
import { CafesMapPanelProps } from '@/features/cafes/types/props.types';
import { useTranslations } from 'next-intl';

const CafesMap = dynamic(() => import('./CafesMap'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-2xl bg-gray-200 dark:bg-neutral-800" />
  ),
});

export function CafesMapPanel({ cafes, isOpen, onClose }: CafesMapPanelProps) {
  const t = useTranslations('CafesMap');

  return (
    <aside
      className={[
        'overflow-hidden border-l transition-all duration-300',
        'h-screen shrink-0',
        isOpen ? 'w-full lg:w-2xl opacity-100' : 'w-0 opacity-0 border-l-0',
      ].join(' ')}
    >
      <div className="flex h-full flex-col">
        <div className="flex h-16 shrink-0 items-center justify-between border-b px-4">
          <h2 className="text-lg font-semibold tracking-tight">{t('title')}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            {t('close')}
          </button>
        </div>

        <div className="flex-1 min-h-0">
          {isOpen && <CafesMap cafes={cafes} />}
        </div>
      </div>
    </aside>
  );
}
