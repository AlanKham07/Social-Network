import React from "react";
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
import ProfileBanner from "./ProfileBanner/ProfileBanner";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileBanner />
            <ProfileInfo />
            <MyPost postData={props.profilePage.postData}
                    newPostText={props.profilePage.newPostText}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText} />
        </div>
    )
}

export default Profile;