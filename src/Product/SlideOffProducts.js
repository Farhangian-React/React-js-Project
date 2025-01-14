import * as React from 'react';
import  {useContext} from 'react';
import { CartContext} from '../Shared/Cart-Context';
import { Typography,Button } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import './CartBuy.css';
import { useEffect } from 'react';
import {CardDataoff} from '../Shared/Cart-Context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Slide } from 'react-slideshow-image';


export default function SlideOffProducts()  {
    const [cartItems,setCartItems]=useContext(CartContext);
    const [dataoff,setDataoff]=useContext(CardDataoff);
   const getData=()=>{
    fetch('https://serverjson-project.onrender.com/Allproducts' )
    .then(res => res.json())
    .then((result)=> {
      setDataoff(result.filter(i=>i.off !== "" ));
    
    },
    (error) => {
      alert('error');
    }
    )
   }
   const convertToEnglish=(str)=> {
   
    let englishNumber =str
    .replace(/۰/g, '0')
    .replace(/۱/g, '1')
    .replace(/۲/g, '2')
    .replace(/۳/g, '3')
    .replace(/۴/g, '4')
    .replace(/۵/g, '5')
    .replace(/۶/g, '6')
    .replace(/۷/g, '7')
    .replace(/۸/g, '8')
    .replace(/۹/g, '9');

 return(englishNumber);
  }
  const convertToPersian=(str)=> {
   
    let persianNumber =str
    .replace(/0/g, '۰')
    .replace(/1/g, '۱')
    .replace(/2/g, '۲')
    .replace(/3/g, '۳')
    .replace(/4/g, '۴')
    .replace(/5/g, '۵')
    .replace(/6/g, '۶')
    .replace(/7/g, '۷')
    .replace(/8/g, '۸')
    .replace(/9/g, '۹');
return(persianNumber);
  }
   useEffect(()=>{
    getData();
  

   
  
  },[])
  const addCommas=(nStr)=>{
  
    if(nStr.length === 7){
      return  nStr.substring(0,1) + "," + nStr.substring(1, 4) + "," + nStr.substring(4, 7);
    }
    if(nStr.length === 8){
      return  nStr.substring(0, 2) + "," + nStr.substring(2, 5) + "," + nStr.substring(5, 8);
    }
    if(nStr.length === 9){
      return  nStr.substring(0, 3) + "," + nStr.substring(3, 6) + "," + nStr.substring(6, 9);
  }
  }

    return(
        <>

<Box sx={{display: { xs: 'none', lg: 'flex' },bgcolor:'#ececec',mx:5,mt:0,mb:5,flexDirection:"column",mt:{xs:3,md:1},borderRadius:'10px',direction:'rtl'}}>
<Box     
       sx={{boxShadow:"10px 10px 10px #64b3f4 ",
      
        display:'flex',flexDirection:'column',justifyContent:"center",width:"220px",alignSelf:"start",my:5,mx:5}}
       >
        <Typography  sx={{fontSize:{xs:"22px",lg:"24px"},textAlign:"center",color:"black",py:1}}>
        تخفیفات ویژه
        </Typography>
        </Box>
        <Slide slidesToScroll={1} slidesToShow={4} indicators={false}  sx={{ flexDirection:"row", }}  >
        {dataoff.map((item) => (
      
      <NavLink to={'/cartbuygas'}  className={"linkss"}>
<Card  sx={{width:"280px",height:"360px",mx:"auto",my:3,p:1 }} key={item.id}>
<CardMedia
sx={{width:"90px",height:"120px",m:"auto"}}
    component="img"
    onClick={()=>{
      setCartItems([item]);
     }}
   image={item.img}
    alt=""
  />
      <CardContent sx={{height:'55px',direction:"rtl"}}>
    <Typography gutterBottom variant="body2" component="div" sx={{textAlign:'center'}}>
      {item.title1}
    </Typography>
  
  </CardContent>
  <Divider/>
  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',p:2,borderBottom:'1px solid gray'}}>
  
      <Box   sx={{width:"30px",height:"30px", backgroundImage:"linear-gradient(to left ,#c2e59c, #64b3f4)",color:"#414141",borderRadius:"20%",p:0,m:0,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{fontSize:"14px",textAlign:"center"}}>  {convertToPersian(item.off)}%</Typography>
        
        </Box> 
        <Box sx={{display:"flex",flexDirection:"column"}}>
        <Typography  variant="h6" color="#ea9e08" sx={{textAlign:'center',textDecorationLine: "line-through",textDecorationColor: "#414141"}}>{item.price}</Typography>
         <Typography  variant="h6" color="#414141" sx={{textAlign:'center'}}>
       
          {addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.off / 100))+''))} تومان 
         </Typography>
 </Box> </Box>
 
  <CardActions sx={{display:'flex',justifyContent:'center'}}>
  <NavLink to={'/cartbuygas'}>  <Button size="large"
      fullWidth
      variant="contained"
      sx={{ borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"20px",
      ':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#414141',fontSize:"18px", backgroundImage:"linear-gradient(to left ,#c2e59c, #64b3f4)", my:1,py:0,px:8}}
      onClick={()=>{
        setCartItems([item]);
       }}>خرید </Button></NavLink>
    
  </CardActions>
 
</Card>
</NavLink>
      
    ))}
   
        </Slide>
        </Box>
        <Box sx={{display: { xs: 'flex',lg: 'none' },bgcolor:'white',mx:5,mt:0,mb:5,flexDirection:"column",mt:{xs:3,md:1},borderRadius:'10px',direction:'rtl'}}>
        <Box     
       sx={{boxShadow:"10px 10px 10px #64b3f4 ",
      
        display:'flex',flexDirection:'column',justifyContent:"center",width:"220px",alignSelf:"start",my:5,mx:5}}
       >
        <Typography  sx={{fontSize:{xs:"22px",lg:"24px"},textAlign:"center",color:"black",py:1}}>
      تخفیفات ویژه
        </Typography>
        </Box>
        <Slide slidesToScroll={1} slidesToShow={2} indicators={false}  sx={{ flexDirection:"row", }}  >
        {dataoff.map((item) => (
      
      <NavLink to={'/cartbuygas'}  className={"linkss"}>
<Card  sx={{width:"300px",height:"360px",mx:"auto",my:3,p:1 }} key={item.id}>
<CardMedia
sx={{width:"90px",height:"120px",m:"auto"}}
    component="img"
    onClick={()=>{
      setCartItems([item]);
     }}
   image={item.img}
    alt=""
  />
      <CardContent sx={{height:'55px',direction:"rtl"}}>
    <Typography gutterBottom variant="body2" component="div" sx={{textAlign:'center'}}>
      {item.title1}
    </Typography>
  
  </CardContent>
  <Divider/>
  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',p:2,borderBottom:'1px solid gray'}}>
  
      <Box   sx={{width:"30px",height:"30px", backgroundImage:"linear-gradient(to left ,#c2e59c, #64b3f4)",color:"#414141",borderRadius:"20%",p:0,m:0,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{fontSize:"14px",textAlign:"center"}}>  {convertToPersian(item.off)}%</Typography>
        
        </Box> 
        <Box sx={{display:"flex",flexDirection:"column"}}>
        <Typography  variant="h6" color="#ea9e08" sx={{textAlign:'center',textDecorationLine: "line-through",textDecorationColor: "#414141"}}>{item.price}</Typography>
         <Typography  variant="h6" color="#414141" sx={{textAlign:'center'}}>
       
          {addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.off / 100))+''))} تومان 
         </Typography>
 </Box> </Box>
  <CardActions sx={{display:'flex',justifyContent:'center'}}>
  <NavLink to={'/cartbuygas'}>  <Button size="large"
      fullWidth
      variant="contained"
      sx={{ borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",
      ':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#414141',fontSize:"18px", backgroundImage:"linear-gradient(to left ,#c2e59c, #64b3f4)", my:1,py:0,px:8}}
      onClick={()=>{
        setCartItems([item]);
       }}>خرید </Button></NavLink>
    
  </CardActions>
 
</Card>
</NavLink>
      
    ))}
   
        </Slide>
        </Box>
        </>
    )
}