import React from "react";

//icons
import { HeartIcon, ArrowLeftIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <HeartIcon className="h-7 w-7" />
      </div>
      <div>
        <Link to="/">
          <ArrowLeftIcon className="h-6 w-6" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
