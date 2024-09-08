import React,{createContext,useState} from "react";
export const CartContext=createContext();
export const CartBuyContext=createContext();
export const CardData=createContext();
export const CardDataShow=createContext()


export const CartProvider=(props)=>{


    const [cartItems,setCartItems]=useState([]);
    const [cartItemsBuy,setCartItemsBuy]=useState([]);
    const [data,setData]=useState([]);
    const [datashow,setDatashow]=useState([]);

    
    
    return(
        <CartContext.Provider value={[cartItems,setCartItems]}>
            <CartBuyContext.Provider value={[cartItemsBuy,setCartItemsBuy]}>
                <CardData.Provider value={[data,setData]}>
                <CardDataShow.Provider value={[datashow,setDatashow]}>
                    {props.children}
                    </CardDataShow.Provider >
                </CardData.Provider>
            </CartBuyContext.Provider>
        </CartContext.Provider>
    )
}