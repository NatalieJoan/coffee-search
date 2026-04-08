import { useTranslations } from 'next-intl';

interface PaginationProps {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  pageCount,
  onPageChange,
}: PaginationProps) {
  const t = useTranslations('HomePage');
  const BaseClass =
    'px-3 py-2 bg-accent rounded-lg text-accent-foreground disabled:opacity-50 border border-[var(--border)] hover:bg-gray-500 transition-colors dark:border-gray-700';

  if (pageCount <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className={BaseClass}
      >
        {t('pagination.previous')}
      </button>

      <span className="text-muted text-sm">
        {t('pagination.status', { currentPage, pageCount })}
      </span>

      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, pageCount))}
        disabled={currentPage === pageCount}
        className={BaseClass}
      >
        {t('pagination.next')}
      </button>
    </div>
  );
}
