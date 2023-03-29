import React from "react";
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    debugger;
    return (
        <div className={s.content}>
            <ProfileBanner />
            <ProfileInfo />
            <MyPost postData={props.state.postData} />
        </div>
    )
}

export default Profile;