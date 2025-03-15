const Footer = () => {
    return (
      <footer className="bg-neutral-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">EcoCycle</h3>
              <p className="text-gray-400 mb-6">
                Transforming e-waste into rewards while making a positive environmental impact, one device at a time.
              </p>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map((platform, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-green-500 transition duration-300"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {/* Icons placeholder */}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "How It Works", "Rewards", "Eco Impact", "FAQ", "Contact"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-green-500 transition duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Resources */}
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                {["Blog", "E-Waste Guide", "Partners", "Environmental Impact", "Press Releases"].map((resource, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-green-500 transition duration-300">
                      {resource}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest news and updates on e-waste recycling.</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 bg-neutral-700 text-white rounded-md focus:outline-none"
                />
                <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
  
          <div className="text-center text-gray-500 text-sm">© {new Date().getFullYear()} EcoCycle. All rights reserved.</div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  