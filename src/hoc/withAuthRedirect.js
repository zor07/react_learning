import React from "react";
import {Route, Routes} from "react-router-dom";
import {connect} from "react-redux";
import Login from "../components/Login/Login";


export const withAuthRedirect = (Component) => {

    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth
    })

    class RedirectComponent extends React.Component {
        render(){
            if (!this.props.isAuth) {
                return (
                    <Routes>
                        <Route path="about" element={<Login/>} />
                    </Routes>

                )
            }

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);

}