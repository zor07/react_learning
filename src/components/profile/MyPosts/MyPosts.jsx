import React from "react";
import css from './MyPosts.module.css';

const MyPosts = () => {

    return (
        <div className='posts'>
            My posts
            <div>
                new post
            </div>
            <div className={css.item}>
                post 1asd
            </div>
            <div>
                post 2
            </div>
        </div>
    );
}

export default MyPosts;