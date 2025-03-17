const NavItem = ({ to, icon, label }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    
    return (
      <NavLink
        to={to}
        className={`flex items-center px-5 py-4 text-gray-600 hover:bg-green-100 transition-colors ${
          isActive ? 'bg-green-500 text-white' : ''
        }`}
      >
        <span className="mr-4 text-lg w-6 text-center">{icon}</span>
        {label}
      </NavLink>
    );
  };

export default NavItem;