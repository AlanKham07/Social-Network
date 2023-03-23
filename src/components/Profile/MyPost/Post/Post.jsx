import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://kartinkin.net/uploads/posts/2022-12/1670675570_8-kartinkin-net-p-kartinka-siluet-cheloveka-instagram-8.png" />
                {props.messages}
            </div>
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    )
}

export default Post;