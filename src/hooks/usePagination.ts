import { useEffect, useState } from 'react';
import AssetItemModel from '../models/AssetItemModel';

function usePagination(items: AssetItemModel[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  }

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  return {
    currentPage,
    totalPages,
    goToPage,
    paginatedItems,
  };
}

export default usePagination;
