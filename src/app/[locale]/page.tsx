"use client";
import { Cafe } from "@/app/api/interface";
import { useTranslations } from 'next-intl';
import { useState, useEffect } from "react";
import { getCafes } from "@/app/services/cafeService";
import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";
import { CafeCard } from "@/app/components/CafeCard";
import { Pagination } from "@/app/components/Pagination";
import { SearchBar } from "@/app/components/SearchBar";
import LocaleSwitcher from "@/app/components/LocaleSwitcher";

export default function Home() {
  const t = useTranslations('HomePage');
  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  const loadCafes = async () => {
    try {
      const data = await getCafes(currentPage, searchTerm);
      setCafes(data.data);
      setPageCount(data.meta.pagination.pageCount);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    loadCafes();
  }, [searchTerm]);

  useEffect(() => {
    loadCafes();
  }, [currentPage]);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-6xl font-bold">{ t("title") }</h1>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </div>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cafes.map(cafe => <CafeCard key={cafe.id} cafe={cafe} />)}
      </div>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
