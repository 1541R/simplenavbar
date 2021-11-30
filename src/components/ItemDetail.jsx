import React, { useContext, useState } from 'react'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'
import ProgressBar from './ProgressBar'

export default function ItemDetail({data}) {
    /**
     * id title price description category image stock rating
     * 
     */
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);
    const onAdd = (cantidad) => {
        alert(`Has agregado ${cantidad} productos al carrito`);
        setItemCount(cantidad);
        test.addToCart(data, cantidad);
    }
    return (
        <div>
            {
                data.image ? 
                    <div className="row">
                        <div className="col m8 offset-m2">
                            <div className="col m6 s12">
                                <img className="responsive-img" src={data.image} alt={data.title} />
                            </div>
                            <div className="col m6 s12">
                                <p>{data.category.name}</p>
                                <h5>{data.title}</h5>
                                <span className="new badge left ml-0 mr-2">
                                    {data.rating.rate}
                                </span>
                                <p>
                                Disponibles:
                                <span className="green-text">{data.stock} Disponibles</span> 
                                </p>
                                <hr className="mb-5" />
                                <span className="vertical-align-top mr-4">
                                    <i className="material-icons mr-3">favorite_border</i>
                                    Wishlist
                                </span>
                                <h5>$ {data.price}</h5>
                                {
                                    itemCount === 0
                                    ? <ItemCount 
                                    stock={data.stock} 
                                    initial={itemCount} onAdd={onAdd} /> 
                                    : 
                                    <Link to="/cart" style={{textDecoration: 'none'}}>
                                        <button className="btn">Checkout</button>
                                    </Link>
                                }
                                
                            </div>
                        </div>
                    </div>
                :
                    <ProgressBar />
            }
        </div>
    )
}
