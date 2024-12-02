import { Marker, Popup, Tooltip } from "react-leaflet";
import { defaultIcon } from "../icons/defaultIcon";
import React, {useContext,useEffect} from 'react';
import {CardDatamap} from '../../Shared/Cart-Context';
import {CardDatamapshow} from '../../Shared/Cart-Context';

export const MarkerLayer = () => {
  const [datamap,setDatamap]=useContext(CardDatamap);
  const [datamapshow,setDatamapshow]=useContext(CardDatamapshow);
  const getData=()=>{
    fetch('http://localhost:3000/features' )
.then(res => res.json())
.then((result)=> {
setDatamap(result);
setDatamapshow(result);
},
    (error) => {
      alert('error');
    }
    )
   }
  
    useEffect( ()=>{
      getData();
  
    },[]);

 
  
    return (
      <>
      {datamapshow.map(f=>
      f.cities.map(c=>
        c.properties.map(p=>
       
     <Marker
     key={String(p.coordinates)}
     position={[p.coordinates[1],p.coordinates[0]]}
     icon={defaultIcon}
   >
     <Popup>
     {c.city}
     </Popup>
   </Marker>
          
     )) )}
     </>
     );
  }
  