import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:block">
      {/* For mobile: clickable title */}
      <button
        className="w-full flex justify-between items-center md:cursor-auto md:pointer-events-none py-2 md:py-0 font-bold text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="md:hidden">{isOpen ? "-" : "+"}</span>
      </button>
      <div className={`mt-2 md:mt-0 text-sm space-y-2 ${isOpen ? "block" : "hidden"} md:block`}>
        {children}
      </div>
    </div>
  );
};

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 dark:text-gray-200 py-10 px-6 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Company Info */}
        <FooterSection title="Swoo - India's No.1 Online Market">
          <div>
            <span>Hotline No.</span>
            <p className="text-xl text-green-500">+91 8295000000</p>
          </div>
          <div>
            <span className="text-sm">S127, Industrial Area, Dehradun, Uttarakhand, 248001</span>
            <p className="text-sm p-0">contact@swoo.com</p>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-700">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
            </a>
          </div>
        </FooterSection>

        {/* Top Categories */}
        <FooterSection title="TOP CATEGORIES">
          <ul className="space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">Electronics</li>
            <li className="hover:text-blue-500 cursor-pointer">Fashion</li>
            <li className="hover:text-blue-500 cursor-pointer">Home & Kitchen</li>
            <li className="hover:text-blue-500 cursor-pointer">Sports</li>
          </ul>
        </FooterSection>

        {/* Company */}
        <FooterSection title="COMPANY">
          <ul className="space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">About Us</li>
            <li className="hover:text-blue-500 cursor-pointer">Careers</li>
            <li className="hover:text-blue-500 cursor-pointer">Press</li>
            <li className="hover:text-blue-500 cursor-pointer">Blog</li>
          </ul>
        </FooterSection>

        {/* Help Center */}
        <FooterSection title="HELP CENTER">
          <ul className="space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">Support</li>
            <li className="hover:text-blue-500 cursor-pointer">FAQs</li>
            <li className="hover:text-blue-500 cursor-pointer">Shipping</li>
            <li className="hover:text-blue-500 cursor-pointer">Returns</li>
          </ul>
        </FooterSection>

        {/* Partner */}
        <FooterSection title="PARTNER">
          <ul className="space-y-2">
            <li className="hover:text-blue-500 cursor-pointer">Affiliate</li>
            <li className="hover:text-blue-500 cursor-pointer">Suppliers</li>
            <li className="hover:text-blue-500 cursor-pointer">Resellers</li>
          </ul>
        </FooterSection>

      </div>

      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 Swoo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
