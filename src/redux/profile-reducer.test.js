import profileReducer, {addPost, deletePost} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, message: 'Spank me!', likesCount: 15},
        {id: 2, message: 'Please, daddy!', likesCount: 2}
    ],
    profile: null,
    status: ''
}

it('new post should be added', () => {
    // data
    let action = addPost("new post")

    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.posts.length).toBe(3)
})

it('message of new post should be correct', () => {
    // data
    let action = addPost("new post")

    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.posts[2].message).toBe("new post")
})

it('after deleting length of messages should decrement', () => {
    // data
    let action = deletePost(1);

    // action
    let newState = profileReducer(state, action);

    // expectation
    expect(newState.posts.length).toBe(1);
});

it('should not delete post if wrong id passed', () => {
    // data
    let action = deletePost(433332);

    // action
    let newState = profileReducer(state, action);

    // expectation
    expect(newState.posts.length).toBe(2);
});