import React from 'react';
import { Ship, Fuel, MapPin, Calendar, AlertTriangle } from 'lucide-react';

const VesselCard = ({ type, name, speed, route, eta, cargoPercentage, conditions, riskLevel }) => {
  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 mb-4">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center">
          <div className={`w-3 h-3 rounded-full mr-2 ${
            type === 'CRUISE SHIP' ? 'bg-green-500' : 
            type === 'TANKER' ? 'bg-red-500' : 
            'bg-orange-500'
          }`}></div>
          <span className="text-sm font-medium text-gray-600">{type}</span>
        </div>
        <span className={`text-xs px-2 py-1 rounded ${
          riskLevel === 'Low Risk'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {riskLevel}
        </span>
      </div>
      
      <h2 className="text-lg font-bold mb-4">{name}</h2>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center">
          <Ship className="w-5 h-5 mr-2 text-gray-500" />
          <span className="text-sm">{speed} knots</span>
        </div>
        
        <div className="flex items-center">
          <Fuel className="w-5 h-5 mr-2 text-gray-500" />
          <div className={`w-full h-2 rounded ${
            riskLevel === 'Low Risk' ? 'bg-green-200' : 'bg-red-200'
          }`}>
            <div className={`h-full rounded ${
              riskLevel === 'Low Risk' ? 'bg-green-600' : 'bg-red-600'
            }`} style={{width: `${cargoPercentage}%`}}></div>
          </div>
        </div>
        
        <div className="flex items-center">
          <MapPin className="w-5 h-5 mr-2 text-gray-500" />
          <span className="text-sm truncate">{route}</span>
        </div>
        
        <div className="flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-gray-500" />
          <span className="text-sm">{eta}</span>
        </div>
      </div>
      
      <div className="flex items-center mt-3">
        {conditions === 'Stormy Conditions' && (
          <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
        )}
        <span className={`text-sm ${
          conditions === 'Stormy Conditions' ? 'text-orange-500' : 'text-gray-500'
        }`}>
          {conditions}
        </span>
        
        <div className="ml-auto flex items-center">
          <span className="text-sm mr-2">{cargoPercentage}% cargo</span>
        </div>
      </div>
    </div>
  );
};

const SmallDashboard = () => {
  const vessels = [
    {
      type: 'CONTAINER SHIP',
      name: 'Pacific Voyager',
      speed: 18.5,
      route: 'Tokyo → Los Angeles',
      eta: 'Jun 15, 04:30 PM',
      cargoPercentage: 85,
      conditions: 'Clear Conditions',
      riskLevel: 'Low Risk'
    },
    {
      type: 'BULK CARRIER',
      name: 'Atlantic Explorer',
      speed: 15.2,
      route: 'New York → Rotterdam',
      eta: 'Jun 18, 08:45 AM',
      cargoPercentage: 90,
      conditions: 'Stormy Conditions',
      riskLevel: 'Medium Risk'
    },
    {
      type: 'CRUISE SHIP',
      name: 'Mediterranean Star',
      speed: 22.3,
      route: 'Athens → Barcelona',
      eta: 'Jun 12, 12:00 PM',
      cargoPercentage: 65,
      conditions: 'Clear Conditions',
      riskLevel: 'Low Risk'
    },
    {
      type: 'TANKER',
      name: 'Arctic Pioneer',
      speed: 12.7,
      route: 'Murmansk → Oslo',
      eta: 'Jun 20, 11:15 PM',
      cargoPercentage: 95,
      conditions: 'Foggy Conditions',
      riskLevel: 'High Risk'
    }
  ];
  
  return (
    <div className="w-96 bg-gray-50 p-4 h-full overflow-y-auto">
      <h1 className="text-xl font-bold mb-4">Active Vessels</h1>
      <p className="text-sm text-gray-600 mb-4">Select a vessel to view details</p>
      
      {vessels.map((vessel, index) => (
        <VesselCard key={index} {...vessel} />
      ))}
    </div>
  );
};

export default SmallDashboard;