import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <div className={s.posts}>
                <Post messages='Hello!' likesCount='8' />
                <Post messages='How are you?' likesCount='24' />
            </div>
        </div>
    )
}

export default MyPost;