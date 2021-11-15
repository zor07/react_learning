import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import {setUserProfile} from "../../redux/profile-reducer";
import {PROFILE_API} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
            ? this.props.match.params.userId
            : 2;
        PROFILE_API.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response);
            })
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

let WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer);