import React from "react";
import css from "./User.module.css"


const User = (props) => {
    return (
        <div className={css.user}>
            <img src={props.state.avaUrl}/>
            <div>{props.state.name}</div>
        </div>
    );
}

export default User;