import React from "react";
import {connect} from "react-redux";
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersAPIComponent extends React.Component {

    _setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            })
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false);
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
        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Users users={this.props.users}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         currentPage={this.props.currentPage}
                         pagesTotal={Math.ceil(this.props.totalUsersCount / this.props.pageSize)}
                         onPageInputChange={this.onPageInputChange}
                         goToFirsPage={this.goToFirsPage}
                         goToPrevPage={this.goToPrevPage}
                         goToNextPage={this.goToNextPage}
                         goToLastPage={this.goToLastPage}/>}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching
    }
}


export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersAPIComponent)