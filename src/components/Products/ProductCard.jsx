import React from "react";
import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/outline";
const ProductCard = ({ product }) => {
  const { image, title, price, id } = product;
  return (
    <div>
      <div className="rounded-lg overflow-hidden mb-2 relative">
        <Link to={`product/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <Link to={`product/${id}`}>
        <div className="flex flex-col items-center gap-y-1">
          <p className="text-lg font-normal">{title}</p>
          <p className="text-orange-600">
            <span className="font-bold text-black ml-1">{price}</span> تومان
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
