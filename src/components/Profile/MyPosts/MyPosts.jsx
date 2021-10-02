import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {

    let posts = props.posts;

    let postElements = posts
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        props.dispatch(updateNewPostTextActionCreator(''));
    }

    let onPostChange = () => {
        props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));
    }

    return (
        <div className={s.postsBlock}>
            <h3> My Posts</h3>
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          onChange={onPostChange}  />
            </div>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;