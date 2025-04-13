import React from 'react';
import Box from '@mui/material/Box';
import Footer from '../Footer/Footer';
import TopNav from '../dashbord/TopNav';
import mapimag from "../img/iranmap.png";
import MapPage from "./map/MapPage";
import Selector from "./map/Selector";
import { PageTitle } from '../Title/PageTitle';
import "./Stores.css";
import { Typography } from '@mui/material';
import "../../node_modules/leaflet/dist/leaflet.css";
export const Stores = () => {
   
  return (
 <>
    <PageTitle title=' فروشگاه های سهیل '   description=' سهیل '/>
 <TopNav/>
 <Box sx={{display:"flex",flexDirection:"column",width:"100%",bgcolor:"#ececec"}}>
 <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between",mx:"auto",mt:{xs:11,lg:1},width:"96%",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",height:"150px",backgroundImage:"linear-gradient(to right ,#c2e59c, #64b3f4)"}}>
 <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",mx:8}}>
  <Typography variant='h4' sx={{textAlign:"start",color:"blue",px:5,pb:1}}>فروشگاه‌های سهیل </Typography>
  <Typography variant='h6'sx={{textAlign:"start",color:"black",px:5}}>مکان‌نمای فروشگاه‌ها در سراسر ایران </Typography>
</Box>
<Box sx={{   display:'flex',
             justifyContent:'end',
             backgroundImage:`url(${mapimag})`,
             backgroundPosition: 'center',
             backgroundSize:'cover',
             backgroundRepeat: 'no-repeat',
             width:'110px',
             height:"110px",
             mt:3,
             mx:8
             }}>

</Box>
 </Box>
<Box sx={{display:"flex",flexDirection:{xs:"column",lg:"row"},justifyContent:"center",bgcolor:"white",my:1,mx:5,px:5,py:1,borderRadius:"10px"}} >
<Box sx={{display:"flex",flexDirection:"row",justifyContent:"center",width:"100%",height:"500px",borderRadius:"10px"}}>
<MapPage/>
</Box>

<Selector/>

</Box></Box>
<Footer/>
 </>
  );
};
export default Stores