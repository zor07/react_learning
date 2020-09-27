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
            {id: 1, message: 'Привет!', sender:'Pasha', income: true},
            {id: 2, message: 'Хай!', sender:'Me', income: false},
            {id: 3, message: 'Как твои дела?', sender:'Pasha', income: true},
            {id: 4, message: 'Все равно узнаешь...', sender:'Me', income: false},
            {id: 5, message: 'Это твоя лучшая зима...', sender:'Pasha', income: true},
            {id: 6, message: 'Все хорошо?', sender:'Me', income: false}
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