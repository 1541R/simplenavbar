import React, { useEffect, useState }  from 'react';
import { products } from "../data/products";
import { useParams } from "react-router";
import ItemList from "./ItemList";

export default function ItemListContainer() {
    
    const [data, setData] = useState([]);
    const { idCategory } = useParams();
    
    useEffect(() => {
        const productos = (products) => {
            return new Promise( (resolve, reject) => {
                if(products.length){
                    setTimeout( idCategory => {
                        resolve(products.filter( item => {
                            return (idCategory) ? item.category.id === parseInt(idCategory) : item;
                        })
                            );
                    }, 1500);
                }else{
                    reject([]);
                }

            } )
        }
        productos(products)
        .then( response => setData(response) )
        .catch( err => console.log(err) )
    }, [data, idCategory])
   console.log(data);
    return (
        <ItemList data={data} />
    )
}
