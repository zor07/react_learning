import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: '1', name: 'Anna'},
    {id: '2', name: 'Kristine'},
    {id: '3', name: 'Ammy'},
    {id: '4', name: 'Sasha'},
    {id: '5', name: 'Vika'},
    {id: '6', name: 'Victor'},
]

let messages = [
    {id: '1', message: 'Anna'},
    {id: '2', message: 'Hi'},
    {id: '3', message: 'Hello'},
    {id: '4', message: 'Bye'},
    {id: '5', message: 'Bye'}
]

let posts = [
    {id: '1', message: 'Spank me!', likesCount: '15'},
    {id: '1', message: 'Please, daddy!', likesCount: '2'}
]

let data = {
    dialogsData: {
        dialogs: dialogs,
        messages: messages
    },
    posts: posts
}


ReactDOM.render(
    <React.StrictMode>
        <App data={data}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
