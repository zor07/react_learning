import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


let postData = [
    {id: '1', message: 'Spank me!', likesCount: '15'},
    {id: '1', message: 'Please, daddy!', likesCount: '2'}
]

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;