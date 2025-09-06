import { useState } from "react";
import logo from "../assets/images/logo.png.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 font-medium text-gray-700 dark:text-gray-200">
            <li className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
              Home
            </li>
            <li className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
              Products
            </li>
            <li className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon
              icon={menuOpen ? faXmark : faBars}
              className="text-2xl text-gray-700 dark:text-gray-200"
            />
          </button>
        </div>

        {/* Icons & User Info */}
        <div className="hidden md:flex items-center space-x-4">
          <FontAwesomeIcon
            className="p-2 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 cursor-pointer"
            icon={faHeart}
          />
          <div className="relative">
            <FontAwesomeIcon
              className="p-2 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer"
              icon={faShoppingCart}
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="text-right text-gray-700 dark:text-gray-200">
            <div className="font-medium">Welcome</div>
            <div className="text-sm text-blue-500 dark:text-blue-400 cursor-pointer">
              <Link to="/login">Login</Link> /{" "}
              <Link to="/register">Register</Link>
            </div>
          </div>
          <div className="text-right text-gray-700 dark:text-gray-200">
            <div className="font-medium">Cart</div>
            <div className="text-sm">Rs 2560</div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4">
          <ul className="flex flex-col space-y-3 font-medium text-gray-700 dark:text-gray-200">
            <li className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
              Home
            </li>
            <li className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
              Products
            </li>
            <li className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
              Contact
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
