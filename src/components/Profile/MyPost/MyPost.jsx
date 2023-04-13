import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {

    let postElement = props.postData.map(post => <Post messages={post.messages} likesCount={post.likesCount} id={post.id} />);

    let addPost = () => {
        props.onAddPost();
    };

    let newPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={newPostChange} value={props.newPostText} placeholder='Add a new post'></textarea>
                </div>
                <div>
                    <button onClick={addPost} className={s.button}>Send</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPost;