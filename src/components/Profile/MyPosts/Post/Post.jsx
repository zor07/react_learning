import React from 'react';
import s from './Post.module.css'

const Post = ({message, likesCount}) => {
    return (
        <div className={s.item}>
            <div className={s.avatar}>
                <img alt={''} src='https://intim-mall.ru/images/thumbnails/1223/1000/detailed/250/154335.jpg'/>
                {message}
            </div>

            <div className={s.likeBlock}>
                <img alt={''} src='https://www.digitalbizmagazine.com/wp-content/uploads/2019/04/corazon.png'/> <span>{likesCount}</span>
            </div>
        </div>
    );
}

export default Post;