import React from 'react';
import Logo from '../img/logo.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
export default function NavBar() {
    
    return (
        <>
            <nav className="nav-extended nav-center">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">
                        <img src={Logo} width="110" />
                    </Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/category/1">Mujeres</Link></li>
                        <li><Link to="/category/2">Hombres</Link></li>
                    </ul>
                    <CartWidget/>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/category/1">Mujeres</Link></li>
                <li><Link to="/category/2">Hombres</Link></li>
            </ul>
            <div className="space"></div>
           
            
        </>

    )
}
