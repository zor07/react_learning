import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' className={({isActive})=> isActive ?`${s.active}`:""}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/dialogs' className={({isActive})=> isActive ?`${s.active}`:""}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/users' className={({isActive})=> isActive ?`${s.active}`:""}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' className={({isActive})=> isActive ?`${s.active}`:""}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' className={({isActive})=> isActive ?`${s.active}`:""}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' className={({isActive})=> isActive ?`${s.active}`:""}>Settings</NavLink>
        </div>
        <FriendsContainer/>
    </nav>
}

export default Navbar;