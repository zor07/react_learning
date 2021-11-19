import React from "react";
import User from "./User/User";
import css from "./Users.module.css";

const Users = (props) => {

    let users = props.users
        .map(user => <User user={user}
                           follow={(userId) => props.follow(userId) }
                           unfollow={(userId) => props.unfollow(userId)}
                           followingInProgress={props.followingInProgress}
                           toggleFollowingProgress={props.toggleFollowingProgress}/>)

    let pageInput = <input type="number"
                           className={css.pageInput}
                           value={props.currentPage}
                           onChange={props.onPageInputChange}/>;

    return (<div className={css.users}>
            <h3>Users</h3>
            <div className={css.pagination}>
                <span><button onClick={props.goToFirsPage}>{'<<'}</button>  </span>
                <span><button onClick={props.goToPrevPage}>{'<'}</button>  </span>
                <span><button onClick={props.goToNextPage}>{'>'}</button>  </span>
                <span><button onClick={props.goToLastPage}>{'>>'}</button>  </span>
                <span>Page {pageInput} of {props.pagesTotal}</span>
            </div>
            {users}
        </div>
    )

}

export default Users;