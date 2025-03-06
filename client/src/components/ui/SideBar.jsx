import { useState } from "react";

export default function SideBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [showCards, setShowCards] = useState(false);
  const [temperature, setTemperature] = useState("25°C");
  const [weatherCondition, setWeatherCondition] = useState("Sunny");
  const [isFromDropdownOpen, setIsFromDropdownOpen] = useState(false);
  const [isToDropdownOpen, setIsToDropdownOpen] = useState(false);

  // Sample locations for the dropdown
  const popularLocations = [
    "India",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "San Francisco"
  ];

  const handleSearch = () => {
    // Simulate fetching data (replace with actual API call later)
    setTemperature("25°C");
    setWeatherCondition("Sunny");
    setShowCards(true);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800  p-6 rounded-xl shadow-lg text-white w-full max-w-md">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-blue-400 mb-2">Route Planner</h2>
        <p className="text-gray-400">Plan your journey with ease</p>
      </div>

      {/* Input Fields with Dropdowns */}
      <div className="space-y-4 mb-6">
        <div className="relative">
          <label className="block text-sm font-medium mb-2 text-gray-300">From</label>
          <div className="relative">
            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              onFocus={() => setIsFromDropdownOpen(true)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400 pr-10"
              placeholder="Enter starting location"
            />
            <button 
              onClick={() => setIsFromDropdownOpen(!isFromDropdownOpen)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* From Dropdown */}
          {isFromDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-gray-700 border border-gray-600 rounded-md shadow-lg">
              <ul className="py-1 max-h-60 overflow-auto">
                {popularLocations.map((location) => (
                  <li 
                    key={location} 
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                    onClick={() => {
                      setFrom(location);
                      setIsFromDropdownOpen(false);
                    }}
                  >
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <label className="block text-sm font-medium mb-2 text-gray-300">To</label>
          <div className="relative">
            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              onFocus={() => setIsToDropdownOpen(true)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400 pr-10"
              placeholder="Enter destination"
            />
            <button 
              onClick={() => setIsToDropdownOpen(!isToDropdownOpen)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* To Dropdown */}
          {isToDropdownOpen && (
            <div className="absolute z-10 mt-1 w-full bg-gray-700 border border-gray-600 rounded-md shadow-lg">
              <ul className="py-1 max-h-60 overflow-auto">
                {popularLocations.map((location) => (
                  <li 
                    key={location} 
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                    onClick={() => {
                      setTo(location);
                      setIsToDropdownOpen(false);
                    }}
                  >
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
        Search Route
      </button>

      {/* Cards */}
      {showCards && (
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* Temperature Card */}
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <div className="text-lg font-medium text-gray-300 mb-2">Temperature</div>
            <div className="text-2xl font-bold text-white mb-1">{temperature}</div>
            <div className="text-xs text-gray-400">Current temperature at destination</div>
          </div>

          {/* Weather Condition Card */}
          <div className="bg-gray-700 p-4 rounded-lg text-center">
            <div className="text-lg font-medium text-gray-300 mb-2">Weather Condition</div>
            <div className="text-2xl font-bold text-white mb-1">{weatherCondition}</div>
            <div className="text-xs text-gray-400">Current weather at destination</div>
          </div>
        </div>
      )}
    </div>
  );
}