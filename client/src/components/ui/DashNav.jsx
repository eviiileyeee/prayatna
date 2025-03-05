import React, { useState } from 'react';
import { 
  LayoutGrid, 
  MapPin, 
  Ship, 
  Settings 
} from 'lucide-react';

const DashNav = ({ activeTab, onTabChange }) => {
  const navItems = [
    { 
      icon: LayoutGrid, 
      label: 'Dashboard', 
      key: 'dashboard' 
    },
    { 
      icon: MapPin, 
      label: 'Routes', 
      key: 'routes' 
    },
    { 
      icon: Ship, 
      label: 'Ship Info', 
      key: 'shipInfo' 
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      key: 'settings' 
    }
  ];

  return (
    <div className="flex items-center justify-center bg-gray-800 rounded-full p-2 space-x-2">
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => onTabChange(item.key)}
          className={`
            flex items-center justify-center 
            p-2 rounded-full 
            transition-all duration-300 
            ${activeTab === item.key 
              ? 'bg-blue-600 text-white' 
              : 'bg-transparent text-gray-400 hover:bg-gray-700'
            }
          `}
        >
          <item.icon size={20} />
          {activeTab === item.key && (
            <span className="ml-2 text-sm font-medium">{item.label}</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default DashNav;