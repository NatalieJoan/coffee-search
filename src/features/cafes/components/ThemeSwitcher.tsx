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
        'relative inline-flex h-9.5 w-18 items-center rounded-full border',
        'border-border bg-card',
        'transition-colors duration-300',
        isDark ?? 'bg-card',
      ].join(' ')}
    >
      <span
        className={[
          'absolute left-1 flex h-7 w-7 items-center justify-center rounded-full',
          'bg-accent text-accent-foreground',
          'shadow-sm transition-transform duration-300 ease-out',
          isDark ? 'translate-x-8.5' : 'translate-x-0',
        ].join(' ')}
      >
        <SunIcon
          className={`
          absolute h-4 w-4 transition-all duration-300
          ${isDark ? 'opacity-0 scale-75 rotate-90' : 'opacity-100 scale-100 rotate-0'}
        `}
        />
        <MoonIcon
          className={`
          absolute h-4 w-4 transition-all duration-300
          ${isDark ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90'}
        `}
        />
      </span>
    </button>
  );
}
