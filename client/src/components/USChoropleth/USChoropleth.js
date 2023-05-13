import React from 'react';
import { useState, useEffect, useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  GeoJSON
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Card, Tooltip } from '@mui/material';

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
  

  return (
    <div className='map-container'>
      <h3> Choropleth of Election Vote Percentage </h3>
      <div>
        <div>
          <Card className='census-info-hover'>
            Vote Percentage by State
            {!showInfo.name ? <p>Click on each state for more details</p>
            : (
              <ul className='census-info-list'>
                <li className='census-info-text'>State: {showInfo.name}</li><br/>
                {showInfo.DEM && <li className='census-info-text'>Democratic Party: {(showInfo.DEM * 100).toFixed(2)}%</li>}
                {showInfo.REP && <li className='census-info-text'>Republican Party: {(showInfo.REP * 100).toFixed(2)}%</li>}
                {showInfo.IND && <li className='census-info-text'>Independent Party: {(showInfo.IND * 100).toFixed(2)}%</li>}
              </ul>
            )}
          </Card>
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