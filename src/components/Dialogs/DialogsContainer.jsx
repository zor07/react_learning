import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
        props.dispatch(updateNewMessageTextActionCreator(''));
    }

    let onNewMessageTextChange = (newMessageText) => {
        props.dispatch(updateNewMessageTextActionCreator(newMessageText));
    }

    return <Dialogs dialogsPage={props.dialogsPage}
                    addMessage={addMessage}
                    onNewMessageTextChange={onNewMessageTextChange}/>;
}

export default DialogsContainer;