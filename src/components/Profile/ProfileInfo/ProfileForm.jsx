import css from "./ProfileInfo.module.css";
import React from "react";

const ProfileDataForm = ({profile, setEditMode}) => {
    return (
        <h1>FORM</h1>
        // <div>
        //     Form
        //     <div>
        //         <b>Looking for a job: </b>{profile.lookingForAJob ? "Yes" : "No"}
        //     </div>
        //     <div>
        //         <b>My skills: </b> {profile.lookingForAJobDescription}
        //     </div>
        //     <div>
        //         <b>About me: </b> {profile.aboutMe}
        //     </div>
        //
        //     <div>
        //         <b>Contacts:</b>
        //         {
        //             Object.keys(profile.contacts).map(key => {
        //                 return <Contact key={key} title={key} value={profile.contacts[key]}/>
        //             })
        //         }
        //     </div>
        // </div>
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

export default ProfileDataForm
