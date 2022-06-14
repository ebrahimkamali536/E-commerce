import React, { useContext } from "react";

import { PlusIcon, MinusIcon, XIcon } from "@heroicons/react/outline";

import { CartContext } from "../../context/CartContextProvider";

const ProductCart = ({ product }) => {
    const {dispatch} = useContext(CartContext)
  const { image, size, title, price, quantity } = product;
  return (
    <div className="flex items-center h-44">
      <div className="w-1/2 ml-3 rounded-2xl overflow-hidden h-full">
        <img src={image} alt={title} />
      </div>
      <div className="flex flex-col py-2 gap-y-4 h-full justify-between">
        <div className="flex flex-col gap-y-4">
          <p className="font-bold">{title}</p>
          <p className="text-gray-300 text-sm">Size: {size}</p>
          <p className="font-medium">
            {price} <span className="text-orange-600">تومان</span>
          </p>
        </div>
        <div className="flex items-center gap-x-2.5">
          <button onClick={() => dispatch({type: "INCREASE", payload: product})} className="w-6 h-6 border-black border rounded-lg  flex items-center justify-center">            <PlusIcon className="w-4 h-4" />
          </button>
          <span className="font-bold">{quantity}</span>
          {quantity > 1 ? (
            <button onClick={() => dispatch({type: "DECREASE", payload: product})} className="w-6 h-6 border-black border rounded-lg  flex items-center justify-center">              {" "}
              <MinusIcon className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={() => dispatch({type: "DELETE", payload: product})} className="w-6 h-6 border-black border rounded-lg  flex items-center justify-center">              <XIcon className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
