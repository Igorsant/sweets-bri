export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#964EA0] to-[#823666] py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-7xl font-rum-raisin text-white text-center mb-16">
          Contact Us
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="font-rum-raisin text-2xl font-semibold text-[#662361] mb-6">
              Send us a message
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block font-roboto text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#32BBB0] focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-roboto text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#32BBB0] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block font-roboto text-gray-700 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#32BBB0] focus:outline-none"
                  placeholder="(317) 555-0123"
                />
              </div>
              <div>
                <label className="block font-roboto text-gray-700 mb-2">Message</label>
                <textarea 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:border-[#32BBB0] focus:outline-none h-32"
                  placeholder="Tell us about your order or questions..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#32BBB0] text-white py-3 rounded-lg font-rum-raisin text-lg hover:bg-[#2aa89e] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="text-white">
            <h2 className="font-rum-raisin text-2xl font-semibold mb-6">
              Get in touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#32BBB0] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-rum-raisin text-lg font-semibold">Location</h3>
                  <p className="font-roboto text-gray-300">Indianapolis, IN Metro Area</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#32BBB0] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-rum-raisin text-lg font-semibold">Phone</h3>
                  <p className="font-roboto text-gray-300">(317) 555-BRIG</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#32BBB0] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-rum-raisin text-lg font-semibold">Email</h3>
                  <p className="font-roboto text-gray-300">hello@sweetsbri.com</p>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-6 mt-8">
                <h3 className="font-rum-raisin text-xl font-semibold text-[#32BBB0] mb-2">
                  WE OFFER DELIVERY
                </h3>
                <p className="font-roboto text-gray-300">
                  We deliver fresh brigadeiros throughout the Indianapolis metro area. 
                  Contact us for delivery options and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
