import restaurantImg from '../assets/resturant.jpg'; 
import ReviewsCarousel from '../components/ReviewsCarousel';
import fbimg from "../assets/fb.png";
import Footer from '../components/Footer';

const HomePage = () => {
  const days = [
    { day: 'Mon', hours: '13:00 – 23:00' },
    { day: 'Tue', hours: '13:00 – 23:00' },
    { day: 'Wed', hours: '13:00 – 23:00' },
    { day: 'Thu', hours: '13:00 – 23:00' },
    { day: 'Fri', hours: '13:00 – 23:00' },
    { day: 'Sat', hours: '13:00 – 23:00' },
    { day: 'Sun', hours: '13:00 – 23:00' },
  ];

  const getCurrentDay = () => {
    const todayIndex = new Date().getDay();
    return days[todayIndex === 0 ? 6 : todayIndex - 1];
  };

  const currentDay = getCurrentDay();

  return (
    <div className="bg-white text-gray-900 ">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] overflow-hidden"
        style={{ backgroundImage: `url(${restaurantImg})` }}
      >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-40"></div>

       <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-90 flex justify-center items-center">
  <div className="text-center animate-fadeIn">
    <h1 className="text-4xl md:text-7xl font-serif font-bold text-white tracking-widest drop-shadow-lg animate-slideUp">
      Welcome to <span className="text-yellow-500 font-luxury">Angus Feast</span>
    </h1>
    <p className="text-2xl text-gray-200 mt-4 font-light italic drop-shadow-lg tracking-wide animate-fadeIn delay-200">
      The Tasty House
    </p>
    <a
  href="#book"
  className="mt-8 inline-block px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-yellow-600 to-[#D4AF37] text-white rounded-full shadow-lg text-xl font-semibold tracking-wide transition-transform transform hover:scale-105 hover:shadow-[0px_0px_15px_#FFD700] duration-300 ease-in-out border-2 border-[#B8860B]"
>
  Book Now
</a>
  </div>
</div>

      </section>

      {/* Reviews Carousel */}
      <section className="">
        <ReviewsCarousel />
      </section>

      {/* Social Section */}
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-bebas-neue">Connect with Us</h2>
        <div className="flex justify-center items-center space-x-4">
          <img src={fbimg} className="w-12 h-12 hover:scale-105 transition-transform duration-300" alt="Facebook" />
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-blue-600 hover:underline transition-transform transform hover:scale-105 duration-300"
          >
            Facebook
          </a>
        </div>
      </section>

      {/* Gift Vouchers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-end  space-y-8 md:space-y-0 px-5">
          <img
            src={restaurantImg}
            alt="Gift Voucher"
            className="w-full md:w-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <div className="md:ml-8 text-center md:text-left">
            <h2 className="text-4xl font-bold ">Gift Vouchers</h2>
            <p className="mt-4 text-gray-700 ">
              Send a gift voucher to friends and family for future use!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-5">
          {/* Contact Form */}
          <div action="https://formsubmit.co/410a36370ba799222c84013ad5fe6762" method="POST" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 font-bebas-neue text-center pt-12">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Name</label>
                <input type="text" name="Name" className="w-full p-3 border rounded hover:border-gray-400 focus:border-yellow-500" />
              </div>
              <div>
                <label className="block text-gray-700">Phone</label>
                <input type="text" name='Phone number' className="w-full p-3 border rounded hover:border-gray-400 focus:border-yellow-500" />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input type="Email" name='email'  className="w-full p-3 border rounded hover:border-gray-400 focus:border-yellow-500" />
              </div>
              <div>
                <label className="block text-gray-700">Message</label>
                <textarea name='Message' className="w-full p-3 border rounded hover:border-gray-400 focus:border-yellow-500"></textarea>
              </div>
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 w-full transition-transform transform hover:scale-105 duration-300">
                Send
              </button>
            </form>
          </div>

          {/* Business Details */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold mb-6 font-bebas-neue">Visit Us</h2>
            <p className="mb-4 text-gray-700">
              Do you have dietary concerns? Questions about an upcoming event? Drop us a line, and we&apos;ll get back to you soon!
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Angus Feast</h3>
              <p className="mb-2 text-gray-600">South Tay Square, Dundee, Angus, DD1 1PB</p>
              <p className="mb-2 text-gray-600"> 0141 611 2646</p>
              <p className="mb-4 text-gray-600">clearbusinessbyadrian@gmail.com</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-sm">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">Opening Hours</h3>
              <p className="text-gray-600">
                <strong>Open today:</strong> {currentDay.hours}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {days.map((day, index) => (
                  <div key={index} className={`p-2 rounded ${day.day === currentDay.day ? 'bg-blue-100' : ''}`}>
                    <p className="text-gray-700 font-semibold">{day.day}</p>
                    <p className="text-gray-600">{day.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative bg-white">
        <h2 className="text-4xl font-bold font-bebas-neue text-center mb-8">Find Us</h2>
        <iframe
          className="w-full h-96 rounded-lg shadow-lg transition-transform duration-300"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.333720821669!2d-2.9740936843183344!3d56.4613883807649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48867c6ac82c449b%3A0xdcd41b1538f83a98!2sSouth%20Tay%20Square%2C%20Dundee%2C%20Angus%2C%20DD1%201PB%2C%20UK!5e0!3m2!1sen!2suk!4v1633014569180!5m2!1sen!2suk"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default HomePage;
