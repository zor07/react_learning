import React from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={css.header}>
            <img src="https://static.tildacdn.com/tild3533-3066-4136-b166-656161323666/shtaf.png"/>

        <div className={css.login}>
            {props.isAuth
                ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;