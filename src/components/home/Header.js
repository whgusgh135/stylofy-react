import React from 'react';
import logo from '../../styles/img/logo-white.png'

export function Header() {
    return(
        <header className="header" id="home">
            <div className="header__logo-box">
                <img src={logo} alt="Logo" className="header__logo" />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    Most Stylish Barbershop in Auckland
                </h1>
            </div>
            <div className="header__scroll">
                <p className="paragraph-sign">
                    &xlarr; scroll
                </p>
            </div>
        </header>
    )
}