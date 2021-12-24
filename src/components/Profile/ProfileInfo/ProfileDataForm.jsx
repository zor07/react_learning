import React from "react";
import css from "./ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Common/FormControls/FormControls";
import {maxLengthCreator} from "../../../utils/validators/validators";


const maxLength50 = maxLengthCreator(10)

const ProfileDataForm = ({profile, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <b>Looking for a job: </b>
                <Field component={Input}
                       name={'lookingForAJob'}
                       type='checkbox'/>
            </div>
            <div>
                <b>My skills: </b>
                <Field component={Textarea}
                       placeholder='My skills'
                       validate={[maxLength50]}
                       name={'lookingForAJobDescription'}/>
            </div>
            <div>
                <b>About Me: </b>
                <Field component={Textarea}
                       placeholder='My skills'
                       validate={[maxLength50]}
                       name={'aboutMe'}/>
            </div>

            <div>
                <b>Contacts:</b>
                {
                    Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} title={key} value={profile.contacts[key]}/>
                    })
                }
            </div>
            <div className={css.editSaveButton}>
                <button type={'submit'}>Save</button>
            </div>
        </form>
    )
}

const Contact = ({title}) => {
    return <div className={css.contact}>
        {title}:
        <Field component={Input}
               name={`contacts.${title}`}
               validate={[maxLength50]}
               placeholder={title} />
    </div>
}

export default reduxForm({form: 'edit-profile'})(ProfileDataForm)

