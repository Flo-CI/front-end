import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo192.png";

import { HomeIcon, Cog6ToothIcon, BellIcon } from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <nav className=" flex p-4 bg-green-500 justify-between items-center">
      {/* Placeholder logo */}
      <Link to="/" className="flex items-center justify-center">
        <img src={logo} alt="logo" className=" h-9 pr-2" />
        <h1 className="text-4xl font-bold">Flo.CI</h1>
      </Link>

      {/* Links */}
      <ul className="flex">
        <li className="px-2 flex">
          {/* Dashboard */}
          <Link to="/" className="flex">
            <HomeIcon className="h-6 w-6" />
          </Link>
        </li>
        <li className="px-2 flex">
          {/* Settings */}
          <Link to="/" className="flex">
            <Cog6ToothIcon className="h-6 w-6" />
          </Link>
        </li>
        <li className="px-2 flex">
          <Link to="/" className="flex">
            <BellIcon className="h-6 w-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
