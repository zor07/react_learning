import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


let posts = [
    {id: '1', message: 'Spank me!', likesCount: '15'},
    {id: '1', message: 'Please, daddy!', likesCount: '2'}
]

let postElements = posts
    .map(post => <Post message={post.message} likesCount={post.likesCount}/>)

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
                { postElements }
            </div>
        </div>
    );
}

export default MyPosts;