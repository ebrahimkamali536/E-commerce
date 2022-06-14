import React from "react";

import { Routes, Route } from "react-router-dom";

//components
import HomePage from "./Pages/HomePage/HomePage";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import CartContextProvider from "./context/CartContextProvider";
import Cart from "./Pages/Cart/Cart";

const App = () => {
  return (
    <div>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </div>
  );
};

export default App;
