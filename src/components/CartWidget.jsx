import React from 'react'
import { Link } from 'react-router-dom'

export default function CartWidget() {
    return (
        <Link to="/cart">
            <label className="icon-cart">
                <i className="material-icons right">shopping_cart</i><label>4</label>
            </label>  
        </Link>
    )
}
