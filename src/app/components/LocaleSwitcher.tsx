"use client";

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
        <div className={`"flex gap-2" ${isPending ? 'opacity-50' : 'opacity-100'}`}>
            {['en', 'pl'].map((l) => (
                <button
                    key={l}
                    disabled={isPending}
                    onClick={() => onSelectChange(l)}
                    className={`px-3 py-1 rounded-md transition-all ${
                        locale === l
                            ? 'bg-blue-600 text-white font-bold'
                            : 'bg-card text-card-foreground hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                >
                    {l.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
