import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="mt-auto [background-color:#f5bcb1]  [color:#9c9897]">
      <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
        {/* footer links on page */}
        <ul className="flex flex-wrap items-center mt-3  sm:mt-0">
          <li className="mr-4 hover:text-lime-500 duration-200 md:mr-6">
            <Link to="/">
              <h3>Home</h3>
            </Link>
          </li>
          <li className="mr-4 hover:text-lime-500 duration-200 md:mr-6">
            <Link to="/products">
              <h3>Sitters</h3>
            </Link>
          </li>
          <li className="mr-4 hover:text-lime-500 duration-200 md:mr-6">
            <Link to="/contact">
              <h3>Contact</h3>
            </Link>
          </li>
          <li className="mr-4 hover:text-lime-500 duration-200 md:mr-6">
            <Link to="/profile">
              <h3>Profile</h3>
            </Link>
          </li>
          <li className="mr-4 hover:text-lime-500 duration-200 md:mr-6">
            <Link to="/payment">
              <h3>Cart</h3>
            </Link>
          </li>
        </ul>

        {/* footer socials */}
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          {/* Facebook */}
          <a
          className="hover:text-lime-500 duration-200"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookF />
          </a>
          {/* Instagram */}
          <a className="hover:text-lime-500 duration-200" 
          href="https://www.instagram.com/" 
          target="_blank" 
          rel="noreferrer">
            <ImInstagram />
          </a>
        </div>
      </div>

      {/* divider line */}
      <hr className="my-6 m-4 w-10/12 [border-color:#979293] border-gray-200 sm:mx-auto lg:my-8" />

      <div className="w-full mx-auto container pb-4 md:flex md:items-center md:justify-center">
        {/* footer copyright and credits  */}
        <span className="text-sm sm:text-center">
          &copy; 2023 Pet Pal LLC. All Rights Reserved.
        </span>
        
      </div>
    </footer>
  );
};

export default Footer;
