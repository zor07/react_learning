import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


const MyPosts = (props) => {

    let postElements = props.posts
        .map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let onSubmitNewPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.postsBlock}>
            <h3> My Posts</h3>
            <NewPostReduxForm onSubmit={onSubmitNewPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

const maxLength10 = maxLengthCreator(10)
const NewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength10]}
                       name='newPostBody'
                       placeholder='Write your post'/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const NewPostReduxForm = reduxForm({form: 'newPostForm'})(NewPostForm)

export default MyPosts;