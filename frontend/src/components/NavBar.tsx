import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-semibold">
          Home
        </Link>
        <div className="flex space-x-4">
          <Link to="/search">Search</Link>
          <Link to="/your-library">Your Library</Link>
          <Link to="/studio">Studio</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
