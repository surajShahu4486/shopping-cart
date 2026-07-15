import React, { createContext, useContext, useEffect, useState } from "react";
import { initialProducts } from "../data/product";

const CartContext = createContext();



export const CartProvider = ({ children }) => {
    const [apiResponse, setApiResponse] = useState([]);
    const [cart, setCart] = useState([]);
    
     useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const response = await res.json();
      setApiResponse(response);
    };

    fetchProducts();
  }, []);
    
    const apiProducts = apiResponse.map((item) => ({
    id: `api-${item.id}`,
    name: item.title,
    price: item.price,
    image: item.image,
    description: item.description,
    category: item.category,
  }));

   const products = [...initialProducts, ...apiProducts];

   // ADD item Into The Cart
    const addToCart = (product)=>{
        setCart = ((prevCart)=>{
        const existingItem  = prevCart.find((product) =>item.id === product.id);
        if(existingItem){
            return prevCart.map((item) => 
            item.id === product.id
            ?{...item,quantity: item.quantity+1}
            : item
        );
        }else{
            return [...prevCart,{...product,quanity:1}]
        }
        });
    }
  return (
    <CartContext.Provider value={{ products }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);