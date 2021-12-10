import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {useNavigate} from "react-router-dom";
import formCss from "../Common/FormControls/FormControls.module.css"
import css from "./Login.module.css"


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       validate={[required]}
                       name={'email'}
                       placeholder={'Login'}/>
            </div>
            <div>
                <Field component={Input}
                       validate={[required]}
                       name={'password'}
                       placeholder={'Password'}/>
            </div>
            <div>
                <label htmlFor={'rememberMe'}>Remember Me</label>
                <Field component={Input}
                       name={'rememberMe'}
                       type='checkbox'/>
            </div>
            { props.error &&
            <div className={formCss.formCommonError}>
                {props.error}
            </div>
            }
            <div>
                <button type={'submit'} >Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const navigate = useNavigate();
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        navigate('/profile');
    }

    return (
        <div className={css.loginForm}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login)