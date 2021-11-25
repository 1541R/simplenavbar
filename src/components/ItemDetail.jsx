import React from 'react'
import ItemCount from './ItemCount'
import ProgressBar from './ProgressBar'

export default function ItemDetail({data}) {
    /**
     * id title price description category image stock rating
     * 
     */
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
                                <h5>{data.price}</h5>
                                <ItemCount 
                                stock={data.stock} 
                                initial={1} /> 
                            </div>
                        </div>
                    </div>
                :
                    <ProgressBar />
            }
        </div>
    )
}
