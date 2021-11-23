import React from "react";
import {connect} from "react-redux";
import {follow, getUsers, setCurrentPage, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersAPIComponent extends React.Component {

    _setCurrentPage = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
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
                         followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


const WithUrlDataContainerComponent = withAuthRedirect(UsersAPIComponent);

export const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, getUsers})(WithUrlDataContainerComponent)