const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 pt-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
          
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold font-bebas-neue text-white mb-4">
             <a href="/">Angus Feast</a> 
            </h2>
            <p className="text-gray-400 mb-4 italic">The Tasty House</p>
            <p className="text-gray-400">Serving the best fast food in Dundee since November 2023.</p>
          </div>
  
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/menuPrice" className="hover:text-yellow-500 transition duration-300">Menu & Price</a>
              </li>
              <li>
                <a href="/opening-hours" className="hover:text-yellow-500 transition duration-300">Opening Hours</a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500 transition duration-300">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500 transition duration-300">Contact</a>
              </li>
            </ul>
          </div>
  
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
            <p className="text-gray-400 mb-2">South Tay Square, Dundee, Angus, DD1 1PB</p>
            <p className="text-gray-400 mb-2">Phone: 0141 611 2646</p>
            <p className="text-gray-400 mb-2">
              Email: 
              <a href="mailto:clearbusinessbyadrian@gmail.com" className="underline hover:text-yellow-500 transition duration-300"> clearbusinessbyadrian@gmail.com</a>
            </p>
            <p className="text-gray-400">Open Daily: 1:00 PM - 11:00 PM</p>
          </div>
  

        </div>
  
        <div className="bg-gray-800 py-4">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            
            <div className="mb-4 md:mb-0">
              <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex justify-center md:justify-start space-x-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
              </div>
            </div>
            
            <div className="text-gray-400">
              <p>&copy; {new Date().getFullYear()} Angus Feast. All rights reserved.</p>
              <p>Powered by React & Tailwind CSS</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  