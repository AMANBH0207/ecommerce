import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CategoriesHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-lg bg-green-600 p-4 text-white">
      {/* Search Bar with Dropdown */}
      <div className="flex w-full md:w-[35%] items-center bg-white rounded overflow-hidden">
        {/* Category Dropdown inside search bar */}
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for Products, Brands and More..."
          className="flex-1 p-2 outline-none text-black text-sm sm:text-base"
        />

        {/* Search Icon */}
        <button className="px-3 text-black">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

    </div>
  );
}

export default CategoriesHeader;
