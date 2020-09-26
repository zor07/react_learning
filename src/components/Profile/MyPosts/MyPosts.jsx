import React from "react";
import css from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message:'Hello world!', likesCount:25},
        {id: 2, message:'It\'s my new post!', likesCount:5}
    ];

    let postElements = posts
        .map(post => <Post message={post.message} likes={post.likesCount} />)



    return (
        <div className={css.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div className={css.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;