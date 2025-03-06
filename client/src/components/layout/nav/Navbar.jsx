import React, { useState, useEffect } from 'react';
import { 
  Ship, 
  BarChart2, 
  Users, 
  Settings, 
  Bell, 
  Search, 
  Map, 
  Home, 
  Calendar, 
  Menu, 
  X,
  Sun,
  Moon
} from 'lucide-react';
import { useAuth } from "../../../context/AuthContext";
import { useTheme } from "../../../context/ThemeContext/ThemeContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const { user, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  // Update active tab based on current location
  useEffect(() => {
    const currentPath = location.pathname.substring(1) || 'home';
    setActiveTab(currentPath);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Dashboard", path: "/dashboard", icon: Calendar },
    { name: "Map", path: "/map", icon: Map },
    { name: "Services", path: "/services", icon: Ship },
  ];

  const renderNavLinks = (isMobile = false) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onClick={isMobile ? handleMobileMenuToggle : undefined}
          className={`
            flex items-center space-x-2 
            ${isMobile ? 'px-4 py-2 hover:bg-gray-700' : ''}
            ${activeTab === (link.path === '/' ? 'home' : link.path.substring(1)) 
              ? (darkMode 
                  ? 'text-white font-bold' 
                  : 'text-black font-bold')
              : (darkMode 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-gray-600 hover:text-black')
            }
            transition-colors duration-200
          `}
        >
          <link.icon className="h-5 w-5" />
          <span className={isMobile ? 'text-sm' : 'text-sm uppercase tracking-wide'}>{link.name}</span>
        </Link>
      ))}
    </>
  );

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50 
        w-full py-3 px-5 flex items-center justify-between 
        ${darkMode ? 'bg-gray-900' : 'bg-white shadow-md'}
        ${scrolled ? 'backdrop-blur-md bg-opacity-90' : ''}
        transition-all duration-300
      `}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Ship className={`h-6 w-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
        <span className={`font-bold text-lg tracking-tight ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          ShipWise
        </span>
      </div>

      {/* Search Bar - Only displayed when user is logged in */}
      {user && (
        <div className={`
          hidden md:flex items-center 
          ${darkMode 
            ? 'bg-white/10 border border-white/20' 
            : 'bg-gray-100 border border-gray-200'}
          backdrop-blur-md rounded-full pl-3 pr-4 py-1.5 w-1/3
        `}>
          <Search className={`h-4 w-4 mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder="Search vessels, routes or ports..."
            className={`
              bg-transparent w-full text-sm outline-none 
              ${darkMode 
                ? 'text-gray-200 placeholder:text-gray-500' 
                : 'text-gray-800 placeholder:text-gray-500'}
            `}
          />
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {renderNavLinks()}
      </div>

      {/* User Actions */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <button 
          onClick={toggleDarkMode}
          className={`
            p-2 rounded-full transition-colors 
            ${darkMode 
              ? 'bg-gray-700 text-white hover:bg-gray-600' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
          `}
        >
          {darkMode ? <Sun/> : <Moon/>}
        </button>

        {user ? (
          <div className="flex items-center space-x-4">
            <button className="relative text-muted-foreground hover:text-foreground transition-colors">
              <Link 
              to = "/notification"
              >
                 <Bell className={`h-5 w-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                 <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
              </Link>
             
            </button>

            <div 
              className={`
                h-8 w-8 rounded-full flex items-center justify-center 
                text-xs font-medium 
                ${darkMode ? 'bg-gray-700 text-white' : 'bg-blue-100 text-blue-800'}
              `}
            >
              <Link
              to = "/profile"
              >
                <img src = {user.profileImage || 'JS'}
                className='rounded-full'
                ></img>
              </Link>
             
            </div>
            <button 
              onClick={handleLogout}
              className={`
                px-3 py-1.5 text-sm font-medium rounded-full transition-colors
                ${darkMode 
                  ? 'bg-red-800 text-white hover:bg-red-700' 
                  : 'bg-red-100 text-red-700 hover:bg-red-200'}
              `}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Link
              to="/login"
              className={`
                px-4 py-2 text-sm font-medium rounded-full transition-colors
                ${darkMode 
                  ? 'text-white hover:bg-gray-700' 
                  : 'text-gray-700 hover:bg-gray-100'}
              `}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`
                px-4 py-2 text-sm font-medium rounded-full transition-colors
                ${darkMode 
                  ? 'bg-blue-800 text-white hover:bg-blue-700' 
                  : 'bg-blue-600 text-white hover:bg-blue-700'}
              `}
            >
              Sign Up
            </Link>
          </div>
        )}

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden ${darkMode ? 'text-white' : 'text-gray-800'}`} 
          onClick={handleMobileMenuToggle}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className={`
            fixed inset-0 z-40 md:hidden 
            ${darkMode ? 'bg-gray-900' : 'bg-white'}
            flex flex-col pt-16 space-y-4
          `}
        >
          {/* Search bar in mobile menu - only when logged in */}
          {user && (
            <div className={`
              flex items-center mx-4 my-2
              ${darkMode 
                ? 'bg-white/10 border border-white/20' 
                : 'bg-gray-100 border border-gray-200'}
              rounded-full px-3 py-2
            `}>
              <Search className={`h-4 w-4 mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Search..."
                className={`
                  bg-transparent w-full text-sm outline-none 
                  ${darkMode 
                    ? 'text-gray-200 placeholder:text-gray-500' 
                    : 'text-gray-800 placeholder:text-gray-500'}
                `}
              />
            </div>
          )}
          
          <div className="flex flex-col">
            {renderNavLinks(true)}
          </div>
          {!user && (
            <div className="px-4 mt-4 space-y-2">
              <Link
                to="/login"
                onClick={handleMobileMenuToggle}
                className={`
                  block w-full text-center py-3 rounded-full
                  ${darkMode 
                    ? 'text-white border border-gray-700 hover:bg-gray-800' 
                    : 'text-gray-700 border border-gray-300 hover:bg-gray-100'}
                `}
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={handleMobileMenuToggle}
                className={`
                  block w-full text-center py-3 rounded-full
                  ${darkMode 
                    ? 'bg-blue-800 text-white hover:bg-blue-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'}
                `}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;