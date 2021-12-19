import {AUTH_API, PROFILE_API} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST'

let profilePage = {
    posts: [
        {id: 1, message: 'Spank me!', likesCount: 15},
        {id: 1, message: 'Please, daddy!', likesCount: 2}
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = profilePage, action) => {
    switch (action.type) {
        case ADD_POST:
            const post = {
                id: 5,
                message: action.body,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, post]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPost = (body) => ({ type: ADD_POST, body })
export const deletePost = (postId) => ({ type: DELETE_POST, postId})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const updateStatus = (status) => {
    return (dispatch) => {
        PROFILE_API.updateStatus(status)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}

export const getStatus = (userId) => (dispatch) => {
    PROFILE_API.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const getProfile = (userId) => (dispatch) => {
    PROFILE_API.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response));

        })
}


export const getProfile2 = (userId) => {
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