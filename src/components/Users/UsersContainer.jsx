import React from "react";
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers} from "../../redux/selectors/user-selector";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Users users={this.props.users}
                         follow={this.props.follow}
                         unfollow={this.props.unfollow}
                         followingInProgress={this.props.followingInProgress}
                         // paginator
                         requestUsers={this.props.requestUsers}
                         currentPage={this.props.currentPage}
                         pageSize={this.props.pageSize}
                         totalUsersCount={this.props.totalUsersCount}/>}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export const UsersContainer = compose(
    connect(mapStateToProps,{follow, unfollow, setCurrentPage, requestUsers})
)(UsersAPIComponent)