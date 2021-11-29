import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile/:userId' element={ <ProfileContainer />}/>
                        <Route path='/profile' element={ <ProfileContainer />}/>
                        <Route path='/dialogs' element={ <DialogsContainer />}/>
                        <Route path='/news' element={ <News/>}/>
                        <Route path='/music' element={ <Music/>}/>
                        <Route path='/settings' element={ <Settings/>}/>
                        <Route path='/users' element={ <UsersContainer />}/>
                        <Route path='/login' element={ <Login />}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
