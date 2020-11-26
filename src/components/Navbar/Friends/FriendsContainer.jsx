import React from "react";
import Friends from "./Friends";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        state: state.sidebar.friendList
    }
};

const mapDispatchToProps = () => { return {} };

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;