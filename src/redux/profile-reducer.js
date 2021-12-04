import {AUTH_API, PROFILE_API} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let profilePage = {
    posts: [
        {id: 1, message: 'Spank me!', likesCount: 15},
        {id: 1, message: 'Please, daddy!', likesCount: 2}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = profilePage, action) => {
    switch (action.type) {
        case ADD_POST:
            const post = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, post]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const updateStatus = (status) => {
    return (dispatch) => {
        PROFILE_API.updateStatus(status)
            .then(response => {dispatch(setStatus(response.data.status))})
    }
}

export const getProfile = (userId) => {
    let requestProfile = (userId, dispatch) => {
        PROFILE_API.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response));
            })
    }

    let requestStatus = (userId, dispatch) => {
        PROFILE_API.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }

    return (dispatch) => {
        if (!userId) {
            AUTH_API.me()
                .then(response => {
                    if (response.resultCode === 0) {
                        requestProfile(response.data.id, dispatch)
                        requestStatus(response.data.id, dispatch)
                    }
                })
        } else {
            requestProfile(userId, dispatch)
            requestStatus(userId, dispatch)
        }
    }
}

export default profileReducer;