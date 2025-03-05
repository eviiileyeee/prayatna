import Map from "../components/ui/Map";
import SideBar from "../components/ui/SideBar";

export default function MapPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-96 bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6 shadow-2xl overflow-y-auto">
        <SideBar />
      </div>

      {/* Map */}
      <div className="flex-1 bg-gray-100">
        <Map />
      </div>
    </div>
  );
}