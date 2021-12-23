import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus, savePhoto} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";
import {withAuthProfileAuthRedirect} from "../../hoc/withAuthProfileRedirect";


class ProfileContainer extends React.Component {

    updateProfile(userId) {
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    getUserId(props) {
        let userId = props.params.userId;
        if (!userId) {
            userId = props.authorizedUserId;
        }
        return userId
    }

    componentDidMount() {
        let userId = this.getUserId(this.props)
        this.updateProfile(userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const prevUserId = this.getUserId(prevProps)
        const userId = this.getUserId(this.props)
        if (prevUserId !== userId) {
            this.updateProfile(userId)
        }
    }

    render() {
        return <Profile {...this.props}
                        updateStatus={this.props.updateStatus}
                        isOwner={!this.props.params.userId}/>
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId
    }
}


export default compose(
    withAuthProfileAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto})
)(ProfileContainer)