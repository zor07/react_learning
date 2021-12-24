import React from "react";
import css from "./ProfileInfo.module.css";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../Common/FormControls/FormControls";
import {maxLengthCreator} from "../../../utils/validators/validators";
import formCss from "../../Common/FormControls/FormControls.module.css";


const maxLength50 = maxLengthCreator(50)

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={css.profileDataItem}>
                <b>Full name: </b>
                <Field component={Input}
                       name={'fullName'}
                       placeholder='Full name'
                       validate={[maxLength50]}/>
            </div>
            <div className={css.profileDataItem}>
                <b>Looking for a job: </b>
                <Field component={Input}
                       name={'lookingForAJob'}
                       type='checkbox'/>
            </div>
            <div className={css.profileDataItem}>
                <b>My skills: </b>
                <Field component={Textarea}
                       placeholder='My skills'
                       validate={[maxLength50]}
                       name={'lookingForAJobDescription'}/>
            </div>
            <div className={css.profileDataItem}>
                <b>About Me: </b>
                <Field component={Textarea}
                       placeholder='About me'
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
            { error &&
            <div className={formCss.formCommonError}>
                {error}
            </div>
            }
            <div className={css.editSaveButton}>
                <button type={'submit'}>Save</button>
            </div>
        </form>
    )
}

const Contact = ({title}) => {
    return <div className={`${css.contact} ${css.profileDataItem}`}>
        {title}:
        <Field component={Input}
               name={`contacts.${title}`}
               validate={[maxLength50]}
               placeholder={title} />
    </div>
}

export default reduxForm({form: 'edit-profile'})(ProfileDataForm)

