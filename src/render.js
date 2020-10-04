import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage, updateNewMessageText, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     sendMessage={sendMessage}
                     updateNewMessageText={updateNewMessageText}
                     updateNewPostText={updateNewPostText}
                     addPost={addPost}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
