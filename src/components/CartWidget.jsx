import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'

export default function CartWidget() {
    const items = useContext(CartContext);
    
    return (
        <Link to="/cart">
            <label className="icon-cart">
                <i className="material-icons right">shopping_cart</i><label>{items.countItems}</label>
            </label>  
        </Link>
    )
}
