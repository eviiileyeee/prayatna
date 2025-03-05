import React , {useState , useEffect} from 'react';
import { Ship, BarChart2, Users, Settings, Bell, Search , Map , Home , Calendar} from 'lucide-react';
import { useAuth } from "../../../context/AuthContext";
import { useTheme } from "../../../context/ThemeContext/ThemeContext";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const { user, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();


  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Dashboard", path: "/dashboard", icon: Calendar },
    { name: "Map", path: "/map", icon: Map },
    { name: "About", path: "/services", icon: Ship },
  ];

  return (
    <header className="w-full glassmorphism py-3 px-5 flex items-center justify-between bg-gray-900">
      <div className="flex items-center space-x-1">
        <Ship className="h-6 w-6 text-primary" />
        <span className="text-white font-bold text-lg tracking-tight">ShipWise</span>
      </div>

      <div className="flex items-center bg-white/40 backdrop-blur-md rounded-full pl-3 pr-4 py-1.5 w-1/3 border border-white/20">
        <Search className="h-4 w-4 text-muted-foreground mr-2" />
        <input
          type="text"
          placeholder="Search vessels, routes or ports..."
          className="bg-transparent w-full text-gray-200 text-sm outline-none placeholder:text-muted-foreground/70"
        />
      </div>

      <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wide ${activeTab === link.path.substring(1) ?
                  (darkMode ? 'text-white' : 'text-black') :
                  (darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black')
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

      {user ? (
        <>
          <div className="flex items-center space-x-4">
            <button className="relative text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-alert-danger rounded-full"></span>
            </button>

            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium">
              JS
            </div>
          </div>
        </>) : (
        <>
          <Link
            to="/login"
            className={`px-4 py-2 text-sm font-medium transition-colors ${darkMode ? "text-white hover:text-blue-400" : "text-gray-700 hover:text-blue-600"}`}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition"
          >
            Sign Up
          </Link>
        </>
      )}


    </header>
  );
};

export default Navbar;