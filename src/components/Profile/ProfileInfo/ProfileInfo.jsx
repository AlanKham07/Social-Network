import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.avatar}>
                <img src="https://android-obzor.com/wp-content/uploads/2022/03/chto-nuzhno-znat-pro-introverta-yesli-on-vash-partner_1-1.jpg" />
            </div>
            <div className={s.userData}>
                Alan Khamokov
            </div>
        </div>

    )

}

export default ProfileInfo;