import React from 'react';
import {
  MapContainer,
  TileLayer,
  GeoJSON,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const BlankChoropleth = ({data}) => {
  const center = [38.5, -96];
  const style = () => {
    return ({
      fillColor: 'white',
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '2',
      fillOpacity: 1
    });
};
  const mapStyle = {
    height: '50vw',
    width: '100vh',
  }

  return (
    <div>
      <MapContainer
        center={center}
        zoom={3.5}
        style={mapStyle}
      >
      <TileLayer
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <GeoJSON data={data} style={style}/>
      </MapContainer>
    </div>
  )
}

export default BlankChoropleth