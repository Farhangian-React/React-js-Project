import React,{createContext,useState} from "react";
export const CartContext=createContext();
export const CartBuyContext=createContext();
export const CardData=createContext();
export const CardDataoff=createContext();
export const CardDatamap=createContext();
export const CardDataShow=createContext();
export const CardDatamapshow=createContext();



export const CartProvider=(props)=>{


    const [cartItems,setCartItems]=useState([]);
    const [cartItemsBuy,setCartItemsBuy]=useState([]);
    const [data,setData]=useState([]);
    const [dataoff,setDataoff]=useState([]);
    const [datamap,setDatamap]=useState([]);
    const [datamapshow,setDatamapshow]=useState([]);
    const [datashow,setDatashow]=useState([]);

    
    
    return(
        <CartContext.Provider value={[cartItems,setCartItems]}>
            <CartBuyContext.Provider value={[cartItemsBuy,setCartItemsBuy]}>
                <CardData.Provider value={[data,setData]}>
                <CardDataShow.Provider value={[datashow,setDatashow]}>
                <CardDatamap.Provider value={[datamap,setDatamap]}> 
                <CardDatamapshow.Provider value={[datamapshow,setDatamapshow]}>
                <CardDataoff.Provider value={[dataoff,setDataoff]}>
                      {props.children}
                      </CardDataoff.Provider> 
                      </CardDatamapshow.Provider>
                    </CardDatamap.Provider>
                    </CardDataShow.Provider >
                </CardData.Provider>
            </CartBuyContext.Provider>
        </CartContext.Provider>
    )
}