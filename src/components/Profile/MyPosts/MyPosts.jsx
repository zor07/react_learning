import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let posts = props.posts;

    let postElements = posts
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3> My Posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;