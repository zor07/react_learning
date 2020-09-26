import React from "react";
import css from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink className={css.dialog} activeClassName={css.active} to={path}>{props.name}</NavLink>
        </div>
    );
};

const Message = (props) => {
    return (
        <div className={css.message}>{props.message}</div>
    );
};

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Pasha'},
        {id: 2, name: 'Max'},
        {id: 3, name: 'Lex'}
    ];

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'Bla Bla text'},
        {id: 3, message: 'Bla'},
        {id: 3, message: 'asdasd'}
    ];

    let dialogElements = dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messageElements = messages
        .map(msg => <Message message={msg.message}/>)

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {dialogElements}
            </div>
            <div className={css.messages}>
                {messageElements}
            </div>
        </div>
    );
};

export default Dialogs;
