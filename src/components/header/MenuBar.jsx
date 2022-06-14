import { XIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";
const MenuBar = ({setOpenMenuBar}) => {
  return (
    <>
      
        <div className="flex justify-between mb-4">
          <h1>Logo</h1>
          <button onClick={() => setOpenMenuBar(false)}>
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <nav>
          <ul className="flex flex-col gap-y-3 font-medium">
            <li>
              <Link to="/">محصولات</Link>
            </li>
            <li>
              <Link to="/">محبوب ترین</Link>
            </li>
            <li>
              <Link to="/">درباره ما</Link>
            </li>
            <li className="border-b-2 border-gray-300 pb-4">
              <Link to="/">ارتباط با ما</Link>
            </li>
            <li className="font-bold">
              <Link to="/">ورود به حساب</Link>
            </li>
          </ul>
        </nav>
    </>
  );
};

export default MenuBar;
