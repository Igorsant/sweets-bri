import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import brigadeiroLogo from "../assets/brigadeiro-logo.png";
import sweetsBri from "../assets/sweets-bri.png";

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="font-istok bg-white shadow-sm">
        <nav className="relative">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
            {/* Left Logo */}
            <div className="flex items-center gap-2">
              <Link to="/">
                <img
                  width={40}
                  alt="logo image"
                  src={brigadeiroLogo}

                />
              </Link>
              <Link to="/">
                <img
                  width={100}
                  alt="logo sweets bri"
                  src={sweetsBri}
                />
              </Link>
            </div>

            {/* Center Navigation Links */}
            <ul className="flex gap-8 text-[#5E5E5E] font-medium">
              <li>
                <Link to="/valentines" className="hover:text-purple-400 transition-colors">
                  VALENTINE'S DAY
                </Link>
              </li>
              <li>
                <Link to="/flavors" className="hover:text-purple-400 transition-colors">
                  FLAVORS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-purple-400 transition-colors">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-purple-400 transition-colors">
                  ABOUT US
                </Link>
              </li>
            </ul>

            {/* Right space for potential cart/user icons */}
            <div className="w-32"></div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between px-4 py-3">
            {/* Left Logo */}
            <div className="flex items-center gap-2">
              <Link to="/">
                <img
                  width={40}
                  alt="logo image"
                  src={brigadeiroLogo}

                />
              </Link>
              <Link to="/">
                <img
                  width={100}
                  alt="logo sweets bri"
                  src={sweetsBri}
                />
              </Link>
            </div>

            {/* Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="text-[#5E5E5E] hover:text-purple-400 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
              <ul className="py-4 space-y-2">
                <li>
                  <Link
                    to="/valentines"
                    className="block px-6 py-3 text-[#5E5E5E] hover:text-purple-400 hover:bg-gray-50 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    VALENTINE'S DAY
                  </Link>
                </li>
                <li>
                  <Link
                    to="/flavors"
                    className="block px-6 py-3 text-[#5E5E5E] hover:text-purple-400 hover:bg-gray-50 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    FLAVORS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="block px-6 py-3 text-[#5E5E5E] hover:text-purple-400 hover:bg-gray-50 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    CONTACT
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block px-6 py-3 text-[#5E5E5E] hover:text-purple-400 hover:bg-gray-50 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    ABOUT US
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
        
        {/* Delivery Banner */}
        <div className="bg-black text-white text-center py-3 flex items-center justify-center">
          WE OFFER DELIVERY
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#4A2C5A] text-white py-4">
        <div className="text-center font-roboto text-gray-300">
          © 2025 Sweets Bri. All rights reserved. Made with ❤️ in Indianapolis.
        </div>
      </footer>
    </>
  );
}
