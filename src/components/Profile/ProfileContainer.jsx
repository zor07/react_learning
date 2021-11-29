import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        this.props.getProfile(this.props.params.userId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.userId !== this.props.params.userId) {
            this.props.getProfile(this.props.params.userId)
        }
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
    withRouter,
    connect(mapStateToProps, {getProfile})
)(ProfileContainer)