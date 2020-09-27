import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message:'Hello world!', likesCount:25},
    {id: 2, message:'It\'s my new post!', likesCount:5}
];

let dialogs = [
    {id: 1, name: 'Pasha'},
    {id: 2, name: 'Max'},
    {id: 3, name: 'Lex'}
];

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hi'},
    {id: 3, message: 'Bla Bla text'},
    {id: 3, message: 'Bla'},
    {id: 3, message: 'asdasd'}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}
            dialogs={dialogs}
            messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
