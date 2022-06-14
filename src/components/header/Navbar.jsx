import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

//icons
import {
  ArrowRightIcon,
  MenuAlt4Icon,
  SearchIcon,
  ShoppingBagIcon,
} from "@heroicons/react/outline";

import { CartContext } from "../../context/CartContextProvider";
import SearchBar from "./SearchBar";
import MenuBar from "./MenuBar";

const Navbar = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openMenuBar, setOpenMenuBar] = useState(false);
  const { cart } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between">
      <div>
        {!openMenuBar && <MenuAlt4Icon onClick={() => setOpenMenuBar(!openMenuBar)} className="h-7 w-7" />}
        <div className={`z-20 bg-white h-screen fixed top-0 w-3/4 p-4 transition-all duration-500 ${openMenuBar ? "right-0" : "-right-full"}`}>
          <MenuBar setOpenMenuBar={setOpenMenuBar} />
        </div>
        <div className={openMenuBar && "bg-black opacity-30 fixed top-0 left-0 w-full h-screen z-10"}></div>
      </div>
      <div className="flex items-center">
        <div className="ml-4">
          <SearchIcon
            onClick={() => setOpenSearchBar(!openSearchBar)}
            className="h-7 w-7 text-black"
          />
          <SearchBar state={{ openSearchBar, setOpenSearchBar }} />
        </div>
        <div className="relative">
          <Link to="/cart">
            <ShoppingBagIcon className={`h-7 w-7 text-black`} />
          </Link>
          <span
            className={`absolute top-0 right-0 ${
              cart.selectedItems.length &&
              " w-1.5 h-1.5 rounded-full bg-orange-500 block"
            }`}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
