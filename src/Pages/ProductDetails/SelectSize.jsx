import React, { useState } from "react";

const SelectSize = ({ state }) => {
  const { size, setSize } = state;

  return (
    <div className="mb-8">
      <p className="text-xl font-bold mb-4">انتخاب سایز</p>
      <div className="flex items-center gap-x-4">
        <button
          onClick={() => setSize("S")}
          className={`border border-gray-200 w-12 h-12 flex items-center justify-center rounded-xl font-medium ${
            size === "S" ? "bg-orange-400 text-white border-none" : ""
          }`}
        >
          S
        </button>
        <button
          onClick={() => setSize("M")}
          className={`border border-gray-200 w-12 h-12 flex items-center justify-center rounded-xl font-medium ${
            size === "M" ? "bg-orange-400 text-white border-none" : ""
          }`}
        >
          M
        </button>
        <button
          onClick={() => setSize("L")}
          className={`border border-gray-200 w-12 h-12 flex items-center justify-center rounded-xl font-medium ${
            size === "L" ? "bg-orange-400 text-white border-none" : ""
          }`}
        >
          L
        </button>
        <button
          onClick={() => setSize("XL")}
          className={`border border-gray-200 w-12 h-12 flex items-center justify-center rounded-xl font-medium ${
            size === "XL" ? "bg-orange-400 text-white border-none" : ""
          }`}
        >
          XL
        </button>
        <button
          onClick={() => setSize("XXL")}
          className={`border border-gray border-none-200 w-12 h-12 flex items-center justify-center rounded-xl font-medium ${
            size === "XXL" ? "bg-orange-400 text-white border-none" : ""
          }`}
        >
          XXL
        </button>
      </div>
    </div>
  );
};

export default SelectSize;
