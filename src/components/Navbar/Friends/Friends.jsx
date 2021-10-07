import s from "./Friends.module.css";
import React from "react";
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friends = props.friends;

    let friendsElements = friends
        .map(friend => <Friend name={friend.name} imgSrc={friend.imgSrc}/>)

    return (
        <div className={s.friends}>
            <h4>Friends</h4>

            <div className={s.friendsList}>
                { friendsElements }
            </div>
        </div>

    )
}

export default Friends;