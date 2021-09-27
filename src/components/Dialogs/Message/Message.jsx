import s from "./Message.module.css";
import React from "react";

const Message = (props) => {
    let type;
    if (props.type === 'incoming') {
        type = s.incoming
    } else {
        type = s.outgoing
    }

    return <div className={s.messageBox}>
        <div className={type}>
            <b>{props.sender}:</b><br/>
            {props.message}
        </div>
    </div>
}

export default Message;