export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#964EA0] to-[#823666] py-20">
      <div className="max-w-4xl mx-auto px-6">
  <h1 className="text-7xl font-rum-raisin text-white text-center mb-16 tracking-widest" style={{textShadow: '0 1px 2px #662361', letterSpacing: '0.08em'}}> 
          Contact Us
        </h1>
        <div className="flex justify-center items-center">
          <div className="text-white max-w-xl w-full flex flex-col items-center text-center">
            <h2 className="font-rum-raisin text-2xl font-semibold mb-6 text-white tracking-wide" style={{textShadow: '0 1px 2px #662361', letterSpacing: '0.06em'}}> 
              Get in touch
            </h2>
            <div className="w-full">
              <div className="flex items-center gap-4 w-full mb-8 mt-0" style={{maxWidth: '350px', margin: '0 auto'}}>
                <div className="w-10 h-10 bg-[#32BBB0] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-rum-raisin text-lg font-semibold text-white tracking-wide" style={{textShadow: '0 1px 2px #662361', letterSpacing: '0.05em'}}>Location</h3>
                  <p className="font-roboto text-gray-300">Indianapolis, IN Metro Area</p>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full mb-8" style={{maxWidth: '350px', margin: '0 auto'}}>
                <div className="w-10 h-10 bg-[#32BBB0] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-rum-raisin text-lg font-semibold text-white tracking-wide" style={{textShadow: '0 1px 2px #662361', letterSpacing: '0.05em'}}>Phone</h3>
                  <p className="font-roboto text-gray-300">(317) 555-BRIG</p>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full mb-16" style={{maxWidth: '350px', margin: '0 auto'}}>
                <div className="w-10 h-10 bg-[#32BBB0] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-rum-raisin text-lg font-semibold text-white tracking-wide" style={{textShadow: '0 1px 2px #662361', letterSpacing: '0.05em'}}>Email</h3>
                  <p className="font-roboto text-gray-300">hello@sweetsbri.com</p>
                </div>
              </div>

              <div className="bg-black/30 rounded-lg p-6 mt-0 w-full" style={{maxWidth: '350px', margin: '32px auto 0 auto'}}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-8 h-8 bg-[#32BBB0] rounded-full flex items-center justify-center">
                    {/* Delivery/Message Icon: Truck */}
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7a2 2 0 012-2h6a2 2 0 012 2v10" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17h16" />
                      <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth={2} fill="white" />
                      <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth={2} fill="white" />
                    </svg>
                  </span>
                  <h3 className="font-rum-raisin text-xl font-semibold text-[#32BBB0] tracking-wide" style={{letterSpacing: '0.05em'}}>WE OFFER DELIVERY, TOO</h3>
                </div>
                <p className="font-roboto text-gray-300">
                  We deliver fresh brigadeiros throughout the Indianapolis metro area.<br />
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
