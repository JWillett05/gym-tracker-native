import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children, toggleMenu }) => { // Added toggleMenu prop
  const location = useLocation();

  const navItems = [
    // Commented out as menu handles navigation now
    // { path: '/', label: 'Home', icon: '🏠' },
    // { path: '/workouts', label: 'Workouts', icon: '💪' },
    // { path: '/progress', label: 'Progress', icon: '📊' },
    // { path: '/exercises', label: 'Exercises', icon: '🏋️' },
    // { path: '/body-metrics', label: 'Body Metrics', icon: '📏' },
    // { path: '/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4"> {/* Added space-x-4 for spacing */}
              <h1 className="text-xl font-bold">Gym Tracker</h1>
              {toggleMenu && ( // Render toggle button if toggleMenu is provided
                <button
                  className="sm-toggle" // Reuse the class for styling
                  onClick={toggleMenu}
                  type="button"
                  aria-label="Toggle menu"
                >
                  {/* You can copy the icon/text spans from StaggeredMenu if needed, or simplify */}
                  <span>Menu</span> {/* Simplified for now; expand if you want full animation */}
                </button>
              )}
            </div>
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'bg-blue-700 text-white'
                      : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                  }`}
                >
                  {item.icon} {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-blue-600 text-white">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                location.pathname === item.path
                  ? 'bg-blue-700 text-white'
                  : 'text-blue-100 hover:bg-blue-700 hover:text-white'
              }`}
            >
              {item.icon} {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
