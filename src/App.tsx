import { useState } from "react";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <header>
        <nav>
          <ul className="flex relative p-5 gap-x-10 justify-center">
            <li className="absolute -left-7 top-2">
              <img
                width={100}
                height={100}
                alt="logo image"
                src="/brigadeiro.png"
              />
            </li>
            <li className="absolute left-10">
              <img
                width={100}
                height={100}
                alt="logo sweets bri"
                src="/sweets-bri.png"
              />
            </li>
            <li>
              <a href="">VALENTINE'S DAY</a>
            </li>
            <li>
              <a href="">FLAVORS</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
            <li>
              <a href="">ABOUT US</a>
            </li>
          </ul>
        </nav>
        <div className="bg-black text-white text-center py-2">
          WE OFFER DELIVERY
        </div>
      </header>
      <section className="relative bg-cover bg-center bg-gradient-to-r from-[#964EA0] to-[#823666] text-white pb-60">
        <img
          className="absolute w-full h-full object-cover z-0"
          src="/image 8.png"
          alt="background image"
        />
        <img
          className="absolute bottom-0 right-0 z-10"
          src="/image 11.png"
          width={700}
          height={700}
          alt="background brigadeiro"
        />
        <div className="relative z-20">
          <h1 className="text-7xl font-semibold pt-15 mx-10 max-w-300">
            Bringing the amazing
            <br /> brigadeiros to Indianapolis
          </h1>
          <p className="max-w-120 mx-10 mt-5">
            That's right, Brigadeiros! I know, it is hard to read and say that
            out loud. Can we just call them Sweets Bri? Of course! Sweets Bri
            are candies originally from Brazil and are making their way to the
            US. Let's make a sweeter country together!
          </p>
          <div className="flex gap-x-5 mt-10 mx-10">
            <a className="bg-teal-500 rounded-lg py-2 px-7 font-bold text-2xl flex items-center">
              Explore our Flavors
            </a>
            <a className="border-3 border-teal-200 text-teal-200 rounded-lg py-2 px-7 font-bold text-2xl flex items-center">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Flavors
          </h2>

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
            <div className="overflow-hidden mx-12 pb-3">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 25}%)` }}
              >
                {carouselItems.map((item, _index) => (
                  <div key={item.id} className="w-1/4 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {item.name}
                        </span>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          Delicious Brazilian sweet
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2 border border-red-500">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-purple-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
