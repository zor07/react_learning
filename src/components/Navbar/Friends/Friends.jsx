import React from "react";
import css from './Friends.module.css'
import Friend from "./Friend/Friend";

let Friends = (props) => {
    debugger;
    let friendsElements = props.state
        .map( (friend) => <Friend name={friend.name} avaUrl={friend.avaUrl} /> );

    return (
        <div className={css.friends}>
            <h3>Friends:</h3>
            <div className={css.friendsList}>
                {friendsElements}
            </div>

        </div>
    );
}

export default Friends;