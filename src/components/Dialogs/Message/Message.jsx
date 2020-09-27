import React from "react";
import css from './Message.module.css';

const Message = (props) => {
    return (
        <div className={css.messageBox}>
                <div className={css.message + ' ' + (props.state.income ? css.income : css.outcome)}>
                    <b>{props.state.sender}:</b><br/>
                    {props.state.message}
                </div>
        </div>
    );
};

export default Message;
