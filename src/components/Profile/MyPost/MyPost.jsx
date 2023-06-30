import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";

const MyPost = (props) => {

    let postElement = props.postData.map(post => <Post messages={post.messages} likesCount={post.likesCount} id={post.id} />);

    let addPost = (values) => {
        props.onAddPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
    <div>
        <Field component='textarea' name='newPostText' placeholder='Add a new post' />
    </div>
    <div>
        <button className={s.button}>Send</button>
    </div>
</form>
}

const AddNewPostFormRedux = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm);

export default MyPost;