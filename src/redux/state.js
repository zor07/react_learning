import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
            newMessageBody:''
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
        this.getState().profilePage = profileReducer(this.getState().profilePage, action);
        this.getState().dialogsPage = dialogsReducer(this.getState().dialogsPage, action);
        this.getState().sidebar = sidebarReducer(this.getState().sidebar, action);

        this._callSubscriber();
    }
};



export default store;
window.store = store;