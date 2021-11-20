import {PROFILE_API} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let profilePage = {
    posts: [
        {id: 1, message: 'Spank me!', likesCount: 15},
        {id: 1, message: 'Please, daddy!', likesCount: 2}
    ],
    newPostText: '',
    profile: null
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
        default:
            return state;
    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPost = () => ({ type: ADD_POST })
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})

export const getProfile = (userId) => {
    return (dispatch) => {
        PROFILE_API.getProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response));
            })
    }
}

export default profileReducer;