import {AUTH_API, SECURITY_API} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_CAPTCHA_URL = 'auth/SET_CAPTHCA_URL'

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, payload: {captchaUrl}})

export const getAuthUserData = () => async (dispatch) => {
    const response = await AUTH_API.me();
    if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await SECURITY_API.getCaptchaUrl();
    const captchaUrl = response.url;
    dispatch(setCaptchaUrl(captchaUrl))
}


export const login = (email, password, rememberMe, captcha) => {
    return async (dispatch) => {
        const response = await AUTH_API.login(email, password, rememberMe, captcha)
        if (response.resultCode === 0) {
            dispatch(getAuthUserData())
            dispatch(setCaptchaUrl(null))
        } else {
            if (response.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            const message = response.messages.length > 0 ? response.messages[0] : 'Unable to login'
            dispatch(stopSubmit('login', {_error: message}))
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        const response = await AUTH_API.logout()
        if (response.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}

export default authReducer;