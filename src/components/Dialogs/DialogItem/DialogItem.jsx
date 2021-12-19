import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const DialogItem = ({id, name}) => {
    return (
        <div className={s.dialog}>
            <NavLink activeClassName={s.active} to={`/dialogs/${id}`}>{name}</NavLink>
        </div>
    );
}

export default DialogItem;