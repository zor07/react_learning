import React from "react";
import css from "./User.module.css"
import photo from "../../../assets/images/user.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const User = (props) => {

    let user = props.user;

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
                        ? <button onClick={() => {

                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, { withCredentials: true, headers: {
                                    "API-KEY": "cf33d654-6242-4d8e-9684-14db21c7b808"
                                }})
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unfollow(user.id)
                                    }
                                })
                        }}>Unsubscribe</button>
                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, { withCredentials: true, headers: {
                                    "API-KEY": "cf33d654-6242-4d8e-9684-14db21c7b808"
                                }})
                                .then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
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