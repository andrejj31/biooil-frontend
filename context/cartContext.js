import React, { useContext, createContext, useEffect, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";
import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
  SET_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../actions/cartActions";

const CartContext = createContext();

const initialState = {
  items: [],
  quantity: 0,
  fullPrice: 0,
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatch({ type: ADD_ITEM, payload: item });
  };
  const removeItem = (item) => {
    dispatch({ type: REMOVE_ITEM, payload: item });
  };

  const incrementItem = (id) => {
    dispatch({ type: INCREMENT_ITEM, payload: id });
  };

  const decrementItem = (id) => {
    dispatch({ type: DECREMENT_ITEM, payload: id });
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const setCart = (cart) => {
    dispatch({ type: SET_CART, payload: cart });
  };

  const getItems = () => {
    return cartState;
  };

  const getTotalItemsLength = () => {
    return cartState.quantity;
  };

  const isInCart = (id) => {
    return cartState.items.find((item) => item.id === id);
  };

  useEffect(() => {
    if (!localStorage.getItem("bo_cart")) {
      localStorage.setItem("bo_cart", JSON.stringify(initialState));
      setCart(initialState);
    } else {
      const newCart = localStorage.getItem("bo_cart");
      setCart(JSON.parse(newCart));
    }
  }, []);
  return (
    <CartContext.Provider
      value={{
        cartState,
        addItem,
        removeItem,
        clearCart,
        getItems,
        incrementItem,
        decrementItem,
        getTotalItemsLength,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContext, CartProvider };
