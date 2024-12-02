import React from 'react';
import { MapContainer, TileLayer} from "react-leaflet";
import { MarkerLayer } from "../layers/MarkerLayer";

import "../Stores.css";
export const MapPage = () => {
  const position = [ 35.68815448090159 , 51.37771054133819
    ];
  return (
  <MapContainer center={position} zoom={5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> 
      
    <MarkerLayer/>
    </MapContainer>
  );
};
export default MapPage