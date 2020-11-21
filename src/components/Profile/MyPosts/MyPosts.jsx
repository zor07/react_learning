import React from "react";
import css from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {

    let postElements = props.posts
        .map(post => <Post message={post.message} likes={post.likesCount} />)

    let newPostElement = React.createRef();

    let onChangeNewPostText = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    };

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea value={props.newPostText}
                          onChange={onChangeNewPostText}
                          ref={newPostElement}/>
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={css.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;