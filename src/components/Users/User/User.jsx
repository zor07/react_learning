import React from "react";
import css from "./User.module.css"
import photo from "../../../assets/images/user.png"
import {NavLink} from "react-router-dom";

const User = (props) => {
    let user = props.user;
    let disabled = props.followingInProgress.some(id => id === user.id)

    return <div className={css.user}>
        <div className={css.avatar_button}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img alt={''} src={user.photos.large != null ? user.photos.large : photo}/>
                </NavLink>
            </div>
            <div>
                {
                    user.followed
                        ? <button disabled={disabled} onClick={() => { props.unfollow(user.id) }}>Unsubscribe</button>
                        : <button disabled={disabled} onClick={() => { props.follow(user.id) }}>Subscribe</button>
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