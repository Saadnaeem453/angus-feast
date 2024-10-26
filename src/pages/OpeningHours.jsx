import { FiClock, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'; // React Icons

const OpeningHours = () => {
  const days = [
    { day: 'Monday', hours: '1:00 PM – 11:00 PM' },
    { day: 'Tuesday', hours: '1:00 PM – 11:00 PM' },
    { day: 'Wednesday', hours: '1:00 PM – 11:00 PM' },
    { day: 'Thursday', hours: '1:00 PM – 11:00 PM' },
    { day: 'Friday', hours: '1:00 PM – 11:00 PM' },
    { day: 'Saturday', hours: '1:00 PM – 11:00 PM' },
    { day: 'Sunday', hours: '1:00 PM – 11:00 PM' },
  ];

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-16 px-4 pt-40">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Our Opening Hours</h1>
          <p className="text-xl text-gray-400 italic">&quot;Savor the flavors at the perfect time&quot;</p>
        </header>

        {/* Opening Hours Section */}
        <section className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-16">
          <h2 className="text-4xl font-bold text-yellow-500 text-center mb-8 flex justify-center items-center space-x-4">
            <FiClock className="text-yellow-500 text-4xl" />
            <span>Operating Hours</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {days.map((day, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition duration-300">
                <h3 className="text-2xl font-semibold text-white">{day.day}</h3>
                <p className="text-xl text-gray-400">{day.hours}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 bg-gray-800 rounded-lg shadow-lg p-8 md:p-16">
          <h2 className="text-4xl font-bold text-yellow-500 text-center mb-8 flex justify-center items-center space-x-4">
            <FiPhone className="text-yellow-500 text-4xl" />
            <span>Get in Touch</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
            {/* Location */}
            <div className="flex items-center space-x-4">
              <FiMapPin className="text-yellow-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-white">Location</h3>
                <p className="text-gray-400">South Tay Square, Dundee, Angus, DD1 1PB</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FiPhone className="text-yellow-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-white">Phone</h3>
                <p className="text-gray-400">0141 611 2646</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <FiMail className="text-yellow-500 text-3xl" />
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-gray-400">
                  <a href="mailto:clearbusinessbyadrian@gmail.com" className="hover:text-yellow-500 transition duration-300">
                    clearbusinessbyadrian@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OpeningHours;
