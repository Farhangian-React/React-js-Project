import { Marker, Popup } from "react-leaflet";
import { defaultIcon } from "../icons/defaultIcon";
import React, {useContext,useEffect,useState} from 'react';
import {CardDatamap} from '../../Shared/Cart-Context';
import {CardDatamapshow} from '../../Shared/Cart-Context';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
export const MarkerLayer = () => {
  const [datamap,setDatamap]=useContext(CardDatamap);
  const [datamapshow,setDatamapshow]=useContext(CardDatamapshow);
  const[isLoading,setIsLoading]=useState(true);
  const getData=()=>{
fetch('https://serverjson-project.onrender.com/features' )
.then(res => res.json())
.then((result)=> {
setDatamap(result);
setDatamapshow(result);
setIsLoading(false);
console.log(datamap);
},
    (error) => {
      alert('error');
      setIsLoading(false);
    }
    )
   }
  
    useEffect( ()=>{
      getData();

    },[]);

 
  
    return (
      <>
      {
       isLoading ? 
       <Backdrop
       sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
       open
     >
     <CircularProgress color="inherit" />
     </Backdrop>
     :
      datamapshow.map(f=>
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
  