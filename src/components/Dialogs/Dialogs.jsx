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

let dialogsData = [
    {id:'1', name:'Anna'},
    {id:'2', name:'Kristine'},
    {id:'3', name:'Ammy'},
    {id:'4', name:'Sasha'},
    {id:'5', name:'Vika'}
]

let messagesData = [
    {id:'1', message:'Anna'},
    {id:'2', message:'Hi'},
    {id:'3', message:'Hello'},
    {id:'4', message:'Bye'},
    {id:'5', message:'Bye'}
]

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.separatorLine}/>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    );
}

export default Dialogs;