import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {

    let postData = [
        { messages: 'Hello', likesCount: 9, id: 1 },
        { messages: 'How are you?', likesCount: 25, id: 2 }
    ]

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
                <Post messages={postData[0].messages} likesCount={postData[0].likesCount} />
                <Post messages={postData[1].messages} likesCount={postData[1].likesCount} />
            </div>
        </div>
    )
}

export default MyPost;