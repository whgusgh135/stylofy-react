import React from 'react';
import logo from '../styles/img/logo-black.png';

export function Nav() {
    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
            <label for="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>

            <nav className="navigation__nav">
                <div className="header__logo-box">
                    <img src={logo} alt="Logo" className="header__logo" />
                </div>
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#home" className="navigation__link">Home</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">About</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Info</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Book</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Testimonials</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link">Become Member</a></li>
                </ul>
            </nav>
        </div>
    )
}