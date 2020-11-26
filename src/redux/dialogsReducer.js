const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Lex'}
    ],
    messages: [
        {id: 1, message: 'Привет!', sender:'Pasha', income: true},
        {id: 2, message: 'Хай!', sender:'Me', income: false},
        {id: 3, message: 'Как твои дела?', sender:'Pasha', income: true},
        {id: 4, message: 'Все равно узнаешь...', sender:'Me', income: false},
        {id: 5, message: 'Это твоя лучшая зима...', sender:'Pasha', income: true},
        {id: 6, message: 'Все хорошо?', sender:'Me', income: false}
    ],
    newMessageBody:''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: state.messages.length,
                message: state.newMessageBody,
                sender: 'Me',
                income: false
            };
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageBody = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.newMessageBody;
            return stateCopy;
        }
        default:
            return state;
    }
};

export default dialogsReducer;

export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageBody: text
});