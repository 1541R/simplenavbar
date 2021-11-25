import React from 'react'
import Item from "./Item";
import ProgressBar from './ProgressBar';
export default function ItemList({data}) {
    return (
        <div className="row container">
            {   
                data ?
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
                    <ProgressBar />
            }
            
        </div>
    )
}
