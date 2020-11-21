const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length,
                message: state.newMessageBody,
                sender:'Me',
                income: false
            };

            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody=action.newMessageBody;
            return state;
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