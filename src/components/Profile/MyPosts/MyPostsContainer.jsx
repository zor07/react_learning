import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let addPost = () => {
        props.dispatch(addPostActionCreator());
        props.dispatch(updateNewPostTextActionCreator(''));
    }

    let onPostChange = (text) => {
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return <MyPosts posts={props.posts}
                    addPost={addPost}
                    onPostChange={onPostChange}/>;
}

export default MyPostsContainer;