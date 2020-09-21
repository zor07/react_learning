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

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                <DialogItem id={1} name={'Pasha'}/>
                <DialogItem id={2} name={'Max'}/>
                <DialogItem id={3} name={'Lex'}/>
            </div>
            <div className={css.messages}>
                <Message message={'Hello'}/>
                <Message message={'Hi'}/>
                <Message message={'Bla Bla text'}/>
            </div>
        </div>
    );
};

export default Dialogs;
