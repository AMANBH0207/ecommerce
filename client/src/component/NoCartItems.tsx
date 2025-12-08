import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NoCartItems() {
  return (
    <div className="flex justify-center items-center w-full h-[80vh]">
      <div className="text-gray-500">
        <div className="text-center text-[50px]">
          {" "}
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        <div>Your cart is empty. Start adding items to see them here.</div>
      </div>
    </div>
  );
}

export default NoCartItems;
