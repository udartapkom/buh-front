import React from "react";
import { Link } from 'react-router-dom';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Logo from "../../images/logo.svg";

function Header(props) {
    const {loggedIn, handleSignOut} = props;

     // подписываемся на контекст информации о пользователе
    const currentUser = React.useContext(CurrentUserContext);

    return(
        <>
<header className="Header">
    <div className="Header__content">
        <div className="Header__title-wrapper">
            <img src={Logo} alt="Лого" className="Header__logo"></img>
            <h2 className="Header__title">Домашняя бухгалтерия</h2>
            </div>
        <div className="Header__title-wrapper">
            {loggedIn ? <p className="Header__hello">Приветствуем тебя, {currentUser.name}</p> : null} 
            {loggedIn ? <div className = "Header__link" onClick={handleSignOut}>Выйти</div> : null} 
            </div>
        </div>
    </header>
        </>
    )
}
export default Header;