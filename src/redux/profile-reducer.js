
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        const post = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        }

        state.posts.push(post);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.text;
    }
    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text})


export default profileReducer;