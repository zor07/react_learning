import React from "react";
import css from "./Users.module.css";
import * as axios from "axios";
import User from "./User/User";


class Users extends React.Component {

    _setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    goToFirsPage = () => {
        this._setCurrentPage(1);
    }

    goToLastPage = () => {
        this._setCurrentPage(Math.ceil(this.props.totalUsersCount / this.props.pageSize));
    }

    goToPrevPage = () => {
        if (this.props.currentPage !== 1) {
            this._setCurrentPage(this.props.currentPage - 1);
        }
    }

    goToNextPage = () => {
        if (this.props.currentPage !== Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            this._setCurrentPage(this.props.currentPage + 1);
            console.log(this.props.currentPage)
        }
    }

    onPageInputChange = (e) => {
        let newPage = parseInt(e.target.value);
        if (newPage >= 1 && newPage <= Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
            this._setCurrentPage(newPage);
        }
    }

    render() {
        let users = this.props.users
            .map(user => <User user={user}
                               follow={(userId) => this.props.follow(userId) }
                               unfollow={(userId) => this.props.unfollow(userId)}/>)

        let pageInput = <input type="number"
                               className={css.pageInput}
                               value={this.props.currentPage}
                               onChange={this.onPageInputChange}/>;

        return (<div className={css.users}>
                <h3>Users</h3>
                <div className={css.pagination}>
                    <span><button onClick={this.goToFirsPage}>{'<<'}</button>  </span>
                    <span><button onClick={this.goToPrevPage}>{'<'}</button>  </span>
                    <span><button onClick={this.goToNextPage}>{'>'}</button>  </span>
                    <span><button onClick={this.goToLastPage}>{'>>'}</button>  </span>
                    <span>Page {pageInput} of {Math.ceil(this.props.totalUsersCount / this.props.pageSize)}</span>
                </div>
                {users}
            </div>

        )
    }
}

export default Users;