import React, { useEffect, useState } from 'react';
import Logo from '../img/logo.png';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import { products } from "../data/products";
export default function NavBar() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const productos = (products) => {
            return new Promise( (resolve, reject) => {
                if(products.length){
                    setTimeout(() => {
                        resolve(products);
                    }, 1500);
                }else{
                    reject([]);
                }

            } )
        }
        productos(products)
        .then( response => setData(response) )
        .catch( err => console.log(err) )
    }, [data])
    
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
                    <CartWidget/>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="#">Playeras</a></li>
                <li><a href="#">Pantalotens</a></li>
                <li><a href="#">Zapatos</a></li>
            </ul>
            <div className="space"></div>
            {
                data.length ?
                    <ItemListContainer products={data}/>
                    :
                    <div className="container mt-20">    
                        <div className="progress">
                            <div className="indeterminate"></div>
                        </div>
                    </div>
            }
            
        </>

    )
}
