import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let posts = [
    {id: '1', message: 'Spank me!', likesCount: '15'},
    {id: '1', message: 'Please, daddy!', likesCount: '2'}
]

const Profile = () => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={posts}/>
    </div>
}

export default Profile;