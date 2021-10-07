const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        const message = {
            id: 1,
            sender: 'Me',
            type: 'outgoing',
            message: state.newMessageText
        }
        state.messages.push(message);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.text;
    }
    return state;
}

export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text})
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE})

export default dialogsReducer;