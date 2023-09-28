import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if(!profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.avatar}>
            <img src={profile.photos.large} />
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