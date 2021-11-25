import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { products } from "../data/products";
import { CustomFetch } from '../utils/CustomFetch';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

    const [details, setDetails] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        
        CustomFetch(products.find(item => item.id === parseInt(idItem)) , 2000)
        .then( result => setDetails(result)  )
        .catch( err => console.log(err) )

    }, [idItem])
    console.log( details );
    return (
        <ItemDetail data={details} />
    )
}
