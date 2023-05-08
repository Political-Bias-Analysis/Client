import React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  GeoJSON,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import './USChoropleth.css'

const USChoropleth = ({data}) => {
  const [showInfo, setShowInfo] = useState({})
  const center = [38.5, -96];

  const geoJsonLayer = useRef(null);
  useEffect(() => {
    if (geoJsonLayer.current) {
      geoJsonLayer.current.clearLayers().addData(data);
    }
  }, [data]);;

  const mapPolygonColorToDensity = (feature) => {
    const vote = Math.max(feature.DEM||0, feature.REP||0, feature.IND||0)
    const party = Object.keys(feature).filter(key => feature[key]===vote)

    if (party[0] === 'DEM') {
      return vote > 0.60 ? '#0088A3' 
        : vote > 0.50 ? '#00BBE0'
        : vote > 0.40 ? '#00AACC'
        : vote > 0.30 ? '#0AD6FF'
        : vote > 0.20 ? '#5CE4FF'
        : '#99EEFF'
    } else if (party[0] === 'REP') {
      return vote > 0.60 ? '#9B2226' 
        : vote > 0.50 ? '#C92C31'
        : vote > 0.40 ? '#D7474C'
        : vote > 0.30 ? '#DE686C'
        : vote > 0.20 ? '#E58A8D'
        : '#ECACAE'
    } else {
      return vote > 0.60 ? '#7081FF' 
        : vote > 0.50 ? '#99A5FF'
        : vote > 0.40 ? '#ADB7FF'
        : vote > 0.30 ? '#C2C9FF'
        : vote > 0.20 ? '#D6DBFF'
        : '#EBEDFF'
    }
  }

  const style = (feature) => {

    return ({
        fillColor: mapPolygonColorToDensity(feature.properties),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '2',
        fillOpacity: 1
    });
  };
  
  const mouseOverHighlight = (e) => {
    const current = e.target
    setShowInfo(e.target.feature.properties)
    current.setStyle({
      weight: 1,
      color: '#000000',
      fillOpacity: 0.7
    })
    current.bringToFront()
  }

  const onEachFeature= (feature, layer)=> {
    layer.on({
        click: mouseOverHighlight,
    });
  }
  
  const mapStyle = {
    height: '30vw',
    width: '80vh',
  };
  console.log(data)
  return (
    <div className='map-container'>
      <h3> Choropleth of Election Vote Percentage </h3>
      <div>
        <div>
          {!showInfo.name && 
            <div className="census-info-hover">
              <strong>Election Vote Percentage by State</strong>    
              <p>Click on each state for more details</p>
            </div>
          }
          {showInfo.name && (
            <ul className="census-info">
              <li><strong>{showInfo.name}</strong></li><br/>
              {showInfo.DEM && <li>Democratic Party: {showInfo.DEM}</li>}
              {showInfo.REP && <li>Republican Party: {showInfo.REP}</li>}
              {showInfo.IND && <li>Independent Party: {showInfo.IND}</li>}
            </ul>
          )}
          <MapContainer
            center={center}
            zoom={3.5}
            style={mapStyle}
          >
          <TileLayer
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          {data.features && <GeoJSON 
            data={data.features} 
            style={style}
            ref={geoJsonLayer}
            onEachFeature={onEachFeature}/>}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default USChoropleth