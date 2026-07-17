import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { initialProducts } from "../data/product";
import { Bounce, ToastContainer, toast } from 'react-toastify';

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
    const addToCart = (product) => {
        toast.success('🦄 Item added to Cart', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);

            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }]
            }
        });
    }

    //  remove from Cart

    const removeFromCart = (productId, removeAll = false) => {

        setCart  ((prevCart) => {
            const existingItem = prevCart.find((product) => product.id === productId);

            if (!existingItem) return prevCart;

            if (removeAll || existingItem.quantity === 1) {
                return prevCart.filter((item) => item.id !== productId);
            } else {
                return prevCart.map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
        });


    }

    const clearCart = () => setCart([]);

    const cartCount = useMemo(
        () => cart.reduce((total, item) => total + item.quantity, 0),
        [cart]
    );

    const cartTotal = useMemo(
        () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
        [cart]
    );

    const cartDiscount = useMemo(
        () => (cartTotal>0?cartTotal - 500 : 0),
        [cartTotal]
        );

    // console.log("my cart :",cart);
    return (
        <CartContext.Provider value={{ products,
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        cartTotal,
        cartDiscount,
        cartCount, }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);