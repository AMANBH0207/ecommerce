import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function Addresses() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <div>
      <div className="p-4 rounded-lg bg-white">
        <h5 className="py-4 font-bold text-lg">Manage Addresses</h5>
        <div className="p-5 mb-4 border border-gray-300 cursor-pointer text-green-500 font-semibold">
          + ADD A NEW ADDRESS
        </div>

        {addresses.map((item, index) => (
          <div key={index} className="p-5 border border-gray-300 relative mb-4">
            <div className="flex justify-between items-start">
              <div className="w-max bg-gray-100 px-2 py-1 text-xs text-gray-500 font-bold">
                {item.label}
              </div>

              {/* 3 dots menu */}
              <div
                className="cursor-pointer relative"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
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

            <div className="font-semibold py-2">
              <span>{item.name}</span> <span>{item.phone}</span>
            </div>
            <div>{item.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Addresses;
