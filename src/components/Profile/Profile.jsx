import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfileData}) => {

    return <div>
        <ProfileInfo profile={profile}
                     status={status}
                     isOwner={isOwner}
                     savePhoto={savePhoto}
                     saveProfileData={saveProfileData}
                     updateStatus={updateStatus}/>
        <MyPostsContainer />
    </div>
}

export default Profile;