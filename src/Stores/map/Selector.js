import * as React from 'react';
import Box from '@mui/material/Box';
import { useState,useContext,useEffect ,useRef} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {CardDatamapshow} from '../../Shared/Cart-Context';
import storeimage from "../../img/Stores.png";
import "../Stores.css";
import { Typography } from '@mui/material';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export default function Selector() {
  const refbox=useRef();
  const [fromostan, setFromostan] = useState([]);
  const [fromCities, setFromCities] = useState([]);
  const [address,setAddress]=useState([]);
  const [datamapshow,setDatamapshow]=useContext(CardDatamapshow);
  const [dataselactor,setDataselactor]=useState([]);
  const getData=()=>{
    fetch('http://localhost:3000/features' )
.then(res => res.json())
.then((result)=> {
setDataselactor(result);

},
    (error) => {
      alert('error');
    }
    )
   }
  
    useEffect( ()=>{
      getData();
     
  
    },[]);

   
   const handleFromostan = (e) => {
     
    refbox.current.className="hiden";
    const ostan = dataselactor.find(

      (ostan) => ostan.name === e.target.value
    );
  
     setDatamapshow(dataselactor.filter(i=> i.name === ostan.name));
     console.log(dataselactor.filter(i=> i.name === ostan.name));
    setFromostan([ostan]);
    setFromCities(ostan.cities);



  };
  const handleFromcities = (e) => {

    const cit = fromCities.find(
      (cit) => cit.city === e.target.value
    );

const fff=fromCities.filter((f)=>{return f.city===cit.city;});
  datamapshow.map((t)=>{

   t.cities=fff;
setDatamapshow([t]);

   })
  setAddress(cit.properties);


  };
  return (

    <>
    <Box sx={{mx:2,my:2,mx:2,px:2,py:1,borderRadius:'10px',display:"flex",flexDirection:"column",justifyContent:"start"}}>
  
  
  <Box  sx={{py:2,px:5,mx:1,borderRadius:'10px',display:"flex",flexDirection:"row",justifyContent:"center",backgroundImage:"linear-gradient(to right ,#c2e59c, #64b3f4)"}}>
  
    <FormControl variant="standard" sx={{ my:1,mx:3, minWidth: 120, }}>
        <InputLabel id="demo-simple-select-standard-label"> انتخاب استان</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
        value={fromostan.name}
        onChange={handleFromostan}
          label="انتخاب استان"
          className='selectclass'
        > 
         {dataselactor.map((country, key) => (
          <MenuItem  value={country.name} key={key} sx={{direction:"rtl"}}>  {country.name}</MenuItem>
        ))}
        </Select>
      </FormControl>
      <FormControl variant='standard' sx={{ direction:"ltr", my:1,mx:3, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label" > انتخاب شهر</InputLabel>
        <Select
        
          value={fromCities.city}
          onChange={handleFromcities}
         label="انتخاب شهر"
      className='selectclass'
        >
            {fromCities.map((city, key) => (
          <MenuItem key={key}  value={city.city} sx={{direction:"rtl"}}>  {city.city}</MenuItem>
        ))} 
        </Select>
      </FormControl>
    </Box>
    <Box  sx={{p:2,mx:1,borderRadius:'10px',display:"flex",flexDirection:"column",justifyContent:"start",height:"400px",overflow:"hidden"}}>
    <Box  ref={refbox}  sx={{   display:'flex',
             justifyContent:'start',
             backgroundImage:`url(${storeimage})`,
             backgroundPosition: 'start',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat',
             width:'300px',
             height:"300px",
             my:0.5,
             mx:"auto"
             }}>
              <Typography variant='' sx={{textAlign:"center",color:"#727272",my:0.6}}>جهت مشاهده فهرست فروشگاه‌ها، ابتدا استان و شهر مورد نظر خود را انتخاب کنید</Typography>
             </Box>
      {address.map((a)=>
      <Box sx={{display:'flex',width:"100%",flexDirection:"row",alignSelf:"start",borderBottom:"1px solid #64b3f4 ",bgcolor:"white"}}>
    <PlaceOutlinedIcon  sx={{pr:0,pt:3,pl:2,color:"#64b3f4",fontSize:"36px"}}/> 
  <Typography  variant='h6' sx={{py:0.5,color:"blue"}}>{a.storename} 
  <Typography variant='body2' sx={{py:0.5,color:"black"}}> {a.address} 
  </Typography> <Typography variant='body2' sx={{py:0.5,color:"black"}}> {a.callnum}
   </Typography>  
 
 </Typography>



  </Box>
      )}
    </Box>
    </Box>
    </>
  );
}



 