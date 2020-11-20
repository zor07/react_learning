import React from "react";
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messageElements = props.state.messages
        .map(msg => <Message state={msg}/>)

    let onNewMessageBodyChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(text));
    };

    let sendMessage = () => {
        props.dispatch(sendMessageCreator());
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {dialogElements}
            </div>
            <div className={css.vl}/>
            <div className={css.messages}>
                {messageElements}
                <div><textarea rows={10}
                               cols={100}
                               value={props.state.newMessageBody}
                               onChange={onNewMessageBodyChange} /></div>
                <div><button onClick={sendMessage}>Send message</button></div>
            </div>
        </div>
    );
};

export default Dialogs;
