import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm, reset} from "redux-form";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} type={message.type} sender={message.sender}/>);

    const onSendMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.separatorLine}/>
            <div className={s.messages}>
                {messagesElements}
                <NewMessageReduxForm onSubmit={onSendMessage} />
            </div>
        </div>
    );
}

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea'
                        name='newMessageBody'
                        placeholder='Write your message'
                        rows={5}
                        cols={100}/>
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

const NewMessageReduxForm = reduxForm({form: 'newMessageForm'})(AddMessageForm)

export default Dialogs;