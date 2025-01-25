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

<Box sx={{display: { xs: 'none',lg: 'flex' },bgcolor:'white',mx:"1em",mt:0,mb:"1em",flexDirection:"column",
        mt:{xs:"2em",lg:"0.5em"},borderRadius:'10px',direction:'rtl'}}>
        <Box     
       sx={{boxShadow:"10px 10px 10px #E0AA3E ",
      
        display:'flex',flexDirection:'column',justifyContent:"center",width:"250px",alignSelf:"start",m:"2em"}}
       >
        <Typography  sx={{fontSize:"2em",textAlign:"center",color:"black",py:"0.5em"}}>
      تخفیفات ویژه
        </Typography>
        </Box>
        <Slide slidesToScroll={1} slidesToShow={3} indicators={false}  sx={{ flexDirection:"row", }}  >
        {dataoff.map((item) => (
      
      <NavLink to={'/cartbuygas'}  className={"linkss"}>
<Card className='cards' sx={{width:"400px",height:"620px",marginTop:'10px',marginBottom: '10px',mx:"0.5em",my:"1em",p:"1.5em" }} key={item.id}>

<CardMedia
    component="img"
    onClick={()=>{
      setCartItems([item]);
     }}
   image={item.img}
    alt=""
sx={{width:"250px",m:"auto"}}
  />
    <CardContent sx={{border:"none",height:'120px',direction:"rtl"}}>
    <Typography gutterBottom  component="div" sx={{textAlign:'center',fontSize:"1.5em"}}>
      {item.title1}
    </Typography>
  </CardContent>
  <Divider/>
  <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',p:2,borderBottom:'1px solid gray'}}>
  
      <Box   sx={{width:"45px",height:"30px",bgcolor:"#414141",color:"#E0AA3E",borderRadius:"20%",p:0,m:0,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{fontSize:"1.2em",textAlign:"center"}}>  {convertToPersian(item.off)}%</Typography>
        
        </Box> 
        <Box sx={{display:"flex",flexDirection:"column"}}>
        <Typography   color="#ea9e08" sx={{fontSize:"1.5em",textAlign:'center',textDecorationLine: "line-through",textDecorationColor: "#414141"}}>{item.price}</Typography>
         <Typography   color="#414141" sx={{fontSize:"1.5em",textAlign:'center'}}>
       
          {addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.off / 100))+''))} تومان 
         </Typography>
 </Box> </Box>
 
  <CardActions sx={{display:'flex',justifyContent:'center'}}>
  <NavLink to={'/cartbuygas'}>  <Button size="large"
      fullWidth
      variant="contained"
      sx={{  borderTopRightRadius:"0.5em",borderTopLeftRadius: "1em",borderBottomRightRadius:"1em",borderBottomLeftRadius:"0.5em",':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'},
       color:'#eeeeee',fontSize:"1.5em",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:"0.5em",my:"1.5em",py:0,px:"3em"}}
      onClick={()=>{
        setCartItems([item]);
       }}>خرید </Button></NavLink>
  </CardActions>
  
</Card>
</NavLink>
      
    ))}
   
        </Slide>
        </Box>
        <Box sx={{display: { xs: 'flex',lg: 'none' },bgcolor:'white',mx:"1em",mt:0,mb:"1em",flexDirection:"column",
        mt:{xs:"2em",lg:"0.5em"},borderRadius:'10px',direction:'rtl'}}>
        <Box     
       sx={{boxShadow:"10px 10px 10px #E0AA3E ",
      
        display:'flex',flexDirection:'column',justifyContent:"center",width:"250px",alignSelf:"start",m:"2em"}}
       >
        <Typography  sx={{fontSize:"2em",textAlign:"center",color:"black",py:"0.5em"}}>
      تخفیفات ویژه
        </Typography>
        </Box>
        <Slide slidesToScroll={1} slidesToShow={2} indicators={false}  sx={{ flexDirection:"row", }}  >
        {dataoff.map((item) => (
      
      <NavLink to={'/cartbuygas'}  className={"linkss"}><Card className='cards' sx={{width:"400px",height:"620px",marginTop:'10px',marginBottom: '10px',mx:"0.5em",my:"1em",p:"1.5em" }} key={item.id}>

      <CardMedia
          component="img"
          onClick={()=>{
            setCartItems([item]);
           }}
         image={item.img}
          alt=""
      sx={{width:"250px",m:"auto"}}
        />
          <CardContent sx={{border:"none",height:'120px',direction:"rtl"}}>
          <Typography gutterBottom  component="div" sx={{textAlign:'center',fontSize:"1.5em"}}>
            {item.title1}
          </Typography>
        </CardContent>
        <Divider/>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'baseline',direction:'rtl',p:2,borderBottom:'1px solid gray'}}>
        
            <Box   sx={{width:"45px",height:"30px",bgcolor:"#414141",color:"#E0AA3E",borderRadius:"20%",p:0,m:0,display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Typography sx={{fontSize:"1.2em",textAlign:"center"}}>  {convertToPersian(item.off)}%</Typography>
              
              </Box> 
              <Box sx={{display:"flex",flexDirection:"column"}}>
              <Typography   color="#ea9e08" sx={{fontSize:"1.5em",textAlign:'center',textDecorationLine: "line-through",textDecorationColor: "#414141"}}>{item.price}</Typography>
               <Typography   color="#414141" sx={{fontSize:"1.5em",textAlign:'center'}}>
             
                {addCommas(convertToPersian((convertToEnglish(item.pricenum)-(convertToEnglish(item.pricenum)*item.off / 100))+''))} تومان 
               </Typography>
       </Box> </Box>
       
        <CardActions sx={{display:'flex',justifyContent:'center'}}>
        <NavLink to={'/cartbuygas'}>  <Button size="large"
            fullWidth
            variant="contained"
            sx={{  borderTopRightRadius:"0.5em",borderTopLeftRadius: "1em",borderBottomRightRadius:"1em",borderBottomLeftRadius:"0.5em",':hover':{backgroundImage:"linear-gradient(to right ,#eeeeee,#282828)",color:'white'},
             color:'#eeeeee',fontSize:"1.5em",backgroundImage:"linear-gradient(to right ,#E0AA3E,#282828)", my:"0.5em",my:"1.5em",py:0,px:"3em"}}
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