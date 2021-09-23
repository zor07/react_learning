import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.item}>
            <img src='https://i.pinimg.com/1200x/db/37/a2/db37a267f0f08fa6235b0c094f592d99.jpg'/>
            Post 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;