import { useEffect, useRef } from "react";
import leaflet from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

export default function Map() {
  const mapRef = useRef(null); // Initialize useRef with null

  useEffect(() => {
    if (!mapRef.current) return; // Ensure the ref is set

    // Initialize the map
    const map = leaflet.map(mapRef.current).setView([20.5937, 78.9629], 5);

    // Define the OpenStreetMap tile layer
    const osm = leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });

    // Define the Stamen Watercolor tile layer
    const water = leaflet.tileLayer(
      "https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}",
      {
        minZoom: 0,
        maxZoom: 18,
        attribution:
          '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        ext: "png",
      }
    );

    // Define the Google Streets tile layer
    const googleStreets = leaflet.tileLayer(
      "http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
      {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    );

    // Define the Google Satellite tile layer
    const googleSat = leaflet.tileLayer(
      "http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}",
      {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    );

    // Add the default tile layer to the map
    osm.addTo(map);

    // Define base maps
    const baseMaps = {
      "OpenStreetMap": osm,
      "Water Color": water,
      "Google Streets": googleStreets,
      "Google Satellite": googleSat,
    };

    // Add layer control to the map (no overlay maps in this example)
    leaflet.control.layers(baseMaps, null).addTo(map);

    let firstMarker = leaflet.marker([18.95, 72.93]).addTo(map);
    let secondMarker = leaflet.marker([6.95, 79.85]).addTo(map);

    let popup1 = firstMarker.bindPopup("This is Mumbai Port. India").openPopup();
popup1.addTo(map);
let popup2 = secondMarker.bindPopup("This is Colombo Port. Sri Lanka").openPopup();
popup2.addTo(map);
    // Cleanup function to remove the map instance on unmount
    return () => {
      map.remove();
    };
  }, []); // Empty dependency array ensures this runs only once

  return <div id="map" ref={mapRef} style={{ height: "100vh", width: "100%" }}></div>;
}