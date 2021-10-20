import React from "react";
import css from "./User.module.css"
import photo from "../../../assets/images/user.png"

const User = (props) => {

    let user = props.user;

    return <div className={css.user}>
        <div className={css.avatar_button}>
            <div><img src={user.photos.large != null ? user.photos.large : photo} /></div>
            <div>
                {
                    user.followed
                        ? <button onClick={() => { props.unfollow(user.id) }}>Unsubscribe</button>
                        : <button onClick={() => { props.follow(user.id) }}>Subscribe</button>
                }
            </div>
        </div>
        <div className={css.name_status}>
            <div className={css.name}>{user.name}</div>
            <div className={css.status}>{user.status}</div>
        </div>

        <div className={css.location}>
            <div>Saint-Petersburg</div>
            <div>Russia</div>
        </div>

    </div>


}

export default User;