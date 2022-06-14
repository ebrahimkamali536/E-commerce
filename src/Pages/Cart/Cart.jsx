import React, { useContext } from "react";

import { CartContext } from "../../context/CartContextProvider";

//icons
import { ArrowLeftIcon } from "@heroicons/react/outline";
import ProductCart from "./ProductCart";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import { totalPrice } from "../../helper/function";
const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <>
      {cart.selectedItems.length ? (
        <div className="flex flex-col justify-between h-screen p-4">
          <div className="grid grid-cols-1 gap-y-6">
            <div className="flex items-center justify-between">
              <h1>سبد خرید</h1>
              <Link to="/">
                <ArrowLeftIcon className="w-6 h-6" />
              </Link>
            </div>
            {cart.selectedItems.map((item) => (
              <ProductCart key={item.id} product={item} />
            ))}
          </div>
          <Checkout cart={cart} />
        </div>
      ) : (
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h1>سبد خرید</h1>
            <Link to="/">
              <ArrowLeftIcon className="w-6 h-6" />
            </Link>
          </div>
          <h2>empty</h2>
        </div>
      )}
    </>
  );
};

export default Cart;
