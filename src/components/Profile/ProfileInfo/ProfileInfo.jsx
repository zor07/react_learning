import React from 'react';
import css from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import defaultAvatar from "../../../assets/images/default_avatar.jpg"
import ProfileStatusOnHooks from "./ProfileStatusOnHooks";
import ProfileData from "./ProfileData";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={css.content}>
            <ProfileFullName fullName={profile.fullName}/>
            <ProfileStatusOnHooks status={status}
                                  isOwner={isOwner}
                                  updateStatus={updateStatus}/>

            <div className={css.row}>
                <div className={css.avatar + ' ' + css.column}>
                    <img alt={''} src={profile.photos.large || defaultAvatar}/>
                    <div>
                        {isOwner &&
                        <input type="file" onChange={onMainPhotoSelected}/>

                        }
                    </div>
                </div>
                <div className={css.column}>
                    <ProfileData profile={profile}/>

                </div>
            </div>
        </div>
    );

}

export const ProfileFullName = ({fullName}) => {
    return <div>
        <h2>
            {fullName}
        </h2>
    </div>
}

export default ProfileInfo;