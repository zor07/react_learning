import React from "react";
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElements = props.state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messageElements = props.state.messages
        .map(msg => <Message state={msg}/>)

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {dialogElements}
            </div>
            <div className={css.vl}></div>
            <div className={css.messages}>
                {messageElements}
                <div><textarea rows={10} cols={100}></textarea></div>
                <div><button>Send message</button></div>
            </div>
        </div>
    );
};

export default Dialogs;
