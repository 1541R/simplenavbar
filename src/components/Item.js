import React from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

export default function Item({id,
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
                <div className="card-action col 12">
                        <Link to={'/itemdetail/'+id}>
                            <button className="btn btn-quantity btn-add">
                                Ver detalle
                            </button>
                        </Link>
                    </div>
                    <div className="card-action col m6">
                        {/* <ItemCount 
                            stock={stock} 
                            initial={1} /> */}
                        
                    </div>
                    
                </div>
                <div className="row">

                </div>
            </div>
        </div>
    )
}
