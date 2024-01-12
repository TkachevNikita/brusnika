import { useEffect, useState } from 'react';
import AssetItemModel from '../models/AssetItemModel';

function usePagination(items: AssetItemModel[], itemsPerPage: number) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const goToPage = (page: number) => {
        setCurrentPage(page);
    }

    const nextPage = () => {
        if (currentPage < totalPages) {
            goToPage(currentPage + 1);
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            goToPage(currentPage - 1);
        }
    }

    const getTotalPages = (): number[] => {
        const resultPages: number[] = []

        for(let i = 1; i <= totalPages; i++) {
            resultPages.push(i)
        }

        return resultPages
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
        nextPage,
        prevPage,
        paginatedItems,
        getTotalPages
    };
}

export default usePagination;
