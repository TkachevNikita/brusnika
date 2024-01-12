import React, {FC} from 'react';
import './styles/Pagination.css'

interface PaginationProps {
    getTotalPages: () => number[];
    goToPage: (page: number) => void;
    currentPage: number;
    prevPage: () => void;
    nextPage: () => void;
    totalItems: number;
}

const Pagination: FC<PaginationProps> = ({getTotalPages, goToPage, currentPage, prevPage, nextPage, totalItems}: PaginationProps) => {
    return (
        <div className="assets__pagination">
            <div className="assets__pagination-displayed">
                Показываются элементы с {5 * (currentPage - 1) + 1} по {currentPage * 5} из {totalItems}
            </div>
            <button onClick={prevPage} className="left-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                    <path
                        d="M8.24852 19.6273L0.248524 10.6273C-0.0831217 10.2498 -0.0831217 9.68479 0.248524 9.30728L8.24852 0.307282C8.61936 -0.078802 9.22847 -0.104364 9.63036 0.249291C10.0322 0.602947 10.0843 1.21037 9.74852 1.62728L2.33852 9.96728L9.74852 18.3073C10.0032 18.5724 10.0919 18.956 9.97935 19.306C9.86683 19.6561 9.57131 19.9161 9.20981 19.9832C8.84832 20.0503 8.47916 19.9136 8.24852 19.6273Z"
                        fill="#6B6B6B"/>
                </svg>
            </button>
            {getTotalPages().map(number =>
                <button
                    key={number}
                    onClick={() => goToPage(number)}
                    className={currentPage === number ? "assets__pagination-btn-active assets__pagination-btn" : "assets__pagination-btn"}
                >
                    {number}
                </button>
            )}
            <button onClick={nextPage} className="right-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                    <path
                        d="M1.77882 0.372719L9.77882 9.37272C10.1105 9.75022 10.1105 10.3152 9.77882 10.6927L1.77882 19.6927C1.40798 20.0788 0.798869 20.1044 0.396987 19.7507C-0.00489407 19.3971 -0.0569828 18.7896 0.278819 18.3727L7.68882 10.0327L0.278818 1.69272C0.0241241 1.42755 -0.0645175 1.04401 0.0479968 0.693975C0.160511 0.343943 0.456032 0.0838852 0.817529 0.0167884C1.17903 -0.0503083 1.54819 0.086378 1.77882 0.372719Z"
                        fill="#6B6B6B"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;