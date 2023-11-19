import React, { useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })

    }
    return (
        <div className={s.profileInfo}>
            <div className={s.avatar}>
                <img src={profile.photos.large || userPhoto} />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            </div>

            <div className={s.profileData}>
                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                    : <ProfileData goToEditMode={() => { setEditMode(true) }} isOwner={isOwner} profile={profile} />}
            </div>
        </div>

    )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return <div className={s.edit}>
        <div className={s.editName}>
        <div className={s.userData}>
            <b>Имя сотрудника</b>: {profile.fullName}
        </div>
        {isOwner && <div><button className={s.button} onClick={goToEditMode}><span>ред.</span></button></div>}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>Профессиональные навыки</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>Обо мне</b>: {profile.aboutMe}
        </div>
        <div>
            <b>Связаться</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div className={s.contacts}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;