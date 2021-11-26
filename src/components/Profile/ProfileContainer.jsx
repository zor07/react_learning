import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom"
import {getProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let locationStateLocation = useLocation();
        this.props.getProfile(this.props.match.params.userId)
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


export default compose(
    withAuthRedirect,
    // withRouter,
    connect(mapStateToProps, {getProfile})
)(ProfileContainer)