import React from "react";
import css from "./User.module.css"
import photo from "../../../assets/images/user.png"
import {NavLink} from "react-router-dom";
import {USERS_API} from "../../../api/api";

const User = (props) => {

    let user = props.user;
    let disabled = props.followingInProgress.some(id => id === user.id)

    return <div className={css.user}>
        <div className={css.avatar_button}>
            <div>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.large != null ? user.photos.large : photo}/>
                </NavLink>
            </div>
            <div>
                {
                    user.followed
                        ? <button disabled={disabled} onClick={() => {
                            props.toggleFollowingProgress(true, user.id)
                            USERS_API.unfollow(user.id)
                                .then(response => {
                                    if (response.resultCode === 0) {
                                        props.unfollow(user.id)
                                    }
                                    props.toggleFollowingProgress(false, user.id)
                                })

                        }}>Unsubscribe</button>
                        : <button disabled={disabled} onClick={() => {
                            props.toggleFollowingProgress(true, user.id)
                            USERS_API.follow(user.id)
                                .then(response => {
                                    if (response.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                    props.toggleFollowingProgress(false, user.id)
                                })

                        }}>Subscribe</button>
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