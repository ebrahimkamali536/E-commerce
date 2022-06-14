import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";

import { products } from "../../data";
import ProductCard from "../Products/ProductCard";

const SearchBar = ({ state }) => {
  const [input, setInput] = useState("");
  const { openSearchBar, setOpenSearchBar } = state;
  return (
    <>
      <div
        className={
          openSearchBar
            ? "bg-white fixed top-0 right-0 w-full h-screen z-10 transition-all duration-300"
            : "bg-white fixed top-full right-0 w-full h-screen z-10 transition-all duration-300"
        }
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center justify-between w-full bg-white py-2 border-b-2 border-blue-300"
        >
          <button onClick={() => setOpenSearchBar(false)}>
            <ArrowRightIcon className="h-7 w-7 mx-4" />
          </button>
          <input
            type="text"
            placeholder="جستجو..."
            className="bg-transparent outline-none w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>

      <div
        className={
          openSearchBar
            ? "grid grid-cols-2 gap-x-4 relative z-20 mt-20"
            : "hidden"
        }
      >
        {products
          .filter((product) => product.title.includes(input))
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </>
  );
};

export default SearchBar;
