import React from 'react'
import ItemCount from './ItemCount';

export default function Item({
    title,
    price,
    description,
    category,
    image,
    stock
}) {
    return (
        <div className="col s12 m3 space">
            <div className="card">
                <div className="card-image">
                    <img src={image} />
                </div>
                <span className="card-title">{title}</span>
                <span className="card-title">$ {price}</span>
                <div>
                    <div className="card-action col m6">
                        <ItemCount 
                            stock={stock} 
                            initial={1} />
                    </div>
                    <div className="card-action col m6">
                        <button className="btn btn-quantity btn-add">
                            Agregar
                        </button>
                    </div>
                </div>
                <div className="row">

                </div>
            </div>
        </div>
    )
}
