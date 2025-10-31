const ServiceDetailsPage = () => {
  return (
    <>
      {/* navbar */}
      <nav className="p-5 flex items-center justify-between border-b">
        <div className="flex gap-2">
          <img src="/assets/booking.png" alt="booking" />
          <div>
            <h3 className="font-bold ">Bookit</h3>
            <p className="font-light">Service Details</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex gap-3 p-2">
            <img src="/assets/profile.png" alt="profile" className="h-6" />
            <p className="font-medium">My Bookings</p>
          </div>
          <div className="flex gap-3 border border-gray-300 rounded-md p-2">
            <img src="/assets/shop.png" alt="shop" className="h-6" />
            <p className="font-medium">Become a Provider</p>
          </div>
        </div>
      </nav>

      {/* main section */}
      <main className="flex flex-col justify-center items-center w-1/2 mx-auto mt-10">
        {/* Image section */}
          <img
            src="/assets/cleaning.png"
            alt="cleaning"
            className="w-full mb-5 rounded-2xl"
          />
        <div className="flex justify-between gap-5 p-5 ">
        
          <div className="flex flex-col justify-center items-start text-left w-full">
            <h2 className="font-medium mb-4 bg-gray-300 w-30 rounded p-1">
              Home Services
            </h2>

            <div className="flex flex-col gap-3 text-left" >
              <h3>Professional Home Cleaning</h3>
              <p className="text-gray-400">CleanCo Services</p>
              <div className="flex gap-3 text-gray-400">
                <p>⭐4.9 (89 reviews)</p>
                <p className="flex gap-2">
                  <img src="./assets/clock.png" alt="clock" className="w-5" />
                  120 minutes
                </p>
                <p className="flex gap-2">
                  <img
                    src="./assets/location.png"
                    alt="location"
                    className="w-5"
                  />
                  City-wide service
                </p>
              </div>
              <p className="text-gray-400 ">
                Comprehensive home cleaning service with eco-friendly products.
                Perfect for busy professionals.
              </p>
              <hr className="mt-5 text-gray-300" />
            </div>

            <div className="mt-5 flex flex-col gap-4 w-full">
              <h4>What's Included</h4>
              <div className="grid grid-cols-2 gap-3">
                <p className="flex items-center gap-3">
                  <img src="./assets/check.png" alt="check" />
                  Eco-friendly products
                </p>
                <p className="flex items-center gap-3">
                  <img src="./assets/check.png" alt="check" />
                  Insured team
                </p>
                <p className="flex items-center gap-3">
                  <img src="./assets/check.png" alt="check" />
                  All rooms included
                </p>
                <p className="flex items-center gap-3">
                  <img src="./assets/check.png" alt="check" />
                  Same-day service
                </p>
              </div>
              <hr className="mt-5 text-gray-300 w-full" />
            </div>

            


            <div className="mt-10 flex flex-col justify-center w-full">
              <h3>Recent Reviews</h3>
              <div>
                <div className="flex flex-col gap-3 border border-gray-300 rounded-2xl my-3 p-5">
                  <h4 className="flex justify-start items-center gap-3">Sarah Johnson <img src="./assets/check.png" alt="check" /></h4>
                  <p>⭐⭐⭐⭐⭐  2 days ago</p>
                  <p>Absolutely amazing service! The team was professional and the results exceeded my expectations. Will definitely book again.</p>
                </div>
                <div className="flex flex-col gap-3 border border-gray-300 rounded-2xl my-3 p-5">
                  <h4 className="flex justify-start items-center gap-3">Mike Chen <img src="./assets/check.png" alt="check" /></h4>
                  <p>⭐⭐⭐⭐⭐  1 week ago</p>
                  <p>Great experience overall. Very punctual and thorough. The booking process was smooth and easy.</p>
                </div>
                <div className="flex flex-col gap-3 border border-gray-300 rounded-2xl my-3 p-5">
                  <h4 className="flex justify-start items-center gap-3">Emily Rodriguez <img src="./assets/check.png" alt="check" /></h4>
                  <p>⭐⭐⭐⭐⭐  2 weeks ago</p>
                  <p>Outstanding quality! Worth every penny. The attention to detail was impressive.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col text-center p-2 w-70 border border-gray-300 rounded-2xl  h-full">
            <div>
              <h4 className="font-bold text-2xl">$85</h4>
              <p className="font-light text-gray-400">per session</p>
              <div className="text-left">
                <div className="flex mt-3 text-xs  gap-5 justify-between items-center">
                <p>Duration</p>
                <p className="font-medium">120 minutes</p>
              </div>
              <div className="flex mt-3 gap-5 text-xs justify-between items-center">
                <p>Location</p>
                <p className="font-medium">City-wide service</p>
              </div>
              <div className="flex mt-3 gap-5 text-xs justify-between items-right ">
                <p>Available</p>
                <p className="font-medium text-right">morning, afternoon, evening</p>
              </div>
              </div>


            </div>
            

            <button className="bg-black hover:bg-gray-600 text-white font-semibold py-2 px-2 rounded-lg transition-colors duration-200 mt-5">
              Book Now
            </button>

            <p className="text-center text-xs mt-5">Free cancellation up to 24 hours before your appointment</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServiceDetailsPage;
