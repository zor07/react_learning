
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message:'Hello world!', likesCount:25},
                {id: 2, message:'It\'s my new post!', likesCount:5}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Pasha'},
                {id: 2, name: 'Max'},
                {id: 3, name: 'Lex'}
            ],
            messages: [
                {id: 1, message: 'Привет!', sender:'Pasha', income: true},
                {id: 2, message: 'Хай!', sender:'Me', income: false},
                {id: 3, message: 'Как твои дела?', sender:'Pasha', income: true},
                {id: 4, message: 'Все равно узнаешь...', sender:'Me', income: false},
                {id: 5, message: 'Это твоя лучшая зима...', sender:'Pasha', income: true},
                {id: 6, message: 'Все хорошо?', sender:'Me', income: false}
            ],
            newMessageText:''
        },
        sidebar: {
            friendList: [
                {name: 'Pasha',  avaUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'},
                {name: 'Max',    avaUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'},
                {name: 'Penelopa',    avaUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'},
                {name: 'Nastya', avaUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this.getState().profilePage.newPostText,
                likesCount: 0
            };

            this.getState().profilePage.posts.push(newPost);
            this.getState().profilePage.newPostText='';
            this._callSubscriber();

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this.getState().profilePage.newPostText=action.newPostText;
            this._callSubscriber();

        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: this.getState().dialogsPage.messages.length,
                message: this.getState().dialogsPage.newMessageText,
                sender:'Me',
                income: false
            };

            this.getState().dialogsPage.messages.push(newMessage);
            this.getState().dialogsPage.newMessageText = '';
            this._callSubscriber();

        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this.getState().dialogsPage.newMessageText=action.newMessageText;
            this._callSubscriber();

        }
    }

};

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageTextActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text
});
export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text
});


export default store;
window.store = store;