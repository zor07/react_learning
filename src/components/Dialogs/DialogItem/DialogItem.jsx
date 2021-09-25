import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    let name = props.name;

    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={path}>{name}</NavLink>
        </div>
    );
}

export default DialogItem;