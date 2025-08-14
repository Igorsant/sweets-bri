export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#71EAEB] to-[#17CBB6] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-7xl font-rum-raisin text-[#662361] text-center mb-16">
          About Us
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="font-rum-raisin text-3xl font-semibold text-[#662361] mb-6">
              Our Story
            </h2>
            <p className="font-roboto text-gray-700 mb-4">
              Sweets Bri began with a simple dream: to bring the authentic taste of Brazilian brigadeiros 
              to Indianapolis. Our founder, passionate about sharing the joy of these traditional sweets, 
              learned the art of brigadeiro making from Brazilian grandmothers who passed down their 
              recipes through generations.
            </p>
            <p className="font-roboto text-gray-700 mb-4">
              Every brigadeiro we make is crafted with love, using only the finest ingredients. 
              We believe that food is a universal language that brings people together, and our 
              brigadeiros are our way of sharing a piece of Brazilian culture with our community.
            </p>
            <p className="font-roboto text-gray-700">
              From our kitchen to your table, we're committed to delivering not just sweets, 
              but sweet memories that last a lifetime.
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="font-rum-raisin text-3xl font-semibold text-[#662361] mb-6">
              What are Brigadeiros?
            </h2>
            <p className="font-roboto text-gray-700 mb-4">
              Brigadeiros are traditional Brazilian chocolate truffles that have been delighting 
              taste buds since the 1940s. Named after a Brazilian military officer, these sweet 
              treats are made with just a few simple ingredients: condensed milk, cocoa powder, 
              butter, and chocolate sprinkles.
            </p>
            <p className="font-roboto text-gray-700 mb-4">
              What makes brigadeiros special is their incredibly smooth, fudgy texture and 
              rich chocolate flavor. They're rolled into perfect little balls and coated 
              with various toppings, creating bite-sized pieces of heaven.
            </p>
            <p className="font-roboto text-gray-700">
              In Brazil, no celebration is complete without brigadeiros - they're the centerpiece 
              of birthday parties, weddings, and family gatherings. Now you can experience this 
              beloved tradition right here in Indianapolis!
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h2 className="font-rum-raisin text-3xl font-semibold text-[#662361] text-center mb-8">
            Why Choose Sweets Bri?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#32BBB0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-rum-raisin text-xl font-semibold text-[#662361] mb-2">
                Made with Love
              </h3>
              <p className="font-roboto text-gray-700">
                Every brigadeiro is handcrafted with passion and attention to detail, 
                ensuring the perfect taste and texture.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#32BBB0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-rum-raisin text-xl font-semibold text-[#662361] mb-2">
                Authentic Recipes
              </h3>
              <p className="font-roboto text-gray-700">
                We use traditional Brazilian recipes passed down through generations, 
                ensuring authentic flavors in every bite.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#32BBB0] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-rum-raisin text-xl font-semibold text-[#662361] mb-2">
                Fresh & Fast
              </h3>
              <p className="font-roboto text-gray-700">
                We make our brigadeiros fresh to order and offer convenient delivery 
                throughout the Indianapolis area.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
