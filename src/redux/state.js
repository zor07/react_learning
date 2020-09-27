let state = {
    profilePage: {
        posts: [
            {id: 1, message:'Hello world!', likesCount:25},
            {id: 2, message:'It\'s my new post!', likesCount:5}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Pasha'},
            {id: 2, name: 'Max'},
            {id: 3, name: 'Lex'}
        ],
        messages: [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'Hi'},
            {id: 3, message: 'Bla Bla text'},
            {id: 3, message: 'Bla'},
            {id: 3, message: 'asdasd'}
        ]
    },
    sidebar: {
        friendList: [
            {name: 'Pasha',  avaUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'},
            {name: 'Max',    avaUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'},
            {name: 'Penelopa',    avaUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'},
            {name: 'Nastya', avaUrl: 'https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png'}
        ]
    }
}

export default state;