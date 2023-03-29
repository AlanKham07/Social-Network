import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {

    let postElement = props.postData.map(post => <Post messages={post.messages} likesCount={post.likesCount} id={post.id} />);

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
                {postElement}
            </div>
        </div>
    )
}

export default MyPost;