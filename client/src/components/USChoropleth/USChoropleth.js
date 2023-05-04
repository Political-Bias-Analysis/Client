import React from 'react';
import { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Popup,
  Marker
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { statesData } from './data';
import './USChoropleth.css'

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';

const iconDefault = L.icon({ 
  iconUrl: icon,
  shadowUrl: iconShadow 
});

const USChoropleth = () => {

  const center = [38.5, -96];
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div className='map-container'>
      <MapContainer
        center={center}
        zoom={3.5}
        style={{ width: '40vw', height: '40vh' }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=cstWqyoG2iwEGEEQ37jK"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <GeoJSON data={statesData.features} />
        <Marker position={center} icon={iconDefault}>
          <Popup position={center}>
            Testing
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default USChoropleth