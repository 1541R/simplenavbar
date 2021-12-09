import React, { useContext } from 'react'
import CurrencyFromat from '../utils/CurrencyFromat';
import { CartContext } from './CartContext';
import ItemCart from './ItemCart';
import { fireStoreOrder, fireStoreStock } from '../utils/fireStoreFetch';
const right_text = {
    textAlign: 'right'
}
export default function Cart() {

    const cartcontext = useContext(CartContext);
    const items = cartcontext.cartList;

    const total = cartcontext.getTotal();
    const createOrder = () => {

        const newItems = items.map( item => (
            { 
                id : item.idItem,
                title: item.nameItem,
                price: item.priceItem,
                quantity: item.quantityItem
            }
        ) )

        let order = { "buyer":"Isai Rodriguez",
                      "email":"isai.rdz.a@gmail.com",
                      "phone":"555555500",
                      "items": newItems,
                      "total": total
                    }
        
        

        fireStoreOrder(order)
        .then(
           result => {
               items.forEach( item => { 
                   console.log(item);
                   fireStoreStock(item) 
                } );
               alert(`Gracias ${order.buyer} por tu compra, tu código de pedido es ${result.id}`); cartcontext.deleteCart();
            }
        )
        .catch( err => console.log(err) );



    }

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
            {
                items.length && 
                <div style={ {textAlign: 'right', marginTop: '10px'} }>
                    <button className="btn" 
                        onClick={createOrder}
                    >Checkout</button>
                </div>
            }
        </div>
    )
}
