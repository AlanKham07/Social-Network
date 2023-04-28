import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.avatar}>
            <img src={props.profile.photos.large} />
            <div>{props.profile.aboutMe}</div>
            <div>{props.profile.contacts.facebook}</div>
            <div>{props.profile.contacts.instagram}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
            </div>
            <div className={s.userData}>
                {props.profile.fullName}
            </div>
        </div>

    )

}

export default ProfileInfo;