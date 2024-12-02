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
import {CardData} from '../Shared/Cart-Context';
import {CardDataShow} from '../Shared/Cart-Context';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Slide } from 'react-slideshow-image';


export default function SlideSimilarRef()  {
    const [cartItems,setCartItems]=useContext(CartContext);
    const [data,setData]=useContext(CardData);
    const [datashow,setDatashow]=useContext(CardDataShow);
   const getData=()=>{
    fetch('http://localhost:3000/Allproducts' )
    .then(res => res.json())
    .then((result)=> {
    setData(result.filter(i=>i.product === "Ref" ));
     setDatashow(result.filter(i=>i.product === "Ref"  ));
    },
    (error) => {
      alert('error');
    }
    )
   }
   useEffect(()=>{
    getData();
  },[])


    return(
        <>

<Box sx={{display: { xs: 'none', lg: 'flex' },bgcolor:'white',mx:5,mt:0,mb:5,flexDirection:"column",mt:{xs:3,md:1},borderRadius:'10px',direction:'rtl'}}>
        <Typography sx={{mt:2,pr:10,color:'#585858',fontSize:'22px'}}> محصولات مشابه
        
        </Typography><Box className='linetin' sx={{mx:5,mb:2}}></Box>
        <Slide slidesToScroll={1} slidesToShow={4} indicators={false}  sx={{ flexDirection:"row", }}  >
        {data.map((item) => (
      
      <NavLink to={'/cartbuyrefrigerator'}  className={"linkss"}>
<Card  sx={{width:"260px",height:"340px",mx:"auto",my:3,p:1 }} key={item.id}>
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
     <Typography  variant="body2" color="black" sx={{textAlign:'center'}}>خرید نقدی</Typography>
     <Typography  variant="h6" color="#ea9e08" sx={{textAlign:'center'}}>{item.price}</Typography>
  </Box>
  <CardActions sx={{display:'flex',justifyContent:'center'}}>
  <NavLink to={'/cartbuyrefrigerator'}>  <Button size="large"
      fullWidth
      variant="contained"
      sx={{ borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:1,py:0,px:8}}
      onClick={()=>{
        setCartItems([item]);
       }}>خرید </Button></NavLink>
    
  </CardActions>
 
</Card>
</NavLink>
      
    ))}
   
        </Slide>
        </Box>
        <Box sx={{display: { xs: 'none',md:"flex", lg: 'none' },bgcolor:'white',mx:5,mt:0,mb:5,flexDirection:"column",mt:{xs:3,md:1},borderRadius:'10px',direction:'rtl'}}>
        <Typography sx={{mt:2,pr:10,color:'#585858',fontSize:'22px'}}> محصولات مشابه
        
        </Typography><Box className='linetin' sx={{mx:5,mb:2}}></Box>
        <Slide slidesToScroll={1} slidesToShow={3} indicators={false}  sx={{ flexDirection:"row", }}  >
        {data.map((item) => (
      
      <NavLink to={'/cartbuyrefrigerator'}  className={"linkss"}>
<Card  sx={{width:"260px",height:"340px",mx:"auto",my:3,p:1 }} key={item.id}>
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
     <Typography  variant="body2" color="black" sx={{textAlign:'center'}}>خرید نقدی</Typography>
     <Typography  variant="h6" color="#ea9e08" sx={{textAlign:'center'}}>{item.price}</Typography>
  </Box>
  <CardActions sx={{display:'flex',justifyContent:'center'}}>
  <NavLink to={'/cartbuyrefrigerator'}>  <Button size="large"
      fullWidth
      variant="contained"
      sx={{ borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"18px",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:1,py:0,px:8}}
      onClick={()=>{
        setCartItems([item]);
       }}>خرید </Button></NavLink>
    
  </CardActions>
 
</Card>
</NavLink>
      
    ))}
   
        </Slide>
        </Box>
        <Box sx={{display: {xs:"none",sm:"flex", md: 'none', lg: 'none' },bgcolor:'white',mx:5,mt:0,mb:5,flexDirection:"column",mt:{xs:3,md:1},borderRadius:'10px',direction:'rtl'}}>
        <Typography sx={{mt:2,px:5,color:'#585858',fontSize:'22px'}}> محصولات مشابه
        <Box className='linetin'sx={{px:5}} ></Box>
        </Typography>
        <Slide slidesToScroll={1} slidesToShow={2} indicators={false} sx={{ flexDirection:"row", }}  >
        {data.map((item) => (
      
      <NavLink to={'/cartbuyrefrigerator'}  className={"linkss"}>
<Card  sx={{width:"260px",height:"340px",mx:"auto",my:3,p:1 }} key={item.id}>
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
     <Typography  variant="body2" color="black" sx={{textAlign:'center'}}>خرید نقدی</Typography>
     <Typography  variant="h6" color="#ea9e08" sx={{textAlign:'center'}}>{item.price}</Typography>
  </Box>
  <CardActions sx={{display:'flex',justifyContent:'center'}}>
  <NavLink to={'/cartbuyrefrigerator'}>  <Button size="large"
      fullWidth
      variant="contained"
      sx={{ borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"16px",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:1,py:0,px:8}}
      onClick={()=>{
        setCartItems([item]);
       }}>خرید </Button></NavLink>
    
  </CardActions>
 
</Card>
</NavLink>
      
    ))}
   
        </Slide>
        </Box>
          <Box sx={{display: { xs: 'flex', sm: 'none' },bgcolor:'white',mx:5,mt:0,mb:5,flexDirection:"column",mt:{xs:3,md:1},borderRadius:'10px',direction:'rtl'}}>
        <Typography sx={{mt:2,px:5,color:'#585858',fontSize:'22px'}}> محصولات مشابه
        <Box className='linetin'sx={{px:5}} ></Box>
        </Typography>
        <Slide slidesToScroll={1} slidesToShow={1} indicators={false} sx={{ flexDirection:"row", }}  >
        {data.map((item) => (
      
      <NavLink to={'/cartbuyrefrigerator'}  className={"linkss"}>
<Card  sx={{width:"260px",height:"340px",mx:"auto",my:3,p:1 }} key={item.id}>
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
     <Typography  variant="body2" color="black" sx={{textAlign:'center'}}>خرید نقدی</Typography>
     <Typography  variant="h6" color="#ea9e08" sx={{textAlign:'center'}}>{item.price}</Typography>
  </Box>
  <CardActions sx={{display:'flex',justifyContent:'center'}}>
  <NavLink to={'/cartbuyrefrigerator'}>  <Button size="large"
      fullWidth
      variant="contained"
      sx={{ borderTopRightRadius:"20px",borderTopLeftRadius: "30px",borderBottomRightRadius:"30px",borderBottomLeftRadius:"10px",':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'}, color:'#eeeeee',fontSize:"16px",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:1,py:0,px:8}}
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