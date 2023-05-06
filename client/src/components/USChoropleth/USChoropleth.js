import React from 'react';
import { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  GeoJSON,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { statesData } from './data';
import './USChoropleth.css'
import {pairData} from './helper'


const USChoropleth = ({data}) => {

  const [statesDataNew, setStateData] = useState(statesData)
  const [showInfo, setShowInfo] = useState({})
  const center = [38.5, -96];

  useEffect(() => {
    const prepDate = () => {
      setStateData(pairData(data))
    }
    prepDate()
  });

  const mapPolygonColorToDensity = (feature) => {
    const vote = Math.max(feature.DEM, feature.REP, feature.IND)
    const party = Object.keys(feature).filter(key => feature[key]===vote)

    // console.log(party, vote)

    if (party === 'DEM') {
      return vote > 60 ? '#0088A3' 
        : vote > 50 ? '#00BBE0'
        : vote > 40 ? '#00AACC'
        : vote > 30 ? '#0AD6FF'
        : vote > 20 ? '#5CE4FF'
        : '#99EEFF'
    } else if (party === 'REP') {
      return vote > 60 ? '#9B2226' 
        : vote > 50 ? '#C92C31'
        : vote > 40 ? '#D7474C'
        : vote > 30 ? '#DE686C'
        : vote > 20 ? '#E58A8D'
        : '#ECACAE'
    } else {
      return vote > 60 ? '#7081FF' 
        : vote > 50 ? '#99A5FF'
        : vote > 40 ? '#ADB7FF'
        : vote > 30 ? '#C2C9FF'
        : vote > 20 ? '#D6DBFF'
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
        fillOpacity: 0.5
    });
};
  
  const mouseOverHighlight = (e) => {
    const current = e.target
    console.log(current)
    setShowInfo(e.target.feature.properties)
    current.setStyle({
      weight: 1,
      color: '#000000',
      fillOpacity: 1
    })
  }

  const resetHightlight = (e) => {
    setShowInfo({});
    e.target.setStyle(style(e.target.feature));
  }

  const onEachFeature= (feature, layer)=> {
    layer.on({
        mouseover: mouseOverHighlight,
        mouseout: resetHightlight,
    });
}

  const mapStyle = {
    height: '50vw',
    width: '100vh',
  }

  const feature = statesDataNew.features.map(feature=>{
    return(feature);
  });

  console.log(showInfo)

  return (
    <div className='map-container'>
      <h3> Choropleth of Election Vote Percentage </h3>
      <div>
        <div>
          {!showInfo.name && 
            <div>
              <strong>Election Vote Percentage by State</strong>    
              <p>Hover on each state for more details</p>
            </div>
          }
          {showInfo.name && (
            <ul>
              <li><strong>{showInfo.name}</strong></li><br/>
              <li>Democratic Party:{showInfo.max_percentage}</li>
              <li>Republican Party:{showInfo.max_percentage}</li>
              {showInfo.IND && 
                <li>Independent Party:{showInfo.max_percentage}</li>
              }
            </ul>
          )}
          <MapContainer
            center={center}
            zoom={3.5}
            style={mapStyle}
          >
            <TileLayer
              url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=cstWqyoG2iwEGEEQ37jK"
              attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />
            {feature && <GeoJSON 
              data={feature} 
              style={style}
              onEachFeature={onEachFeature}/>}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}

export default USChoropleth