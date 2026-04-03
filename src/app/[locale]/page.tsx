'use client';
import { BrewMethod, Cafe } from '@/features/cafes/types/cafe.types';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { getCafes } from '@/features/cafes/api/getCafes';
import { ThemeSwitcher } from '@/features/cafes/components/ThemeSwitcher';
import { CafeCard } from '@/features/cafes/components/CafeCard';
import { Pagination } from '@/features/cafes/components/Pagination';
import { SearchBar } from '@/features/cafes/components/SearchBar';
import LocaleSwitcher from '@/features/cafes/components/LocaleSwitcher';
import { getBrewMethods } from '@/features/cafes/api/getBrewMethods';
import BrewMethodsFilter from '@/features/cafes/components/BrewMethodsFilter';
import { SortOptions } from '@/features/cafes/types/options.types';
import CafesSort from '@/features/cafes/components/CafeSort';
import { CafesMapPanel } from '@/features/cafes/components/CafesMapPanel';

export default function Home() {
  const t = useTranslations('HomePage');
  const m = useTranslations('CafesMap');

  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [brewMethods, setBrewMethods] = useState<BrewMethod[]>([]);
  const [selectedMethods, setSelectedMethods] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [sort, setSort] = useState<SortOptions>({
    field: 'name',
    order: 'asc',
  });

  const loadCafes = async ({
    page = currentPage,
    searchTermParam = searchTerm,
    selectedMethodsParam = selectedMethods,
    sortParam = sort,
  }: {
    page?: number;
    searchTermParam?: string;
    selectedMethodsParam?: string[];
    sortParam?: SortOptions;
  } = {}) => {
    try {
      const data = await getCafes({
        page,
        searchTerm: searchTermParam,
        pageSize: 9,
        selectedMethods: selectedMethodsParam,
        sort: sortParam,
      });
      setCafes(data.data);
      setPageCount(data.meta.pagination.pageCount);
    } catch (error) {
      console.error(error);
    }
  };

  const loadBrewMethods = async () => {
    try {
      const data = await getBrewMethods();
      setBrewMethods(data);
    } catch (error) {
      // TODO: delete console.error
      console.error(error);
    }
  };

  useEffect(() => {
    loadBrewMethods();
  }, []);

  useEffect(() => {
    loadCafes({
      page: currentPage,
      searchTermParam: searchTerm,
      selectedMethodsParam: selectedMethods,
      sortParam: sort,
    });
  }, [currentPage, searchTerm, selectedMethods, sort]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedMethods, sort]);

  return (
    <div className="flex min-h-screen">
      <main className="min-w-0 flex-1 p-6 transition-all duration-300">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-6xl font-bold">{t('title')}</h1>

          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <LocaleSwitcher />

            <button
              type="button"
              onClick={() => setIsMapOpen((prev) => !prev)}
              className="rounded-full border px-4 py-2 shadow"
            >
              {isMapOpen ? m('hideMap') : m('showMap')}
            </button>
          </div>
        </div>

        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <div className="mb-2 flex items-center justify-between">
          <BrewMethodsFilter
            methods={brewMethods}
            selectedMethods={selectedMethods}
            onChange={setSelectedMethods}
          />
          <CafesSort value={sort} onChange={setSort} />
        </div>

        <div
          className={[
            'grid gap-6 transition-all duration-300',
            isMapOpen
              ? 'grid-cols-1 xl:grid-cols-2'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
          ].join(' ')}
        >
          {cafes.map((cafe) => (
            <CafeCard key={cafe.id} cafe={cafe} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={setCurrentPage}
        />
      </main>

      <CafesMapPanel
        cafes={cafes}
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
      />
    </div>
  );
}
