import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // Social Media Icons

const AboutUs = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-16 px-4 pt-40">
      <div className="container mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-400 italic">&quot;Crafting exquisite flavors for memorable moments&quot;</p>
        </header>

        {/* Intro Section */}
        <section className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-16 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-yellow-500 mb-4">Welcome to Angus Feast</h2>
            <p className="text-xl text-gray-400 mb-6">
              Nestled in the heart of Dundee, **Angus Feast** is a luxury fast-food restaurant, where passion meets the finest ingredients. Since November 2023, we've
              been serving our guests a unique dining experience, combining the best of fast food with a gourmet touch. Our chefs curate each meal with care, ensuring
              every bite is an experience worth savoring.
            </p>
            <p className="text-lg text-gray-400">
              With a cozy atmosphere, elegant décor, and an unyielding commitment to quality, Angus Feast is where fast food meets culinary art.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-gray-900 grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Image */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Restaurant"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
            />
          </div>

          {/* Story Text */}
          <div>
            <h2 className="text-4xl font-bold text-yellow-500 mb-4">Our Story</h2>
            <p className="text-lg text-gray-400 mb-6">
              It all began with our founder, **Adrian Venoin**, who envisioned creating a fast-food restaurant that breaks the mold. From humble beginnings, Angus Feast
              has grown into a destination for those seeking not just a meal, but an unforgettable dining experience. Whether you&apos;re looking for a casual lunch or a
              sophisticated dinner, we deliver excellence every time.
            </p>
            <p className="text-lg text-gray-400">
              With a passion for innovation and dedication to using only the freshest ingredients, Angus Feast redefines fast food for the discerning palate.
            </p>
          </div>
        </section>

        {/* Meet the Chef Section */}
        <section className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-16 mb-16">
          <h2 className="text-4xl font-bold text-yellow-500 text-center mb-8">Meet Our Chef</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Chef Image */}
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Chef"
                className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>

            {/* Chef Text */}
            <div>
              <p className="text-lg text-gray-400 mb-6">
                At the heart of **Angus Feast** is our award-winning chef, who brings a passion for culinary arts to every dish. With years of experience at the
                finest kitchens, Chef Adrian Venoin brings together the flavors of the world with a touch of local flair. Each plate is a masterpiece, crafted with
                precision and creativity, ensuring every bite is memorable.
              </p>
              <p className="text-lg text-gray-400">
                Chef Adrian believes in the power of simplicity, letting the ingredients shine, while using techniques that elevate traditional fast food into
                something extraordinary.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-900 text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-500 mb-8">Join Us for a Unique Dining Experience</h2>
          <p className="text-xl text-gray-400 mb-8">
            Whether you&apos;re visiting for a casual meal or a special occasion, we promise to deliver an experience that blends comfort, luxury, and unforgettable flavors.
          </p>
          <a
            href="#book"
            className="bg-yellow-500 text-white px-8 py-4 inline-block rounded-lg hover:bg-yellow-600 transition duration-300 text-xl"
          >
            Book a Table
          </a>
        </section>

        {/* Social Media Section */}
        <section className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Follow Us</h3>
          <p className="text-lg text-gray-400 mb-8">Connect with us on social media for the latest updates, offers, and more.</p>
          <div className="flex justify-center space-x-6">
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
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
