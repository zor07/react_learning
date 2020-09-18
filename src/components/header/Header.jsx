import React from "react";
import css from './Header.module.css';

const Header = () => {
    return <header className={css.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png'/>
    </header>
}

export default Header;