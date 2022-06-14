import React, { useState } from "react";

const SelectColor = ({ state }) => {
  const { color, setColor } = state;
  return (
    <div className="mb-8">
      <p className="mb-3 text-xl font-bold">انتخاب رنگ</p>
      <div className="flex gap-x-4">
        <button
          onClick={() => setColor("WHITE")}
          className={`bg-white rounded-lg w-7 h-7 ${
            color === "WHITE" ? "ring-2 ring-orange-500 ring-offset-1" : ""
          }`}
        ></button>
        <button
          onClick={() => setColor("PINK")}
          className={`bg-pink-200 rounded-lg w-7 h-7 ${
            color === "PINK"
              ? "ring-2 ring-orange-500 ring-offset-1 bg-pink-400"
              : ""
          }`}
        ></button>
        <button
          onClick={() => setColor("AMBER")}
          className={` bg-amber-200 rounded-lg w-7 h-7 ${
            color === "AMBER"
              ? "ring-2 ring-orange-500 ring-offset-1 bg-amber-400"
              : ""
          }`}
        ></button>
        <button
          onClick={() => setColor("BLUE")}
          className={`bg-blue-200 rounded-lg w-7 h-7 ${
            color === "BLUE"
              ? "ring-2 ring-orange-500 ring-offset-1 bg-blue-400"
              : ""
          }`}
        ></button>
        <button
          onClick={() => setColor("GREEN")}
          className={`bg-green-200 rounded-lg w-7 h-7 ${
            color === "GREEN"
              ? "ring-2 ring-orange-500 ring-offset-1 bg-green-400"
              : ""
          }`}
        ></button>
        <button
          onClick={() => setColor("CYAN")}
          className={` bg-cyan-200 rounded-lg w-7 h-7 ${
            color === "CYAN"
              ? "ring-2 ring-orange-500 ring-offset-1 bg-cyan-400"
              : ""
          }`}
        ></button>
      </div>
    </div>
  );
};

export default SelectColor;
