import React, { useEffect, useState }  from 'react';
import { products } from "../data/products";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import { CustomFetch } from '../utils/CustomFetch';

export default function ItemListContainer() {
    
    const [Datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        
        CustomFetch(products.filter( item => {
            if(idCategory === undefined) return item ;
            return item.category.id === parseInt(idCategory) ;
        }, 5000))
        .then( result => setDatos(result)  )
        .catch( err => console.log(err) )

    }, [idCategory])

    //console.log(Datos);
    return (
        <ItemList data={Datos} />
    )
}
