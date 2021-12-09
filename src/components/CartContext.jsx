import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const [countItems, setCountItems] = useState([]);

    const addToCart = (item, cantidad) => {
        let count = 0;
        let newCarlist = [];
        if( cartList.find( product => product.idItem === item.id ) ){
            newCarlist = cartList.map( product => {
                if(product.idItem === item.id){
                    product.quantityItem += cantidad;
                    return product; 
                }
                return product;
            } );
            count = newCarlist.reduce(  (acc, obj) => acc + obj.quantityItem , 0 );
            setCountItems(count)


            setCartList(newCarlist)
        }else{
            newCarlist = [
                ...cartList,
                { 
                    idItem: item.id,
                    nameItem: item.title,
                    priceItem: item.price,
                    descriptionItem: item.description, 
                    imageItem: item.image,
                    quantityItem: cantidad
                }
            ]
            setCartList(newCarlist);  

            count = newCarlist.reduce(  (acc, obj) => acc + obj.quantityItem , 0 ) ;
            setCountItems(count)
        }

    }

    const deleteToCart = (id) => {
        //console.log(id, cartList);
        let count = 0;
        const result = cartList.filter( item => item.idItem !== id );
        //console.log(result);
        count = result.reduce(  (acc, obj) => acc + obj.quantityItem , 0 ) ;
        setCountItems(count)
        setCartList(result);
    }

    const deleteCart = () => {
        setCountItems(0)
        setCartList([]);
    }

    const getTotal = () => {
        return cartList.reduce( (acc, obj) => acc + (obj.quantityItem * obj.priceItem), 0 );
    }

    return (
        <CartContext.Provider value={{cartList, addToCart, deleteToCart, countItems, getTotal, deleteCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;