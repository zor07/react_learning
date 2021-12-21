import React from "react";
import User from "./User/User";
import css from "./Users.module.css";
import {Paginator} from "../Common/Paginator/Paginator";

const Users = (props) => {

    let users = props.users
        .map(user => <User user={user}
                           follow={(userId) => props.follow(userId) }
                           unfollow={(userId) => props.unfollow(userId)}
                           followingInProgress={props.followingInProgress}/>)

    return (<div className={css.users}>
            <h3>Users</h3>
            <Paginator requestItems={props.requestUsers}
                       currentPage={props.currentPage}
                       pageSize={props.pageSize}
                       totalItemsCount={props.totalUsersCount}/>
            {users}
        </div>
    )

}

export default Users;