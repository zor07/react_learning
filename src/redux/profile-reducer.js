
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let profilePage = {
    posts: [
        {id: 1, message: 'Spank me!', likesCount: 15},
        {id: 1, message: 'Please, daddy!', likesCount: 2}
    ],
    newPostText: ''
}

const profileReducer = (state = profilePage, action) => {
    let stateCopy = {...state}
    if (action.type === ADD_POST) {
        const post = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        }
        stateCopy.posts = [...state.posts]
        stateCopy.posts.push(post);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        stateCopy.newPostText = action.text;
    }
    return stateCopy;
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})


export default profileReducer;