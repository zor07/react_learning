import css from "./Paginator.module.css";

export const Paginator = ({requestItems, totalItemsCount, pageSize, currentPage}) => {

    const lastPage = Math.ceil(totalItemsCount / pageSize)

    const setPage = (page) => {
        requestItems(page, pageSize)
    }

    const goToFirsPage = () => {
        if (currentPage !== 1) {
            setPage(1);
        }
    }

    const goToLastPage = () => {
        if (currentPage !== lastPage) {
            setPage(lastPage);
        }
    }

    const goToPrevPage = () => {
        if (currentPage !== 1) {
            setPage(currentPage - 1);
        }
    }

    const goToNextPage = () => {
        if (currentPage !== lastPage) {
            setPage(currentPage + 1);
        }
    }

    const onPageInputChange = (e) => {
        let newPage = parseInt(e.target.value);
        if (newPage >= 1 && newPage <= lastPage) {
            setPage(newPage);
        }
    }

    let pageInput = <input type="number"
                           className={css.pageInput}
                           value={currentPage}
                           onChange={onPageInputChange}/>;

    return (
        <div>
            <div className={css.pagination}>
                <span><button onClick={goToFirsPage}>{'<<'}</button>  </span>
                <span><button onClick={goToPrevPage}>{'<'}</button>  </span>
                <span><button onClick={goToNextPage}>{'>'}</button>  </span>
                <span><button onClick={goToLastPage}>{'>>'}</button>  </span>
                <span>Page {pageInput} of {lastPage}</span>
            </div>
        </div>
    )
}