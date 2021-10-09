const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let dialogsPage = {
    dialogs: [
        {id: 1, name: 'Anna'},
        {id: 2, name: 'Kristine'},
        {id: 3, name: 'Ammy'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Vika'},
        {id: 6, name: 'Victor'},
    ],
    messages: [
        {id: 1, sender: 'Me', type: 'outgoing', message: 'Anna'},
        {id: 2, sender: 'Me', type: 'outgoing', message: 'Hi'},
        {id: 3, sender: 'Anna', type: 'incoming', message: 'Hello'},
        {id: 3, sender: 'Me', type: 'outgoing', message: 'How do you do?'},
        {id: 3, sender: 'Anna', type: 'incoming', message: "I'm horny as hell..."}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = dialogsPage, action) => {
    let stateCopy = {...state}
    if (action.type === ADD_MESSAGE) {
        const message = {
            id: 1,
            sender: 'Me',
            type: 'outgoing',
            message: state.newMessageText
        }
        stateCopy.messages = [...state.messages]
        stateCopy.messages.push(message);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        stateCopy.newMessageText = action.text;
    }
    return stateCopy;
}

export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text})
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE})

export default dialogsReducer;