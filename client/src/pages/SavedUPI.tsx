import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UPI from "../assets/images/UPI.png";

function SavedUPI() {
  const upis = [
    "7080604020@upi",
    "9876543210@upi",
    "1234567890@upi",
    "8765432109@upi",
  ];

  return (
    <>
      <div className="p-4 rounded-lg bg-white">
        <h5 className="py-4 font-bold text-lg">Manage Saved UPI</h5>

        {upis.map((upi, index) => (
          <div
            key={index}
            className="p-5 border border-gray-300 relative mb-4 rounded-lg"
          >
            {/* Top row */}
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div className="w-max bg-gray-100 px-2 py-1 text-xs text-gray-500 font-bold rounded">
                Bhim UPI
              </div>

              {/* Trash icon */}
              <button className="cursor-pointer hover:text-red-500 transition-colors">
                <FontAwesomeIcon icon={faTrash} className="text-gray-600" />
              </button>
            </div>

            {/* UPI row */}
            <div className="flex items-center gap-3 mt-3 flex-wrap">
              <img src={UPI} alt="UPI" className="w-10 h-10 object-contain" />
              <p className="break-words text-gray-700">{upi}</p>
            </div>
          </div>
        ))}
        <div className="pb-4">
          <h5 className="p-2 font-bold">FAQs</h5>
          <div className="p-2">
            <label className="font-bold">
              Why is my UPI being saved on Flipkart?
            </label>
            <p className="py-2">
              It's quicker. You can save the hassle of typing in the complete
              UPI information every time you shop at Flipkart by saving your UPI
              details. You can make your payment by selecting the saved UPI ID
              of your choice at checkout. While this is obviously faster, it is
              also very secure.
            </p>
          </div>
          <div className="p-2">
            <label className="font-bold">
              Is it safe to save my UPI on Flipkart?
            </label>
            <p className="py-2">
              Absolutely. Your UPI ID information is 100 percent safe with us.
              UPI ID details are non PCI compliant and are non confidential
              data.
            </p>
          </div>
          <div className="p-2">
            <label className="font-bold">
              What all UPI information does Flipkart store?
            </label>
            <p className="py-2">
              Flipkart only stores UPI ID and payment provider details. We do
              not store UPI PIN/MPIN.
            </p>
          </div>
          <div className="p-2">
            <label className="font-bold">Can I delete my saved UPI?</label>
            <p className="py-2">
              Yes, you can delete your UPI ID at any given time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SavedUPI;
