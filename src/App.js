import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'  render={ () =>
                        <Profile profilePage={props.state.profilePage}
                                 dispatch={props.dispatch}   />}/>
                    <Route path='/dialogs'  render={ () =>
                        <DialogsContainer dialogsPage={props.state.dialogsPage}
                                 dispatch={props.dispatch}  />  }/>
                    <Route path='/news'     render={ () => <News />}/>
                    <Route path='/music'    render={ () => <Music />}/>
                    <Route path='/settings' render={ () => <Settings />}/>
                </div>

            </div>
        </BrowserRouter>
    );
}

export default App;
