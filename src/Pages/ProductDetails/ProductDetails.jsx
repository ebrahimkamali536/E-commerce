import React, { useState } from "react";
import { useParams } from "react-router-dom";

//data
import { products } from "../../data";

//components
import Header from "./Header";
import SelectColor from "./SelectColor";
import SelectSize from "./SelectSize";
import AddToCard from "./AddToCard";

const ProductDetails = () => {
  const { id } = useParams();
  const [size, setSize] = useState("XL");
  const [color, setColor] = useState("WHITE");
  const product = products[id - 1];

  return (
    <div className="px-4 py-6">
        <Header />
      <div className="text-center flex flex-col gap-y-2 mb-4">
        <h1 className="font-bold text-xl">{product.title}</h1>
        <p className="font-bold text-xl">{product.price} <span className="text-orange-600">تومان</span></p>
        <div className="">
        <img src={product.image} className="rounded-lg h-[380px] w-full" />
        </div>
      </div>
      <SelectSize state={{size, setSize}} />
      <SelectColor state={{color, setColor}} />
      <AddToCard product={product} size={size} color={color} />
    </div>
  );
};

export default ProductDetails;
