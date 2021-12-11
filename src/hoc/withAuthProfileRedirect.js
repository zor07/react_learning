import React, {Component, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthProfileAuthRedirect = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate();
        const params = useParams();

        useEffect(() => {
            if (!props.isAuth && !params.userId) {
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


