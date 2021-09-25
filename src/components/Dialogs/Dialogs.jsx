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

let dialogs = [
    {id:'1', name:'Anna'},
    {id:'2', name:'Kristine'},
    {id:'3', name:'Ammy'},
    {id:'4', name:'Sasha'},
    {id:'5', name:'Vika'},
    {id:'6', name:'Victor'},

]

let messages = [
    {id:'1', message:'Anna'},
    {id:'2', message:'Hi'},
    {id:'3', message:'Hello'},
    {id:'4', message:'Bye'},
    {id:'5', message:'Bye'}
]

let dialogsElements = dialogs
    .map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

let messagesElements = messages
    .map(message => <Message message={message.message} />);

const Dialogs = () => {
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