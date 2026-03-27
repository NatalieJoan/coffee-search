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
                placeholder={t("searchPlaceholder")}
                className="w-full rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-card p-3 focus:outline-none focus:border-blue-500 transition-colors"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}