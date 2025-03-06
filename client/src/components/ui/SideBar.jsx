import { useState } from "react";

export default function SideBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [showCards, setShowCards] = useState(false);
  const [temperature, setTemperature] = useState("25°C");
  const [weatherCondition, setWeatherCondition] = useState("Sunny");
  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);

  const popularLocations = [
    "Australia", "Austria", "Belgium", "Brazil", "Busan", "Canada", "Denmark", "Dubai",
    "France", "Germany", "Ireland", "Italy", "Japan", "Los Angeles", "London", "Moscow",
    "Netherlands", "Norway", "Paris", "Portugal", "Rome", "Seoul", "Singapore", "South Africa",
    "Spain", "Sweden", "Switzerland", "Sydney", "Tokyo", "United Kingdom"
  ];

  const handleSearch = () => {
    setTemperature("25°C");
    setWeatherCondition("Sunny");
    setShowCards(true);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg text-white w-full max-w-md">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-blue-400 mb-2">Route Planner</h2>
        <p className="text-gray-400">Plan your journey with ease</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="relative">
          <label className="block text-sm font-medium mb-2 text-gray-300">From</label>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            onFocus={() => setIsFromDropdownOpen(true)}
            onBlur={() => setTimeout(() => setIsFromDropdownOpen(false), 200)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400 pr-10"
            placeholder="Enter starting location"
          />
          {isFromDropdownOpen && (
            <ul className="absolute z-10 mt-1 w-full bg-gray-700 rounded-lg shadow-lg max-h-40 overflow-y-auto">
              {popularLocations.filter(loc => loc.toLowerCase().includes(from.toLowerCase())).map((loc) => (
                <li
                  key={loc}
                  onMouseDown={() => setFrom(loc)}
                  className="p-2 cursor-pointer hover:bg-gray-600"
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="relative">
          <label className="block text-sm font-medium mb-2 text-gray-300">To</label>
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            onFocus={() => setIsToDropdownOpen(true)}
            onBlur={() => setTimeout(() => setIsToDropdownOpen(false), 200)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400 pr-10"
            placeholder="Enter destination"
          />
          {isToDropdownOpen && (
            <ul className="absolute z-10 mt-1 w-full bg-gray-700 rounded-lg shadow-lg max-h-40 overflow-y-auto">
              {popularLocations.filter(loc => loc.toLowerCase().includes(to.toLowerCase())).map((loc) => (
                <li
                  key={loc}
                  onMouseDown={() => setTo(loc)}
                  className="p-2 cursor-pointer hover:bg-gray-600"
                >
                  {loc}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <button 
        onClick={handleSearch} 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition font-bold"
      >
        Search Routes
      </button>

      {showCards && (
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-400">Best Route</h3>
            <p className="text-gray-300">Fastest and most efficient route.</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-red-400">Worst Route</h3>
            <p className="text-gray-300">Avoid due to traffic or bad conditions.</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-yellow-400">Average Route</h3>
            <p className="text-gray-300">Balanced option with moderate travel time.</p>
          </div>
          <div className="p-4 bg-gray-700 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-green-400">Weather Info</h3>
            <p className="text-gray-300">Temperature: {temperature}</p>
            <p className="text-gray-300">Condition: {weatherCondition}</p>
          </div>
        </div>
      )}
    </div>
  );
}
