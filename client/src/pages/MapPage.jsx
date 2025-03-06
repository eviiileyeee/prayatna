import Map from "../components/ui/Map";
import SideBar from "../components/ui/SideBar";
import LocationTracker from "../components/location/LocationTracker.jsx";


export default function MapPage() {
  return (
    <>
    <div className="flex flex-col md:flex-row h-screen pt-16"> {/* Adjusted padding to avoid Navbar overlap */}
      {/* Sidebar */}
      <div className="w-full md:w-96 bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 shadow-2xl overflow-y-auto">
        <SideBar />
      </div>

      {/* Map */}
      <div className="flex-1 bg-gray-100">
        <Map className= "min-h-screen flex flex-col bg-white relative p-4 m-4" />
      </div>
    </div>
    <LocationTracker />
    </>
  );
}
