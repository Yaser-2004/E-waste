import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState(false);
  const [firstName, setFirstName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage?.getItem('user'));
    
    if (user) {
      setFirstName(user.firstName);
    }
  }, [])

  const handleLogOut = async () => {
      try {
        await axios.post("http://localhost:5000/api/auth/user/logout", {}, {
          withCredentials: true, 
        });
    
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    
        navigate('/login');
      } catch (error) {
        console.error("Logout failed: ", error.message);
        alert("Logout failed, please try again.");
      }
  }

  return (
    <header className="bg-neutral-800 text-white w-full">
      <nav className="container mx-auto px-4 py-4 max-w-[1400px]">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-green-500">EcoCycle</div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 items-center">
            {[
              { name: "Home", link: "#" },
              { name: "How It Works", link: "#how-it-works" },
              { name: "Rewards", link: "#rewards" },
              { name: "Eco Impact", link: "#eco-impact" },
              { name: "About Us", link: "/about" },
              { name: "Store", link: "/store" },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.link} className="hover:text-green-400 transition duration-300">
                  {item.name}
                </a>
              </li>
            ))}
            <div className="relative h-10 w-10 bg-green-400 rounded-full hover:cursor-pointer" onClick={() => setDisplay(!display)}>
              <p className="font-bold text-xl text-center py-1">{firstName.charAt(0)}</p>

              <div className={`absolute z-10 p-3 text-black top-12 w-40 right-0 bg-white rounded-md ${!display ? 'hidden' : null}`}>
                <p className="pb-2 mb-2 border-b border-gray-200">{firstName}</p>
                <a href="/user/profile" className="w-full block pb-2 mb-2 border-b border-gray-200 hover:text-green-400 transition duration-300">My Profile</a>
                <button className="block bg-green-400 rounded-md p-2 px-4 hover:cursor-pointer" onClick={() => handleLogOut()}>Log Out</button>
              </div>
            </div>
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
                { name: "Store", link: "/store" },
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
