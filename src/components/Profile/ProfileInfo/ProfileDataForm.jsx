import React from "react"
import { reduxForm } from "redux-form";
import s from './ProfileInfo.module.css';
import { createField, Input, Textarea } from "../../common/Preloader/FormsControls/FormsControls"

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={s.formSummaryError}>
            {error}
        </div>
        }
        <div><button>Save</button></div>
        <div className={s.userData}>
            <b>Full name</b>: {createField('Full name', 'fullName', Input, [])}
        </div>
        <div>
            <b>Looking for a job</b>: {createField('', 'lookingForAJob', Input, [], { type: 'checkbox' })}
        </div>
        <div>
            <b>My professional skills</b>: {createField('My professional skills', 'lookingForAJobDescription', Textarea, [])}
        </div>
        <div>
            <b>About me</b>: {createField('About me', 'aboutMe', Textarea, [])}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <div key = {key}>
                    <b>{key}:</b> {createField(key, 'contacts.' + key, Input, [])}
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'editProfile' })(ProfileDataForm)

export default ProfileDataFormReduxForm;