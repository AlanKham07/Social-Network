import React from "react";
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileBanner />
            <ProfileInfo />
            <MyPost />
        </div>
    )
}

export default Profile;