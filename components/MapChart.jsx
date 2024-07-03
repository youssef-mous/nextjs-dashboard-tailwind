
// components/MapChart.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { data } from '../data/data';

// Définir l'icône personnalisée pour les marqueurs
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapChart = () => {
  const getCoordinates = (location) => {
    const coordinates = {
      "New Cynthia, Liberia": [6.428055, -9.429499],
      "West Michaelchester, Oman": [21.512583, 55.923255],
      "Lake Abigailstad, Jersey": [49.214439, -2.13125],
      "Vincentville, Micronesia": [7.425554, 150.550812],
      "Brianchester, Turkmenistan": [38.969719, 59.556278],
      "Haleymouth, Somalia": [2.046934, 45.318161],
      "New Danielshire, Germany": [51.165691, 10.451526],
      "New Juliatown, Ukraine": [48.379433, 31.16558],
      "Jamesfurt, United States Minor Outlying Islands": [19.282319, 166.647047],
      "Davidside, Pakistan": [30.375321, 69.345116]
    };

    return coordinates[location] || [0, 0];
  };

  return (
    <div className='w-full col-span-4 relative h-[70vh] m-auto p-4 border rounded-lg  border-gray-400 bg-gray-800'>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.SalesbyCountry.map((locationData, index) => {
          const coordinates = getCoordinates(locationData.location);
          return (
            <Marker key={index} position={coordinates} icon={customIcon}>
              <Popup>
                <b>{locationData.location}</b><br />
                Ventes: ${locationData.totalSales.toFixed(2)}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default MapChart;