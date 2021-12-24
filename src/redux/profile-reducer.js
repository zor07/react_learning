import {AUTH_API, PROFILE_API} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const DELETE_POST = 'profile/DELETE_POST'
const SAVE_PHOTO = 'profile/SAVE_PHOTO'

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
        case SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos } }
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPost = (body) => ({ type: ADD_POST, body })
export const deletePost = (postId) => ({ type: DELETE_POST, postId})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})



export const updateStatus = (status) => {
    return async (dispatch) => {
        let response = await PROFILE_API.updateStatus(status)
        if (response.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const savePhoto = (file) => {
    return async (dispatch) => {
        let response = await PROFILE_API.savePhoto(file)
        if (response.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.photos))
        }
    }
}

export const saveProfileData = (profileData) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId
        let response = await PROFILE_API.saveProfileData(profileData)
        if (response.resultCode === 0) {
            dispatch(getProfile(userId))
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