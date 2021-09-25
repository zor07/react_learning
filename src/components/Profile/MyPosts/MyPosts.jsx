import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message='Do you want me?' likesCount='15'/>
                <Post message='Of course I do' likesCount='2'/>
            </div>
        </div>
    );
}

export default MyPosts;