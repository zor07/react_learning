import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let addPost = () => {
                store.dispatch(addPostActionCreator());
                store.dispatch(updateNewPostTextActionCreator(''));
            }

            let onPostChange = (text) => {
                store.dispatch(updateNewPostTextActionCreator(text));
            }
            return <MyPosts posts={store.getState().profilePage.posts}
                            addPost={addPost}
                            onPostChange={onPostChange}/>
        }}
    </StoreContext.Consumer>
}

export default MyPostsContainer;