import { useState } from "react";
import logo from "../assets/images/logo.png.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

function Header() {
  const [menuOpen] = useState(false);
  const navigate = useNavigate();
  const cartSize = useAppSelector((state) => state.cartReducer.items.length);
  const { user } = useAppSelector((state) => state.auth);
  const [open, setOpen] = useState(false);

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
              <Link to={"/home"}>Home</Link>
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
            <div className="text-sm  dark:text-blue-400 cursor-pointer relative">
              <div className="relative p-3">
                <div
                  className="cursor-pointer flex items-center gap-1 group"
                  onClick={() => setOpen(!open)}
                >
                  {user?.name ? (
                    <>
                      {user.name}
                      <span
                        className={`transition-transform duration-300 ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <FontAwesomeIcon icon={faAngleDown} />
                      </span>
                    </>
                  ) : (
                    <div className="text-blue-500">
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>

                {user?.name && (
                  <div
                    className={`
          absolute top-10 z-50 w-max border border-gray-300 p-4 rounded-lg shadow-md bg-white
          ${open ? "block" : "hidden"}
          group-hover:block          
        `}
                  >
                    <ul className="text-start">
                      <li className="pb-1 hover:text-blue-600">
                        {" "}
                        <Link to={"/account/myprofile"}>My Profile</Link>
                      </li>
                      <li className="py-1 hover:text-blue-600">
                        <Link to={"/account/myorders"}>Orders</Link>
                      </li>
                      <li className="py-1 hover:text-blue-600">
                        <Link to={"/account/addresses"}>Addresses</Link>
                      </li>
                      <li className="pt-1 border-t border-gray-300 hover:text-red-600">
                        Logout
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link to={"/cart"}>
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
            </Link>
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
