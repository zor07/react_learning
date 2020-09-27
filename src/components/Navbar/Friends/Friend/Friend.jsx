import React from "react";
import css from "./Friend.module.css"


const Friend = (props) => {
    return (
        <div className={css.friend}>
            <img src={props.avaUrl}/>
            <div>{props.name}</div>
        </div>
    );
}

export default Friend;