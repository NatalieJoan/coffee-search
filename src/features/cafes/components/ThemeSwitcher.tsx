'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonIcon } from '../../../../public/icons/MoonIcon';
import { SunIcon } from '../../../../public/icons/SunIcon';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = (theme ?? resolvedTheme) === 'dark';

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="p-2 w-10 h-10" />;

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={[
        'relative inline-flex h-10 w-20 items-center rounded-full',
        isDark ? 'bg-slate-700' : 'bg-slate-200',
        'transition-colors duration-300',
      ].join(' ')}
    >
      <span
        className={[
          'absolute top-1 left-1 h-8 w-8 rounded-full',
          'shadow-md transition-transform duration-300 ease-out',
          isDark ? 'translate-x-10' : 'translate-x-0',
        ].join(' ')}
      >
        <SunIcon
          className={`absolute inset-0 m-auto h-5 w-5
                        transition-all duration-300
                        ${isDark ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}
                    `}
        />
        <MoonIcon
          className={`absolute inset-0 m-auto h-5 w-5
                        transition-all duration-300
                        ${isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}
                    `}
        />
      </span>
    </button>
  );
}
