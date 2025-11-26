import { use, useState } from "react";
import logo from "../assets/images/logo.png.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const cartSize = useAppSelector((state) => state.cartReducer.items.length);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
            onClick={() => navigate("home")}
          />
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
        {/* <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon
              icon={menuOpen ? faXmark : faBars}
              className="text-2xl text-gray-700 dark:text-gray-200"
            />
          </button>
        </div> */}

        {/* Icons & User Info */}
        <div className="flex items-center space-x-4">
          <div className="text-right text-gray-700 dark:text-gray-200">
            <div className="text-sm text-blue-500 dark:text-blue-400 cursor-pointer">
              <Link to="/login">Login</Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {/* <div className="relative">
              <FontAwesomeIcon
              className="w-10 py-[0.6rem] px-[0.5rem] h-10 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 cursor-pointer"
              icon={faHeart}
            />

            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center leading-none">
                3
              </span>
            </div> */}

            <div className="relative">
              <FontAwesomeIcon
                className="w-10 py-[0.6rem] px-[0.5rem] h-10 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer"
                icon={faShoppingCart}
              />
              {cartSize === 0 ? null : (
                <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center leading-none">
                  {cartSize}
                </span>
              )}
            </div>
          </div>

          {/* <div className="text-right text-gray-700 dark:text-gray-200">
            <div className="font-medium">Cart</div>
            <div className="text-sm">Rs 2560</div>
          </div> */}
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
