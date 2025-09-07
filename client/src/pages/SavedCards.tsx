import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VISA from "../assets/images/visa.png"; // Example card logo
import MASTER from "../assets/images/mastercard.png"; // Example card logo

function SavedCards() {
  const cards = [
    {
      type: "Visa",
      number: "**** **** **** 1234",
      expiry: "05/27",
      logo: VISA,
    },
    {
      type: "MasterCard",
      number: "**** **** **** 5678",
      expiry: "11/28",
      logo: MASTER,
    },
  ];

  return (
    <div className="p-4 rounded-lg bg-white">
      <h5 className="py-4 font-bold text-lg">Manage Saved Cards</h5>

      {cards.map((card, index) => (
        <div
          key={index}
          className="p-5 border border-gray-300 relative mb-4 rounded-lg"
        >
          {/* Top row */}
          <div className="flex justify-between items-center flex-wrap gap-2">
            <div className="w-max bg-gray-100 px-2 py-1 text-xs text-gray-500 font-bold rounded">
              {card.type}
            </div>

            {/* Trash icon */}
            <button className="cursor-pointer hover:text-red-500 transition-colors">
              <FontAwesomeIcon icon={faTrash} className="text-gray-600" />
            </button>
          </div>

          {/* Card row */}
          <div className="flex items-center gap-3 mt-3 flex-wrap">
            <img
              src={card.logo}
              alt={card.type}
              className="w-12 h-8 object-contain"
            />
            <div>
              <p className="font-semibold text-gray-800">{card.number}</p>
              <p className="text-sm text-gray-500">Expiry: {card.expiry}</p>
            </div>
          </div>
        </div>
      ))}

      {/* FAQs */}
      <div className="pb-4">
        <h5 className="p-2 font-bold">FAQs</h5>

        <div className="p-2">
          <label className="font-bold">Why is my card being saved?</label>
          <p className="py-2">
            It’s quicker. You don’t have to enter your card details every time
            you shop. You can just select your saved card at checkout.
          </p>
        </div>

        <div className="p-2">
          <label className="font-bold">Is it safe to save my card?</label>
          <p className="py-2">
            Absolutely. Your card details are stored securely and sensitive
            information like CVV is never saved.
          </p>
        </div>

        <div className="p-2">
          <label className="font-bold">What card info is stored?</label>
          <p className="py-2">
            We only store the last 4 digits of your card number, card type, and
            expiry date. CVV is never saved.
          </p>
        </div>

        <div className="p-2">
          <label className="font-bold">Can I delete my saved card?</label>
          <p className="py-2">
            Yes, you can delete your saved card anytime using the delete option.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SavedCards;
