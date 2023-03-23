import React from "react";
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.banner}>
                <img src="https://i.ytimg.com/vi/dZkZ32nlOLI/maxresdefault.jpg" />
            </div>
            <div className={s.userPhoto}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4z6T7-k9HOuZw-XX23baJk2oNSIvFDamR7Q&usqp=CAU" />
            </div>
            <MyPost />
        </div>
    )
}

export default Profile;