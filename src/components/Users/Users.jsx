import React from "react";
import css from "./Users.module.css";
import * as axios from "axios";
import User from "./User/User";


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }


    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        let users = this.props.users
            .map(user => <User user={user}
                               follow={(userId) => this.props.follow(userId) }
                               unfollow={(userId) => this.props.unfollow(userId)}/>)

        let pages = []

        for (let i = 1; i <= Math.ceil(this.props.totalUsersCount / this.props.pageSize); i++) {
            pages.push(i)
        }

        let pagination = pages.map(p =>
            <span className={p === this.props.currentPage && css.selected}
                  onClick={() => this.onPageChanged(p)}  >{p}</span>);


        return (<div className={css.users}>
                <h3>Users</h3>
                <div className={css.pagination}>
                    {pagination}
                </div>
                {users}
            </div>

        )
    }
}

export default Users;