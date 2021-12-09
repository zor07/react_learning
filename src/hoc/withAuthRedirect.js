import React from "react";
import {Route, Routes, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import Login from "../components/Login/Login";


export const withAuthRedirect = (Component) => {

    let mapStateToPropsForRedirect = (state) => ({
        isAuth: state.auth.isAuth
    })

    // class RedirectComponent extends React.Component {
    //
    //     constructor(props, context) {
    //         super(props, context);
    //         this.navigate = useNavigate();
    //     }
    //
    //
    //     render(){
    //         if (!this.props.isAuth) {
    //             this.navigate('/login');
    //             // return (
    //             //     <Routes>
    //             //         <Route path="about" element={<Login/>} />
    //             //     </Routes>
    //             //
    //             // )
    //         }
    //
    //         return <Component {...this.props}/>
    //     }
    // }

    const RedirectComponent = (props) => {

        const navigate = useNavigate();

        if (!props.isAuth) {
            navigate('/login')
        }

        return <Component {...props} />
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);

}