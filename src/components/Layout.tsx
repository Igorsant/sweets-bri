import { Outlet } from 'react-router-dom';
import brigadeiroLogo from "../assets/brigadeiro-logo.png";
import sweetsBri from "../assets/sweets-bri.png";

export default function Layout() {
  return (
    <>
      <header className="font-istok">
        <nav>
          <ul className="font-istok text-[#5E5E5E] flex relative p-5 gap-x-10 justify-center">
            <li className="absolute -left-7 top-2">
              <a href="/">
                <img
                  width={100}
                  height={100}
                  alt="logo image"
                  src={brigadeiroLogo}
                />
              </a>
            </li>
            <li className="absolute left-10">
              <a href="/">
                <img
                  width={100}
                  height={100}
                  alt="logo sweets bri"
                  src={sweetsBri}
                />
              </a>
            </li>
            <li className="hover:text-purple-400">
              <a href="/valentines">VALENTINE'S DAY</a>
            </li>
            <li>
              <a href="/flavors" className="hover:text-purple-400">
                FLAVORS
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-purple-400">
                CONTACT
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-purple-400">
                ABOUT US
              </a>
            </li>
          </ul>
        </nav>
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
