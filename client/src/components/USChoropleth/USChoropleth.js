import React from 'react';
import {
  MapContainer,
  TileLayer,
  GeoJSON
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { statesData } from './data';
import './USChoropleth.css'

const center = [40.63463151377654, -97.89969605983609];

const USChoropleth = () => {
  return (
    <div className='map-container'>
      <MapContainer
        center={center}
        zoom={4}
        style={{ width: '50vw', height: '50vh' }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=cstWqyoG2iwEGEEQ37jK"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
      <GeoJSON data={statesData.features} />
      </MapContainer>
    </div>
  );
}

export default USChoropleth