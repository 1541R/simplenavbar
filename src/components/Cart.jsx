import React, { useContext } from 'react'
import CurrencyFromat from '../utils/CurrencyFromat';
import { CartContext } from './CartContext';
import ItemCart from './ItemCart';
const right_text = {
    textAlign: 'right'
}
export default function Cart() {

    const cartcontext = useContext(CartContext);
    const items = cartcontext.cartList;

    let total = 0;
    return (
        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th>Acciones</th>
                        <th>Imagen</th>
                        <th>Nombre Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Sub total</th>
                    </tr>
                </thead>

                <tbody>
                    {   
                        
                        items.length ?
                            
                                items.map( (item)=>{
                                    total += item.quantityItem * item.priceItem;
                                    return <ItemCart key={item.idItem} item={item} cartcontext={cartcontext}  />
                                })
                            
                            
                            :
                            <tr><td ><h3> No hay productos agregados </h3></td></tr>
                    
                    }
                    {
                        items.length && <tr><td colSpan="6" style={right_text}>{ CurrencyFromat(total)}</td></tr>
                    }
                </tbody>
            </table>
        </div>
    )
}
