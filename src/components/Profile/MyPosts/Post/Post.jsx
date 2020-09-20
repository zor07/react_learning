import React from "react";
import css from './Post.module.css';

const Post = (props) => {

    return (
            <div className={css.item}>
                <img src='https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'/>
                {props.message}
                <div>
                    <span>{props.likes} likes</span>
                </div>
            </div>
    );
}

export default Post;