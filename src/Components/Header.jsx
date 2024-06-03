// HeaderNav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [active, setActive] = useState("HOME");

  const handleNavClick = (navItem) => {
    setActive(navItem);
  };

  return (
    <div className="bg-transparent h-[7vh]">
      <nav className="container mx-auto flex justify-center py-4">
        <ul className="flex space-x-6 text-white">
          {["HOME", "AGENTS", "MAPS", "WEAPONS"].map((item) => (
            <li
              key={item}
              className={`hover:text-green-200 ${active === item ? "border-b-2 border-white" : ""}`}
            >
              <Link to={`/${item.toLowerCase()}`} onClick={() => handleNavClick(item)}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
