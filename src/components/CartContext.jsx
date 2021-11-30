import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (item, cantidad) => {
        setCartList([
            ...cartList,
            { 
                idItem: item.id,
                nameItem: item.title,
                priceItem: item.price,
                descriptionItem: item.description, 
                imageItem: item.image,
                quantityItem: cantidad
            }
        ]);
    }

    return (
        <CartContext.Provider value={{cartList, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;