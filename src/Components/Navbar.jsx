import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-neutral-800 text-white w-full">
      <nav className="container mx-auto px-4 py-4 max-w-[1400px]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-500">EcoCycle</div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            {[
              { name: "Home", link: "#" },
              { name: "How It Works", link: "#how-it-works" },
              { name: "Rewards", link: "#rewards" },
              { name: "Eco Impact", link: "#eco-impact" },
              { name: "About Us", link: "/about" },
              { name: "Contact", link: "#contact" },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:text-green-400 transition duration-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              {[
                { name: "Home", link: "#" },
                { name: "How It Works", link: "#how-it-works" },
                { name: "Rewards", link: "#rewards" },
                { name: "Eco Impact", link: "#eco-impact" },
                { name: "About Us", link: "/about" },
                { name: "Contact", link: "#contact" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="block hover:text-green-400 transition duration-300">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
