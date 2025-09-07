import { Link } from "react-router-dom";
import profile from "../assets/images/profilepic.svg";

function InfoSideBar() {
  return (
    <div>
      <div className="p-4 flex items-center mb-4 rounded-lg bg-white h-max w-full md:w-1/5 min-w-[360px]">
        <div>
          <img src={profile} />
        </div>
        <div>
          <div className="text-xs text-gray-500 px-2">Hello,</div>
          <div className="px-2">Aman Bhardwaj</div>
        </div>
      </div>

      <div className="items-center rounded-lg bg-white">
        <Link to="myorders">
          <div className="border-gray-300 border-b-1 w-full p-4 cursor-pointer">
            <span>MY ORDERS</span>
          </div>
        </Link>

        <div className="border-gray-300 border-b-1 w-full p-4">
          <span className="cursor-pointer">ACCOUNT SETTINGS</span>

          <Link to="myprofile">
            <p className="p-2 cursor-pointer">Profile Information</p>
          </Link>

          <Link to="addresses">
            <p className="p-2 cursor-pointer">Manage Addresses</p>
          </Link>
        </div>

        <div className="border-gray-300 border-b-1 w-full p-4">
          <span className="cursor-pointer">PAYMENTS</span>
          <p className="p-2 cursor-pointer">Saved UPI</p>
          <p className="p-2 cursor-pointer">Saved Cards</p>
        </div>

        <div className="border-gray-300 border-b-1 w-full p-4">
          <span className="cursor-pointer">MY STUFF</span>
          <p className="p-2 cursor-pointer">My Coupons</p>
          <p className="p-2 cursor-pointer">My Review & Ratings</p>
          <p className="p-2 cursor-pointer">My Wishlist</p>
        </div>

        <div className="w-full p-4">
          <span className="cursor-pointer">LOGOUT</span>
        </div>
      </div>
    </div>
  );
}

export default InfoSideBar;
