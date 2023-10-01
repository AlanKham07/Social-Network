import React from "react";
import s from './Profile.module.css';
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileBanner />
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} 
                profile={props.profile} status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile}/>
            <MyPostContainer />
        </div>
    )
}

export default Profile;