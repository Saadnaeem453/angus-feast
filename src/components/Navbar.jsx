import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to check if the link is active
  const isActive = (path) => location.pathname === path;

  // Function to handle link click on mobile to close the menu
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-gray-50 to-gray-200 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 flex justify-between items-center h-20">
        
        {/* Left Section - Logo */}
        <div className="text-3xl font-bold text-gray-800 tracking-widest">
          <a href="/">ANGUS FEAST</a>
        </div>

        {/* Center Section - Links for Larger Screens */}
        <div className="hidden lg:flex lg:space-x-6">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About Us' },
            { to: '/opening-hours', label: 'Opening Hours' },
            { to: '/menuPrice', label: 'Menu & Pricing' },
            { to: '/contact', label: 'Contact' }
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-lg font-semibold tracking-wide transition-colors duration-300 ${
                isActive(link.to) ? 'text-yellow-600' : 'text-gray-800 hover:text-yellow-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Section - Phone Number (Visible only on larger screens) */}
        <div className="hidden lg:block text-yellow-800 font-bold tracking-wide">
          <a
            href="tel:+441416112646"
            className="hover:text-white hover:bg-gradient-to-t from-yellow-600 text-2xl to-yellow-400 transition-all duration-300 px-5 py-3 rounded"
          >
            0141 611 2646
          </a>
        </div>

        {/* Sidebar Toggle Button - Visible only on smaller screens */}
        <div className="lg:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none transition duration-300"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}
              />
            </svg>
          </button>
        </div>

        {/* Sidebar for Smaller Screens */}
        <div
          className={`fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          {/* Close Button - Inside the sidebar */}
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-800 focus:outline-none absolute top-4 right-4"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col items-start mt-16 space-y-4">
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/opening-hours', label: 'Opening Hours' },
              { to: '/menuPrice', label: 'Menu & Pricing' },
              { to: '/contact', label: 'Contact' }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={handleLinkClick}
                className={`block w-full text-lg text-gray-800 font-semibold py-2 px-5 border-b border-gray-300 transition-all duration-300 ${
                  isActive(link.to) ? 'bg-yellow-100' : 'hover:bg-yellow-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+441416112646"
              onClick={handleLinkClick}
              className="block w-full text-lg text-gray-800 px-5 font-bold py-2 border-b border-gray-300 hover:bg-yellow-50"
            >
              0141 611 2646
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
