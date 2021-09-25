import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messages
        .map(message => <Message message={message.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElements }
            </div>
            <div className={s.separatorLine}/>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Dialogs;