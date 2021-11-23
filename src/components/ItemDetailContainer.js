import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { products } from "../data/products";

export default function ItemDetailContainer() {

    const [Details, setDetails] = useState([]);
    const {idItem} = useParams();
    
    useEffect(() => {
        const productos = (productos) => {
            return new Promise( (resolve, reject) => {
                if(productos.length){
                    setTimeout(() => {
                        resolve(productos.filter( item => item.id === parseInt(idItem))
                            );
                    }, 1500);
                }else{
                    reject([]);
                }

            } )
        }
        productos(products)
        .then( response => setDetails(response) )
        .catch( err => console.log(err) )
    }, [Details])
    console.log(Details)
    return (
        <div>
            {Details.join('')}
        </div>
    )
}
