import React from "react";
import {connect} from "react-redux";
import {followAc, setCurrentPageAc, setTotalUsersCountAc, setUsersAc, unfollowAc} from "../../redux/users-reducer";
import Users from "./Users";


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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)