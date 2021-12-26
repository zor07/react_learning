import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {BrowserRouter, HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {UsersContainer} from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import Preloader from "./components/Common/Preloader/Preloader";
import {compose} from "redux";
import {displayError, initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
import ModalError from "./components/Common/Modal/ModalError";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const News = React.lazy(() => import('./components/News/News'))

class App extends React.Component {

    displayError(error) {
        this.props.displayError(error)
    }

    componentDidMount() {
        this.props.initializeApp()
        const displayError = this.displayError.bind(this);
        window.addEventListener("unhandledrejection", function(promiseRejectionEvent) {
            displayError(promiseRejectionEvent.reason.message)
        });
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", function(promiseRejectionEvent) {});
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <ModalError errors={this.props.errors} showErrors={this.props.showErrors} />
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/" element={<Navigate to="/profile" />} />
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path='/dialogs' element={<DialogsContainer/>}/>
                            <Route path='/dialogs/:dialogId' element={<DialogsContainer/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<Login/>}/>
                            <Route path='*' element={<div>404 NOT FOUND</div>}/>
                        </Routes>
                    </React.Suspense>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
    showErrors: state.app.showErrors,
    errors: state.app.errors
})

const AppContainer = compose(
    connect(mapStateToProps, {initializeApp, displayError}))
(App);

const AppMain = () => {
    return <Provider store={store}>
        {/* Only for demo purpose on gh pages. Use Browser router on prod*/}
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    </Provider>
}

export default AppMain