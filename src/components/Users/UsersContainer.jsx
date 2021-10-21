import React from "react";
import {connect} from "react-redux";
import {followAc, setCurrentPageAc, setTotalUsersCountAc, setUsersAc, unfollowAc} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {

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
        debugger
        return (
            <Users users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   currentPage={this.props.currentPage}
                   pagesTotal={ Math.ceil(this.props.totalUsersCount / this.props.pageSize)}
                   onPageInputChange={this.onPageInputChange}
                   goToFirsPage={this.goToFirsPage}
                   goToPrevPage={this.goToPrevPage}
                   goToNextPage={this.goToNextPage}
                   goToLastPage={this.goToLastPage}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAc(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAc(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAc(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAc(page))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAc(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)