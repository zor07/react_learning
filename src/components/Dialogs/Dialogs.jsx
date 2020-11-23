import React from "react";
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>);

    let messageElements = props.dialogsPage.messages
        .map(msg => <Message state={msg}/>);

    let updateNewMessageBody = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text);
    };

    let sendMessage = () => {
        props.sendMessage();
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
                               value={props.dialogsPage.newMessageBody}
                               onChange={updateNewMessageBody} /></div>
                <div><button onClick={sendMessage}>Send message</button></div>
            </div>
        </div>
    );
};

export default Dialogs;
