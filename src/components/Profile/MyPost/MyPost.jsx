import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                <textarea></textarea>
                </div>
                <div>
                <button>Send</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post messages='Hello!' likesCount='8' />
                <Post messages='How are you?' likesCount='24' />
            </div>
        </div>
    )
}

export default MyPost;