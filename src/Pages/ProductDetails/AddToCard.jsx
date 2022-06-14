import React, { useContext } from "react";
//cart Context
import { CartContext } from "../../context/CartContextProvider";

//function
import { findQuantity, isInCart } from "../../helper/function";

//icon
import { TrashIcon, PlusIcon, MinusIcon } from "@heroicons/react/outline";

const AddToCard = ({ product, size, color }) => {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-x-4">
        {isInCart(cart.selectedItems, product.id) ? (
          <button
            onClick={() =>
              dispatch({
                type: "ADD_ITEM",
                payload: { ...product, size, color },
              })
            }
            className="bg-black text-white font-bold py-3 px-4 rounded-xl"
          >
            افزودن به سبد خرید
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: product })}
            className="border-2 flex items-center justify-center w-7 h-7 rounded-lg border-black"
          >
            <PlusIcon className="h-5 w-5" />
          </button>
        )}
        <p className="font-bold text-xl">
          {findQuantity(cart.selectedItems, product.id) &&
            findQuantity(cart.selectedItems, product.id)}
        </p>
        {findQuantity(cart.selectedItems, product.id) === 1 && (
          <button
            onClick={() => dispatch({ type: "DELETE", payload: product })}
            className="border-2 border-red-500 flex items-center justify-center w-7 h-7 rounded-lg"
          >
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
        )}
        {findQuantity(cart.selectedItems, product.id) > 1 && (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: product })}
            className="border-2 flex items-center justify-center w-7 h-7 rounded-lg border-black"
          >
            <MinusIcon className="h-5 w-5" />
          </button>
        )}
      </div>
      <p className="font-bold text-xl">
        {product.price} <span className="text-orange-600 text-lg">تومان</span>
      </p>
    </div>
  );
};

export default AddToCard;
