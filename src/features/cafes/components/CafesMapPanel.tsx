'use client';

import dynamic from 'next/dynamic';
import { CafesMapProps } from '@/features/cafes/types/props.types';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const CafesMap = dynamic(() => import('./CafesMap'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse rounded-1-2x1 bg-gray-200 dark:bg-neutral-800" />
  ),
});

export function CafesMapPanel({ cafes }: CafesMapProps) {
  const t = useTranslations('CafesMap');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed right-4 top-24 z-40 rounded-full border bg-white px-4 py-2 shadow dark:bg-black"
      >
        {isOpen ? t('hideMap') : t('showMap')}
      </button>
      <div
        className={[
          'fixed right-0 top-0 z-30 h-screen w-full max-w-2xl transform border-l bg-white shadow-2xl transition-transform duration-300 dark:bg-neutral-950',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <h2 className="text-lg font-semibold">{t('title')}</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-md px-3 py-2 hover:bg-gray-100 dark:hover:bg-neutral-800"
          >
            {t('close')}
          </button>
        </div>

        <div className="h-[calc(100vh-64px)]">
          {isOpen && <CafesMap cafes={cafes} />}
        </div>
      </div>
    </>
  );
}
