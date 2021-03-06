import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fireStoreDoc } from '../utils/fireStoreFetch';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {

    const [details, setDetails] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        
        /*CustomFetch(products.find(item => item.id === parseInt(idItem)) , 2000)
        .then( result => setDetails(result)  )
        .catch( err => console.log(err) ) */

        fireStoreDoc(idItem)
            .then( result => setDetails(result) )
            .catch( err => console.log(err) );


    }, [idItem])
    //console.log( details );
    return (
        <>
        {
            details ?
                <ItemDetail data={details} />
                :
                <h3>No existe el producto</h3>
            
        }
        </>
    )
}
