import React from "react";
import css from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink className={css.dialog} activeClassName={css.active} to={path}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;
