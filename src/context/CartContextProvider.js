import React, { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = {
  selectedItems: [],
  favoriteItems: [],
  total: 0,
  checkout: false,
  clear: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      } else {
       state.selectedItems.find(item => item.id === action.payload.id).quantity++
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
      };
    case "INCREASE":
      const indexI = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexI].quantity++;
      return {
        ...state,
      };
    case "DECREASE":
      const indexD = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[indexD].quantity--;
      return {
        ...state,
      };
    case "DELETE":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        favoriteItems: [],
        total: 0,
        checkout: true,
        clear: false,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        favoriteItems: [],
        total: 0,
        checkout: false,
        clear: true,
      };
  }
};

const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(reducer, initialState);
    console.log(cart)
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
