import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AUTH_API} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        AUTH_API.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    let {id, email, login} = response.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);