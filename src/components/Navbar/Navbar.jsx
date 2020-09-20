import React from "react";
import css from './Navbar.module.css';

const Navbar = () => {
    return <nav className={css.nav}>
        <div className={css.item}><a>Profile</a></div>
        <div className={`${css.item} ${css.active}`}><a>Messages</a></div>
        <div className={css.item}><a>News</a></div>
        <div className={css.item}><a>Music</a></div>
        <div className={css.item}><a>Settings</a></div>
    </nav>
}

export default Navbar;