import React from "react";
import css from './MyPosts.module.css';

const MyPosts = () => {

    return (
        <div className='posts'>
            My posts
            <div>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Remove</button>
            </div>
            <div className={css.item}>
                <img src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
                post 1asd
            </div>
            <div>
                post 2
            </div>
        </div>
    );
}

export default MyPosts;