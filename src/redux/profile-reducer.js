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
    return async (dispatch) => {
        let response = await PROFILE_API.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await PROFILE_API.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const getProfile = (userId) => async (dispatch) => {
    let response = await PROFILE_API.getProfile(userId)
    dispatch(setUserProfile(response));
}


export default profileReducer;