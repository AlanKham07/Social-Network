import React from "react";
import s from './Profile.module.css';
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileBanner />
            <ProfileInfo />
            <MyPostContainer store={props.store} />
        </div>
    )
}

export default Profile;