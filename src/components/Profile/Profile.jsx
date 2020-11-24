import React from "react";
import css from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={css.content}>
            <div>
                <img className={css.main_img} src='https://i.pinimg.com/originals/9e/13/96/9e13961797e766715094359972b12816.jpg'/>
            </div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;