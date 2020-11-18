import React from "react";
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";


const Dialogs = (props) => {

    let dialogElements = props.state.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messageElements = props.state.messages
        .map(msg => <Message state={msg}/>)

    let newMessageElement = React.createRef();

    let onChangeNewMessageText = () => {
        let text = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
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
                               ref={newMessageElement}
                               value={props.state.newMessageText}
                               onChange={onChangeNewMessageText} /></div>
                <div><button onClick={sendMessage}>Send message</button></div>
            </div>
        </div>
    );
};

export default Dialogs;
