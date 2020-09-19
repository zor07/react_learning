import React from "react";
import css from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>

            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div className={css.posts}>
                <Post message='Hello world!' likes={25} />
                <Post message="It's my new post!" likes={5}/>
            </div>
        </div>
    );
}

export default MyPosts;