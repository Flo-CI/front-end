import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Flo-CI_Icon.png";

import { HomeIcon, Cog6ToothIcon, BellIcon, ArrowRightOnRectangleIcon} from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <nav className=" flex p-4 bg-green-500 justify-between items-center">
      {/* Placeholder logo */}
      <Link to="/dashboard" className="flex items-center justify-center">
        <img src={logo} alt="logo" className=" h-12 pr-2" />
        <h1 className="text-4xl font-bold">Flo.CI</h1>
      </Link>

      {/* Links */}
      <ul className="flex font-bold">
        <li className="px-2 flex p-2 m-2 bg-white rounded-md">
          {/* Dashboard */}
          <Link to="/dashboard" className="flex">
            <p className="mr-2">Home</p> <HomeIcon className="h-6 w-6" />
          </Link>
        </li>
        <li className="px-2 flex p-2 m-2 bg-white rounded-md">
          {/* Log Out */}
          <Link to="/" className="flex">
            <p className="mr-2">Log Out</p>{" "}
            <ArrowRightOnRectangleIcon className="h-6 w-6" />
          </Link>
        </li>
        {/*<li className="px-2 flex p-2 m-2 bg-white rounded-md">*/}
        {/*  <Link to="/" className="flex">*/}
        {/*    <p className="mr-2">Notifications</p>{" "}*/}
        {/*    <BellIcon className="h-6 w-6" />*/}
        {/*  </Link>*/}
        {/*</li>*/}
      </ul>
    </nav>
  );
}

export default Navbar;
