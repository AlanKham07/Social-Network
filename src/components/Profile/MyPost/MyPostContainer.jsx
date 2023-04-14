import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../storeContext";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let newPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };

                return <MyPost updateNewPostText={newPostChange} onAddPost={addPost} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} />
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostContainer;