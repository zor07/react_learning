import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().profilePage;;

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                posts={state.posts}
                                newPostText={state.newPostText}/>
            }
        }
    </StoreContext.Consumer>;
};

export default MyPostsContainer;