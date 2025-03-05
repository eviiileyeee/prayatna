import React from 'react';
import { 
  LayoutGrid, 
  MapPin, 
  Ship, 
  Settings 
} from 'lucide-react';

const DashNav = ({ activeTab, onTabChange }) => {
  const navItems = [
    { icon: LayoutGrid, label: 'Dashboard', key: 'dashboard' },
    { icon: MapPin, label: 'Routes', key: 'routes' },
    { icon: Ship, label: 'Ship Info', key: 'shipInfo' },
    { icon: Settings, label: 'Settings', key: 'settings' }
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center bg-gray-800 rounded-full p-3 space-x-4 shadow-lg">
      {navItems.map((item) => (
        <button
          key={item.key}
          onClick={() => onTabChange(item.key)}
          className={`
            flex items-center justify-center 
            px-4 py-2 rounded-full 
            transition-all duration-300 ease-in-out
            ${activeTab === item.key 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-transparent text-gray-400 hover:bg-gray-700 hover:text-white'
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
