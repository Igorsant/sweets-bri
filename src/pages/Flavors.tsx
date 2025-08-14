export default function Flavors() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#B95BC6] to-[#744B93] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-7xl font-rum-raisin text-white text-center mb-16">
          Our Flavors
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Milk Chocolate", description: "Classic Brazilian brigadeiro with rich milk chocolate" },
            { name: "Dark Chocolate", description: "Intense dark chocolate for the true chocolate lovers" },
            { name: "Coconut", description: "Tropical coconut flavor with a creamy texture" },
            { name: "Strawberry", description: "Sweet and fruity strawberry brigadeiros" },
            { name: "Pistachio", description: "Nutty and sophisticated pistachio flavor" },
            { name: "Lemon", description: "Zesty lemon brigadeiros for a citrus twist" },
          ].map((flavor, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <div className="w-full h-48 bg-gradient-to-br from-[#71EAEB] to-[#17CBB6] rounded-lg mb-4 flex items-center justify-center">
                <span className="text-[#662361] font-rum-raisin text-xl font-semibold">
                  {flavor.name}
                </span>
              </div>
              <h3 className="font-rum-raisin text-xl font-semibold text-[#662361] mb-2">
                {flavor.name}
              </h3>
              <p className="font-roboto text-gray-600">
                {flavor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
