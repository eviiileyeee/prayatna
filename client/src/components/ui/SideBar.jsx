import { useState } from "react";

export default function SideBar() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [showCards, setShowCards] = useState(false);
  const [temperature, setTemperature] = useState("25°C"); // Dummy temperature
  const [weatherCondition, setWeatherCondition] = useState("Sunny"); // Dummy weather condition

  const handleSearch = () => {
    // Simulate fetching data (replace with actual API call later)
    setTemperature("25°C");
    setWeatherCondition("Sunny");
    setShowCards(true);
  };

  return (
    <div className="w-full bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 shadow-2xl rounded-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-blue-400">Route Planner</h1>
        <p className="text-sm text-gray-400">Plan your journey with ease</p>
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        <div>
          <label htmlFor="from" className="block text-sm font-medium mb-1 text-gray-300">
            From
          </label>
          <input
            type="text"
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
            placeholder="Enter starting location"
          />
        </div>
        <div>
          <label htmlFor="to" className="block text-sm font-medium mb-1 text-gray-300">
            To
          </label>
          <input
            type="text"
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-400"
            placeholder="Enter destination"
          />
        </div>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
      >
        Search Route
      </button>

      {/* Cards */}
      {showCards && (
        <div className="mt-6 space-y-4 animate-fade-in">
          {/* Temperature Card */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-5 rounded-lg shadow-lg border border-gray-600">
            <h3 className="text-lg font-semibold text-blue-400">Temperature</h3>
            <p className="text-2xl mt-2 font-bold text-white">{temperature}</p>
            <p className="text-sm text-gray-400 mt-1">Current temperature at destination</p>
          </div>

          {/* Weather Condition Card */}
          <div className="bg-gradient-to-br from-gray-700 to-gray-800 p-5 rounded-lg shadow-lg border border-gray-600">
            <h3 className="text-lg font-semibold text-blue-400">Weather Condition</h3>
            <p className="text-2xl mt-2 font-bold text-white">{weatherCondition}</p>
            <p className="text-sm text-gray-400 mt-1">Current weather at destination</p>
          </div>
        </div>
      )}
    </div>
  );
}