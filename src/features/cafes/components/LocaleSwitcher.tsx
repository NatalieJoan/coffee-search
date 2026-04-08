'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div
      className={`flex gap-1 rounded-xl border border-border bg-card p-1 transition ${
        isPending ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {['en', 'pl'].map((l) => {
        const isActive = locale === l;

        return (
          <button
            key={l}
            disabled={isPending}
            onClick={() => onSelectChange(l)}
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              isActive
                ? 'bg-accent text-accent-foreground'
                : 'text-foreground hover:bg-black/5 dark:hover:bg-white/5'
            }`}
          >
            {l.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
