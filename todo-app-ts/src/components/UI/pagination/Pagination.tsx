import { getPagesArray } from "../../../utils/pages";

interface PaginationWithProps {
    totalPages: number
    page: number
    changePage: (page: number) => void
}

export const Pagination = ({ totalPages, page, changePage }: PaginationWithProps) => {
    let pagesArray = getPagesArray(totalPages);

    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}
                >
                    {p}
                </span>)
            }
        </div>
    )
}