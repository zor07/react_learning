import React from "react";
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElements = props.state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messageElements = props.state.messages
        .map(msg => <Message state={msg}/>)

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {dialogElements}
            </div>
            <div className={css.vl}></div>
            <div className={css.messages}>
                {messageElements}
                <div><textarea rows={10} cols={100} ref={newMessageElement}></textarea></div>
                <div><button onClick={sendMessage}>Send message</button></div>
            </div>
        </div>
    );
};

export default Dialogs;
