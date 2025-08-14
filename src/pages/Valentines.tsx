export default function Valentines() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ff6b9d] to-[#c44569] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-7xl font-rum-raisin text-white text-center mb-8">
          Valentine's Day Special
        </h1>
        <p className="text-2xl font-roboto text-white text-center mb-16 max-w-3xl mx-auto">
          Sweeten your Valentine's Day with our special romantic brigadeiro collections. 
          Made with love for the ones you love! ❤️
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Love Box",
              description: "12 heart-shaped brigadeiros in romantic flavors",
              price: "$24",
              features: ["Strawberry & Cream", "Dark Chocolate", "Rose Flavor", "Beautiful gift box"]
            },
            {
              name: "Sweet Romance",
              description: "24 brigadeiros with personalized message",
              price: "$45",
              features: ["Mix of 4 flavors", "Custom message card", "Elegant packaging", "Free delivery"]
            },
            {
              name: "Forever Yours",
              description: "Premium collection for that special someone",
              price: "$65",
              features: ["36 gourmet brigadeiros", "Gold packaging", "Champagne flavor", "Red velvet box"]
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-full h-48 bg-gradient-to-br from-[#ff9ff3] to-[#f368e0] rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <span className="text-white font-rum-raisin text-xl font-semibold">
                    {item.name}
                  </span>
                </div>
              </div>
              
              <h3 className="font-rum-raisin text-2xl font-semibold text-[#662361] mb-2">
                {item.name}
              </h3>
              <p className="font-roboto text-gray-600 mb-4">
                {item.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 font-roboto text-gray-700">
                    <svg className="w-4 h-4 text-[#32BBB0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex items-center justify-between">
                <span className="font-rum-raisin text-3xl font-bold text-[#662361]">
                  {item.price}
                </span>
                <button className="bg-[#ff6b9d] text-white px-6 py-2 rounded-lg font-rum-raisin hover:bg-[#ff5252] transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 rounded-lg p-8 mt-16 text-center">
          <h2 className="font-rum-raisin text-3xl font-semibold text-white mb-4">
            Make This Valentine's Day Unforgettable
          </h2>
          <p className="font-roboto text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Order by February 12th to guarantee delivery by Valentine's Day. 
            Free delivery within Indianapolis metro area for orders over $40.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-[#ff6b9d] px-8 py-3 rounded-lg font-rum-raisin text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Place Your Order
          </a>
        </div>
      </div>
    </div>
  );
}
