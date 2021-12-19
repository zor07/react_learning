import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";


/*

React.memo - allows to optimize render.

Alternative 1:

class MyComponent extends React.Component {
    shouldComponentUpdate(prevProps, prevState) {
        // render will be called if shouldComponentUpdate returns true
        nextProps != this.props || nextState != this.state;
    }
    render() {
        return <div></div>
    }
}

Alternative 2:

class MyComponent extends React.PureComponent {
    render() {
        return <div></div>
    }
}

 */

const MyPosts = React.memo(props => {

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
})

const maxLength10 = maxLengthCreator(10)
const NewPostForm = ({handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
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