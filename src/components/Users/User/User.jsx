import React from "react";
import css from "./User.module.css"

const User = (props) => {

    let user = props.user;

    return <div className={css.user}>
        <div className={css.avatar_button}>
            <div><img src={user.photoUrl} /></div>
            <div>
                {
                    user.followed
                        ? <button onClick={() => { props.unfollow(user.id) }}>Unsubscribe</button>
                        : <button onClick={() => { props.follow(user.id) }}>Subscribe</button>
                }
            </div>
        </div>
        <div className={css.name_status}>
            <div className={css.name}>{user.fullName}</div>
            <div>{user.status}</div>
        </div>

        <div className={css.location}>
            <div>{user.location.city}</div>
            <div>{user.location.country}</div>
        </div>

    </div>


}

export default User;