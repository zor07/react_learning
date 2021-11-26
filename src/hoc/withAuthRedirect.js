import React from "react";
import {Route, Navigate} from "react-router-dom";
import {connect} from "react-redux";


export const withAuthRedirect = (Component) => {

    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth
    })

    class RedirectComponent extends React.Component {
        render(){
            if (!this.props.isAuth) {
                return (
                        <Route path="about" render={() => <Navigate to="/login" />} />
                )
            }

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);

}