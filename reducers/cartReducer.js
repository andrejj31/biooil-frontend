import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
  SET_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../actions/cartActions";

const cartReducer = (state, action) => {
  // Setiranje spored sakanite parametri
  if (action.type == SET_CART) {
    return { ...action.payload };
  }

  // Dodavanje nov produkt vo korpa
  if (action.type == ADD_ITEM) {
    const itemExists = state.items.find(
      (item) => item.id === action.payload.id
    );
    let newCart;
    if (itemExists === undefined) {
      const modifiedItem = {
        ...action.payload,
        quantity: 1,
        fullPrice: action.payload.price,
      };

      const newCartItems = [...state.items, modifiedItem];
      newCart = {
        ...state,
        items: newCartItems,
        quantity: state.quantity + 1,
        fullPrice: (state.fullPrice += parseInt(modifiedItem.fullPrice)),
      };
      localStorage.setItem("bo_cart", JSON.stringify(newCart));
    } else {
      newCart = { ...state };
    }
    return newCart;
  }

  // Zgolemuvanje na kvantitet na eden produkt
  if (action.type == INCREMENT_ITEM) {
    const foundItem = state.items.find((item) => item.id === action.payload);

    if (!foundItem) {
      return { ...state };
    }

    foundItem.quantity += 1;
    foundItem.fullPrice = foundItem.quantity * foundItem.price;

    const newCart = {
      ...state,
      fullPrice: (state.fullPrice += foundItem.price),
      quantity: (state.quantity += 1),
    };

    localStorage.setItem("bo_cart", JSON.stringify(newCart));
    return { ...newCart };
  }

  // Namaluvanje na kvantitet na eden produkt
  if (action.type == DECREMENT_ITEM) {
    const foundItem = state.items.find((item) => item.id === action.payload);

    if (!foundItem || foundItem.quantity === 1) {
      return { ...state };
    }

    foundItem.quantity -= 1;
    foundItem.fullPrice = foundItem.quantity * foundItem.price;

    const newCart = {
      ...state,
      fullPrice: (state.fullPrice -= foundItem.price),
      quantity: (state.quantity -= 1),
    };

    localStorage.setItem("bo_cart", JSON.stringify(newCart));
    return { ...newCart };
  }

  // Brisenje na produkt od korpa
  if (action.type == REMOVE_ITEM) {
    const foundItem = state.items.find((item) => item.id === action.payload);
    let itemQuantity, itemFullPrice;
    if (foundItem) {
      [itemQuantity, itemFullPrice] = [foundItem.quantity, foundItem.fullPrice];
      const newCartItems = state.items.filter(
        (item) => item.id !== action.payload
      );
      const newCart = {
        ...state,
        items: newCartItems,
        quantity: state.quantity - itemQuantity,
        fullPrice: state.fullPrice - itemFullPrice,
      };
      localStorage.setItem("bo_cart", JSON.stringify(newCart));
      return newCart;
    }
    return { ...state };
  }

  // Praznjenje na korpata
  if (action.type == CLEAR_CART) {
    const newCart = { items: [], quantity: 0, fullPrice: 0 };
    localStorage.setItem("bo_cart", JSON.stringify(newCart));
    return newCart;
  }
};

export default cartReducer;
