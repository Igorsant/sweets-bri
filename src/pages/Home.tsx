import { useState, useEffect } from "react";
import backgroundHero from "../assets/background-hero.png";
import bigBrigadeiro from "../assets/big-brigadeiro.png";
import brigadeiroItem from "../assets/brigadeiro-item.png";
import bucket from "../assets/bucket.png";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const slidePercentage = isMobile ? 50 : 25;

  const carouselItems = [
    { id: 1, name: "Classic Brigadeiro", image: "/brigadeiro-1.jpg" },
    { id: 2, name: "Coconut Brigadeiro", image: "/brigadeiro-2.jpg" },
    { id: 3, name: "Chocolate Brigadeiro", image: "/brigadeiro-3.jpg" },
    { id: 4, name: "Strawberry Brigadeiro", image: "/brigadeiro-4.jpg" },
    { id: 5, name: "Pistachio Brigadeiro", image: "/brigadeiro-5.jpg" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center bg-gradient-to-r from-[#964EA0] to-[#823666] text-white pb-60">
        <img
          className="absolute w-full h-full object-cover"
          src={backgroundHero}
          alt="background image"
        />
        <img
          className="absolute bottom-0 right-0"
          src={bigBrigadeiro}
          width={700}
          height={700}
          alt="background brigadeiro"
        />
        <div className="relative z-20">
          <h1 className="font-inter text-7xl font-semibold pt-15 mx-10 max-w-300">
            Bringing the amazing
            <br /> brigadeiros to Indianapolis
          </h1>
          <p className="font-roboto max-w-120 mx-10 mt-5">
            That's right, Brigadeiros! I know, it is hard to read and say that
            out loud. Can we just call them Sweets Bri? Of course! Sweets Bri
            are candies originally from Brazil and are making their way to the
            US. Let's make a sweeter country together!
          </p>
          <div className="font-rum-raisin flex gap-x-5 mt-10 mx-10">
            <a
              href="/flavors"
              className="bg-teal-500 rounded-lg py-2 px-7 text-2xl flex items-center hover:bg-teal-400 transition-colors"
            >
              Explore our Flavors
            </a>
            <a
              href="/contact"
              className="border-3 border-teal-200 text-teal-200 rounded-lg py-2 px-7 text-2xl flex items-center hover:text-white hover:bg-teal-500 hover:border-teal-500 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="-mt-32 bg-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Arrow Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden mx-12 pb-3 pt-16">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * slidePercentage}%)`,
                }}
              >
                {carouselItems.map((item, _index) => (
                  <div
                    key={item.id}
                    className="md:w-1/4 w-1/2 flex-shrink-0 px-2"
                  >
                    <div className="bg-gradient-to-b from-[#71EAEB] to-[#17CBB6] rounded-3xl shadow-md pb-10">
                      <div className="relative text-[#662361]">
                        <img
                          src={brigadeiroItem}
                          alt=""
                          className="absolute -top-15 left-1/2 -translate-x-1/2"
                        />
                        <div className="flex flex-col items-center">
                          <h4 className="mt-42 font-rum-raisin text-xl">MILK CHOCOLATE</h4>
                          <p className="mt-1 text-center font-roboto px-3">
                            <span className="font-semibold">Ingredients:</span> condensed milk, mix chocolate
                            powder, dark chocolate, butter, and chocolate
                            sprinkles
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-[#17CBB6]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/** Contact Us */}
          <div className="text-white flex justify-center my-20">
            <a
              href="/contact"
              className="bg-[#32BBB0] py-3 px-7 rounded-xl text-2xl flex items-center gap-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 27 27"
                fill="none"
              >
                <path
                  d="M3 13C3 7.4875 7.4875 3 13 3C18.5125 3 23 7.4875 23 13C23 14.475 22.675 15.925 22.025 17.2875C21.8625 17.625 21.7875 17.9875 21.7875 18.3625C21.7875 18.6 21.825 18.8375 21.8875 19.0625L23.0625 23.0625L19.0625 21.8875C18.475 21.7125 17.8375 21.7625 17.2875 22.025C15.925 22.675 14.475 23 13 23C7.4875 23 3 18.5125 3 13ZM0.5 13C0.5 19.9 6.1 25.5 13 25.5C14.925 25.5 16.725 25.05 18.3625 24.2875L26.75 26.75L24.2875 18.3625C25.05 16.725 25.5 14.925 25.5 13C25.5 6.1 19.9 0.499998 13 0.499998C6.1 0.499998 0.5 6.1 0.5 13Z"
                  fill="white"
                />
              </svg>
              <span className="font-rum-raisin">Contact Us</span>
            </a>
          </div>
        </div>
      </section>

      {/** Our Prices */}
      <section className="bg-gradient-to-b from-[#B95BC6] to-[#744B93] p-10 overflow-hidden">
        <div className="flex text-white justify-between items-center font-rum-raisin">
          <h1 className="text-7xl">Our Prices</h1>
          <a href="/flavors" className="bg-[#32BBB0] rounded-xl py-3 px-7 text-2xl">
            All products
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[0, 1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="relative max-w-80 rounded-lg bg-gradient-to-b from-[#63E8E9] to-[#5BE3D7] mt-30"
            >
              <img
                src={bucket}
                alt="bucket"
                className="max-w-[300px] max-h-[250px] absolute -top-24 left-1/2 transform -translate-x-1/2 object-contain flex-shrink-0"
              />
              <div className="text-[#9C1C89] pt-32 pl-3 pb-4">
                <h4 className="text-2xl font-rum-raisin">
                  SMALL TRAY
                </h4>
                <p className="font-roboto">
                  <b>1 flavor</b> of bri
                </p>
              </div>
              <div className="bg-[#241436] rounded-b-lg text-white flex justify-between items-center p-3 font-rum-raisin">
                <h4 className="text-xl">20 UNITS</h4>
                <h4 className="text-4xl">$ 35</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
