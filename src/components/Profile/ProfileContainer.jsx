import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {getProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId // match is object, that came from withRouter
            ? this.props.match.params.userId
            : 2;
        this.props.getProfile(userId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let WithUrlDataProfileContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getProfile})(WithUrlDataProfileContainer);