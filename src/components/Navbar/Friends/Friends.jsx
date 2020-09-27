import React from "react";
import css from './Friends.module.css'
import User from "./User/User";

let Friends = (props) => {

    let friendsElements = props.state
        .map( (user) => <User state={user} /> );

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