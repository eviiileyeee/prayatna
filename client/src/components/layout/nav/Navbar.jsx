import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, BarChart2, Users, Settings, Bell, Search } from 'lucide-react';


const Navbar = () => {
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
      
      <nav className="flex items-center space-x-5">
      <Link to="/" className="text-primary font-medium text-sm hover:opacity-80 transition-opacity">
          Home
        </Link>
        <Link to="/dashboard" className="text-primary t font-medium text-sm hover:opacity-80 transition-opacity">
          Dashboard
        </Link>
        <Link to="/map" className=" text-primary text-muted-foreground text-sm hover:text-foreground transition-colors">
          Map
        </Link>
        <Link to="/fleet" className="text-primary text-muted-foreground text-sm hover:text-foreground transition-colors">
          Fleet
        </Link>
        <Link to="/analytics" className="text-primary text-muted-foreground text-sm hover:text-foreground transition-colors">
          Analytics
        </Link>
      </nav>
      
      <div className="flex items-center space-x-4">
        <button className="relative text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-alert-danger rounded-full"></span>
        </button>
        
        <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-medium">
          JS
        </div>
      </div>
    </header>
  );
};

export default Navbar;