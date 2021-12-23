import React from 'react';
import css from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import defaultAvatar from "../../../assets/images/default_avatar.jpg"
import ProfileStatusOnHooks from "./ProfileStatusOnHooks";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader />
    }

    const contacts = profile.contacts;

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length > 0) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={css.content}>

            <div className={css.row}>
                <div className={css.avatar + ' ' + css.column}>
                    <img alt={''} src={profile.photos.large || defaultAvatar}/>
                    <div>
                        { isOwner &&
                            <input type="file" onChange={onMainPhotoSelected}/>

                        }
                    </div>
                </div>
                <div className={css.column}>
                    <h2>Contacts</h2>
                    <ul>
                        { contacts.facebook &&
                            <li>Facebook: {contacts.facebook} </li>
                        }
                        { contacts.website &&
                            <li>Website: {contacts.website}</li>
                        }
                        { contacts.vk &&
                            <li>VK: {contacts.vk}</li>
                        }
                        { contacts.twitter &&
                            <li>Twitter: {contacts.twitter}</li>
                        }
                        { contacts.instagram &&
                            <li>Instagram: {contacts.instagram}</li>
                        }
                        { contacts.youtube &&
                            <li>Youtube: {contacts.youtube}</li>
                        }
                        { contacts.github &&
                            <li>Github: {contacts.github}</li>
                        }
                        { contacts.mainLink &&
                            <li>Main Link: {contacts.mainLink}</li>
                        }
                    </ul>

                </div>
            </div>


            <div className={css.description}>
                {profile.fullName &&
                <h2>
                    {profile.fullName}
                </h2>
                }
                {profile.aboutMe &&
                <p>
                    {profile.aboutMe}
                </p>
                }
                <ProfileStatusOnHooks status={status}
                               userId={profile.userId}
                               updateStatus={updateStatus}/>
            </div>
        </div>
    );

}

export default ProfileInfo;