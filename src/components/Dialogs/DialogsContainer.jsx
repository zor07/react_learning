import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let updateNewMessageBody = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text));
    };

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    };
    debugger
    return (
        <Dialogs updateNewMessageBody={updateNewMessageBody}
                 sendMessage={sendMessage}
                 dialogsPage={state.dialogsPage}/>
    );
};

export default DialogsContainer;
