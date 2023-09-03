import React, { useState } from "react";
import { Link } from "react-router-dom";
import Group1 from "../assets/logo.svg";
import { Icon } from "@iconify/react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 flex justify-between px-4 sm:px-20 items-center border-b-gray-100 border-b-2 bg-white h-16">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={Group1}
            alt=""
            className={`w-16 h-16 sm:w-20 sm:h-20 ${
              menuOpen ? "hidden" : "block"
            }`}
          />
        </Link>
        <button
          className={`sm:hidden ml-2 p-2 rounded-full bg-gray-200 ${
            menuOpen ? "block" : "hidden"
          }`}
          onClick={toggleMenu}
        >
          <Icon icon="mingcute:menu-fill" className="text-blue-600" />
        </button>
      </div>

      <div
        className={`${
          menuOpen ? "flex flex-col items-end" : "hidden sm:flex"
        } space-y-2 sm:space-x-8 sm:space-y-0`}
      >
        <Link
          to="/"
          className="font-medium hover:border-b-2 hover:border-black"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="font-medium hover:border-b-2 hover:border-black"
          onClick={() => setMenuOpen(false)}
        >
          About Us
        </Link>
        <a
          href="#"
          rel="noreferrer"
          target="_blank"
          className="bg-blue-600 py-2 px-4 rounded text-white font-semibold hover:bg-blue-700"
          onClick={() => setMenuOpen(false)}
        >
          Coming Soon
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
