import React from 'react'
import Item from "./Item";
export default function ItemList({data}) {
    return (
        <div className="row container">
            {   
                data.length ?
                    data.map( (product) => 
                        <Item key={product.id} 
                        id={product.id} 
                        title={product.title} 
                        price={product.price} 
                        description={product.description} 
                        category={product.category} 
                        image={product.image} 
                        stock={product.stock} 
                        />
                    )
                    :
                    <div className="container mt-20">    
                        <div className="progress">
                            <div className="indeterminate"></div>
                        </div>
                    </div>
            }
            
        </div>
    )
}
