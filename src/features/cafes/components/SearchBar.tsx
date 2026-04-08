import { useTranslations } from 'next-intl';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const t = useTranslations('HomePage');

  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder={t('searchPlaceholder')}
        className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none transition focus:ring-2 focus:ring-ring"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
