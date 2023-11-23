
import { Link } from "react-router-dom";
import logo from "../assets/Flo-CI_Icon.png";

import { HomeIcon, Cog6ToothIcon, BellIcon } from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <nav className="flex p-4 bg-green-500 justify-between items-center">
      <div className="flex items-center justify-start"> 
        {/* Placeholder logo */}
        <Link to="/" className="flex items-center justify-center mr-5">
          <img src={logo} alt="logo" className=" h-12 pr-2" />
          <h1 className="text-4xl font-bold">Flo.CI</h1>
        </Link>

        {/* Dark Mode Toggle */}
        <label className="switch">
          <input 
            type="checkbox" 
          />
          <span className="slider round"></span>
        </label>
      </div>

      {/* Links */}
      <ul className="flex font-bold">
        <li className="px-2 flex p-2 m-2 bg-white rounded-md">
          {/* Dashboard */}
          <Link to="/" className="flex">
            <p className="mr-2">Home</p> <HomeIcon className="h-6 w-6" />
          </Link>
        </li>
        <li className="px-2 flex p-2 m-2 bg-white rounded-md">
          {/* Settings */}
          <Link to="/" className="flex">
            <p className="mr-2">Settings</p>{" "}
            <Cog6ToothIcon className="h-6 w-6" />
          </Link>
        </li>
        <li className="px-2 flex p-2 m-2 bg-white rounded-md">
          <Link to="/" className="flex">
            <p className="mr-2">Notifications</p>{" "}
            <BellIcon className="h-6 w-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
