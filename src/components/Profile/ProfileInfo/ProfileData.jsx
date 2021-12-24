import css from "./ProfileInfo.module.css";
import React from "react";

const ProfileData = ({profile, goToEditMode, isOwner}) => {
    return (
        <div>
            <div className={css.profileDataItem}>
                <b>Looking for a job: </b>{profile.lookingForAJob ? "Yes" : "No"}
            </div>
            <div className={css.profileDataItem}>
                <b>My skills: </b> {profile.lookingForAJobDescription}
            </div>
            <div className={css.profileDataItem}>
                <b>About me: </b> {profile.aboutMe}
            </div>

            <div className={css.profileDataItem}>
                <b>Contacts:</b>
                {
                    Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} title={key} value={profile.contacts[key]}/>
                    })
                }
            </div>
            {isOwner &&
            <div className={css.editSaveButton}>
                <button onClick={goToEditMode}>Edit</button>
            </div>
            }
        </div>
    )
}

const Contact = ({title, value}) => {
    if (!value) return ''
    return  <div className={`${css.contact} ${css.profileDataItem}`}>
        <b>{title}: </b> {value}
    </div>

}

export default ProfileData
