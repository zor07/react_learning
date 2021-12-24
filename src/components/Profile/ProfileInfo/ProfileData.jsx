import css from "./ProfileInfo.module.css";
import React from "react";

const ProfileData = ({profile, goToEditMode, isOwner}) => {
    return (
        <div>
            <div>
                <b>Looking for a job: </b>{profile.lookingForAJob ? "Yes" : "No"}
            </div>
            <div>
                <b>My skills: </b> {profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About me: </b> {profile.aboutMe}
            </div>

            <div>
                <b>Contacts:</b>
                {
                    Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} title={key} value={profile.contacts[key]}/>
                    })
                }
            </div>
            {isOwner &&
            <div className={css.editButton}>
                <button onClick={goToEditMode}>Edit</button>
            </div>
            }
        </div>
    )
}

const Contact = ({title, value}) => {

    // if (!value) {
    //     return ''
    // }
    return <div className={css.contact}>
        <b>{title}: </b> {value}
    </div>

}

export default ProfileData
