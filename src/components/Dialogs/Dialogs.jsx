import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} type={message.type} sender={message.sender}/>);

    let addMessage = () => {
        props.addMessage();
        props.updateNewMessageText('');
    }

    let onNewMessageTextChange = (e) => {
        let newMessageText = e.target.value;
        props.updateNewMessageText(newMessageText)
    }

    if (!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>
            <div className={s.separatorLine}/>
            <div className={s.messages}>
                { messagesElements }
                <div>
                    <textarea rows={5}
                              cols={100}
                              value={props.dialogsPage.newMessageText}
                              onChange={onNewMessageTextChange}/>
                </div>
                <div>
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;