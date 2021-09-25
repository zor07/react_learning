import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    let name = props.name;

    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={path}>{name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>;
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name='Anna' id='1'/>
                <DialogItem name='Kristine' id='2'/>
                <DialogItem name='Ammy' id='3'/>
                <DialogItem name='Sasha' id='4'/>
            </div>
            <div className={s.separatorLine}/>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='Hello'/>
                <Message message='Bye!'/>
                <Message message='Bye!'/>
            </div>
        </div>
    );
}

export default Dialogs;