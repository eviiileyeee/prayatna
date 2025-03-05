import React, { useState } from 'react';
import { Compass, Map, User, Anchor, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';


const HomePage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-900 to-blue-600">
            {/* Animated Ship Background */}
            <div className="absolute inset-0 overflow-hidden">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 810"
                    className="absolute bottom-0 w-full h-full"
                >
                    {/* Ocean Waves */}
                    <path
                        d="M0,384L48,400C96,416,192,448,288,458.7C384,469,480,459,576,426.7C672,395,768,341,864,330.7C960,320,1056,352,1152,370.7C1248,389,1344,395,1392,400L1440,405L1440,810L1392,810C1344,810,1248,810,1152,810C1056,810,960,810,864,810C768,810,672,810,576,810C480,810,384,810,288,810C192,810,96,810,48,810L0,810Z"
                        fill="#4a90e2"
                        opacity="0.5"
                    />
                    <path
                        d="M0,384L48,400C96,416,192,448,288,458.7C384,469,480,459,576,426.7C672,395,768,341,864,330.7C960,320,1056,352,1152,370.7C1248,389,1344,395,1392,400L1440,405L1440,810L1392,810C1344,810,1248,810,1152,810C1056,810,960,810,864,810C768,810,672,810,576,810C480,810,384,810,288,810C192,810,96,810,48,810L0,810Z"
                        fill="#4a90e2"
                        opacity="0.3"
                        transform="translate(0, 50)"
                    />

                    {/* Sailing Ship */}
                    <g className="animate-sail">
                        <path
                            d="M700,300 L750,250 L800,300 L750,350 Z"
                            fill="#8B4513"
                            className="ship-hull"
                        />
                        <path
                            d="M750,200 L700,250 L800,250 Z"
                            fill="#D2691E"
                            className="ship-sail"
                        />
                    </g>
                </svg>
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>

            {/* Main Content */}
            <div className="relative z-20 min-h-screen flex flex-col">
                {/* Improved Navbar */}
                <nav className="relative p-6 flex items-center justify-evenly">
                    {/* Left Section - Logo */}
                    <div className="flex items-center space-x-4">
                        <Anchor className="text-amber-400 w-10 h-10" />
                        <h1 className="text-3xl font-bold text-white tracking-wider">
                            AquaPath
                        </h1>
                    </div>

                    {/* Right Section - Navigation & Actions */}
                    <div className="flex items-center space-x-6">
                        {/* Desktop Navigation Links */}
                        <div className="hidden md:flex items-center space-x-6">
                            <a
                                href="#"
                                className="text-white hover:text-amber-300 transition flex items-center space-x-2"
                            >
                                <Map className="w-5 h-5" />
                                <span>Map</span>
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-amber-300 transition flex items-center space-x-2"
                            >
                                <Compass className="w-5 h-5" />
                                <span>Dashboard</span>
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-amber-300 transition"
                            >
                                About
                            </a>
                        </div>

                        {/* User Actions */}
                        <div className="flex items-center space-x-4">
                            {isLoggedIn ? (
                                <div className="flex items-center space-x-2 text-white hover:text-amber-300 transition">
                                    <User className="w-6 h-6" />
                                    <span className="hidden md:block">Profile</span>
                                </div>
                            ) : (
                                <div className="flex space-x-4">
                                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition hidden md:block">
                                        Login
                                    </button>
                                    <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition hidden md:block">
                                        Signup
                                    </button>
                                </div>
                            )}

                            {/* Mobile Menu Toggle */}
                            <button
                                className="md:hidden text-white hover:text-amber-300"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-blue-900/90 z-50">
                        <div className="flex flex-col p-4 space-y-4">
                            <a
                                href="#"
                                className="text-white hover:text-amber-300 transition flex items-center space-x-2"
                            >
                                <Map className="w-5 h-5" />
                                <span>Map</span>
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-amber-300 transition flex items-center space-x-2"
                            >
                                <Compass className="w-5 h-5" />
                                <span>Dashboard</span>
                            </a>
                            <a
                                href="#"
                                className="text-white hover:text-amber-300 transition"
                            >
                                About
                            </a>
                            <div className="flex space-x-4 pt-2">
                                <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition w-full">
                                    Login
                                </button>
                                <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition w-full">
                                    Signup
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Rest of the existing content remains the same */}
                <div className="flex-grow flex items-center justify-center text-center px-4">
                    <div className="bg-white/20 backdrop-blur-md rounded-3xl p-12 max-w-3xl mx-auto">
                        <h1 className="text-5xl font-bold mb-6 text-white">
                            Embark on Your Maritime Adventure
                        </h1>
                        <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
                            Navigate the vast oceans, chart your course, and discover uncharted territories with AquaPath - Your Digital Maritime Companion
                        </p>

                        {/* Start Sailing Button */}
                        <button
                            className="bg-amber-600/70 hover:bg-amber-700/70 text-white text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300 flex items-center space-x-2 mx-auto backdrop-blur-sm"
                            onClick={() => {/* Add navigation logic */ }}
                        >
                            <Link href="/Map" className="bg-amber-600/70 hover:bg-amber-700/70 text-white text-xl px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition duration-300 flex items-center space-x-2 mx-auto backdrop-blur-sm">
                                <Anchor className="w-6 h-6" />
                                <span>Start Sailing</span>
                            </Link>


                        </button>
                    </div>
                </div>
            </div>

            {/* Custom Tailwind Animation for Sailing Ship */}
            <style jsx>{`
        @keyframes sail {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(50px) translateY(-20px); }
        }

        .animate-sail {
          animation: sail 5s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default HomePage;