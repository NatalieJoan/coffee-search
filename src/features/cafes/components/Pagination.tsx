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

  if (pageCount <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-4 mt-12">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-card rounded-lg disabled:opacity-50 hover:bg-gray-500 transition-colors border border-gray-200 dark:border-gray-700"
      >
        {t('pagination.previous')}
      </button>

      <span className="text-muted font-medium">
        {t('pagination.status', { currentPage, pageCount })}
      </span>

      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, pageCount))}
        disabled={currentPage === pageCount}
        className="px-4 py-2 bg-card rounded-lg disabled:opacity-50 hover:bg-gray-500 transition-colors border border-gray-200 dark:border-gray-700"
      >
        {t('pagination.next')}
      </button>
    </div>
  );
}
