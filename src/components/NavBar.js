import React from 'react';
import Logo from '../img/logo.png';

export default function NavBar() {
    
    return (
        <>
            <nav className="nav-extended nav-center">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">
                        <img src={Logo} width="110" />
                    </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="hide-on-med-and-down">
                        <li><a href="#">Playeras</a></li>
                        <li><a href="#">Pantalones</a></li>
                        <li><a href="#">Zapatos</a></li>
                    </ul>
                    <a href="#" className="icon-cart">
                        <i className="material-icons right">shopping_cart</i>
                    </a>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="#">Playeras</a></li>
                <li><a href="#">Pantalotens</a></li>
                <li><a href="#">Zapatos</a></li>
            </ul>
        </>

    )
}
