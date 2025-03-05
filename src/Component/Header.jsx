import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#69c] text-white shadow-md z-50">
      <div className="container mx-auto px-2 md:px-0 py-3 flex justify-between items-center">
        {/* Left Side: Logo & Brand Name */}
        <div className="flex items-center">
          <a href="#page-top" className="mr-2">
            <img src="/Hm.png" width={40} alt="Logo" />
          </a>
          <h1 className="font-bold hover:text-yellow-300 transition cursor-pointer">
            HOSTEDMINDS
          </h1>
        </div>

        {/* Right Side: Navigation & Mobile Menu Button */}
        <div className="flex items-center">
          {/* Mobile Menu Button - Appears only on small screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none ml-4"
          >
            <div className="space-y-1">
              <div className="w-6 h-1 bg-white"></div>
              <div className="w-6 h-1 bg-white"></div>
              <div className="w-6 h-1 bg-white"></div>
            </div>
          </button>

          {/* Navigation Links */}
          <ul
            style={{ fontSize: "18px" }}
            className={`absolute left-0 top-12 w-full bg-[#69c] text-center transition-all duration-300 ease-in-out md:static md:flex md:space-x-0 md:bg-transparent md:w-auto
            ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible md:opacity-100 md:visible"
            }`}
          >
            {[
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Shop", href: "#portfolio" },
              { name: "Contact", href: "#contact" },
              { name: "T&C", href: "Term.jsx" },
            ].map((item, index) => (
              <li key={index} className="py-2 md:py-0">
                <a
                  href={item.href}
                  className="block px-4 py-2 text-white hover:text-black transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
