import React from 'react'
import CurrencyFromat from '../utils/CurrencyFromat'
const imgItem = {
    width: '80px',
    display: 'inline-block',
    marginRight: '1%'
}
const liItem = {
    paddingLeft: '20px',
    clear: 'both'
}
const titleItem = {
    display: 'inline-block',
}
const pItem = {
    maxWidth: '92%',
    marginLeft: '1%',
    display: 'inline-block',
}
const right_text = {
    textAlign: 'right'
}
export default function ItemCart({item, cartcontext}) {


    const onDelete = (id) => {
        alert(`Has eliminado un productos del carrito`);
        cartcontext.deleteToCart(id);
    }
    
    return (
        /** idItem nameItem priceItem descriptionItem imageItem quantityItem */
        <tr>
            <td>
                <button className="btn"
                    onClick={ () => onDelete(item.idItem)}
                    >
                    <i className="material-icons">delete</i>
                </button>
            </td>
            <td>
                <img src={item.imageItem} alt={item.nameItem} style={imgItem} />
            </td>
            <td>
                <span className="title" style={titleItem}>{item.nameItem}</span>
            </td>
            <td>
                <p style={pItem, right_text}>
                    {item.quantityItem}
                </p>
            </td>
            <td>
                <p style={pItem, right_text}>
                    {CurrencyFromat(item.priceItem)}
                </p>
            </td>
            <td>
                <p style={pItem, right_text}>
                    {CurrencyFromat(item.quantityItem * item.priceItem)}
                </p>
            </td>
            
    </tr>
    )
}
