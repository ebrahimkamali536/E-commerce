import React, { useContext } from "react";
import { totalPrice, totalProduct } from "../../helper/function";

import { CartContext } from "../../context/CartContextProvider";
const Checkout = () => {
    const { cart, dispatch} = useContext(CartContext)
  return (
    <div>
      <div className="border-b-2 border-dashed border-gray-300">
        <div className="flex items-center justify-between mb-4">
          <p className="font-medium text-gray-300">مجموع خرید:</p>
          <p className="font-bold">{totalPrice(cart.selectedItems).toLocaleString()}</p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <p className="font-medium text-gray-300">تعداد محصولات:</p>
          <p className="font-bold">{totalProduct(cart.selectedItems)}</p>
        </div>
      </div>
      <div className="flex items-center justify-between my-4">
        <p className="font-medium text-gray-300">مبلغ قابل پرداخت:</p>
        <p className="font-bold">{totalPrice(cart.selectedItems).toLocaleString()}</p>
      </div>
      <buttons onClick={() => dispatch({type: "CHECKOUT"})} className="w-full block text-center bg-black text-white rounded-lg py-3 font-bold">پرداخت</buttons>
    </div>
  );
};

export default Checkout;
