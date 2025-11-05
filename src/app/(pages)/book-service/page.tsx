import Image from "next/image";

const BookServicePage = () => {
  const services = [
    {
      id: 1,
      title: "Professional Home Clearing",
      provider: "CleanCo Services",
      rating: 4.9,
      reviews: 89,
      duration: "120min",
      location: "City-wide service",
      price: 85,
      image: "/assets/cleaning.png"
    },
    {
      id: 2,
      title: "Business Consulting",
      provider: "Strategic Advisors",
      rating: 4.9,
      reviews: 67,
      duration: "90min",
      location: "Business District",
      price: 200,
      image: "/assets/businessconsultation.png"
    },
    {
      id: 3,
      title: "Luxury Spa Facial Treatment",
      provider: "Severity Day Spa",
      rating: 4.5,
      reviews: 12,
      duration: "60min",
      location: "Spa District",
      price: 120,
      image: "/assets/luxuryspa.png"
    },
    {
      id: 4,
      title: "Therapeutic Massage",
      provider: "Healthy Touch Wellness",
      rating: 4.5,
      reviews: 20,
      duration: "60min",
      location: "Wellness Center",
      price: 95,
      image: "/assets/massage.png"
    },
    {
      id: 5,
      title: "Personal Training Session",
      provider: "P/Life Studio",
      rating: 4.7,
      reviews: 16,
      duration: "60min",
      location: "Fitness Studio",
      price: 79,
      image: "/assets/training.png"
    },
    {
      id: 6,
      title: "Pet Grooming Service",
      provider: "Pavement Cleaning",
      rating: 4.6,
      reviews: 34,
      duration: "90min",
      location: "Cleaning Center",
      price: 90,
      image: "/assets/pet.png"
    }
  ];

  const categories = [
    "Highest Read", "Most Popular", "Nearby", "Best Rated", "Affordable"
  ];

  return (
    <>
      {/* header section */}
      <header className="mt-10 flex flex-col gap-10 p-5">
        <div className="">
          <h2 className="font-semibold text-2xl mb-4">
            Discover Amazing Services
          </h2>
          <p className="text-xl font-light">
            Book appointments with top-rated professionals in your area
          </p>
        </div>

        <div className="bg-gray-100 flex justify-between items-center rounded p-3">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <img src="./assets/filter.png" alt="filter" />
              <p>Filters</p>
            </div>
            <div>
              <label htmlFor="services">All Categories</label>
              <select name="services" id="services">
                <option value="0"></option>
                <option value="Home Services">Home Services</option>
                <option value="Consulting">Consulting</option>
                <option value="Beauty and Wellnes">Beauty and Wellness</option>
                <option value="Fitness">Fitness</option>
                <option value="Pet Care">Pet Care</option>
              </select>
            </div>
            <div>
              <label htmlFor="rate">Highest Rated</label>
              <select name="rate" id="rate">
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          <p>6 services found</p>
        </div>
      </header>

      <main className="mt-10 p-5">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {services.map((service) => (
      <div key={service.id} className="bg-white rounded-xl shadow-lg border border-secondary200 overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Service Image */}
        <div className="relative h-48 bg-gradient-to-br from-primary700 to-primary600">
          <Image
            src={service.image || "/assets/booking.png"}
            alt={service.title}
            fill
            className="object-cover"
          />
          {/* Price Badge */}
          <div className="absolute top-4 right-4 bg-white text-secondary50 px-3 py-1 rounded-full text-sm font-bold shadow-md">
            ${service.price}
          </div>
        </div>

        {/* Service Content */}
        <div className="p-6">
          {/* Title and Provider */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-secondary100 mb-1">{service.title}</h3>
            <p className="text-primary500 font-medium text-sm">{service.provider}</p>
          </div>

          {/* Rating and Reviews */}
          <div className="flex items-center mb-4">
            <div className="flex items-center  px-2 py-1 rounded">
              <span className="text-warm400 mr-1 text-sm">★</span>
              <span className="font-bold text-secondary100 text-sm">{service.rating}</span>
              <span className="text-secondary100 ml-1 text-sm">({service.reviews})</span>

              <span className="mr-1 ml-5"><img src="./assets/clock.png" alt="" /></span>
              <span>{service.duration}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex justify-between items-center mb-6 text-sm text-secondary300">
            <div className="flex items-center">
              <span className="mr-1"><img src="./assets/location.png" alt="" /></span>
              <span>{service.location}</span>
            </div>
          </div>

          {/* Price Badge */}
          <div className=" text-secondary50 px-3 py-1 flex items-center justify-between text-sm font-bold">
            from ${service.price}

            {/* Action Button */}
            <button className=" bg-secondary100 hover:bg-secondary300 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-200 hover:scale-105 transform">
                <a href="/service-details">Book Now</a>
            </button>
          </div>
          
        </div>
      </div>
    ))}
  </div>
</main>
    </>
  );
};

export default BookServicePage;