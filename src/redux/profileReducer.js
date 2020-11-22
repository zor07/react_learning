const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {id: 1, message:'Hello world!', likesCount:25},
        {id: 2, message:'It\'s my new post!', likesCount:5}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText='';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText=action.newPostText;
            return state;
        default:
            return state;
    }
};

export default profileReducer;

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
});