import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'; // React Icons
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'; // Social Icons

const ContactUs = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-400 italic">&quot;We’re here to assist you&quot;</p>
        </header>

        {/* Contact Section */}
        <section className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-yellow-500 mb-8 flex items-center space-x-4">
                <FiPhone className="text-yellow-500 text-2xl sm:text-4xl" />
                <span className='text-2xl  md:text-4xl'>Get In Touch</span>
              </h2>
              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <FiMapPin className="text-yellow-500 text-2xl sm:text-3xl" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Location</h3>
                    <p className="text-sm sm:text-base text-gray-400">South Tay Square, Dundee, Angus, DD1 1PB</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <FiPhone className="text-yellow-500 text-2xl sm:text-3xl" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Phone</h3>
                    <p className="text-gray-400 text-sm sm:text-base">0141 611 2646</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <FiMail className="text-yellow-500 text-2xl sm:text-3xl" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">Email</h3>
                    <p className="text-gray-400">
                      <a href="mailto:clearbusinessbyadrian@gmail.com" className="hover:text-yellow-500 transition duration-300 text-sm sm:text-base">
                        clearbusinessbyadrian@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="mt-12">
                <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex justify-between sm:space-x-6">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                    <FaFacebookF className="text-3xl" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition duration-300">
                    <FaTwitter className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-yellow-500 mb-8 flex items-center space-x-4">
                <FiMail className="text-yellow-500 text-4xl" />
                <span className='text-2xl sm:text-4xl'>Send Us a Message</span>
              </h2>
              <form action="https://formsubmit.co/410a36370ba799222c84013ad5fe6762" method="POST" className="space-y-6">
                <div>
                  <label className="block text-lg text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full p-4 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full p-4 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-lg text-gray-400 mb-2">Message</label>
                  <textarea
                    className="w-full p-4 rounded-md bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    placeholder="Your Message"
                    name='Message'
                    rows="6"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-3 sm:p-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
