// components/MapContainer.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { data } from '../data/data';

// Define custom icon for markers using online URLs
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Map = () => {
  // Calculate map center based on average coordinates
  const avgLat = data.countrySales.reduce((sum, loc) => sum + loc.location.coordinates[0], 0) / data.countrySales.length;
  const avgLng = data.countrySales.reduce((sum, loc) => sum + loc.location.coordinates[1], 0) / data.countrySales.length;

  return (
    <div className='w-full col-span-4 relative h-[70vh] m-auto p-4 border rounded-lg bg-white'>
      <MapContainer center={[avgLat, avgLng]} zoom={2} style={{ height: "400px", width: "100%"}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.countrySales.map((location, index) => (
          <Marker key={index} position={location.location.coordinates} icon={customIcon}>
            <Popup>
              <b>{location.location.city}, {location.location.country}</b><br />
              Sales: ${location.totalSales.toFixed(2)}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
