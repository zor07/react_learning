import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED'
const SHOW_ERROR = 'app/SHOW_ERROR'
const HIDE_ERROR = 'app/HIDE_ERROR'

let initialState = {
    initialized: false,
    showErrors: false,
    errors: null
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        case SHOW_ERROR:
            return {
                ...state,
                showErrors: true,
                errors: action.errors
            }
        case HIDE_ERROR:
            return {
                ...state,
                showErrors: false,
                errors: action.errors
            }
        default:
            return state;
    }
}

export const setInitialized = () => ({type: SET_INITIALIZED})
export const showErrors = (errors) => ({type: SHOW_ERROR, errors})
export const hideErrors = () => ({type: HIDE_ERROR, errors: null})

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => dispatch(setInitialized()))
}

export const displayError = (errors) => {
    return (dispatch) => {
        dispatch(showErrors(errors))
        setTimeout(() => {
            dispatch(hideErrors())
        }, 3000)
    }
}



export default appReducer;