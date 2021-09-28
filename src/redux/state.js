import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Spank me!', likesCount: 15},
            {id: 1, message: 'Please, daddy!', likesCount: 2}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Anna'},
            {id: 2, name: 'Kristine'},
            {id: 3, name: 'Ammy'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Vika'},
            {id: 6, name: 'Victor'},
        ],
        messages: [
            {id: 1, sender: 'Me', type: 'outgoing', message: 'Anna'},
            {id: 2, sender: 'Me', type: 'outgoing', message: 'Hi'},
            {id: 3, sender: 'Anna', type: 'incoming', message: 'Hello'},
            {id: 4, sender: 'Me', type: 'outgoing', message: 'Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message.'},
            {id: 5, sender: 'Anna', type: 'incoming', message: 'Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message. Long message.'},

        ]
    },
    sidebar: {
        friends: [
            { name: 'Anna', imgSrc: 'https://intim-mall.ru/images/thumbnails/1223/1000/detailed/250/154335.jpg' },
            { name: 'Kristine', imgSrc: 'https://1.bp.blogspot.com/-IRT6j8h_fqk/XN9yeP_ojII/AAAAAAAATG0/9Av70aLOzJoDmaOMLjRFB8bhYQO0MvRhwCKgBGAs/s1600/45612837_361298791302732_5759895938742232043_n.jpg' },
            { name: 'Ammy', imgSrc: 'https://steamuserimages-a.akamaihd.net/ugc/28479983632518879/DDECB815BB7CD6E0D56C1CF8B6DBE9CE5F94BC29/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true' },
            { name: 'Vika', imgSrc: 'https://sun9-60.userapi.com/c841228/v841228265/fed8/Dhjv4bMjHSc.jpg'},
            { name: 'Sasha', imgSrc: 'https://s45.radikal.ru/i109/1107/5e/8db777456d5c.png' }
        ]
    }
}


export let addMessage = (messageText) => {
    let message = {
        id: 1,
        sender: 'Me',
        type: 'outgoing',
        message: messageText
    }

    state.dialogsPage.messages.push(message);
    rerenderEntireTree(state);
}

export let addPost = (postMessage) => {
    let post = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.push(post);
    rerenderEntireTree(state);
}


export default state;
