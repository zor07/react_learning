import React, {Component, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            if (!props.isAuth) {
                navigate("/login")
            }
        })

        return <Component {...props} />
    }

    let mstp = (state) => ({
        isAuth: state.auth.isAuth
    })

    return  connect(mstp)(Wrapper);
}


