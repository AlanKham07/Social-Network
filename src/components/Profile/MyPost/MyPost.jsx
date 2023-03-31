import React from "react";
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {

    let postElement = props.postData.map(post => <Post messages={post.messages} likesCount={post.likesCount} id={post.id} />);
    
    let newPostElement = React.createRef();
    
    let addPost = () => {
        props.addPost();
        // При изменении в textarea вызывается newPostChange, берется содержимое поля и вызывается функция updateNewPostText,
        //  в объекст newPostText помещается содержимое поля и ререндерится дерево. 
        //  Далее при нажатии кнопки добавления поста вызывается функция addPost, которая лежит в MyPost, она в свою очередь вызывает функцию addPost, 
        //  которая лежит в state.js и создается объект(пост), в котором сообщение берется из объекта newPostText и он пушится в посты, затем дерево ререндерится.
    };

    let newPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={newPostChange} ref={ newPostElement } value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={ addPost } className={s.button}>Send</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPost;