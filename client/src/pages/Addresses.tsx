import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function Addresses() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [addAddress, setAddAddress] = useState<boolean>(false);

  const addresses = [
    {
      name: "AMAN",
      phone: "6395651892",
      label: "Home",
      address:
        "109a, Meeranagar gali no7 near reliance tower, RISHIKESH, Uttarakhand - 249202",
    },
    {
      name: "AMAN",
      phone: "9876543210",
      label: "Office",
      address: "Sector 62, Noida, Uttar Pradesh - 201301",
    },
    {
      name: "AMAN",
      phone: "1234567890",
      label: "Other",
      address: "MG Road, Gurugram, Haryana - 122001",
    },
  ];

  return (
    <>
      <div className="p-4 rounded-lg bg-white">
        <h5 className="py-4 font-bold text-lg">Manage Addresses</h5>

        {/* Add New Address */}
        <div
          className={`p-5 mb-4 border border-gray-300 ${
            addAddress && "bg-[#f5fff5]"
          }`}
        >
          <div
            className="cursor-pointer text-green-500 font-semibold"
            onClick={() => setAddAddress(true)}
          >
            {!addAddress && "+"} ADD A NEW ADDRESS
          </div>

          {addAddress && (
            <>
              {/* Name & Phone */}
              <div className="flex flex-col sm:flex-row gap-3 p-2">
                <input
                  className="flex-1 p-2 border border-gray-300 bg-white"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="flex-1 p-2 border border-gray-300 bg-white"
                  type="text"
                  placeholder="10-digit mobile number"
                />
              </div>

              {/* Pincode & Locality */}
              <div className="flex flex-col sm:flex-row gap-3 p-2">
                <input
                  className="flex-1 p-2 border border-gray-300 bg-white"
                  type="number"
                  placeholder="Pincode"
                />
                <input
                  className="flex-1 p-2 border border-gray-300 bg-white"
                  type="text"
                  placeholder="Locality"
                />
              </div>

              {/* Address */}
              <div className="p-2">
                <textarea
                  className="p-2 w-full border border-gray-300 bg-white"
                  placeholder="Address (Area and Street)"
                  rows={3}
                />
              </div>

              {/* City & State */}
              <div className="flex flex-col sm:flex-row gap-3 p-2">
                <input
                  className="flex-1 p-2 border border-gray-300 bg-white"
                  type="text"
                  placeholder="City/District/Town"
                />
                <select className="flex-1 p-2 border border-gray-300 bg-white">
                  <option selected disabled>
                    -- Select State --
                  </option>
                  <option>Andaman & Nicobar Islands</option>
                  <option>Andhra Pradesh</option>
                </select>
              </div>

              {/* Landmark & Alternate Phone */}
              <div className="flex flex-col sm:flex-row gap-3 p-2">
                <input
                  className="flex-1 p-2 border border-gray-300 bg-white"
                  type="text"
                  placeholder="Landmark (Optional)"
                />
                <input
                  className="flex-1 p-2 border border-gray-300 bg-white"
                  type="text"
                  placeholder="Alternate Phone (Optional)"
                />
              </div>

              {/* Address Type */}
              <div className="p-2">
                <label className="text-sm">Address Type</label>
                <div className="flex gap-4 mt-1">
                  <label className="flex items-center gap-2 text-gray-500">
                    <input type="radio" name="type" />
                    Home
                  </label>
                  <label className="flex items-center gap-2 text-gray-500">
                    <input type="radio" name="type" />
                    Work
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="p-2 flex flex-wrap gap-3">
                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 font-bold rounded">
                  Save
                </button>
                <button
                  className="text-green-500 font-bold"
                  onClick={() => setAddAddress(false)}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>

        {/* Saved Addresses */}
        {addresses.map((item, index) => (
          <div
            key={index}
            className="p-5 border border-gray-300 relative mb-4 rounded-lg"
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div className="w-max bg-gray-100 px-2 py-1 text-xs text-gray-500 font-bold rounded">
                {item.label}
              </div>

              {/* 3 dots menu */}
              <div
                className="cursor-pointer relative"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <FontAwesomeIcon
                  icon={faEllipsisVertical}
                  className="text-gray-600"
                />

                {/* Dropdown */}
                {openIndex === index && (
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
                      Edit
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="font-semibold py-2 break-words">
              <span>{item.name}</span>{" "}
              <span className="text-gray-600">{item.phone}</span>
            </div>
            <div className="break-words text-gray-700">{item.address}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Addresses;
