const ADD_MESSAGE = 'ADD-MESSAGE';

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
    ]
}

const dialogsReducer = (state = dialogsPage, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = {
                id: 1,
                sender: 'Me',
                type: 'outgoing',
                message: action.message
            }
            return {
                ...state,
                messages: [...state.messages, message]
            }
        default:
            return state;
    }
}

export const addMessage = (message) => ({ type: ADD_MESSAGE, message})

export default dialogsReducer;