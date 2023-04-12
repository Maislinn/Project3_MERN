import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/imgs/PetPalLogo.png";
import { BsPersonCircle } from "react-icons/bs";
import Cart from "./Cart";


function Header() {
  return (
    <header className="">
      <nav className="">
        <ul className="pb-4 flex-wrap items-center mt-auto flow-root">
          <li className="m-5 mr-4 md:mr-6 float-left">
            <Link className=" hover:text-gray-800 duration-200" to="/">
              Home
            </Link>
          </li>
          <li className="m-5 mr-4 md:mr-6 float-left">
            <Link className=" hover:text-gray-800 duration-200" to="/products">
              Products
            </Link>
          </li>
          <li className="m-5 mr-4 md:mr-6 float-left">
            <Link className=" hover:text-gray-800 duration-200" to="/contact">
              Contact
            </Link>
          </li>
          <li className="m-5 mr-4 md:mr-6 float-right">
            <Link className=" hover:text-gray-800 duration-200" to="/profile">
              <BsPersonCircle className="text-2xl"/>
            </Link>
          </li>
          <li className="mt-2 mr-4 md:mr-6 float-right">
            <Cart />
          </li>
        </ul>
      </nav>

      <div className="grid grid-cols-3 max-h-60 place-items-center">
        <div className="col-span-1"></div>
        <img className="col-span-1 max-w-xs" src={logo} alt="logo" />
        <div className="col-span-1"></div>
      </div>
    </header>
  );
}

export default Header;
