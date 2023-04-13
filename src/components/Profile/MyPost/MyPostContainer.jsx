import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let newPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return <MyPost updateNewPostText={newPostChange} onAddPost={addPost} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} />
}

export default MyPostContainer;