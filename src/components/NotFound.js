import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center font-sans bg-gray-800 text-gray-300 h-screen flex flex-col items-center justify-center">
      <div className="text-5xl mb-4">😕</div>
      <h1 className="text-2xl mb-2 text-orange-500">404 - Page Not Found</h1>
      <p className="text-lg mb-2">Oops! The page you are searching for is not found.</p>
      <Link to="/dictionary" className="text-blue-500 text-lg font-bold mt-4">
        Go back to Dictionary
      </Link>
    </div>
  );
};

export default NotFound;