import css from "./Paginator.module.css";
import React from "react";

export const Paginator = (props) => {
    let pageInput = <input type="number"
                           className={css.pageInput}
                           value={props.currentPage}
                           onChange={props.onPageInputChange}/>;

    return (
        <div>
            <div className={css.pagination}>
                <span><button onClick={props.goToFirsPage}>{'<<'}</button>  </span>
                <span><button onClick={props.goToPrevPage}>{'<'}</button>  </span>
                <span><button onClick={props.goToNextPage}>{'>'}</button>  </span>
                <span><button onClick={props.goToLastPage}>{'>>'}</button>  </span>
                <span>Page {pageInput} of {props.pagesTotal}</span>
            </div>
        </div>
    )
}