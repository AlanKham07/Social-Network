import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if(!profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if(e.target.files.lenght) {
            savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.avatar}>
            <img src={profile.photos.large || userPhoto} />
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            <div>{profile.aboutMe}</div>
            <div>{profile.contacts.facebook}</div>
            <div>{profile.contacts.instagram}</div>
            <div>{profile.lookingForAJobDescription}</div>
            </div>
            <div className={s.userData}>
                {profile.fullName}
            </div>
        </div>

    )

}

export default ProfileInfo;